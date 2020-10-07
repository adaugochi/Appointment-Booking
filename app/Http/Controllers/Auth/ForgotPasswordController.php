<?php

namespace App\Http\Controllers\Auth;

use App\helpers\Messages;
use App\helpers\Utils;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ForgotPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users. Feel free to explore this trait.
    |
    */

    use SendsPasswordResetEmails;

    /**
     * Display the form to request a password reset link.
     *
     * @return \Illuminate\View\View
     */
    public function showLinkRequestForm()
    {
        $isAdmin = false;
        $loginRoute = route('login');
        $pwdResetRoute = route('password.forget');
        return view(
            'auth.passwords.forget-password',
            compact('loginRoute', 'pwdResetRoute', 'isAdmin')
        );
    }

    public function sendResetLink(Request $request)
    {
        DB::beginTransaction();
        $request->validate(['phone_number' => 'required',]);

        $user = User::where(['phone_number' => request('phone_number')])->first();
        if (!$user) {
            return redirect()->back()->with(['error' => Messages::USER_NOT_FOUND]);
        }

        try {
            $token = Utils::generateToken();
            DB::table('password_resets')->insert([
                'email' => request('phone_number'),
                'token' => $token,
                'created_at' => date('Y-m-d H:i:s')
            ]);
            $url = env('BASE_URL') . "password/reset/" . $token;

            $this->sendMessage(
                "You are receiving this SMS because we received a password reset request for your account. Copy and paste this link : {$url} on your web browser. This password reset link will expire in 15 minutes. If you did not request a password reset, no further action is required",
                Utils::convertPhoneNumberToE164Format(request('phone_number'))
            );
            DB::commit();
            return redirect()->back()->with(['success' => Messages::FORGET_PASSWORD_MSG]);
        } catch (\Exception $ex) {
            DB::rollBack();
            $errorMessage = $this->getErrorMessage($ex->getCode(), $ex->getMessage());
            return redirect()->back()->with(['error' => $errorMessage]);
        }
    }
}
