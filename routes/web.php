<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');
Route::get('/schedule/view/{id}', 'HomeController@viewDetail')->name('schedule.view');
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
    Route::get('/security', 'AdminSecurityController@index')->name('admin.security');
    Route::get('/honourable/new', 'AdminHonourableController@create')->name('new.honourable');
    Route::get('/security/new', 'AdminSecurityController@create')->name('new.security');
    Route::post('/honourable/save', 'AdminHonourableController@save')->name('save.honourable');
    Route::post('/security/save', 'AdminSecurityController@save')->name('save.security');
});

Route::prefix('security')->group(function () {
    // Login routes
    Route::get('/login', 'Auth\SecurityLoginController@showLoginForm')->name('security.login');
    Route::post('/sign-in', 'Auth\SecurityLoginController@login')->name('security.sign-in');
    Route::get('/register', 'Auth\SecurityRegisterController@showRegistrationForm')->name('security.register');
    Route::post('/sign-up', 'Auth\SecurityRegisterController@signUp')->name('security.sign-up');
    Route::post('/logout', 'Auth\SecurityLoginController@logout')->name('security.logout');
    // Portal routes
    Route::get('/home', 'SecurityHomeController@index')->name('security.home');
    Route::post('/home', 'SecurityHomeController@searchConfirmCode');
    Route::post('/save-clock-code', 'SecurityHomeController@saveClockInCode');
});

Route::get('/schedule-booked/{id}', 'BookingController@bookSuccess')->name('booking-success');
Route::get('/{username}', 'BookingController@index')->name('booking');
Route::get('/{username}/{duration}', 'BookingController@bookDate')->name('book.date');
Route::post('/{username}/{duration}', 'BookingController@saveBookDate')->name('save.book.date');
Route::post('/create-schedule', 'BookingController@createSchedule')->name('create-schedule');
