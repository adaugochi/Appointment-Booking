(function ($) {
    let confirmApt = $("[data-target='confirmApt']"),
        confirmAptModal = $("#confirmAptModal"),
        cancelApt = $("[data-target='cancelApt']"),
        cancelAptModal = $("#cancelAptModal"),
        rescheduleApt = $("[data-target='rescheduleApt']"),
        rescheduleAptModal = $("#rescheduleAptModal"),
        scheduleId = $(".id"),
        scheduleDate = $("#date"),
        scheduleTime = $("#time");


    confirmApt.on('click', function (e) {
        e.preventDefault();
        confirmAptModal.modal('show');
        scheduleId.val($(this).data('id'))
    });

    cancelApt.on('click', function (e) {
        e.preventDefault();
        cancelAptModal.modal('show');
        scheduleId.val($(this).data('id'))
    });

    rescheduleApt.on('click', function (e) {
        e.preventDefault();
        rescheduleAptModal.modal('show');
        scheduleId.val($(this).data('id'));
        scheduleDate.val($(this).data('date'));
        scheduleTime.val($(this).data('time'))
    });
})(jQuery);