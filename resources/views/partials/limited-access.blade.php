<div class="row">
    <div class="col-md-8 col-lg-6">
        <div class="card">
            <div class="card-icon d-block d-md-none">
                <i class="fa fa-user-circle-o" aria-hidden="true"></i>
            </div>
            <h4 class="card-box-title mb-3 mt-5 mt-md-0">
                You currently have limited access to the portal
            </h4>
            <div class="row mb-4">
                <div class="col-md-7">
                    <p class="mt-3">
                        Click on the button below to completely setup your account in order
                        to gain complete access to all the features available on the portal
                    </p>
                </div>
                <div class="col-md-5 d-none d-md-block">
                    <img src="{{ asset('images/profile.svg') }}" class="img-fluid">
                </div>
            </div>
            <a href="{{ route('profile') }}" class="btn-brand-primary btn-pill btn">
                Get Access to Portal
            </a>
        </div>
    </div>
</div>