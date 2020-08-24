<?php

namespace App\Http\Controllers;

use App\helpers\Utils;
use App\Security;
use Illuminate\Http\Request;

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
        $request->validate([
            'first_name' =>  'required',
            'last_name' => 'required',
            'middle_name' => 'required',
            'phone_number' => 'required',
        ]);

        try {
            $result = $security->create($request->all());
            $message = "Username: ". $result[1] . " Registration link : "
                . getenv('BASE_URL') . "security/register?token=" . $result[0];
            $this->sendMessage(
                $message,
                Utils::convertPhoneNumberToE164Format(request('phone_number'))
            );
            return redirect(route('admin.security'))->with(['success' => 'Successful']);
        } catch (\Exception $ex) {
            return redirect()->back()->with(['error' => 'Failed']);
        }
    }
}
