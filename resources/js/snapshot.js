(function ($) {
    const webcamElement = document.getElementById('webcam');
    const canvasElement = document.getElementById('canvas');
    const webcam = new Webcam(webcamElement, 'user', canvasElement);
    let webcamSwitch = $('#webcam-switch');

    webcamSwitch.click(function () {
        if ($(this).text().trim() === 'Start Camera') {
            webcam.start().then(result => {
                cameraStarted();
            }).catch(err => {
                //displayError();
            });
        } else {
            cameraStopped();
            webcam.stop();
        }
    });

    $('#webcam-flip').click(function() {
        webcam.flip();
        webcam.start();
    });

    function cameraStopped() {
        $('.md-effect-12').addClass('d-none');
        webcamSwitch.text('Start Camera');
        webcamSwitch.removeClass('btn-danger');
        webcamSwitch.addClass('btn-success');
    }

    function cameraStarted() {
        $('.md-effect-12').removeClass('d-none');
        webcamSwitch.text('Stop Camera');
        webcamSwitch.removeClass('btn-success');
        $('#webcam').removeClass('d-none');
        $('#canvas').addClass('d-none');
        webcamSwitch.addClass('btn-danger');
        $('#webcam-snap').removeClass('d-none');
        $('#download-photo').addClass('d-none');
    }

    $("#webcam-snap").click(function () {
        beforeTakePhoto();
        let picture = webcam.snap();
        $('#download-photo').attr('href', picture);
        $('#image-preview').removeClass('d-none');
        $('#image-preview').attr('src', picture);
        $('#image-url').val(picture);
        afterTakePhoto();
    });

    function beforeTakePhoto(){
        $('.flash')
        .show()
        .animate({opacity: 0.3}, 500)
        .fadeOut(500)
        .css({'opacity': 0.7});
        window.scrollTo(0, 0);
    }

    function afterTakePhoto(){
        webcam.stop();
        $('#canvas').removeClass('d-none');
        $('#webcam-snap').addClass('d-none');
        $('#webcam').addClass('d-none');
        $('#download-photo').removeClass('d-none');
        webcamSwitch.text('Start Camera');
        webcamSwitch.removeClass('btn-danger');
        webcamSwitch.addClass('btn-success');
    }
})(jQuery);