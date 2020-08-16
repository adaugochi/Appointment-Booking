<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function index($username)
    {
        return view('booking', compact('username'));
    }

    public function bookDate($username, $duration)
    {
        return view('booking-datetime');
    }

    public function saveBookDate(Request $request, $username, $duration)
    {
        $data = $request->all();
        #create or update your data here

        return response()->json(['success'=>'Ajax request submitted successfully']);
    }

    public function bookTime($username, $duration)
    {
        dd(1);
    }
}
