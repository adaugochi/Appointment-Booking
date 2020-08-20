(function ($) {
    jQuery.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/.test(value);
    }, "Please enter alphabets only");

    $('.validateForm').validate({
        onsubmit: true,
        onchange: true,
        onblur: true,
        onkeyup: false,
        rules: {
            schedule_time: "required",
            username: "required",
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
            password: {
                required: true,
                minlength: 8,
            },
            password_confirmation: {
                required: true,
                minlength: 8,
                equalTo: "#password"
            },
            reason_for_visit: "required",
        }
    });
})(jQuery);