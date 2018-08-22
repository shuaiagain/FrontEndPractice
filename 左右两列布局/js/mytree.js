$(function () {

    $('.left .item').siblings('ul').slideUp();
    $('.left .item').on('click', function (e) {

        var item = $(this);
        var siblings = item.siblings('ul');
        var hasParent = item.parents('ul').siblings('.item').length;

        if (item.hasClass('open') && !hasParent) {

            item.removeClass('open');
            siblings.slideUp();
        } else if (!item.hasClass('open') && !hasParent) {

            $('.open').siblings('ul').slideUp();
            $('.open').removeClass('open');

            item.addClass('open');
            siblings.slideDown();
        }
        else if (!item.hasClass('active-item') && hasParent) {

            $('.active-item').removeClass('active-item');
            item.addClass('active-item');
            getData();
        }

        e.preventDefault();
        e.stopPropagation();
    });

    function getData() {

        $.ajax({
            type: 'get',
            url: 'http://localhost:8282/api/article/GetArticleList',
            data: {},
            contentType: 'application/json;charset=utf-8',
            beforeSend: function () {

                $('.loading').show();
            },
            success: function (data) {

                var dateOne=new Date().getTime();
                var a = '';
                for (var i = 0; i < 10000; i++) {
                    a += i;
                }

                console.log(new Date().getTime()-dateOne)

                $('.right-content').html(a);
            },
            complete: function () {
                setTimeout(() => {
                    $('.loading').hide();
                }, 1000);
            }
        });
    }


});