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
            $table->unsignedBigInteger('hon_id');
            $table->foreign('hon_id')->references('id')->on('honourables');
            $table->string('schedule_date');
            $table->string('schedule_time');
            $table->string('duration');
            $table->string('visitors_name')->nullable();
            $table->string('visitors_email')->nullable();
            $table->string('visitors_phone_number')->nullable();
            $table->text('reason_for_visit')->nullable();
            $table->string('status')->default('pending'); // confirm, decline, reschedule
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
