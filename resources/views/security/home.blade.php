@extends('layouts.security')
@section('content')
    <section class="pb-5">
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
                                   type="tel" placeholder="Enter Confirmation Code" name="confirm_code">
                        </div>
                        <button type="button" class="btn btn-brand-outline-pry btn-wd-100" id="confirmCode" disabled>
                            <span>Continue</span>
                            <i class="fa fa-spinner fa-spin d-none fs-20"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-lg-8 mx-auto" id="template"></div>
        </div>

        <div class="row mt-4 d-none clock-code-div pb-5">
            <div class="col-lg-8 mx-auto" id="template2">
                <div class="card bd-0">
                    <div class="card__title fs-20 pb-1">
                        <i class="fa fa-clock-o pr-2 card__icon green" aria-hidden="true"></i>
                        <span>Confirm Clock In Code</span>
                    </div>

                    <div class="form-group">
                        <input class="card-form__input form-control" id="clock_in_code_input"
                               type="tel" placeholder="Enter Clock In Code" name="clock_in_code">
                    </div>
                    <button type="button" class="btn btn-brand-outline-pry btn-wd-100" id="clockInCode" disabled>
                        <span>Confirm</span>
                        <i class="fa fa-spinner fa-spin d-none fs-20"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>
@endsection()
