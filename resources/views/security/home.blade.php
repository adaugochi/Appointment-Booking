<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title') | NAFRN</title>
    <!-- Icon-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Styles -->
    <link href="/css/portal.css" rel="stylesheet">
    <link href="/css/toastr.css" rel="stylesheet">
</head>
<body>

    <nav class="navbar navbar-expand-sm bg-brand-gray navbar-dark">
        <div class="container">
            <a class="navbar-brand" href="/"><h4>NAFRN</h4></a>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="btn btn-brand-white-outline" href="{{ route('logout') }}" onclick="event.preventDefault();
                          document.getElementById('logout-form').submit();">Logout</a>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST">
                        @csrf
                    </form>
                </li>
            </ul>
        </div>
    </nav>

    <div class="container" style="min-height: calc(100vh - 134px);">
        <h5 class="py-5">Welcome Back {{ auth()->user()->getFullName() }}</h5>
        <section class="pb-5">
            <div class="row">
                <div class="col-md-10 col-lg-8 mx-auto">
                    <div class="card bd-0">
                        <div class="card__title fs-20 pb-1">
                            <i class="fa fa-file-code-o pr-2 card__icon green" aria-hidden="true"></i>
                            <span>Display Visitor's Information</span>
                        </div>

                        <div class="form_search">
                            <i class="fa fa-search" aria-hidden="true"></i>
                            <div class="form-group">
                                <input class="card-form__input form-control" id="confirm_code_input"
                                       type="tel" placeholder="Enter Confirmation Code" name="confirm_code">
                            </div>
                            <button type="button" class="btn btn-brand-outline-pry btn-wd-100" id="confirmCode" disabled>
                                <span>Continue</span>
                                <i class="fa fa-spinner fa-spin d-none fs-20"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-4">
                <div class="col-lg-8 mx-auto" id="template"></div>
            </div>

            <div class="row mt-4 d-none clock-code-div pb-5">
                <div class="col-lg-8 mx-auto" id="template2">
                    <div class="card bd-0">
                        <div class="card__title fs-20 pb-1">
                            <i class="fa fa-clock-o pr-2 card__icon green" aria-hidden="true"></i>
                            <span>Confirm Clock In Code</span>
                        </div>

                        <div class="form-group">
                            <input class="card-form__input form-control" id="clock_in_code_input"
                                   type="tel" placeholder="Enter Clock In Code" name="clock_in_code">
                        </div>
                        <button type="button" class="btn btn-brand-outline-pry btn-wd-100" id="clockInCode" disabled>
                            <span>Confirm</span>
                            <i class="fa fa-spinner fa-spin d-none fs-20"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
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

<!-- Scripts -->
<script src="/js/portal.js"></script>
@include('partials.flash-messages')
</body>
</html>

