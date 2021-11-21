<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('admins')->insert([
            [
                'first_name' => 'Adaa',
                'last_name' => 'Mgbede',
                'email' => 'admin@mail.com',
                'role' => 'system-admin',
                'password' => Hash::make(env('ADMIN_DEFAULT_PASSWORD'))
            ]
        ]);
    }
}
