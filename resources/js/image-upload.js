require('./image-uploader.min');

(function ($) {
    let imageInputField = $("#imageURL");

    $('.input-images').imageUploader({
        imagesInputName: 'images',
        preloadedInputName: 'preloaded',
        extensions: ['.jpg', '.jpeg', '.png', '.gif', '.svg'],
        mimes: ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'],
        label: "Drag & Drop files here or Click to Upload Image",
    });

    $("#profileForm").on('submit', function (e) {
        let imageUploader = $(this).find('.image-uploader');
        if (imageUploader.hasClass('has-files')) {
            let imageURL = imageUploader.find('img').attr('src')
            imageInputField.val(imageURL)
        }
    });

    $(document).ready(function () {
        console.log(imageInputField.val());
        if(imageInputField.val()) {
            $('.uploaded').append(`
                <div class="uploaded-image" data-index="0">
                    <img src="${imageInputField.val()}">
                    <button class="delete-image">
                        <i class="iui-close"></i>
                    </button>
                </div>
            `)
        }
    })
})(jQuery);