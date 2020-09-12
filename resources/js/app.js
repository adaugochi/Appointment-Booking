require('./bootstrap');
require('./validation');

(function ($) {
    let dateDiv = $('#pick_date'),
        timeDiv = $('#pick_time'),
        infoDIv = $('#enter_details'),
        calendar = $('.calendar'),
        scheduleDateInput = $('#scheduleDate'),
        selectDateBtn = $('#selectDate'),
        scheduleTimeInput = $('#scheduleTime'),
        selectTimeBtn = $('#selectTime'),
        timeInput = $('.time'),
        pickedTime = [],
        timeInterval = $('.duration').val(),
        firstBackIcon = $('#back_first'),
        secondBackIcon = $('#back_second');

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

    calendar.pignoseCalendar({
        disabledWeekdays: [0, 6],
        disabledDates: [getCurrentFormatDate()],
        minDate: getCurrentFormatDate(),
        disabledRanges: [
            [$('#startDate').val(), $('#endDate').val()]
        ],
        click: function(event, context) {
            let $this = $(this);
            let date = $this.data('date');
            scheduleDateInput.val(date);
            selectDateBtn.attr('disabled', false)
        }
    });

    selectDateBtn.click(function () {
        $this = $(this);
        $this.find('span').addClass('d-none');
        $this.find('i').removeClass('d-none');
        $this.attr('disabled', true);
        let scheduleDate = scheduleDateInput.val();
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
                dateDiv.addClass('d-none');
                timeDiv.removeClass('d-none');

                $this.find('span').removeClass('d-none');
                $this.find('i').addClass('d-none');
                $this.attr('disabled', false);

                if(response.result && response.status === 'success') {
                    response.result.forEach(function (item) {
                        pickedTime.push(convertToMinutesIntervals(item.schedule_time, 0));
                        pickedTime.push(convertToMinutesIntervals(item.schedule_time, 15));
                        if (item.duration === '30min') {
                            pickedTime.push(convertToMinutesIntervals(item.schedule_time, 30));
                        } else if (item.duration === '60min') {
                            pickedTime.push(convertToMinutesIntervals(item.schedule_time, 30));
                            pickedTime.push(convertToMinutesIntervals(item.schedule_time, 45));
                            pickedTime.push(convertToMinutesIntervals(item.schedule_time, 60));
                        }
                    });
                }
            },
            error: function (request, status, error) {
                $this.find('span').removeClass('d-none');
                $this.find('i').addClass('d-none');
                $this.attr('disabled', false);
                toastr.error("An error occurred. Refresh the page and try again");
            }
        })
    });

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
        scheduleTimeInput.val($(this).val());

        if (timeInput.val()) {
            selectTimeBtn.attr('disabled', false)
        }
    });

    firstBackIcon.on('click', function () {
        dateDiv.removeClass('d-none');
        timeDiv.addClass('d-none');
        timeInput.trigger( "focus" )
        let timeList = $('.ui-timepicker-list li');
        timeList.each(function () {
            $(this).removeClass('ui-timepicker-disabled')
        });
        pickedTime = [];
    });

    secondBackIcon.on('click', function () {
        timeDiv.removeClass('d-none');
        infoDIv.addClass('d-none');
    });

    selectTimeBtn.click(function (e) {
        timeDiv.addClass('d-none');
        infoDIv.removeClass('d-none');
    })
})(jQuery);
