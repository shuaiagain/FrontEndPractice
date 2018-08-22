$(function () {

    $('.left .item').siblings('ul').slideUp();
    $('.left .item').on('click', function (e) {

        var item = $(this);
        var son = item.siblings('ul');
        var hasSon = son ? son.length : 0;
        var hasParentOpen = item.parents('li').find('.open').length;

        if (hasSon && item.hasClass('open')) {

            item.removeClass('open');
            son.slideUp();
        } else if (!item.hasClass('open') && hasSon && hasParentOpen) {

            item.addClass('open');
            son.slideDown();
        } else if (!item.hasClass('open') && hasSon && !hasParentOpen) {

            $('.open').siblings('ul').slideUp();
            $('.open').removeClass('open');
            item.addClass('open');
            son.slideDown();
        }
        else if (!item.hasClass('active-item') && !hasSon) {

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

                var dateOne = new Date().getTime();
                var a = '';
                for (var i = 0; i < 10000; i++) {
                    a += i;
                    if (i % 100 == 0 && i != 0)
                        a += '\n';
                }

                console.log(new Date().getTime() - dateOne)

                $('.right-content').html(a);
            },
            complete: function () {
                setTimeout(function () {
                    $('.loading').hide();
                },1000);
            }
        });
    }


});