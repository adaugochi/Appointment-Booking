<?php

namespace App\Http\Controllers;

use App\Schedule;
use App\User;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $userAuthId = auth()->user()->id;
        $user = User::find($userAuthId);
        $upcoming = Schedule::whereIn('status', ['confirm', 'reschedule'])
            ->where(['user_id' => $userAuthId, ['schedule_date', '>=', date('Y-m-d')]])
            ->orderBy('id', 'DESC')->get();
        $unapproved = Schedule::where(['status' => 'pending', 'user_id' => $userAuthId])
            ->orderBy('id', 'DESC')->get();
        $past = Schedule::where([
            ['status', '!=', 'pending'],
            'user_id' => $userAuthId,
            ['schedule_date', '<', date('Y-m-d')]
        ])->orderBy('id', 'DESC')->get();

        return view('home', compact('user', 'upcoming', 'unapproved', 'past'));
    }
}
