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

    public function create()
    {
        return view('portal.security.new');
    }

    public function save(Request $request, Security $security)
    {
        DB::beginTransaction();
        $request->validate([
            'first_name' =>  'required',
            'last_name' => 'required',
            'middle_name' => 'required',
            'phone_number' => 'required',
        ]);

        try {
            $token = Utils::generateToken();
            $last_name = request('last_name');
            $first_name = request('first_name');
            $middle_name = request('middle_name');
            $username = strtolower($first_name . $middle_name[0] . $last_name);
            DB::table('securities')->insert([
                'first_name' => $first_name,
                'middle_name' => $middle_name,
                'last_name' => $last_name,
                'phone_number' => request('phone_number'),
                'username' => $username,
                'email' => request('email'),
                'token' => $token
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
            dd($ex->getMessage());
            return redirect()->back()->with(['error' => 'Failed']);
        }
    }
}
