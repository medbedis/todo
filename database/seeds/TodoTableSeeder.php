<?php

use Illuminate\Database\Seeder;
use App\Models\Todo;

class TodoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Todo::create([
            'description' => 'Design a nice theme',
            'user_id' => 1,
            'is_completed'=> 0,
            'ends_at' => now()->addMinute(30),
            'order'=> 1,
        ]);

        Todo::create([
            'description' => 'Make the theme responsive',
            'user_id' => 1,
            'is_completed'=> 1,
            'ends_at' => now()->addMinute(90),
            'order'=> 2,
        ]);
        Todo::create([
            'description' => 'Let theme shine like a star',
            'user_id' => 1,
            'is_completed'=> 0,
            'ends_at' => now()->addHour(25),
            'order'=> 3,
        ]);
        Todo::create([
            'description' => 'Let theme shine like a star',
            'user_id' => 1,
            'is_completed'=> 0,
            'ends_at' => now()->addDays(5),
            'order'=> 4,
        ]);
        Todo::create([
            'description' => 'Check your messages and notifications',
            'user_id' => 1,
            'is_completed'=> 0,
            'ends_at' => now()->addDays(8),
            'order'=> 5,
        ]);
        Todo::create([
            'description' => 'Let theme shine like a star',
            'user_id' => 1,
            'is_completed'=> 0,
            'ends_at' => now()->addDays(33),
            'order'=> 6,
        ]);
    }
}
