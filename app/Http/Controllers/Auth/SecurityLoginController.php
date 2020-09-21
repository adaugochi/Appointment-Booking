<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Security;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

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
        $forgotPwdRoute = route('security.password.request');
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

    public function login(Request $request)
    {
        $this->validateLogin($request);

        $user = Security::where(['username' => $request->username])->first();
        if ($user->is_active === 0) {
            return redirect(route('security.login'))
                ->with(['error' => 'This account has been deactivated. You can no longer sign in']);
        }

        if (method_exists($this, 'hasTooManyLoginAttempts') &&
            $this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);

            return $this->sendLockoutResponse($request);
        }

        if ($this->attemptLogin($request)) {
            return $this->sendLoginResponse($request);
        }

        $this->incrementLoginAttempts($request);

        return $this->sendFailedLoginResponse($request);
    }
}
