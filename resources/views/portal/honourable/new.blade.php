@extends('layouts.main')
@section('title', 'Honourable')
@section('header-breadcrumb')
    <li class="active"><a href="{{ route('admin.honourable') }}">Honourable</a></li>
    <li class="active">New</li>
@endsection()
@section('content-body')
    <div class="row">
        <div class="col-md-8 col-lg-6">
            <div class="card bd-0">
                <form class="validateForm" method="post" action="{{ route('save.honourable') }}">
                    @csrf
                    <div class="form-group text-left">
                        <label class="card-form__label">
                            First Name <span class="text-danger">*</span>
                        </label>
                        <input class="card-form__input form-control" type="text" name="first_name">
                    </div>
                    <div class="form-group text-left">
                        <label class="card-form__label">
                            Middle Name <span class="text-danger">*</span>
                        </label>
                        <input class="card-form__input form-control" type="text" name="middle_name">
                    </div>
                    <div class="form-group text-left">
                        <label class="card-form__label">
                            Last Name <span class="text-danger">*</span>
                        </label>
                        <input class="card-form__input form-control" type="text" name="last_name">
                    </div>
                    <div class="form-group text-left">
                        <label class="card-form__label">
                            Phone Number <span class="text-danger">*</span>
                        </label>
                        <input class="card-form__input form-control" type="text" name="phone_number">
                    </div>
                    <div class="form-group text-left">
                        <label class="card-form__label">Email</label>
                        <input class="card-form__input form-control" type="text" name="email">
                    </div>
                    <input type="submit" value="Submit" class="btn btn-brand-outline-pry btn-wd-100">
                </form>
            </div>
        </div>
    </div>
@endsection()
