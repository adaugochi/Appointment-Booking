<?php

namespace App;

use App\helpers\Utils;
use App\Traits\FormatDateTrait;
use Exception;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

/**
 * @property string first_name
 * @property string last_name
 * @property string middle_name
 * @property string username
 * @property mixed token
 * @property int id
 * @property mixed password
 * @property mixed email
 * @property mixed phone_number
 */
class Security extends Authenticatable
{
    use Notifiable, FormatDateTrait;

    protected $table = 'securities';

    protected $guard = 'security';

    protected $fillable = [
        'first_name', 'middle_name', 'last_name', 'email', 'password', 'username', 'phone_number', 'token'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * @param $postData
     * @return array
     * @throws Exception
     * @author Maryfaith Mgbede <adaamgbede@gmail.com>
     */
    public function create($postData)
    {
        $this->first_name = $postData['first_name'];
        $this->middle_name = $postData['middle_name'];
        $this->last_name = $postData['last_name'];
        $this->phone_number = $postData['phone_number'];
        $this->username = $this->getUserName();
        $this->email = $postData['email'];
        $this->token = Utils::generateToken();
        if (!$this->save()) {
            throw new Exception('Failed');
        }
        return [$this->token, $this->username];
    }
}
