<?php

namespace App;

use Exception;
use Illuminate\Database\Eloquent\Model;

/**
 * @property mixed schedule_date
 * @property int user_id
 * @property mixed schedule_time
 * @property mixed duration
 * @property string visitors_email
 * @property string visitors_name
 * @property mixed visitors_phone_number
 * @property string reason_for_visit
 * @property mixed id
 */
class Schedule extends Model
{
    protected $table = 'schedules';
    protected $fillable = [
        'schedule_date', 'schedule_time', 'duration', 'visitors_name',
        'visitors_email', 'visitors_phone_number', 'user_id', 'reason_for_visit'
    ];

    /**
     * @param $request
     * @param $honId
     * @return bool
     * @throws Exception
     * @author Maryfaith Mgbede <adaamgbede@gmail.com>
     */
    public function create($request, $userId)
    {
        $this->user_id = $userId;
        $this->schedule_date = $request['schedule_date'];
        $this->schedule_time = $request['schedule_time'];
        $this->duration = $request['duration'];
        $this->visitors_name = $request['visitors_name'];
        $this->visitors_email = $request['visitors_email'];
        $this->visitors_phone_number = $request['visitors_phone_number'];
        $this->reason_for_visit = $request['reason_for_visit'];

        if (!$this->save()) {
            throw new Exception('Could not save schedule information');
        }
        return $this->id;
    }
}
