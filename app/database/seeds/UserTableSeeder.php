<?php

class UserTableSeeder extends Seeder
{

    public function run()
    {
        User::create([
            'email' => 'example@example.com',
            'password' => Hash::make('example'),
        ]);
    }

}