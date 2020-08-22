require('./paginathing.min');

(function ($) {

    $('.list-item-container').each(function () {
        $(this).find('tbody').paginathing({
            perPage: 5,
            limitPagination: false,
            ulClass: 'pagination',
            liClass: 'page',
            activeClass: 'activeLink',
            disabledClass: 'disabled',
            insertAfter: ($(this))
        });
    })
})(jQuery);