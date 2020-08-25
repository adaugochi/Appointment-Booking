<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterUsersSecuritiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function(Blueprint $table) {
            $table->dropColumn('email');
            $table->dropColumn('middle_name');
        });

        Schema::table('securities', function(Blueprint $table) {
            $table->dropColumn('email');
            $table->dropColumn('middle_name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function(Blueprint $table) {
            $table->string('email')->unique()->nullable();
            $table->string('middle_name');
        });

        Schema::table('securities', function(Blueprint $table) {
            $table->string('email')->unique()->nullable();
            $table->string('middle_name');
        });
    }
}
