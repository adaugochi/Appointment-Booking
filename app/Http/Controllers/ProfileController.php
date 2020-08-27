<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $user = User::find(auth()->user()->id);
        return view('profile.index', compact('user'));
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     * @author Maryfaith Mgbede <adaamgbede@gmail.com>
     */
    public function updateProfile(Request $request)
    {
        $request->validate([
            'welcome_message' => 'required'
        ]);
        $user = User::find(auth()->user()->id);

        if ($request->has('images')) {
            $origImageName = $request->images[0]->getClientOriginalName();
            $imageName = env('APP_NAME') .'_'. time() .'_'. $origImageName;
            $destinationPath = public_path('/uploads/profile');
            $request->images[0]->move($destinationPath, $imageName);
            $user->image_url = $imageName;
        }

        $user->welcome_message = request('welcome_message');
        $user->is_profile_complete = 1;
        if ($user->save()) {
            return redirect(route('home'))->with(['success' => 'successful']);
        }
        return redirect()->back()->with(['error' => 'failed']);
    }
}
