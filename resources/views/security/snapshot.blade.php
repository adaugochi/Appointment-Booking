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
                        <video id="webcam" class="d-none" autoplay playsinline style="width: 100%;"></video>
                        <canvas id="canvas" class="d-none" style="width: 100%;"></canvas>
                        {{--<img src="" id="image-preview" style="width: 100%" class="d-none">--}}
                        <div class="flash"></div>
                        <div class="d-flex justify-content-between">
                            <button type="button" class="btn btn-secondary d-none" id="webcam-snap">
                                Take Snapshot
                            </button>
                            <a href="#" id="download-photo" download="selfie.png" class="btn btn-secondary d-none">
                                Download
                            </a>

                            <form method="post" action="{{route('save.photo')}}">
                                @csrf
                                <input type="hidden" name="id" value="{{ $id }}">
                                <input type="hidden" name="image_url" id="image-url">
                                <button type="submit" class="btn btn-success" id="webcam-save">
                                    Save
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
    <script type="text/javascript" src="https://unpkg.com/webcam-easy/dist/webcam-easy.min.js"></script>
    <script src="/js/webcam.js"></script>
@endsection()