@extends('layouts.security')
@section('content')
    <section class="pb-5">
        <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto">
                <div class="card bd-0">
                    <div class="card__title">
                        <button type="button" class="btn btn-success" id="webcam-switch">
                            Start Camera
                        </button>
                    </div>
                    <div class="d-none md-effect-12">
                        <div class="my-3">
                            <video id="webcam" class="d-none" autoplay playsinline style="width: 100%; height: unset"></video>
                            <canvas id="canvas" class="d-none" style="width: 100%;"></canvas>
                        </div>
                        <div class="flash"></div>
                        <div class="d-flex justify-content-between">
                            <button type="button" class="btn btn-secondary d-none"
                                    id="webcam-snap" title="Take Snaphot">
                                <i class="fa fa-camera fs-18 pl-md-2 va-bottom" aria-hidden="true"></i>
                                <span class="d-none d-md-inline">Take Snapshot</span>
                            </button>
                            <a href="#" id="download-photo" download="selfie.png" title="download"
                               class="btn btn-secondary d-none">
                                <i class="fa fa-download fs-18 pl-md-2 va-bottom" aria-hidden="true"></i>
                                <span class="d-none d-md-inline">Download</span>
                            </a>
                            <button type="button" class="btn btn-secondary" id="webcam-flip" title="Flip camera">
                                <i class="fa fa-repeat fs-18 pl-md-2 va-bottom" aria-hidden="true"></i>
                                <span class="d-none d-md-inline">Flip Camera</span>
                            </button>
                            <form method="post" action="{{route('save.photo')}}">
                                @csrf
                                <input type="hidden" name="id" value="{{ $id }}">
                                <input type="hidden" name="image_url" id="image-url">
                                <button type="submit" class="btn btn-success" id="webcam-save" title="save">
                                    <i class="fa fa-cloud fs-18 pl-md-2 va-bottom" aria-hidden="true"></i>
                                    <span class="d-none d-md-inline">Save</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection()
@section('script')
    <script src="https://unpkg.com/webcam-easy/dist/webcam-easy.min.js"></script>
    <script src="/js/webcam.js"></script>
@endsection()