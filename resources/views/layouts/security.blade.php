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
        <h5 class="py-5">Welcome Back, {{ auth()->user()->getFullName() }}</h5>

        @yield('content')
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
    @yield('script')

    @include('partials.flash-messages')
</body>
</html>