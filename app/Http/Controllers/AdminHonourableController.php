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

    public function create()
    {
        return view('portal.honourable.new');
    }

    public function save(Request $request, User $user)
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

            $message = "Username: ". $username . " Registration link : "
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
}
