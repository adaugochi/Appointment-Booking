<?php

namespace App\Http\Controllers;

use App\Schedule;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function index($username)
    {
        return view('booking', compact('username'));
    }

    public function bookDate($username, $duration)
    {
        return view('booking-datetime', compact('username', 'duration'));
    }

    public function saveBookDate(Request $request, $username, $duration)
    {
        $data = request('date');
        $res = Schedule::select('schedule_time')
            ->where(['schedule_date' => $data, 'hon_id' => 1, 'duration' => $duration])
            ->get();

        return response()->json([
            'status' => 'success',
            'result' => $res
        ]);
    }

    public function bookTime($username, $duration)
    {
        dd(1);
    }
}
