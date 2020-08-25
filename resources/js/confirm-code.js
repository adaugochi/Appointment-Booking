(function ($) {
    let confirmCodeBtn = $('#confirmCode'),
        confirmCodeInput = $('#confirm_code_input'),
        templateWrapper = $('#template');
        baseURL = $('#baseURL').val();

    confirmCodeBtn.click(function () {
        $this = $(this);
        $this.find('span').addClass('d-none');
        $this.find('i').removeClass('d-none');
        $this.attr('disabled', true);
        let confirmCodeVal = confirmCodeInput.val();
        let currentURL = window.location.href;
        let _token   = $('meta[name="csrf-token"]').attr('content');

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
                }

                if(response.result && response.status === 'success') {
                    let res = response.result;
                    templateWrapper.append(`
                        <div class="card bd-0">
                            <div>
                                <img src="${baseURL}uploads/profile/${res.image_url}" width="200">
                            </div>
                            <div class="mt-4">
                                <p>Whom to see: ${res.full_name}</p>
                                <p>Appointment booked for ${res.schedule_date}</p>
                                <p>Appointment confirmed on ${res.date_confirmed}</p>
                                <p>Appointment time: ${res.schedule_time}</p>
                            </div>
                            <form>
                                <input type="hidden" value="${res.id}" name="id">
                                <button type="button" class="btn btn-brand-outline-pry btn-wd-100" id="sendClockCode">
                                    <span>Send Clock In Code</span>
                                    <i class="fa fa-spinner fa-spin d-none fs-20"></i>
                                </button>
                            </form>
                        </div>
                    `)
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
                console.log(request.responseText);
            }
        })
    });

    confirmCodeInput.keyup(function () {
        confirmCodeBtn.attr('disabled', false);
        if (!$(this).val()) {
            confirmCodeBtn.attr('disabled', true)
        }
    });

})(jQuery);