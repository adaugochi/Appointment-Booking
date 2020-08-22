<?php

namespace App\Http\Controllers;

use App\helpers\Utils;
use App\User;
use App\Schedule;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest');
    }

    public function index($username)
    {
        if ($this->getUserId($username)) {
            $userFullname = User::where('username', $username)->first()->name;
            return view('booking.index', compact('username', 'userFullname'));
        } else {
            return redirect('/');
        }
    }

    public function bookDate($username, $duration)
    {
        if ($this->getUserId($username)) {
            return view('booking.booking-datetime', compact('username', 'duration'));
        } else {
            return redirect('/');
        }
    }

    public function saveBookDate($username, $duration)
    {
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

    /**
     * @param Request $request
     * @param Schedule $schedule
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     * @author Maryfaith Mgbede <adaamgbede@gmail.com>
     */
    public function createSchedule(Request $request, Schedule $schedule)
    {
        $postData = $request->all();
        $username = $postData['username'];
        $userId = $this->getUserId($username);
        if (!$userId) {
            return redirect()->back()->with([
                'error' => 'Could not found any user with this account'
            ]);
        }
        $recipient = User::select('phone_number')->where('username', $username)->first();
        $message = ucwords($postData['visitors_name']) . " just schedule a " . $postData['duration'] . " for " .
            $postData['schedule_time'] . " meeting on ". $postData['schedule_date'];

        try {
            $this->sendMessage(
                $message, Utils::convertPhoneNumberToE164Format($recipient->phone_number)
            );
            $id = $schedule->create($postData, $userId['id']);
            return redirect(route('booking-success', $id))->with('success', 'Schedule created successfully');
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

    public function bookSuccess($id)
    {
        $schedule = Schedule::find($id);
        $user = User::find($schedule->user_id);
        $userFullname = $user->name;
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
