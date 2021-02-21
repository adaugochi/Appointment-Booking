<?php

namespace App\Http\Controllers\Auth;

use App\helpers\Messages;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;

class AdminLoginController extends Controller
{
    /**
     * Create a new controller instance.
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest:admin')->except('logout');
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     * @author Maryfaith Mgbede <adaamgbede@gmail.com>
     */
    public function showLoginForm()
    {
        $isAdmin = true;
        $loginRoute = route('admin.sign-in');
        $forgotPwdRoute = route('admin.password.request');
        return view('auth.login', compact('loginRoute', 'forgotPwdRoute', 'isAdmin'));
    }

    public function signIn(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:8',
        ]);
        $credentials = ['email' => $request->email, 'password' => $request->password];
        $auth = $this->guard()->attempt($credentials, $request->filled('remember'));

        if ($auth) {
            return redirect()->intended(route('admin.home'));
        }
        return redirect()->back()->with(['error' => Messages::INCORRECT_CREDS]);
    }

    /**
     * Get the broker to be used during password reset.
     * @return \Illuminate\Contracts\Auth\PasswordBroker
     */
    protected function broker()
    {
        return Password::broker('admins');
    }

    /**
     * Get the guard to be used during authentication.
     * @return \Illuminate\Contracts\Auth\StatefulGuard
     */
    protected function guard()
    {
        return Auth::guard('admin');
    }

    /**
     * Log the user out of the application.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Http\Response|\Illuminate\Routing\Redirector
     */
    public function logout(Request $request)
    {
        $this->guard()->logout();
        return redirect('/admin/login');
    }
}
