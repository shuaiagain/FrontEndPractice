$(function () {

    $('.left .item').on('click', function (e) {
        debugger;
        var item = $(this);
        if (item.hasClass('active-item')) {
            $('.left .item').removeClass('active-item');
            item.siblings('ul').animate({ height: '0px' }, function () {

                $(this).hide();
            });

            item.siblings('ul').slideUp();
        } else {

            $('.left .item').removeClass('active-item');
            item.addClass('active-item open');
            item.siblings('ul').slideDown();
        }

    });

});