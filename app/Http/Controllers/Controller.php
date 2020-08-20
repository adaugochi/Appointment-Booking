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
        return User::select('id')->where('username', $username)->first();
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
        $sid    = getenv('TWILIO_ACCOUNT_SID');
        $token  = getenv('TWILIO_AUTH_TOKEN');
        $from   = getenv('TWILIO_NUMBER');
        $twilio = new Client($sid, $token);

        $twilio->messages->create(
            $recipient, // to
            [
                "from" => $from,
                "body" => $message
            ]
        );
    }
}
