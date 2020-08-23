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
Route::get('/profile', 'ProfileController@index')->name('profile');

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
    Route::get('/honourable/new', 'AdminHonourableController@create')->name('new.honourable');
    Route::post('/honourable/save', 'AdminHonourableController@save')->name('save.honourable');

});

Route::get('/schedule-booked/{id}', 'BookingController@bookSuccess')->name('booking-success');
Route::get('/{username}', 'BookingController@index')->name('booking');
Route::get('/{username}/{duration}', 'BookingController@bookDate')->name('book.date');
Route::post('/{username}/{duration}', 'BookingController@saveBookDate')->name('save.book.date');
Route::post('/create-schedule', 'BookingController@createSchedule')->name('create-schedule');
