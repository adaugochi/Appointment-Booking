require('./bootstrap');

(function ($) {

    function getCurrentFormatDate() {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();

        dd = dd < 10 ? '0' + dd : dd;
        mm = mm < 10 ? '0' + mm : mm;
        return yyyy + '-' + mm + '-' + dd;
    }

    $('.calendar').pignoseCalendar({
        disabledWeekdays: [0, 6],
        disabledDates: [getCurrentFormatDate()],
        click: function(event, context) {
            let $this = $(this);
            let date = $this.data('date');
            $('#scheduleDate').val(date);
            $('#selectDate').attr('disabled', false)
        }
    });

    let pickedTime = [];
    
    $('#selectDate').click(function () {
        let scheduleDate = $('#scheduleDate').val();
        let currentURL = window.location.href;
        let _token   = $('meta[name="csrf-token"]').attr('content');

        $.ajax({
            url: currentURL,
            type:"POST",
            data:{
                _token: _token,
                date: scheduleDate
            },
            success:function(response){
                let dateDiv = $('#pick_date');
                let timeDiv = $('#pick_time');
                dateDiv.addClass('d-none');
                timeDiv.removeClass('d-none');

                if(response.result) {
                    response.result.forEach(function (item) {
                        pickedTime.push(item.schedule_time);
                    });
                }
            },
        })
    });

    let timeInput = $('.time');
    let timeInterval = $('.duration').val();

    timeInput.timepicker( {
        timeFormat: 'H:i',
        step: timeInterval,
        minTime: '9:00',
        maxTime: '17:00',
        disableTextInput: true,
    });

    timeInput.focus(function () {
        let timeList = $('.ui-timepicker-list li');
        timeList.each(function () {
            if (pickedTime.includes($(this).text())) {
                $(this).addClass('ui-timepicker-disabled')
            }
        });
        $('#scheduleTime').val($(this).val());
        $('#selectTime').attr('disabled', false);
    })
})(jQuery);