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

    public function snapShot($id)
    {
        $visitor = Schedule::find($id);
        if (!$visitor) {
            return redirect(route('security.home'))->with(['error' => "Invalid visitor's ID"]);
        } elseif (!$visitor->confirmation_code) {
            return redirect(route('security.home'))->with(['error' => 'Visitor does not have confirmation code']);
        } elseif (!$visitor->clock_in_code) {
            return redirect(route('security.home'))->with(['error' => 'Visitor does not have clock-in code']);
        }
        return view('security.snapshot', compact('id'));
    }

    public function visitorPreview($id)
    {
        return view('security.preview', compact('id'));
    }

    public function searchConfirmCode(Request $request)
    {
        if(!$request->ajax()) {
            return response()->json(['status' => 'error']);
        }
        $schedule = Schedule::where(['confirmation_code' => trim(request('code'))])->first();
        if (!$schedule) {
            return response()->json(['status' => 'error']);
        }
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
        return response()->json(['status' => 'success', 'result' => $response]);
    }

    public function saveClockInCode(Request $request)
    {
        DB::beginTransaction();
        if($request->ajax()) {
            $data = request('id');
            $clockInCode = mt_rand(10000, 99999);
            $schedule = Schedule::find($data);

            try {
                if ($schedule) {
                    DB::table('schedules')->where('id', $data)->limit(1)
                        ->update(['clock_in_code' =>  $clockInCode]);
                    $this->sendMessage(
                        'Your clock in code: ' . $clockInCode,
                        Utils::convertPhoneNumberToE164Format($schedule->visitors_phone_number)
                    );
                    DB::commit();
                    return response()->json(['status' => 'success']);
                }
            } catch (\Exception $ex) {
                DB::rollBack();
                $errorMessage = $this->getErrorMessage($ex->getCode(), $ex->getMessage());
                return response()->json(['status' => 'error', 'message' => $errorMessage]);
            }
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
                return response()->json(['status' => 'success']);
            }
            return response()->json(['status' => 'error']);
        }
        return response()->json(['status' => 'error']);
    }

    public function savePhoto()
    {
        $visitor = Schedule::find(request('id'));
        if (!$visitor) {
            return redirect(route('security.home'))->with(['error' => "Invalid visitor's ID"]);
        }
        $data = request('image_url');
        if (!$data) {
            return redirect(route('security.snapshot', request('id')))
                ->with(['error' => "Could not find visitor's photo"]);
        }
        $data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $data));
        $imageName = env('APP_NAME') .'_'. time() .'.png';
        file_put_contents(public_path('uploads/visitors/').$imageName, $data);
        $visitor->image_url = $imageName;
        if (!$visitor->save()) {
            return redirect(route('security.snapshot', request('id')))
                ->with(['error' => "Could not save photo"]);
        }
        return redirect(route('security.preview', $visitor->id))
            ->with(['success' => "Photo saved successfully"]);
    }
}
