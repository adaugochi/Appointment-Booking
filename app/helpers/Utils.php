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
}