$(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        autoplay:true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      }) 
    $('.footer>nav a').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
        $(this).find('.iconfont:nth-child(1)').css('display','block')
        $(this).find('.iconfont:nth-child(2)').css('display','none')
        $(this).siblings().find('.iconfont:nth-child(1)').css('display','none')
        $(this).siblings().find('.iconfont:nth-child(2)').css('display','block')
    })
    $('#videos').click(function(){
        window.location.href="searchForDetail.html"
    })
    $('#mine').click(function(){
        window.location.href="myselfForDetail.html"
    })
    $('.searchbox').focus(function(){
        $(this).addClass('searchbox-active')
        $('.icon-bar_icon_search').addClass('active')
        $('.cancel').show()
        $('.search-mask').show()
        $('.selected-box').hide()
        $('.content-box').hide()
        $('.footer').hide()
        $('html').css('background-color','#fff') 
        $('.selected-mask').hide()
        $('.selected-box span').removeClass('active')
        $('.swiper-container').hide()
    })
    // $('.searchbox').blur(function(){
    //     $(this).removeClass('searchbox-active')
    //     $('.cancel').toggle()
    //     $('.search-mask').hide()
    //     $('.selected-box').show()
    //     $('.content-box').show()
    //     $('.footer').show()
    //     $('html').css('background-color','#fff')
    // })
    $('.cancel').click(function(){
        $('.searchbox').removeClass('searchbox-active')
        $('.icon-bar_icon_search').removeClass('active')
        $(this).toggle()
        $('.search-mask').hide()
        $('.selected-box').show()
        $('.content-box').show()
        $('.footer').show()
        $('.search .searchbox')[0].value=''
        $('.search-mask .hot span').css('background-color','')
        $('.search-mask .history span').css('background-color','')
        $('.swiper-container').show()
        var height = $('header')[0].offsetHeight;
        $('.content-box').css('padding-top',height+'px')
    })
    $('.icon-icon_delete').click(function(){
        $('.history').find('span').remove()
    })
    $('.icon-bar_icon_search').click(function(){
        $('.search-mask').hide()
        $('.searchbox').addClass('searchbox-active')
        $('.cancel').show();
        $('.selected-box').show()
        $('.content-box').show()
        $('.footer').hide()
    })
    var selectedFlag = 0 //设置下拉默认为未选中
     $('.selected-box>span').click(function(){
        $('.selected-mask .all .letter li').removeClass('active')
        $('.selected-mask .job div').removeClass('active')
        $('.selected-mask .content span').removeClass('active')
        $('.filter .content .condition span:first-of-type').addClass('active')
        $('.swiper-container').hide()
        $('.selected-mask').on('click',function(e){
            $('.selected-mask').hide();
            $('.selected-mask .all .letter li').removeClass('active')
            $('.selected-mask .job div').removeClass('active')
            $('.selected-mask .content span').removeClass('active')
            $('.selected-box>span').removeClass('active')
            $('.swiper-container').show()
            $('body').removeClass('flow')
        });
        $('.selected-mask .all').on('click',function(e){
            e.stopPropagation();
        });
        $('.selected-mask .job').on('click',function(e){
            e.stopPropagation();
        });
        $('.selected-mask .filter').on('click',function(e){
            e.stopPropagation();
        });

         var className = this.classList[0]
         console.log(this.classList[1])
         if(!this.classList[1]){//此筛选条件未选中状态
            $(this).addClass('active').siblings().removeClass('active')
            $('.selected-mask').show()
            $('.selected-mask .'+className).show().siblings().hide()
            $('.swiper-container').hide()
            $('body').addClass('flow')
         }
         else if(this.classList[1]=='active'){//此筛选条件选中状态
            $(this).removeClass('active')
            $('.selected-mask').hide()
            $('.selected-mask .'+className).hide()
            $('.swiper-container').show()
            $('body').removeClass('flow')      
         }
        })
    
    $('.selected-mask .letter li').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })

    var levelOneFlag=0;//判断第一级是否被选中
    var levelTwoFlag=0;//判断第二级是否被选中
    $('.job>.content>.level-one>.level-one-list div').click(function(){
        var className = this.classList[0];
        if(levelOneFlag===0){
            $(this).addClass('active').siblings().removeClass('active')
            $('.job .content .level-two >.'+className).show().siblings().hide()
            levelOneFlag=1
        }else if(levelOneFlag===1){
            $('.job>.content>.level-three>div').hide()
            $(this).addClass('active').siblings().removeClass('active')
            $('.job .content .level-two div').removeClass('active')
            $('.job .content .level-two >.'+className).show().siblings().hide()
        }
        
    })
    $('.job>.content>.level-two>div div').click(function(){
        var className = this.classList[0];
        if(levelTwoFlag===0){
            $(this).addClass('active').siblings().removeClass('active')
            $('.job .content .level-three .'+className).show().siblings().hide()
            levelTwoFlag=1
        }else if(levelTwoFlag===1){
            $(this).addClass('active').siblings().removeClass('active')
            $('.job .content .level-three div').removeClass('active')
            $('.job .content .level-three >.'+className).show().siblings().hide()
        }
    })
    $('.job>.content>.level-three>div div').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })
    $('.job .reset span').click(function(){
        $('.job div').removeClass('active')
    })
    $('.filter .content .condition span').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })
    $('.filter .operate .reset span').click(function(){
        $('.filter .content .condition span').removeClass('active');
        $('.filter .content .condition span:first-of-type').addClass('active')
    })
    $('.filter .operate .confirm').click(function(){
            $('.selected-mask').hide();
            $('.selected-mask .all .letter li').removeClass('active')
            $('.selected-mask .job div').removeClass('active')
            $('.selected-mask .content span').removeClass('active')
            $('.selected-box>span').removeClass('active')
            $('.swiper-container').show()
            $('body').removeClass('flow')
    })
    //点击城市变色
    $('.selected-mask .all .city-list p').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
        console.dir(this.dataset.id)
    })
    //点击城市字母滑动
    $('.selected-mask .all .letter li a').click(function(){
        var s = $(this).html();
        $('.all').scrollTop(0);
        $('.all').scrollTop($('#'+s).offset().top-88)
        $('.selected-mask .all .city-list p').removeClass('active')
    })
    //点击观摩跳转至观摩页面
    $('.content-box .card-box button').click(function(){
        if(this.parentNode.parentNode.parentNode.dataset.status==='paid'){
             window.location.href="paidwatch.html"
        }else{
            window.location.href="watch.html"
        }

    })
    //点击首页约面卡片跳转至观摩页面
    $('.content-box .card-box').click(function(){
        if(this.dataset.status==='paid'){
             window.location.href="paidwatch.html"
        }else{
            window.location.href="watch.html"
        }

    })
    //点击人物卡片跳转至任务名片页面
    $('.content-box .card-box .left-person').click(function(e){
        e.stopPropagation()
        window.location.href="interviewer.html"
    })
    $('.content-box .card-box .right-person').click(function(e){
        e.stopPropagation()
        window.location.href="interviewee.html"
    })
       //点击热门、历史搜索
$('.search-mask .hot span').click(function(){
    $(this).css('background-color','#00BCD4').siblings().css('background-color','')
    var searchValue = $(this).html();
    $('.search .searchbox')[0].value = searchValue
    $('.search-mask .history span').css('background-color','')
    $('.search-mask').hide()
    $('.selected-box').show()
    $('.content-box').show()//后期肯定要根据搜索结果修改content-box的内容
    $('.footer').show()
    var height = $('header')[0].offsetHeight;
    $('.content-box').css('padding-top',height+'px')
    // $('.swiper-container').show()
})
$('.search-mask .history span').click(function(){
    var searchValue = $(this).html()
    $(this).css('background-color','#00BCD4').siblings().css('background-color','')
    $('.search .searchbox')[0].value = searchValue
    $('.search-mask .hot span').css('background-color','')
    $('.search-mask').hide()
    $('.selected-box').show()
    $('.content-box').show()//后期肯定要根据搜索结果修改content-box的内容
    $('.footer').show()
})
   
})
