<?php

namespace App\Http\Controllers;

use App\helpers\Utils;
use App\Schedule;
use App\Security;
use App\User;
use Illuminate\Http\Request;

class SecurityHomeController extends Controller
{
    /**
     * Create a new controller instance.
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:security');
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     * @author Maryfaith Mgbede <adaamgbede@gmail.com>
     */
    public function index()
    {
        return view('security.home');
    }

    public function searchConfirmCode(Request $request)
    {
        if($request->ajax()){
            $data = request('code');
            $schedule = Schedule::where(['confirmation_code' => trim($data), 'clock_in_code' => null])->first();
            if ($schedule) {
                $user = User::find($schedule->user_id);
                $response = [
                    'full_name' => $user->getFullName(),
                    'schedule_date' => Utils::formatDate($schedule->schedule_date),
                    'schedule_time' => Utils::convertToMinutesIntervals($schedule->time, $schedule->duration),
                    'date_confirmed' => Utils::formatDate($schedule->date_confirmed),
                    'image_url' => $user->image_url,
                    'id' => $schedule->id
                ];

                return response()->json([
                    'status' => 'success',
                    'result' => $response
                ]);
            }
            return response()->json(['status' => 'error']);
        }
        return response()->json(['status' => 'error']);
    }

    public function saveClockInCode()
    {

    }
}
