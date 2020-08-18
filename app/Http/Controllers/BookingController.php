<?php

namespace App\Http\Controllers;

use App\Honourable;
use App\Schedule;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function getHonourableId($username)
    {
        return Honourable::select('id')->where('username', $username)->first();
    }

    public function index($username)
    {
        if ($this->getHonourableId($username)) {
            return view('booking', compact('username'));
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
        $response = Schedule::select('schedule_time')
            ->where(['schedule_date' => $data, 'hon_id' => $honId, 'duration' => $duration])
            ->get();

        return response()->json([
            'status' => 'success',
            'result' => $response
        ]);
    }

    public function createSchedule(Request $request, Schedule $schedule)
    {
        $postData = $request->all();
        $honId = $this->getHonourableId($postData['username']);
        if (!$honId) {
            return redirect()->back()->with(['error' => 'Could not found any honourable']);
        }

        try {
            $schedule->create($postData, $honId['id']);
            return redirect(route('booking-success'))->with('success', 'Schedule created successfully');
        } catch (\Exception $ex) {
            return redirect()->back()->with(['error' => $ex->getMessage()]);
        }
    }

    public function bookSuccess()
    {
        return view('booking-success');
    }
}
