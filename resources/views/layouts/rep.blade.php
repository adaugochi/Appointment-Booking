<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title') | NAFRN</title>
    <!-- Icon-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Styles -->
    <link href="/css/portal.css" rel="stylesheet">
    <link href="/css/toastr.css" rel="stylesheet">
    @yield('style')
</head>
<body>
<div class="wrapper">
    <div class="">
        <!-- Header -->
        <nav class="navbar bg-brand-gray main-header rep_custom-navbar">
            <div class="container">
                <a href="/" class="fs-28 cursor-pointer text-white">NAFRN</a>
                <div class="justify-content-end">
                    <div class="dropdown cursor-pointer">
                        <a class="nav-link dropdown-toggle text-white" data-toggle="dropdown">
                            <span class="image-name">{{ auth()->user()->getFullName() }}</span>
                            <span class="nav-text mr-3">{{ auth()->user()->getFullName() }}</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="{{ route('profile') }}" >Profile</a>
                            <a class="dropdown-item" href="{{ route('home') }}" >Dashboard</a>
                            <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                       document.getElementById('logout-form').submit();">Logout</a>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST">
                                @csrf
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Body-->
        <section class="container" style="min-height: calc(100vh - 117px);">
            @yield('content')
        </section>

        <!-- Footer -->
        <footer class="main-footer">
            <div class="text-center">
                <span>
                    © Copyright <?= date('Y'); ?>
                    <a class="font-weight-bold text-brand-primary" href="/" target="_blank">nafrn</a>.
                    All rights reserved.
                </span>
            </div>
        </footer>
    </div>
</div>
<!-- Scripts -->
<script src="/js/portal.js"></script>
@include('partials.flash-messages')
@yield('script')
</body>
</html>

