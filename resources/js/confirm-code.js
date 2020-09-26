(function ($) {
    let confirmCodeBtn = $('#confirmCode'),
        confirmCodeInput = $('#confirm_code_input'),
        clockInCodeBtn = $('#clockInCode'),
        clockInCodeInput = $('#clock_in_code_input'),
        templateWrapper = $('#template'),
        _token   = $('meta[name="csrf-token"]').attr('content'),
        clockbtn = '#sendClockCode',
        baseURL = '/';

    confirmCodeBtn.click(function () {
        $this = $(this);
        $this.find('span').addClass('d-none');
        $this.find('i').removeClass('d-none');
        $this.attr('disabled', true);
        let confirmCodeVal = confirmCodeInput.val();
        let currentURL = window.location.href;

        $.ajax({
            url: currentURL,
            type: "POST",
            data: {
                _token: _token,
                code: confirmCodeVal
            },
            success: function(response){
                $this.find('span').removeClass('d-none');
                $this.find('i').addClass('d-none');
                $this.attr('disabled', false);
                if (templateWrapper.has('.card')) {
                    templateWrapper.empty();
                    $('.clock-code-div').addClass('d-none');
                }

                if(response.result && response.status === 'success') {
                    let res = response.result;
                    let givenDate = new Date(res.orig_date);
                    let currentDate = new Date();

                    if (givenDate.setHours(0,0,0,0) === currentDate.setHours(0,0,0,0)) {
                        templateWrapper.append(`
                            <div class="card bd-0">
                                <div class="card__title fs-20 pb-1">
                                    <i class="fa fa-user-o pr-2 card__icon green" aria-hidden="true"></i>
                                    <span>Schedule Details</span>
                                </div>
                                <div>
                                    <img src="/uploads/profile/${res.image_url}" width="200">
                                </div>
                                <div class="mt-4">
                                    <p>Whom to see: ${res.full_name}</p>
                                    <p>Appointment booked for ${res.schedule_date}</p>
                                    <p>Appointment confirmed on ${res.date_confirmed}</p>
                                    <p>Appointment time: ${res.schedule_time}</p>
                                </div>
                                <form action="/" method="post">
                                    <input type="hidden" name="_token" value="${_token}">
                                    <input type="hidden" value="${res.id}" name="id" id="sch_id">
                                    <button type="button" class="btn btn-brand-outline-pry btn-wd-100"
                                     id="sendClockCode">
                                        <span>Send Clock In Code</span>
                                        <i class="fa fa-spinner fa-spin d-none fs-20"></i>
                                    </button>
                                </form>
                            </div>
                        `);
                    } else if (givenDate < currentDate) {
                        templateWrapper.append(`
                            <div class="card bd-0">
                                <div class="empty-state">
                                    <i class="fa fa-address-card-o empty-state__icon icon-grey"></i>
                                    <p class="empty-state__description mt-2">
                                        The date scheduled for this appointment have passed
                                    </p>
                                </div>
                            </div>
                        `)
                    } else {
                        templateWrapper.append(`
                            <div class="card bd-0">
                                <div class="empty-state">
                                    <i class="fa fa-address-card-o empty-state__icon icon-grey"></i>
                                    <p class="empty-state__description mt-2">
                                        You don't have any appointment scheduled for today.
                                    </p>
                                </div>
                            </div>
                        `)
                    }

                } else {
                    templateWrapper.append(`
                        <div class="card bd-0">
                            <div class="empty-state">
                                <i class="fa fa-address-card-o empty-state__icon icon-grey"></i>
                                <p class="empty-state__description mt-2">
                                    No result found
                                </p>
                            </div>
                        </div>
                    `)
                }
            },
            error: function (request, status, error) {
                $this.find('span').removeClass('d-none');
                $this.find('i').addClass('d-none');
                $this.attr('disabled', false);
                toastr.error("An error occurred. Refresh the page and try again");
            },
            complete: function () {
                sendCode();
            }
        })
    });

    function enableDisableBtn($input, $btn) {
        $input.keyup(function () {
            $btn.attr('disabled', false);
            if (!$(this).val()) {
                $btn.attr('disabled', true)
            }
        });
    }

    enableDisableBtn(confirmCodeInput, confirmCodeBtn);
    enableDisableBtn(clockInCodeInput, clockInCodeBtn);

    function sendCode() {
        $(clockbtn).on('click', function () {
            $this = $(this);
            $this.find('span').addClass('d-none');
            $this.find('i').removeClass('d-none');
            $this.attr('disabled', true);
            let scheduleId = $('#sch_id').val();
            let currentURL = baseURL + 'security/save-clock-code';

            $.ajax({
                url: currentURL,
                type: "POST",
                data: {
                    _token: _token,
                    id: scheduleId
                },
                success: function(response){
                    $this.find('span').removeClass('d-none');
                    $this.find('i').addClass('d-none');
                    $this.attr('disabled', false);

                    if(response.status === 'success') {
                        $('.clock-code-div').removeClass('d-none');
                        toastr.success("Clock In Code sent successfully");
                    }
                },
                error: function (request, status, error) {
                    toastr.error("An error occurred. Refresh the page and try again");
                },
            })
        })
    }

    clockInCodeBtn.on('click', function () {
        $this = $(this);
        $this.find('span').addClass('d-none');
        $this.find('i').removeClass('d-none');
        $this.attr('disabled', true);
        let clockInCode = $('#clock_in_code_input').val();
        let scheduleId = $('#sch_id').val();
        let currentURL = baseURL + 'security/confirm-clock-code';

        $.ajax({
            url: currentURL,
            type: "POST",
            data: {
                _token: _token,
                code: clockInCode,
                id: scheduleId
            },
            success: function(response){
                $this.find('span').removeClass('d-none');
                $this.find('i').addClass('d-none');
                $this.attr('disabled', false);

                if(response.status === 'success') {
                    //location.reload();
                    location.href = baseURL + 'security/snapshot/' + scheduleId;
                    toastr.success("You are now confirmed");
                }
            },
            error: function (request, status, error) {
                window.location.reload();
                toastr.error("We could not confirm this identity");
                //console.log(request.responseText);
            },
        })
    })

})(jQuery);
