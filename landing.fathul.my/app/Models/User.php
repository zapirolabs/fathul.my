<?php

namespace App\Models;

use App\Models\Traits\UserModelTraits;
use App\Notifications\MailResetPasswordNotification;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable, UserModelTraits;

    const ID_TYPE_NOKP = 1;
    const ID_TYPE_ARMY = 3;
    const ID_TYPE_PASSPORT = 4;
    const ID_TYPE_COMPANY = 5;


    protected $table = 'zo_users';

    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nama', 'password', 'first_name', 'last_name', 'nickname', 'username',
        'phone_mobile1', 'email', 'email_add', 'password_hashed', 'admin', 'date_logged',
        'alamat_r', 'bandar_r', 'poskod_r', 'negeri_r', 'bandar2_r', 'status',
        'activation_key', 'password_is_secure',
        'gender', 'country', 'idtype', 'honourific', 'alamat_hubungan', 'temp_password'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'password_hashed'
    ];


}
