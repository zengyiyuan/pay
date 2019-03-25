$(function(){
    //点击星星变色
    $('.icon-group .iconfont').click(function(){
        var num = this.dataset.num-0;//当前点击的是第几个图标
        var evalateArr = ["不满意",'一般','不错','满意','非常专业，无可挑剔']
        evalateArr.forEach((item,index)=>{
            if(num===index+1){
                $('.evalate-txt').html(item)
            }
        })
        $('.icon-group .iconfont').forEach(item=>{
            if((item.dataset.num-0)<=num){
                $(item).removeClass('icon-icon_star_disabled').addClass('icon-icon_star_selected')
            }else if((item.dataset.num-0)>num){
                $(item).removeClass('icon-icon_star_selected').addClass('icon-icon_star_disabled')
            }
        })
    })
    //根据输入字数变化右下角
    $('.textarea-box textarea').keyup(function(){
        var num = $(this).val().length
        $('.textarea-box .word-limit .num').html(num)
    })

})