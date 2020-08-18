<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/schedule-booked', 'BookingController@bookSuccess')->name('booking-success');
Route::get('/{username}', 'BookingController@index')->name('booking');
Route::get('/{username}/{duration}', 'BookingController@bookDate')->name('book.date');
Route::post('/{username}/{duration}', 'BookingController@saveBookDate')->name('save.book.date');
Route::post('/create-schedule', 'BookingController@createSchedule')
    ->name('create-schedule');


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
