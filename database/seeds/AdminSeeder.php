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
                'email' => 'adaamgbede@gmail.com',
                'role' => 'system-admin',
                'password' => Hash::make(12345678)
            ],
            [
                'first_name' => 'Ayomide',
                'last_name' => 'Ojo',
                'email' => 'antava1990@gmail.com',
                'role' => 'project-manager',
                'password' => Hash::make(12345678)
            ],
        ]);
    }
}
