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
    <div class="wrapper">
        <nav class="float-right">
            <div class="dropdown cursor-pointer">
                <a class="nav-link dropdown-toggle text-gray" data-toggle="dropdown">
                    <span class="image-name">{{ auth()->user()->getFullName() }}</span>
                    <span class="mr-3">{{ auth()->user()->getFullName() }}</span>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                   document.getElementById('logout-form').submit();">Logout</a>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST">
                        @csrf
                    </form>
                </div>
            </div>
        </nav>

        <section class="security-body">
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
                                       type="text" placeholder="Enter Confirmation Code" name="confirm_code">
                            </div>
                            <button type="button" class="btn btn-brand-outline-pry btn-wd-100" id="confirmCode" disabled>
                                <span>Continue</span>
                                <i class="fa fa-spinner fa-spin d-none fs-20"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-5">
                <div class="col-lg-8" id="template">
                    <input type="hidden" value="{{ getenv('BASE_URL') }}" id="baseURL">
                </div>
            </div>
        </section>

        <footer class="bg-white py-4">
            <div class="text-center">
                <span>
                    © Copyright <?= date('Y'); ?>
                    <a class="font-weight-bold text-brand-primary" href="/" target="_blank">nafrn</a>.
                    All rights reserved.
                </span>
            </div>
        </footer>
    </div>

<!-- Scripts -->
<script src="/js/portal.js"></script>
@include('partials.flash-messages')
</body>
</html>

