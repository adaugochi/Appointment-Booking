<?php

namespace App\helpers;

class Messages
{
    const FORGET_PASSWORD_MSG = "A password reset link was sent successfully. You will receive an SMS in a minute time";
    const USER_NOT_FOUND = "Could not find this user";
    const ACCT_NOT_EXIST = 'This account does not exist';
    const INCORRECT_CREDS = 'Incorrect login credentials';
    const TOKEN_EXPIRED = "Your password reset token has expired. Please go to forget password to request for new token";
    const INVALID_TOKEN = "Invalid password reset token";
    const PWD_RESET_MSG = 'Your password reset was successful';
    const ACCT_DEACTIVATE = 'This account has been deactivated. You can no longer sign in';
    const ACCT_EXIST = 'This account is registered already, you can login';
    const INVALID_SIGNUP_TOKEN = "Invalid sign up token";
    const DATE_HAS_EXPIRED = 'The date scheduled for an appointment has expired. Kindly reschedule the appointment and confirm the appointment';
}