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
}