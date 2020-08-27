<aside id="main-sidebar" class="main-sidebar">
    <div class="custom-navbar__logo text-center pt-2">
        <a href="/" class="text-white">
            <h2 class="full-logo">NAFRN</h2>
            <h2 class="mini-logo d-none">NF</h2>
        </a>
    </div>

    <section class="sidebar">
        <ul class="side-menu">
            <li>
                <a href="{{ route('admin.home') }}">
                    <i class="fa fa-home md-48 icon" aria-hidden="true"></i>
                    <span class="nav-label">Dashboard</span>
                </a>
            </li>

            <li>
                <a href="#">
                    <i class="fa fa-user-o md-48 icon" aria-hidden="true"></i>
                    <span class="nav-label">
                        Profile
                    </span>
                </a>
            </li>

            <li>
                <a href="{{ route('admin.honourable') }}">
                    <i class="fa fa-briefcase md-48 icon" aria-hidden="true"></i>
                    <span class="nav-label">
                        Honourable
                    </span>
                </a>
            </li>

            <li>
                <a href="{{ route('admin.security') }}">
                    <i class="fa fa-user-secret md-48 icon" aria-hidden="true"></i>
                    <span class="nav-label">
                        Security
                    </span>
                </a>
            </li>
        </ul>
    </section>
</aside>
