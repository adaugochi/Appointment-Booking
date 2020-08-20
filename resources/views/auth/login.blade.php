<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Font Awesome-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/toastr.css') }}" rel="stylesheet">
</head>
<body>
    <div>
        <main>
            <section>
                <div class="container">
                    <div class="row ht-100v align-items-center justify-content-center py-100 login_wrapper">
                        {{--<div class="col-md-6 col-lg-5">--}}
                            {{--<img src="{{ asset('images/booked.svg') }}">--}}
                            {{--<div class="mt-4">--}}
                                {{--<a href="#" class="btn btn-brand-outline-pry">Visit Us</a>--}}
                            {{--</div>--}}
                        {{--</div>--}}

                        <div class="col-md-6 col-lg-5 offset-lg-2 mx-auto">
                            <div class="card mx-auto">
                                <h1 class="mb-3 card-box-title">Sign In</h1>
                                <div>
                                    <form class="card-form__wrapper">
                                        <div class="form-group">
                                            <label class="card-form__label">Username</label>
                                            <input type="text" name="username" class="card-form__input form-control">
                                        </div>
                                        <div class="form-group">
                                            <label class="card-form__label">Password</label>
                                            <input type="password" name="password" class="card-form__input form-control">
                                        </div>
                                        <div class="form-group text__underline">
                                            <a href="/password-reset" class="text-brand-primary text-underline">
                                                Forgot Password?
                                            </a>
                                        </div>
                                        <button class="btn btn-brand-primary btn-block">Sign In</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
    @include('partials.flash-messages')
</body>
</html>
