<?php

namespace App\Http\Controllers;

use App\helpers\Utils;
use App\User;
use Illuminate\Http\Request;

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
        $request->validate([
            'first_name' =>  'required',
            'last_name' => 'required',
            'middle_name' => 'required',
            'phone_number' => 'required',
        ]);

        try {
            $result = $user->create($request->all());
            $message = "Username: ". $result[1] . " Registration link : "
                . getenv('BASE_URL') . "register?token=" . $result[0];
            $this->sendMessage(
                $message,
                Utils::convertPhoneNumberToE164Format(request('phone_number'))
            );
            return redirect(route('admin.honourable'))->with(['success' => 'Successful']);
        } catch (\Exception $ex) {
            return redirect()->back()->with(['error' => 'Failed']);
        }
    }
}
