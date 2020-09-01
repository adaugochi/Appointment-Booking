<?php

namespace App\Http\Controllers;

use App\helpers\Utils;
use App\Security;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminSecurityController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:admin');
    }

    public function index()
    {
        $securities = Security::orderBy('id', 'DESC')->paginate(15);
        return view('portal.security.index', compact('securities'));
    }

    public function edit($id)
    {
        $security = Security::find($id);
        $isEdit = true;
        return view('portal.security.new', compact('security', 'isEdit'));
    }

    public function create()
    {
        $isEdit = false;
        return view('portal.security.new', compact('isEdit'));
    }

    public function save(Request $request, Security $security)
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
            $username = $username = Utils::generateUsername($first_name, $last_name);

            DB::table('securities')->insert([
                'first_name' => $first_name,
                'last_name' => $last_name,
                'phone_number' => request('phone_number'),
                'username' => $username,
                'token' => $token,
                'created_at' => date('Y-m-d H:i:s')
            ]);

            $message = "Username: ". $username . " Registration link : "
                . getenv('BASE_URL') . "security/register?token=" . $token;

            $this->sendMessage(
                $message,
                Utils::convertPhoneNumberToE164Format(request('phone_number'))
            );
            DB::commit();
            return redirect(route('admin.security'))->with(['success' => 'Successful']);
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

        $security = Security::find(request('id'));
        if (!$security) {
            return redirect()->back()->with(['error' => 'Invalid user']);
        }

        try {
            $token = Utils::generateToken();
            $last_name = request('last_name');
            $first_name = request('first_name');
            $username = Utils::generateUsername($first_name, $last_name);

            DB::table('securities')->where('id', request('id'))->limit(1)
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
                . env('BASE_URL') . "security/register?token=" . $token;

            $this->sendMessage(
                $message,
                Utils::convertPhoneNumberToE164Format(request('phone_number'))
            );
            DB::commit();
            return redirect(route('admin.security'))->with(['success' => 'Successful']);
        } catch (\Exception $ex) {
            DB::rollBack();
            return redirect()->back()->with(['error' => 'Failed']);
        }
    }

    public function deactivate()
    {
        DB::beginTransaction();
        $id = request('id');
        $security = Security::find($id);
        if (!$security) {
            return redirect()->back()->with(['error' => 'Invalid user']);
        }

        try {
            DB::table('securities')->where('id', $id)->limit(1)->update(['is_active' => 0]);
            $message = "Hello, your account has been deactivate";
            $this->sendMessage($message, Utils::convertPhoneNumberToE164Format($security->phone_number));
            DB::commit();
            return redirect(route('admin.security'))->with(['success' => 'Successful']);
        } catch (\Exception $ex) {
            DB::rollBack();
            return redirect()->back()->with(['error' => 'Failed']);
        }
    }

    public function resendInvite()
    {
        $security = Security::find(request('id'));
        if (!$security) {
            return redirect()->back()->with(['error' => 'Invalid user']);
        }

        $message = "Hello, here is your username: ". $security->username . " and a registration link : "
            . env('BASE_URL') . "security/register?token=" . $security->token . " to sign up.";

        $this->sendMessage(
            $message,
            Utils::convertPhoneNumberToE164Format($security->phone_number)
        );
        return redirect(route('admin.security'))->with(['success' => 'Successful']);
    }
}
