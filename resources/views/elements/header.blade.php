<nav class="navbar fixed-top bg-white main-header custom-navbar">
    <a class="custom-navbar__sidebar-toggle text-gray">
        <i class="fa fa-bars custom-navbar__menu-bar"></i>
    </a>

    <div class="justify-content-end">
        <div class="dropdown cursor-pointer">
            <a class="nav-link dropdown-toggle text-gray" data-toggle="dropdown">
                <span class="image-name">{{ auth()->user()->getFullName() }}</span>
                <span class="nav-text mr-3">{{ auth()->user()->getFullName() }}</span>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                   document.getElementById('logout-form').submit();">Logout</a>
                <form id="logout-form" action="{{ route('logout') }}" method="POST">
                    @csrf
                </form>
            </div>
        </div>
    </div>
</nav>

