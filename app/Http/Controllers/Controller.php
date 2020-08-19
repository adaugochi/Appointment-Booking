<?php

namespace App\Http\Controllers;

use App\Honourable;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Twilio\Rest\Client;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function getHonourableId($username)
    {
        return Honourable::select('id')->where('username', $username)->first();
    }

    /**
     * Sends sms to user using Twilio's programmable sms client
     * @param $message
     * @param $recipient
     * @param $username
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     * @throws \Twilio\Exceptions\ConfigurationException
     */
    public function sendMessage($message, $recipient, $username)
    {
        $sid    = getenv('TWILIO_ACCOUNT_SID');
        $token  = getenv('TWILIO_AUTH_TOKEN');
        $from   = getenv('TWILIO_NUMBER');
        $twilio = new Client($sid, $token);

        try {
            $twilio->messages->create(
                $recipient, // to
                [
                    "from" => $from,
                    "body" => $message
                ]
            );
        } catch (\Exception $ex) {
            if ($ex->getCode() === 21211) {
                $errorMessage = "This phone number is invalid";
            } elseif ($ex->getCode() === 21408) {
                $errorMessage = "We don't have international permission neccessary to SMS this phone number";
            } elseif ($ex->getCode() === 21610) {
                $errorMessage = "This phone number is blocked";
            } elseif ($ex->getCode() === 21614) {
                $errorMessage = "This phone number is incapable of receiving SMS messages";
            } else {
                $errorMessage = "Could not send SMS notification to honourable";
            }
            return redirect(route('booking', $username))->with(['error' => $errorMessage]);
        }
    }
}
