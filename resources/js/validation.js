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
            welcome_message: "required",
            start_date: "required",
            end_date: "required",
            username: "required",
            last_name: {
                required: true,
                lettersonly: true
            },
            middle_name: {
                required: true,
                lettersonly: true
            },
            first_name: {
                required: true,
                lettersonly: true
            },
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
            email: {
                email: true
            },
            phone_number: {
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
            reason_for_visit: {
                rangelength: [20, 200],
                required: true,
            }
        }
    });
})(jQuery);
