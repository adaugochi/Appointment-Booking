<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Twilio\Rest\Client;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function getUserId($username)
    {
        return User::select('id', 'start_date', 'end_date')
            ->where(['username' => $username, 'is_profile_complete' => 1])
            ->first();
    }

    /**
     * Sends sms to user using Twilio's programmable sms client
     * @param $message
     * @param $recipient
     * @return void
     * @throws \Twilio\Exceptions\ConfigurationException
     * @throws \Twilio\Exceptions\TwilioException
     */
    public function sendMessage($message, $recipient)
    {
        $sid    = config('services.twilio.sid');
        $token  = config('services.twilio.token');
        $from   = config('services.twilio.from');
        $twilio = new Client($sid, $token);

        $twilio->messages->create(
            $recipient, // to
            [
                "from" => $from,
                "body" => $message
            ]
        );
    }

    public function getErrorMessage($code, $message)
    {
        if ($code === 21211) {
            $errorMessage = "This phone number is invalid";
        } elseif ($code === 21408) {
            $errorMessage = "We don't have international permission necessary to SMS this phone number";
        } elseif ($code === 21610) {
            $errorMessage = "This phone number is blocked";
        } elseif ($code === 21614) {
            $errorMessage = "This phone number is incapable of receiving SMS messages";
        } elseif ($message) {
            $errorMessage = $message;
        } else {
            $errorMessage = "Could not send SMS notification to User";
        }
        return $errorMessage;
    }
}
