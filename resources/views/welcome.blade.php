<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link href="/css/app.css" rel="stylesheet">
    </head>
    <body class="bg-white">
        <nav class="navbar bg-brand-gray main-header rep_custom-navbar">
            <div class="container">
                <a href="/" class="fs-28 cursor-pointer text-white">NAFRN</a>
                <div class="justify-content-end">
                    @if (Route::has('login'))
                        <div class="links">
                            @auth
                                <a href="{{ url('/home') }}">Home</a>
                            @else
                                <a href="{{ route('login') }}">Login</a>
                            @endauth
                        </div>
                    @endif
                </div>
            </div>
        </nav>

        <div class="container" style="min-height: calc(100vh - 130px);">
            <div class="row header-wrapper">
                <div class="col-md-6 py-5 py-md-0 pt-lg-5 text-md-left text-center">
                    <div class="header-text">
                        <h1 class="font-weight-bold">
                            Welcome Back!!!
                        </h1>
                        <p class="text-gray fs-18">
                            NAFRN helps you schedule meetings without the back-and-forth emails
                            and long awaiting queue. Proceed to login and share your link with people
                            to schedule appointment with you
                        </p>
                        <a href="{{ route('login') }}" class="btn btn-brand-white btn-block mt-4">
                            Get Started
                        </a>
                    </div>
                </div>
                <div class="col-md-6">
                    <img src="{{ asset('images/booking.svg') }}">
                </div>
            </div>
        </div>

        <footer class="bg-white py-4">
            <div class="text-center">
                <span>
                    © Copyright <?= date('Y'); ?>
                    <a class="font-weight-bold text-brand-primary" href="/" target="_blank">nafrn</a>.
                    All rights reserved.
                </span>
            </div>
        </footer>
    </body>
</html>
