<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    protected $table = 'schedules';
    protected $fillable = [
        'schedule_date', 'schedule_time', 'duration', 'visitors_name',
        'visitors_email', 'visitors_phone_number', 'hon_id'
    ];

}
