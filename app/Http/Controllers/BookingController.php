<?php

namespace App\Http\Controllers;

use App\helpers\Utils;
use App\User;
use App\Schedule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BookingController extends Controller
{
    /**
     * @param $username
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector|\Illuminate\View\View
     * @author Adaa Mgbede <adaa@cottacush.com>
     */
    public function index($username)
    {
        if ($this->getUserId($username)) {
            $user = User::where('username', $username)->first();
            $userFullname = $user->getFullName();
            $welcomeMessage = $user->welcome_message;
            $imageURL = $user->image_url;
            return view(
                'booking.index',
                compact('username', 'userFullname', 'welcomeMessage', 'imageURL')
            );
        } else {
            return redirect('/');
        }
    }

    public function bookDate($username, $duration)
    {
        $user = $this->getUserId($username);
        if ($user) {
            return view(
                'booking.booking-datetime',
                compact('username', 'duration', 'user')
            );
        } else {
            return redirect('/');
        }
    }

    public function saveBookDate(Request $request, $username, $duration)
    {
        if ($request->ajax()) {
            $data = request('date');
            $userId = $this->getUserId($username);
            $response = Schedule::select('schedule_time', 'duration')
                ->where(['schedule_date' => $data, 'user_id' => $userId['id']])
                ->get();

            return response()->json([
                'status' => 'success',
                'result' => $response
            ]);
        }
        return response()->json(['status' => 'error']);
    }

    /**
     * @param Request $request
     * @param Schedule $schedule
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     * @author Maryfaith Mgbede <adaamgbede@gmail.com>
     */
    public function createSchedule(Request $request, Schedule $schedule)
    {
        DB::beginTransaction();
        $username = request('username');
        $userId = $this->getUserId($username);
        if (!$userId) {
            return redirect()->back()->with([
                'error' => 'Could not found any user with this account'
            ]);
        }
        $recipient = User::select('phone_number')->where('username', $username)->first();
        $visitors_name = request('visitors_name');
        $duration = request('duration');
        $schedule_time = request('schedule_time');
        $schedule_date = request('schedule_date');

        $message = ucwords($visitors_name) . " just booked an appointment with you for " . Utils::formatTime($schedule_time) . " on ". Utils::formatDate($schedule_date) . " Do login to your account to confirm, cancel or re-schedule appointment";

        try {
            $id = DB::table('schedules')->insertGetId([
                'user_id' => $userId['id'],
                'schedule_date' => $schedule_date,
                'schedule_time' => $schedule_time,
                'duration' => $duration,
                'visitors_name' => $visitors_name,
                'visitors_phone_number' => request('visitors_phone_number'),
                'reason_for_visit' => request('reason_for_visit')
            ]);
            $this->sendMessage(
                $message, Utils::convertPhoneNumberToE164Format($recipient->phone_number)
            );
            DB::commit();
            return redirect(route('booking-success', $id))->with('success', 'Successfully');
        } catch (\Exception $ex) {
            DB::rollBack();
            $errorMessage = $this->getErrorMessage($ex->getCode(), $ex->getMessage());
            return redirect()->back()->with(['error' => $errorMessage]);
        }
    }

    public function bookSuccess($id)
    {
        $schedule = Schedule::find($id);
        $user = User::find($schedule->user_id);
        $userFullname = $user->getFullName();
        $username = $user->username;
        $scheduleDate = $schedule->schedule_date;
        $scheduleTime = $schedule->schedule_time;
        $duration = $schedule->duration;

        return view(
            'booking.booking-success',
            compact('userFullname', 'scheduleDate', 'scheduleTime', 'duration', 'username')
        );
    }
}
