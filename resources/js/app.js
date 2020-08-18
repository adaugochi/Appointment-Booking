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

    calendar.pignoseCalendar({
        disabledWeekdays: [0, 6],
        disabledDates: [getCurrentFormatDate()],
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
            success:function(response){
                dateDiv.addClass('d-none');
                timeDiv.removeClass('d-none');

                $this.find('span').removeClass('d-none');
                $this.find('i').addClass('d-none');

                if(response.result) {
                    response.result.forEach(function (item) {
                        pickedTime.push(item.schedule_time);
                    });
                }
            },
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
    });

    firstBackIcon.on('click', function () {
        dateDiv.removeClass('d-none');
        timeDiv.addClass('d-none');
    });

    secondBackIcon.on('click', function () {
        timeDiv.removeClass('d-none');
        infoDIv.addClass('d-none');
    });

    $('#validateFormTime').submit(function (e) {
        e.preventDefault();
        if (!$(this).find('.error')) {
            timeDiv.addClass('d-none');
            infoDIv.removeClass('d-none');
        }
    })
})(jQuery);