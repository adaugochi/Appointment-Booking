<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

// Password reset routes
Route::post('/password/send-reset-link', 'Auth\ForgotPasswordController@sendResetLink')
    ->name('password.forget');
Route::post('/password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');
Route::get('/password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/schedule/view/{id}', 'HomeController@viewDetail')->name('schedule.view');
Route::get('/schedule/reschedule/{id}/{date}/{duration}', 'HomeController@showRescheduleApt')
    ->name('schedule.show.reschedule');
Route::post('/schedule/reschedule/{id}/{date}/{time}', 'HomeController@saveBookDate');
Route::post('/schedule/confirm', 'HomeController@confirmApt')->name('schedule.confirm');
Route::post('/schedule/cancel', 'HomeController@cancelApt')->name('schedule.cancel');
Route::post('/schedule/reschedule', 'HomeController@rescheduleApt')->name('schedule.reschedule');
Route::post('/edit-availability', 'HomeController@editAvailability')->name('edit.availability');
Route::get('/profile', 'ProfileController@index')->name('profile');
Route::post('/update-profile', 'ProfileController@updateProfile')->name('update.profile');

Route::prefix('admin')->group(function () {
    // Login routes
    Route::get('/login', 'Auth\AdminLoginController@showLoginForm')->name('admin.login');
    Route::post('/sign-in', 'Auth\AdminLoginController@signIn')->name('admin.sign-in');
    Route::post('/logout', 'Auth\AdminLoginController@logout')->name('admin.logout');

    // Password reset routes
    Route::post('/password/email', 'Auth\AdminForgotPasswordController@sendResetLinkEmail')->name('admin.password.email');
    Route::get('/password/reset', 'Auth\AdminForgotPasswordController@showLinkRequestForm')->name('admin.password.request');
    Route::post('/password/reset', 'Auth\AdminResetPasswordController@reset')->name('admin.password.update');
    Route::get('/password/reset/{token}', 'Auth\AdminResetPasswordController@showResetForm')->name('admin.password.reset');

    // Portal routes
    Route::get('/home', 'AdminHomeController@index')->name('admin.home');
    Route::get('/honourable', 'AdminHonourableController@index')->name('admin.honourable');
    Route::get('/honourable/edit/{id}', 'AdminHonourableController@edit')->name('admin.hon.edit');
    Route::get('/honourable/view/{id}', 'AdminHonourableController@show')->name('admin.hon.view');
    Route::get('/security/edit/{id}', 'AdminSecurityController@edit')->name('admin.security.edit');
    Route::get('/security', 'AdminSecurityController@index')->name('admin.security');
    Route::get('/honourable/new', 'AdminHonourableController@create')->name('new.honourable');
    Route::get('/security/new', 'AdminSecurityController@create')->name('new.security');
    Route::post('/honourable/save', 'AdminHonourableController@save')->name('save.honourable');
    Route::post('/honourable/update', 'AdminHonourableController@update')->name('update.honourable');
    Route::post('/honourable/deactivate', 'AdminHonourableController@deactivate')->name('deactivate.honourable');
    Route::post('/honourable/resend-invite', 'AdminHonourableController@resendInvite')
        ->name('resend-invite.honourable');
    Route::post('/security/save', 'AdminSecurityController@save')->name('save.security');
    Route::post('/security/update', 'AdminSecurityController@update')->name('update.security');
    Route::post('/security/deactivate', 'AdminSecurityController@deactivate')->name('deactivate.security');
    Route::post('/security/resend-invite', 'AdminSecurityController@resendInvite')
        ->name('resend-invite.security');
});

Route::prefix('security')->group(function () {
    // Login routes
    Route::get('/login', 'Auth\SecurityLoginController@showLoginForm')->name('security.login');
    Route::post('/sign-in', 'Auth\SecurityLoginController@login')->name('security.sign-in');
    Route::get('/register', 'Auth\SecurityRegisterController@showRegistrationForm')->name('security.register');
    Route::post('/sign-up', 'Auth\SecurityRegisterController@signUp')->name('security.sign-up');
    Route::post('/logout', 'Auth\SecurityLoginController@logout')->name('security.logout');

    // Password reset routes
    Route::post('/password/send-reset-link', 'Auth\SecurityForgotPasswordController@sendResetLink')->name('security.password.forget');
    Route::get('/password/reset', 'Auth\SecurityForgotPasswordController@showLinkRequestForm')->name('security.password.request');
    Route::post('/password/reset', 'Auth\SecurityResetPasswordController@reset')->name('security.password.update');
    Route::get('/password/reset/{token}', 'Auth\SecurityResetPasswordController@showResetForm')->name('security.password.reset');


    // Portal routes
    Route::get('/home', 'SecurityHomeController@index')->name('security.home');
    Route::get('/snapshot/{id}', 'SecurityHomeController@snapShot')->name('security.snapshot');
    Route::post('/snapshot/save-photo', 'SecurityHomeController@savePhoto')->name('save.photo');
    Route::post('/home', 'SecurityHomeController@searchConfirmCode');
    Route::post('/save-clock-code', 'SecurityHomeController@saveClockInCode');
    Route::post('/confirm-clock-code', 'SecurityHomeController@confirmClockInCode');
});

Route::get('/schedule-booked/{id}', 'BookingController@bookSuccess')->name('booking-success');
Route::get('/{username}', 'BookingController@index')->name('booking');
Route::get('/{username}/{duration}', 'BookingController@bookDate')->name('book.date');
Route::post('/{username}/{duration}', 'BookingController@saveBookDate')->name('save.book.date');
Route::post('/create-schedule', 'BookingController@createSchedule')->name('create-schedule');
