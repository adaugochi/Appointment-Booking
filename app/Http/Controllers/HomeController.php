<?php

namespace App\Http\Controllers;

use App\helpers\Utils;
use App\Schedule;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
        $schedule = Schedule::find($id);
        $user = User::find(auth()->user()->id);
        return view('view', compact('user', 'schedule'));
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     * @author Maryfaith Mgbede <adaamgbede@gmail.com>
     */
    public function confirmApt(Request $request)
    {
        DB::beginTransaction();
        $id = $request->id;
        $schedule = Schedule::find($id);
        if (!$schedule) {
            return redirect()->back()->with(['error' => 'failed']);
        }
        try {
            $phoneNumber = $schedule->visitors_phone_number;
            $confirmationCode = Utils::generateConfirmationCode();

            DB::table('schedules')->where('id', $id)->limit(1)
                ->update([
                    'status' => Schedule::CONFIRM,
                    'confirmation_code' => $confirmationCode,
                    'date_confirmed' => date('Y-m-d H:i:s')
                ]);

            $this->sendMessage(
                'Your appointment has been confirm. This is your confirmation code: '. $confirmationCode,
                Utils::convertPhoneNumberToE164Format($phoneNumber)
            );
            DB::commit();
            return redirect()->back()->with(['success' => 'Successful']);
        } catch (\Exception $ex) {
            if ($ex->getCode() === 21211) {
                $errorMessage = "This phone number is invalid";
            } elseif ($ex->getCode() === 21408) {
                $errorMessage = "We don't have international permission necessary to SMS this phone number";
            } elseif ($ex->getCode() === 21610) {
                $errorMessage = "This phone number is blocked";
            } elseif ($ex->getCode() === 21614) {
                $errorMessage = "This phone number is incapable of receiving SMS messages";
            } elseif ($ex->getMessage()) {
                $errorMessage = $ex->getMessage();
            } else {
                $errorMessage = "Could not send SMS notification to User";
            }
            return redirect()->back()->with(['error' => $errorMessage]);
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     * @author Maryfaith Mgbede <adaamgbede@gmail.com>
     */
    public function cancelApt(Request $request)
    {
        DB::beginTransaction();
        $id =$request->id;
        dd(10);
        $schedule = Schedule::find($id);
        if (!$schedule) {
            return redirect()->back()->with(['error' => 'failed']);
        }
        try {
            $phoneNumber = $schedule->visitors_phone_number;

            DB::table('schedules')
                ->where('id', $id)  // find your user by id
                ->limit(1)  // optional - to ensure only one record is updated.
                ->update(['status' => Schedule::CANCEL, 'schedule_time' => '00:00']);

            $this->sendMessage(
                'Your appointment was cancel',
                Utils::convertPhoneNumberToE164Format($phoneNumber)
            );
            DB::commit();
            return redirect()->back()->with(['success' => 'Successful']);
        } catch (\Exception $ex) {
            DB::rollBack();
            if ($ex->getCode() === 21211) {
                $errorMessage = "This phone number is invalid";
            } elseif ($ex->getCode() === 21408) {
                $errorMessage = "We don't have international permission necessary to SMS this phone number";
            } elseif ($ex->getCode() === 21610) {
                $errorMessage = "This phone number is blocked";
            } elseif ($ex->getCode() === 21614) {
                $errorMessage = "This phone number is incapable of receiving SMS messages";
            } elseif ($ex->getMessage()) {
                $errorMessage = $ex->getMessage();
            } else {
                $errorMessage = "Could not send SMS notification to User";
            }
            return redirect()->back()->with(['error' => $errorMessage]);
        }
    }

    public function rescheduleApt()
    {

    }

    public function editAvailability()
    {
        $user = User::find(auth()->user()->id);
        $user->start_date = request('start_date');
        $user->end_date = request('end_date');
        if (!$user->save()) {
            return redirect()->back()->with(['error' => 'failed']);
        }
        return redirect()->back()->with(['success' => 'successful']);
    }
}
