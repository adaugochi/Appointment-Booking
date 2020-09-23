<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class SecurityResetPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    use ResetsPasswords;

    /**
     * Where to redirect users after resetting their password.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    public function showResetForm(Request $request, $token = null)
    {
        $isTokenValid = DB::table('password_resets')->where('token', $token)->first();
        if (!$isTokenValid) {
            return redirect()->route('password.request')->with(['error' => 'Invalid token']);
        }
        $phoneNumber = $isTokenValid->email;
        $pwdResetRoute = route('security.password.update');
        $forgetPwdRoute = route('security.password.request');
        return view(
            'auth.passwords.reset',
            compact('token', 'pwdResetRoute', 'forgetPwdRoute', 'phoneNumber')
        );
    }

    public function reset(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'phone_number' => 'required',
            'password' => 'required|confirmed|min:8',
        ]);

        $user = DB::table('securities')->where(['phone_number' => request('phone_number')])
            ->limit(1)->update(['password' => Hash::make(request('password'))]);
        if (!$user) {
            return redirect()->back()->with(['error' => 'Failed']);
        }
        return redirect()->route('security.login')
            ->with(['success' => 'Your password reset was successful']);
    }
}
