<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <title>No Name</title>
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <main class="container p-5">
        <div class="text-center">
            <div class="d-md-flex align-items-center justify-content-center m-1">
                <div class="wd wd-md-700 bg-white mb-5" id="pick_date">
                    <div class="booking__align-header">
                        <div class="mx-auto">
                            <i class="fa fa-check fs-icon-check text-success" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="px-3 py-5">
                        <div class="row">
                            <div class="mx-auto col-md-8 form_wrapper">

                                <h4>
                                    You have successfully scheduled a meeting with Hon. {!! ucwords($honName) !!}
                                </h4>
                                <p>
                                    You appointment will be reviewed and we will send you a <strong>confirmation code</strong>
                                    via sms when you it is confirmed or might be reschedule to another date and time
                                </p>
                                <div class="text-success">Date: {{ $scheduleDate }}</div>
                                <span class="text-success">Time: {{ $scheduleTime }}</span>
                                <p class="text-success">Duration: {{ $duration }}</p>
                                <p>Thank you for your time</p>
                                <a href="/{{$username}}" class="btn btn-schedule btn-wd-100">
                                    Schedule Another Appointment
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>
</html>