$(function () {
    //点赞
    $('.icon-icon_praise').click(function () {
        if ($(this).attr("flag") === 'true') {
            let num = $(this).siblings('.agree-num').html();
            $(this).removeClass('icon-icon_praise_selected').addClass('icon-icon_praise').css('color', '#999999').siblings('.agree-num').html(parseInt(num) - 1);
            $(this).attr("flag", "false");
        } else {
            let count = $(this).siblings('.agree-num').html();
            $(this).removeClass('icon-icon_praise').addClass('icon-icon_praise_selected').css('color', '#00BCD4').siblings('.agree-num').html(parseInt(count) + 1);
            $(this).attr("flag", "true");
        }
    });
    $('.comment-box-content').click(function () {
        $('.title-for-input').css('display', 'block');
        $('#title-for').focus();
        $('#title-for').val('');
    });
    $('.title-for-input-arrow').click(function () {
        $('.title-for-input').css('display', 'none');
    });
    //评论页面
    $('.click').click(function () {
        $('body').css('overflow','hidden');
        $('.commit').css('display', 'block');
        $('.commit .title-for-input input').focus();
    });
    $('.hide').click(function () {
        $('.commit').css('display', 'none');
    });
    $('.commit .title-for-input .title-for-input-arrow').click(function () {
        $('.commit .title-for-input input').val('');
        $('.commit .title-for-input').css('display', 'block');
    });
    $('.commit .list .stop').click(function () {
        $('.commit').css('display', 'none');
    });
    //收藏
    let flag = true;
    $('.left i').click(function () {
        if (flag) {
            $('.left i').addClass('icon-icon_collect_selecte').removeClass('icon-icon_sc').css('color', '#00BCD4');
            flag = false;
        } else {
            $('.left i').addClass('icon-icon_sc').removeClass('icon-icon_collect_selecte').css('color', '#999999');
            flag = true;
        }
    });
})