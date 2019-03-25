$(function(){
    $('.header a').click(function(){
        var className = this.classList[0]
        $(this).addClass('active').siblings().removeClass('active')
        $('div.'+className).show().siblings().hide()
        $('div.header').show()
    })
    $('.coupon-box').click(function(){
        window.location = 'index.html';
    });
})