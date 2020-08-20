<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSchedulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schedules', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->string('schedule_date');
            $table->string('schedule_time');
            $table->string('duration');
            $table->string('visitors_name');
            $table->string('visitors_email')->nullable();
            $table->string('visitors_phone_number');
            $table->text('reason_for_visit');
            $table->string('status')->default('pending'); // confirm, cancelled, reschedule
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('schedules');
    }
}
