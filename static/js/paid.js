$(function(){
    $('i.select').click(function(){
        // var status =  
        // console.dir(this.classList)
        if(this.classList[2]==='icon-icon_unselected'){
            console.log(123)
            $('i.select').removeClass('icon-icon_selected').addClass('icon-icon_unselected')
            $(this).removeClass('icon-icon_unselected').addClass('icon-icon_selected')
        }else if(this.classList[2]==='icon-icon_selected'){
            console.log(456)
            $(this).removeClass('icon-icon_selected').addClass('icon-icon_unselected')
        }
        
    })
    $('.operate .confirm .paid-now').click(function(){
        window.location.href="paidSuccess.html"
    })
    
})