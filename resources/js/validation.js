(function ($) {
    jQuery.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/.test(value);
    }, "Please enter alphabets only");

    $('#validateFormInfo').validate({
        onsubmit: true,
        onchange: true,
        onblur: true,
        onkeyup: false,
        rules: {
            schedule_time: "required",
            visitors_name: {
                required: true,
                lettersonly: true
            },
            visitors_email: {
                email: true
            },
            visitors_phone_number: {
                required: true,
                digits: true,
            },
            reason_for_visit: "required",
        }
    });
    $('#validateFormTime').validate({
        onsubmit: true,
        onchange: true,
        onblur: true,
        onkeyup: false,
        rules: {
            time: "required"
        }
    });
})(jQuery);