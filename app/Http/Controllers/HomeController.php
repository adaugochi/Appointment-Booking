<?php

namespace App\Http\Controllers;

use App\helpers\Utils;
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
        $upcoming = Schedule::whereIn('status', [Schedule::CONFIRM, Schedule::RESCHEDULE])
            ->where(['user_id' => $userAuthId, ['schedule_date', '>=', date('Y-m-d')]])
            ->orderBy('id', 'DESC')->get();
        $unapproved = Schedule::where(['status' => Schedule::PENDING, 'user_id' => $userAuthId])
            ->orderBy('id', 'DESC')->get();
        $past = Schedule::where(['status' => Schedule::CANCEL, 'user_id' => $userAuthId])
            ->orWhere('schedule_date', '<', date('Y-m-d'))
            ->orderBy('id', 'DESC')->get();

        return view('home', compact('user', 'upcoming', 'unapproved', 'past'));
    }

    public function viewDetail($id)
    {

    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Twilio\Exceptions\ConfigurationException
     * @throws \Twilio\Exceptions\TwilioException
     * @author Maryfaith Mgbede <adaamgbede@gmail.com>
     */
    public function confirmApt(Request $request)
    {
        $schedule = Schedule::find($request->id);
        if (!$schedule) {
            return redirect()->back()->with(['error' => 'failed']);
        }
        $phoneNumber = $schedule->visitors_phone_number;
        $schedule->status = Schedule::CONFIRM;
        $schedule->save();
        $this->sendMessage(
            'Your appointment has been confirm',
            Utils::convertPhoneNumberToE164Format($phoneNumber)
        );
        return redirect()->back()->with(['success' => 'Successful']);
    }

    public function cancelApt(Request $request)
    {
        $schedule = Schedule::find($request->id);
        if (!$schedule) {
            return redirect()->back()->with(['error' => 'failed']);
        }
        $phoneNumber = $schedule->visitors_phone_number;
        $schedule->status = Schedule::CANCEL;
        $schedule->schedule_time = '00:00';
        $schedule->save();
        $this->sendMessage(
            'Your appointment was cancel',
            Utils::convertPhoneNumberToE164Format($phoneNumber)
        );
        return redirect()->back()->with(['success' => 'Successful']);
    }
}
