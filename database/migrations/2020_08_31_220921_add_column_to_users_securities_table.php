<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnToUsersSecuritiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->tinyInteger('is_active')->default(1)->after('has_registered');
        });
        Schema::table('securities', function (Blueprint $table) {
            $table->tinyInteger('is_active')->default(1)->after('has_registered');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('is_active');
        });
        Schema::table('securities', function (Blueprint $table) {
            $table->dropColumn('is_active');
        });
    }
}
