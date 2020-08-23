<?php

namespace App\Http\Controllers\Auth;

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

    /**
     * Where to redirect users after registration.
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    public function showRegistrationForm()
    {
        $token = request()->token;
        if ($token === null) {
            return redirect('login')->with(['error' => 'Invalid sign up token']);
        }
        return view('auth.register', compact('token'));
    }

    /**
     * Get a validator for an incoming registration request.
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
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
     * token = uHHXF0hewydjMuWuuCVS.Q6F1FSUWyN6
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
            return redirect('login')->with(['error' => 'Invalid sign up token']);
        }
        if ($user->has_registered == 1) {
            return Redirect::to('/login')
                ->with(['info' => 'This account is registered already, you can login']);
        }
        $user->password = Hash::make(request('password'));
        $user->has_registered = 1;
        if ($user->save()) {
            return Redirect::to('/login')
                ->with(['success' => 'Registration was successful']);
        }
        return redirect('/login')->with(['error' => 'registration was not successful']);
    }
}
