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
        }
    });
    
    $('#bookDate').submit(function (e) {
        e.preventDefault();
        let scheduleDate = $('#scheduleDate').val();
        let currentURL = window.location.href;
        let _token   = $('meta[name="csrf-token"]').attr('content');

        console.log(currentURL);

        $.ajax({
            url: currentURL,
            type:"POST",
            data:{
                _token: _token,
                date: scheduleDate
            },
            success:function(response){
                console.log(response);
            },
        })
    })
})(jQuery);