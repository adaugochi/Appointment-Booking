<?php

namespace App\Http\Controllers;

use App\helpers\Utils;
use App\Honourable;
use App\Schedule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BookingController extends Controller
{
    public function index($username)
    {
        if ($this->getHonourableId($username)) {
            $honourableName = Honourable::where('username', $username)->first()->name;
            return view('booking', compact('username', 'honourableName'));
        } else {
            echo "This page can not be found";
        }
    }

    public function bookDate($username, $duration)
    {
        if ($this->getHonourableId($username)) {
            return view('booking-datetime', compact('username', 'duration'));
        } else {
            echo "This page can not be found";
        }
    }

    public function saveBookDate($username, $duration)
    {
        $data = request('date');
        $honId = $this->getHonourableId($username);
        $response = Schedule::select('schedule_time', 'duration')
            ->where(['schedule_date' => $data, 'hon_id' => $honId['id']])
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
        DB::beginTransaction();
        $postData = $request->all();
        $username = $postData['username'];
        $honId = $this->getHonourableId($username);
        if (!$honId) {
            return redirect()->back()->with([
                'error' => 'Could not found any user with this account'
            ]);
        }
        $recipient = Honourable::select('phone_number')->where('username', $username)->first();
        $message = ucwords($postData['visitors_name']) . " just schedule a " . $postData['duration'] . " for " .
            $postData['schedule_time'] . " meeting on ". $postData['schedule_date'];

        try {
            $this->sendMessage(
                $message, Utils::convertPhoneNumberToE164Format($recipient->phone_number), $username
            );
            $id = $schedule->create($postData, $honId['id']);
            DB::commit();
            return redirect(route('booking-success', $id))->with('success', 'Schedule created successfully');
        } catch (\Exception $ex) {
            DB::rollback();
            return redirect()->back()->with(['error' => $ex->getMessage()]);
        }
    }

    public function bookSuccess($id)
    {
        $schedule = Schedule::find($id);
        $honourable = Honourable::find($schedule->hon_id);
        $honName = $honourable->name;
        $username = $honourable->username;
        $scheduleDate = $schedule->schedule_date;
        $scheduleTime = $schedule->schedule_time;
        $duration = $schedule->duration;

        return view(
            'booking-success',
            compact('honName', 'scheduleDate', 'scheduleTime', 'duration', 'username')
        );
    }
}
