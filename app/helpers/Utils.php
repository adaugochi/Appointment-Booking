<?php

namespace App\helpers;

class Utils
{
    public static function slug($str)
    {
        return str_replace(' ', '-', strtolower($str));
    }

    public static function convertPhoneNumberToE164Format($phoneNumber)
    {
        return preg_replace('/^0/','+234', $phoneNumber);
    }

    public static function generateToken()
    {
        return md5(rand(1, 10) . microtime()); //OR str_random(32);
    }

    public static function formatDate($timestamp)
    {
        return date("F jS, Y", strtotime($timestamp));
    }

    public static function formatTime($timestamp)
    {
        return date("h:iA", strtotime($timestamp));
    }

    public static function convertToMinutesIntervals($time, $interval)
    {
        $startTime = self::formatTime($time);
        if ($interval === '15min') {
            $endTime = date("h:iA", strtotime($time) + strtotime('00:15'));
        } elseif ($interval === '30min') {
            $endTime = date("h:iA", strtotime($time) + strtotime('00:30'));
        } else {
            $endTime = date("h:iA", strtotime($time) + strtotime('01:00'));
        }
        return $startTime . ' - ' .$endTime;
    }
}