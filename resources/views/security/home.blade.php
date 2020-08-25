@extends('layouts.main')
@section('title', 'Dashboard')
@section('header-breadcrumb')
    <li>Dashboard</li>
    <li class="active">My Appointments</li>
@endsection()
@section('content-right')

@endsection()
@section('content-body')
    <div class="row">
        <div class="col-md-10 col-lg-8">
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
@endsection
