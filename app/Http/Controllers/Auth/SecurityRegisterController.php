<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Security;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;

class SecurityRegisterController extends Controller
{
    protected $loginURL = '/security/login';
    protected $redirectTo = 'security/home';

    public function __construct()
    {
        $this->middleware('guest:security');
    }

    public function showRegistrationForm()
    {
        $token = request()->token;
        $regRoute = route('security.sign-up');
        if ($token === null) {
            return redirect($this->loginURL)->with(['error' => 'Invalid sign up token']);
        }
        return view('auth.register', compact('token', 'regRoute'));
    }

    protected function validator(array $data)
    {
        return Validator::make($data, [
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * @param Request $request
     * @return mixed
     */
    public function signUp(Request $request)
    {
        $request->validate([
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
        $user = Security::where('token', request('token'))->first();
        if (!$user) {
            return redirect($this->loginURL)->with(['error' => 'Invalid sign up token']);
        }
        if ($user->has_registered == 1) {
            return Redirect::to($this->loginURL)
                ->with(['info' => 'This account is registered already, you can login']);
        }
        $user->password = Hash::make(request('password'));
        $user->has_registered = 1;
        if ($user->save()) {
            $this->guard()->login($user);
            return Redirect::to($this->redirectTo)->with(['success' => 'Registration was successful']);
        }
        return redirect($this->loginURL)->with(['error' => 'registration was not successful']);
    }

    /**
     * Get the guard to be used during registration.
     *
     * @return \Illuminate\Contracts\Auth\StatefulGuard
     */
    protected function guard()
    {
        return Auth::guard('security');
    }
}
