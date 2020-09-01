<?php

namespace App\Http\Controllers;

use App\helpers\Utils;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminHonourableController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:admin');
    }

    public function index()
    {
        $users = User::orderBy('id', 'DESC')->paginate(15);
        return view('portal.honourable.index', compact('users'));
    }

    public function edit($id)
    {
        $user = User::find($id);
        $isEdit = true;
        return view('portal.honourable.new', compact('user', 'isEdit'));
    }

    public function show($id)
    {
        $user = User::find($id);
        return view('portal.honourable.view', compact('user'));
    }

    public function create()
    {
        $isEdit = false;
        return view('portal.honourable.new', compact('isEdit'));
    }

    public function save(Request $request)
    {
        DB::beginTransaction();
        $request->validate([
            'first_name' =>  'required',
            'last_name' => 'required',
            'phone_number' => 'required',
        ]);

        try {
            $token = Utils::generateToken();
            $last_name = request('last_name');
            $first_name = request('first_name');
            $username = Utils::generateUsername($first_name, $last_name);

            DB::table('users')->insert([
                'first_name' => $first_name,
                'last_name' => $last_name,
                'phone_number' => request('phone_number'),
                'username' => $username,
                'token' => $token,
                'created_at' => date('Y-m-d H:i:s')
            ]);

            $message = "Hello, here is your username: ". $username . " and a registration link : "
                . env('BASE_URL') . "register?token=" . $token . " to sign up.";

            $this->sendMessage(
                $message,
                Utils::convertPhoneNumberToE164Format(request('phone_number'))
            );
            DB::commit();
            return redirect(route('admin.honourable'))->with(['success' => 'Successful']);
        } catch (\Exception $ex) {
            DB::rollBack();
            return redirect()->back()->with(['error' => 'Failed']);
        }
    }

    public function update(Request $request)
    {
        DB::beginTransaction();
        $request->validate([
            'first_name' =>  'required',
            'last_name' => 'required',
            'phone_number' => 'required',
        ]);

        $user = User::find(request('id'));
        if (!$user) {
            return redirect()->back()->with(['error' => 'Invalid user']);
        }

        try {
            $token = Utils::generateToken();
            $last_name = request('last_name');
            $first_name = request('first_name');
            $username = Utils::generateUsername($first_name, $last_name);

            DB::table('users')->where('id', request('id'))->limit(1)
                ->update([
                    'first_name' => $first_name,
                    'last_name' => $last_name,
                    'phone_number' => request('phone_number'),
                    'username' => $username,
                    'token' => $token,
                    'has_registered' => 0,
                    'updated_at' => date('Y-m-d H:i:s')
                ]);

            $message = "Hello, here is your new username: ". $username . " .Ensure to sign up with this new registration link : "
                . env('BASE_URL') . "register?token=" . $token;

            $this->sendMessage(
                $message,
                Utils::convertPhoneNumberToE164Format(request('phone_number'))
            );
            DB::commit();
            return redirect(route('admin.honourable'))->with(['success' => 'Successful']);
        } catch (\Exception $ex) {
            DB::rollBack();
            return redirect()->back()->with(['error' => 'Failed']);
        }
    }

    public function deactivate()
    {
        DB::beginTransaction();
        $id = request('id');
        $user = User::find($id);
        if (!$user) {
            return redirect()->back()->with(['error' => 'Invalid user']);
        }

        try {
            DB::table('users')->where('id', $id)->limit(1)->update(['is_active' => 0]);
            $message = "Hello, your account has been deactivate";
            $this->sendMessage($message, Utils::convertPhoneNumberToE164Format($user->phone_number));
            DB::commit();
            return redirect(route('admin.honourable'))->with(['success' => 'Successful']);
        } catch (\Exception $ex) {
            DB::rollBack();
            return redirect()->back()->with(['error' => 'Failed']);
        }
    }

    public function resendInvite()
    {
        $user = User::find(request('id'));
        if (!$user) {
            return redirect()->back()->with(['error' => 'Invalid user']);
        }

        $message = "Hello, here is your username: ". $user->username . " and a registration link : "
            . env('BASE_URL') . "register?token=" . $user->token . " to sign up.";

        $this->sendMessage(
            $message,
            Utils::convertPhoneNumberToE164Format($user->phone_number)
        );
        return redirect(route('admin.honourable'))->with(['success' => 'Successful']);
    }
}
