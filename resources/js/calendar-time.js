(function ($) {
    let resDateDiv = $('#pick_date_div'),
        resTimeDiv = $('#pick_time_div'),
        resCalendar = $('.res_calendar'),
        resScheduleDateInput = $('#schedule_date'),
        resSelectDateBtn = $('#select_date'),
        resScheduleTimeInput = $('#schedule_time'),
        resSelectTimeBtn = $('#select_time'),
        resTimeInput = $('.res_time'),
        resPickedTime = [],
        resTimeInterval = $('.res_duration').val(),
        resFirstBackIcon = $('#back_first'),
        resSecondBackIcon = $('#back_second');

    function getCurrentFormatDate() {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();

        dd = dd < 10 ? '0' + dd : dd;
        mm = mm < 10 ? '0' + mm : mm;
        return yyyy + '-' + mm + '-' + dd;
    }

    function convertToMinutesIntervals($time, $interval) {
        var d = new Date("1970-01-01 " + $time);
        d.setMinutes( d.getMinutes() + $interval);
        return (d.getHours() < 10 ? '0' : '') + d.getHours() + ":" + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
    }

    resCalendar.pignoseCalendar({
        disabledWeekdays: [0, 6],
        disabledDates: [getCurrentFormatDate()],
        minDate: getCurrentFormatDate(),
        disabledRanges: [
            [$('#res_startDate').val(), $('#res_endDate').val()]
        ],
        click: function(event, context) {
            resSelectDateBtn.attr('disabled', false)
        }
    });

    resSelectDateBtn.click(function () {
        $this = $(this);
        $this.find('span').addClass('d-none');
        $this.find('i').removeClass('d-none');
        $this.attr('disabled', true);
        let scheduleDate = resScheduleDateInput.val();
        let currentURL = window.location.href;
        let _token   = $('meta[name="csrf-token"]').attr('content');

        $.ajax({
            url: currentURL,
            type: "POST",
            data: {
                _token: _token,
                date: scheduleDate
            },
            success: function(response){
                resDateDiv.addClass('d-none');
                resTimeDiv.removeClass('d-none');

                $this.find('span').removeClass('d-none');
                $this.find('i').addClass('d-none');
                $this.attr('disabled', false);

                if(response.result && response.status === 'success') {
                    response.result.forEach(function (item) {
                        resPickedTime.push(convertToMinutesIntervals(item.schedule_time, 0));
                        resPickedTime.push(convertToMinutesIntervals(item.schedule_time, 15));
                        if (item.duration === '30min') {
                            resPickedTime.push(convertToMinutesIntervals(item.schedule_time, 30));
                        } else if (item.duration === '60min') {
                            resPickedTime.push(convertToMinutesIntervals(item.schedule_time, 30));
                            resPickedTime.push(convertToMinutesIntervals(item.schedule_time, 45));
                            resPickedTime.push(convertToMinutesIntervals(item.schedule_time, 60));
                        }
                    });
                }
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        })
    });
    console.log(resPickedTime)

    resTimeInput.timepicker( {
        timeFormat: 'H:i',
        step: resTimeInterval,
        minTime: '9:00',
        maxTime: '17:00',
        disableTextInput: true,
    });

    resTimeInput.focus(function () {
        let timeList = $('.ui-timepicker-list li');
        timeList.each(function () {
            if (resPickedTime.includes($(this).text())) {
                $(this).addClass('ui-timepicker-disabled')
            }
        });
        resScheduleTimeInput.val($(this).val());

        if (resTimeInput.val()) {
            resSelectTimeBtn.attr('disabled', false)
        }
    });

    resFirstBackIcon.on('click', function () {
        resDateDiv.removeClass('d-none');
        resTimeDiv.addClass('d-none');
        resTimeInput.trigger( "focus" )
        let timeList = $('.ui-timepicker-list li');
        timeList.each(function () {
            $(this).removeClass('ui-timepicker-disabled')
        });
        resPickedTime = [];
    });
})(jQuery);
