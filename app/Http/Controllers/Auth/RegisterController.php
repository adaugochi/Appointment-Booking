<?php

namespace App\Http\Controllers\Auth;

use App\helpers\Messages;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    use RegistersUsers;

    protected $redirectTo = RouteServiceProvider::HOME;
    protected $loginURL = 'login';

    public function __construct()
    {
        $this->middleware('guest');
    }

    public function showRegistrationForm()
    {
        $token = request()->token;
        $regRoute = route('register');
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
     * @param  array $data
     * @return array
     * @throws \Exception
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
    }

    /**
     * @param Request $request
     * @return mixed
     */
    public function register(Request $request)
    {
        $request->validate([
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
        $user = User::where('token', request('token'))->first();
        if (!$user) {
            return redirect($this->loginURL)->with(['error' => Messages::INVALID_SIGNUP_TOKEN]);
        }
        if ($user->has_registered == 1) {
            return Redirect::to($this->loginURL)->with(['info' => Messages::ACCT_EXIST]);
        }
        $user->password = Hash::make(request('password'));
        $user->has_registered = 1;
        if ($user->save()) {
            $this->guard()->login($user);
            return Redirect::to($this->redirectTo)->with(['success' => 'Registration was successful']);
        }
        return redirect($this->loginURL)->with(['error' => 'Registration was not successful']);
    }
}
