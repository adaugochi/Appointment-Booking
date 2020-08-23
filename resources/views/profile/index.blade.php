@extends('layouts.main')
@section('title', 'Profile')
@section('style')
    <link href="{{ asset('css/image-uploader.min.css') }}" rel="stylesheet">
@endsection()
@section('header-breadcrumb')
    <li class="active">Profile</li>
@endsection()
@section('content-body')
    <div class="row">
        <div class="col">
            <div class="row">
                <div class="col-md-8">
                    <div class="card bd-0">
                        <div class="card__title fs-20 pb-1">
                            <i class="fa fa-user-o pr-2 card__icon green" aria-hidden="true"></i>
                            <span>Personal Information</span>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group text-left">
                                    <label class="card-form__label">First Name</label>
                                    <input class="card-form__input form-control" type="text" name="first_name">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group text-left">
                                    <label class="card-form__label">Middle Name</label>
                                    <input class="card-form__input form-control" type="text" name="middle_name">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group text-left">
                                    <label class="card-form__label">Last Name</label>
                                    <input class="card-form__input form-control" type="text" name="last_name">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group text-left">
                                    <label class="card-form__label">Phone Number</label>
                                    <input class="card-form__input form-control" type="text" name="phone_number">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group text-left">
                                    <label class="card-form__label">Welcome Message</label>
                                    <textarea class="card-form__input form-control" name="message" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                        <div>
                            <input type="submit" value="Save Changes" class="btn btn-brand-outline-pry">
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mt-4 mt-md-0">
                    <div class="card bd-0">
                        <div class="card__title fs-20 pb-1">
                            <i class="fa fa-camera pr-2 card__icon pink" aria-hidden="true"></i>
                            <span>Upload Picture</span>
                        </div>
                        <div class="input-images"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
