<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class ZOUser extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $table = 'zo_users';
    public $timestamps = false;

    protected $fillable = [
        'password',
        'nama',
        'phone_mobile1',
        'email_add',
        'admin',
        'date_logged',
        'date_created',
        'username',
        'alamat_r', //alamat rumah
        'poskod_r', //poskod rumah
        'bandar_r', //bandar rumah
        'negeri_r', //negeri rumah
        'no_tel_r', //no tel rumah
        'bandar2_r', //bandar2 rumah
        'bandar_p', //bandar1 pejabat
        'nokplama', 
        'status',
        'mykad1',
        'mykad2',
        'mykad3',
        'mykad',
        'activation_key',
        'password_hashed',
        'password_is_secure',
        'first_name',
        'last_name',
        'gender',
        'country',
        'idtype',
        'honourific',
        'alamat_hubungan',
        'remember_token',
        'email',
        'temp_password',
        'nickname',
        'idsizamy',
        'avatar',
        'device_token',
        'fcm_token',
        'config'
    ];
    
    protected $hidden = [
        'password',
        'remember_token',
        'password_hashed'
    ];

    /**
     * Add a password validation callback
     *
     * @param string $password
     * @return boolean Whether the password is valid
     */
    public function validateForPassportPasswordGrant($password)
    {
        return password_verify($password, $this->getPasswordHashed());
    }

    /**
     * Send the password reset notification.
     *
     * @param  string  $token
     * @return void
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new MailResetPasswordNotification($token));
    }
}
