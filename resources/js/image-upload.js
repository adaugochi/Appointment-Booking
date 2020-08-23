require('./image-uploader.min');

(function ($) {
    let preloaded = [
        // {id: 1, src: '1.jpg'},
        // {id: 2, src: '2.jpg'},
        // {id: 3, src: '3.jpg'},
        // more images here
    ];

    $('.input-images').imageUploader({
        imagesInputName: 'images',
        preloadedInputName: 'preloaded',
        extensions: ['.jpg', '.jpeg', '.png', '.gif', '.svg'],
        mimes: ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'],
        maxSize: undefined,
        maxFiles: undefined,
    });
})(jQuery);