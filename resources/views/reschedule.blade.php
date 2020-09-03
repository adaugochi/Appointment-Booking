@extends('layouts.rep')
@section('title', 'Details')
@section('content')
    <section class="py-4">
        <div class="clearfix">
            <div class="row">
                <div class="col-md-4">
                    <p class="fs-22">Reschedule Appointment</p>
                </div>
                <div class="col-md-8">
                    @include('partials.edit-availability')
                </div>
            </div>
        </div>
    </section>
    <div class="mb-5">
        <div class="d-flex">
            <button class="btn btn-link">
                <i class="fa fa-link" aria-hidden="true"></i>
            </button>
            <div class="pl-2 pl-md-3">
                <div>{{ auth()->user()->getFullName() }}</div>
                <a href="{{ env('BASE_URL') }}{{ $user->username }}"
                   class="overflow-wrap text-brand-primary text-underline" target="_blank">
                    {{ env('BASE_URL') }}{{ $user->username }}
                </a>
            </div>
        </div>
    </div>
    <div class="pb-5">
        <form method="post" action="{{ route('schedule.reschedule') }}">
            @csrf
            @if($duration == '30min')
                <input type="hidden" value="{!! 30 !!}" class="res_duration">
            @elseif ($duration == '60min')
                <input type="hidden" value="{!! 60 !!}" class="res_duration">
            @else
                <input type="hidden" value="{!! 15 !!}" class="res_duration">
            @endif
            <input type="hidden" value="{{ $id }}" name="id">
            <input type="hidden" value="{{ $user['end_date'] }}" id="res_endDate">
            <input type="hidden" value="{{ $user['start_date'] }}" id="res_startDate">

            <div class="bg-white" id="pick_date_div">
                <div class="booking__align-header px-3 d-flex align-items-fe">
                    <a href="{{route('home')}}">
                        <div class="card-dashboard-icon gray">
                            <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                        </div>
                    </a>
                    <h3 class="mx-auto">Select A Date</h3>
                </div>
                <div class="px-3 py-5">
                    <div class="row">
                        <div class="mx-auto col-md-8 form_wrapper">
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                            <div class="form-group">
                                <input class="card-form__input form-control res_calendar" id="schedule_date"
                                       type="text" placeholder="pick a date" name="schedule_date">
                            </div>
                            <button type="button" class="btn btn-brand-outline-pry btn-wd-100" id="select_date" disabled>
                                <span>Show Available Time</span>
                                <i class="fa fa-spinner fa-spin d-none fs-20"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white d-none" id="pick_time_div">
                <div class="booking__align-header px-3 d-flex align-items-fe">
                    <div class="card-dashboard-icon gray cursor-pointer" id="back_first">
                        <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                    </div>
                    <h3 class="mx-auto">Select A Time</h3>
                </div>
                <div class="px-3 py-5">
                    <div class="row">
                        <div class="mx-auto col-md-8 form_wrapper">
                            <i class="fa fa-clock-o" aria-hidden="true"></i>
                            <div class="form-group">
                                <input class="card-form__input form-control res_time" id="schedule_time"
                                       type="text" placeholder="pick a time" name="schedule_time">
                            </div>
                            <button type="submit" class="btn btn-brand-outline-pry btn-wd-100" id="select_time" disabled>
                                Reschedule
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
@endsection
