<?php

namespace App\Http\Controllers;

use App\helpers\Utils;
use App\Schedule;
use App\Security;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
            $schedule = Schedule::where(['confirmation_code' => trim($data)])->first();
            if ($schedule) {
                $user = User::find($schedule->user_id);
                $response = [
                    'full_name' => $user->getFullName(),
                    'orig_date' => $schedule->schedule_date,
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

    public function saveClockInCode(Request $request)
    {
        DB::beginTransaction();
        if($request->ajax()) {
            $data = request('id');
            $clockInCode = mt_rand(10000, 99999);
            $schedule = Schedule::find($data);

            if ($schedule) {
                DB::table('schedules')->where('id', $data)->limit(1)
                    ->update(['clock_in_code' =>  $clockInCode]);
                $this->sendMessage(
                    'Your clock in code: ' . $clockInCode,
                    Utils::convertPhoneNumberToE164Format($schedule->visitors_phone_number)
                );
                DB::commit();
                return response()->json([
                    'status' => 'success'
                ]);
            }
            DB::rollBack();
            return response()->json(['status' => 'error']);
        }
        return response()->json(['status' => 'error']);
    }

    public function confirmClockInCode(Request $request)
    {
        if($request->ajax()) {
            $code = request('code');
            $id = request('id');
            $schedule = Schedule::where(['clock_in_code' => trim($code), 'id' => $id])->first();
            if ($schedule) {
                return response()->json([
                    'status' => 'success'
                ]);
            }
            return response()->json(['status' => 'error']);
        }
        return response()->json(['status' => 'error']);
    }
}
