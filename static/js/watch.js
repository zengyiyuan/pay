var titleStartForOne = document.getElementById('title-one');
var titleStartForTwo = document.getElementById('title-two');
var solidStartForOne = document.getElementById('solid-one');
var solidStartForTwo = document.getElementById('solid-two');
var detailBox = document.getElementById('detail-box');
var commentsBox = document.getElementById('comments-box');
function titleChangeColor(flag) {
    if (flag === 1) {
        titleStartForOne.className = "title-for-one title-for-color";
        titleStartForTwo.className = "title-for-two";
        solidStartForOne.className = "title-for-solid-one solid-for-color";
        solidStartForTwo.className = "title-for-solid-two";
        detailBox.style.display = "block";
        commentsBox.style.display = "none";
    } else if (flag === 2) {
        titleStartForOne.className = "title-for-one";
        titleStartForTwo.className = "title-for-two title-for-color";
        solidStartForOne.className = "title-for-solid-one";
        solidStartForTwo.className = "title-for-solid-two solid-for-color";
        detailBox.style.display = "none";
        commentsBox.style.display = "block";
    }
};
$(function () {
    const win = $(window);//得到窗口对象
    const height = $('.banner')[0].offsetHeight
    win.scroll(function () {
        if (win.scrollTop() >= height) {
            $('.title-for').addClass('fixed');
            $('.title-for-solid-two').css('top', '41px')
        } else {
            $('.title-for').removeClass('fixed');
            $('.title-for-solid-two').css('top', '42px')
        }
    })
    $('#title-for-middle-ul li').click(function () {
        window.location.href = "videoes.html"
    })
    //点赞
    $('.icon-icon_praise').click(function () {
        if ($(this).attr("flag")==='true') {
            let num = $(this).siblings('.agree-num').html();
            $(this).removeClass('icon-icon_praise_selected').addClass('icon-icon_praise').css('color', '#999999').siblings('.agree-num').html(parseInt(num)-1);
            $(this).attr("flag","false");    
            console.log($(this).attr("flag"));
        } else {
            let count = $(this).siblings('.agree-num').html();
            $(this).removeClass('icon-icon_praise').addClass('icon-icon_praise_selected').css('color', '#00BCD4').siblings('.agree-num').html(parseInt(count)+1);
            $(this).attr("flag","true");    
            console.log($(this).attr("flag"));
        }
    });
    $('.icon-icon_comment').click(function () {
        window.location = 'comment.html';
    });
    // $('.banner .paid-button').click(function () {
    //     window.location.href = "paidwatch.html"
    // })
    // $('.card-box.introduce button').click(function () {
    //     window.location.href = "videoes.html"
    // })

    $('.card-box.introduce').click(function () {
        if (this.dataset.status === 'paid') {
            window.location.href = "paidwatch.html"
        } else {
            window.location.href = "watch.html"
        }

    })
    //点击人物卡片跳转至任务名片页面
    $('.card-box.introduce .left-person').click(function (e) {
        e.stopPropagation()
        window.location.href = "interviewer.html"
    })
    $('.card-box.introduce .right-person').click(function (e) {
        e.stopPropagation()
        window.location.href = "interviewee.html"
    })

})
