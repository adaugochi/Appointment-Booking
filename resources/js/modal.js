(function ($) {
    let confirmApt = $("[data-target='confirmApt']"),
        confirmAptModal = $("#confirmAptModal"),
        cancelApt = $("[data-target='cancelApt']"),
        cancelAptModal = $("#cancelAptModal"),
        scheduleId = $(".id");


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
})(jQuery);