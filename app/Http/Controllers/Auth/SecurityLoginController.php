<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;

class SecurityLoginController extends Controller
{
    use AuthenticatesUsers;

    protected $redirectTo = '/security/home';

    public function __construct()
    {
        $this->middleware('guest:security')->except('logout');
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     * @author Maryfaith Mgbede <adaamgbede@gmail.com>
     */
    public function showLoginForm()
    {
        $isAdmin = false;
        $loginRoute = route('security.sign-in');
        $forgotPwdRoute = route('password.request');
        return view('auth.login', compact('loginRoute', 'forgotPwdRoute', 'isAdmin'));
    }

    public function username()
    {
        return 'username';
    }

    protected function guard()
    {
        return Auth::guard('security');
    }
}
