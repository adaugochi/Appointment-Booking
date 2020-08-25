@extends('layouts.main')
@section('title', 'Profile')
@section('style')
    <link href="{{ asset('css/image-uploader.min.css') }}" rel="stylesheet">
@endsection()
@section('header-breadcrumb')
    <li>Profile</li>
    <li class="active">My Account</li>
@endsection()
@section('sidebar')
    @include('elements/sidebar')
@endsection
@section('content-body')
    <div class="row">
        <div class="col">
            <form action="{{ route('update.profile') }}" method="post" enctype="multipart/form-data"
                  class="validateForm" id="profileForm">
                @csrf
                <input type="hidden" name="image_url" id="imageURL"
                       value="{{ $user->image_url ? asset('uploads/profile/'.$user->image_url): '' }}">
                <div class="row">
                    <div class="col-lg-8 col-md-6 mt-4 mt-md-0">
                        <div class="card bd-0">
                            <div class="card__title fs-20 pb-1">
                                <i class="fa fa-user-o pr-2 card__icon green" aria-hidden="true"></i>
                                <span>Personal Information</span>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group text-left">
                                        <label class="card-form__label">First Name</label>
                                        <input class="card-form__input form-control" type="text"
                                               name="first_name" value="{{ $user->first_name }}" readonly>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group text-left">
                                        <label class="card-form__label">Middle Name</label>
                                        <input class="card-form__input form-control" type="text"
                                               name="middle_name" value="{{ $user->middle_name }}" readonly>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group text-left">
                                        <label class="card-form__label">Last Name</label>
                                        <input class="card-form__input form-control" type="text"
                                               name="last_name" value="{{ $user->last_name }}" readonly>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group text-left">
                                        <label class="card-form__label">Phone Number</label>
                                        <input class="card-form__input form-control" type="text"
                                               name="phone_number" value="{{ $user->phone_number }}" readonly>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group text-left">
                                        <label class="card-form__label">Welcome Message</label>
                                        <textarea class="card-form__input form-control"
                                                  name="welcome_message" rows="3">{{ $user->welcome_message  }}</textarea>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <input type="submit" value="Save Changes" class="btn btn-brand-primary">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 order-first order-md-last">
                        <div class="card bd-0">
                            <div class="card__title fs-20 pb-1">
                                <i class="fa fa-camera pr-2 card__icon pink" aria-hidden="true"></i>
                                <span>Upload Picture</span>
                            </div>
                            <div class="input-images"></div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection
