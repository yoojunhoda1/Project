// recommand_banner tab_bar 

$(document).ready(function () {

    $('.title_btn1').click(function (e) {
        e.preventDefault();

        
        $('.recommand_con2').removeClass('on')
        $('.recommand_con3').removeClass('on')
        

        $('.recommand_con1').addClass('on')

    })

    $('.title_btn2').click(function (e) {
        e.preventDefault();

       
        $('.recommand_con1').removeClass('on')
        $('.recommand_con3').removeClass('on')

        $('.recommand_con2').addClass('on')

    })

    $('.title_btn3').click(function (e) {
        e.preventDefault();

        $('.recommand_con1').removeClass('on')
        $('.recommand_con2').removeClass('on')

        $('.recommand_con3').addClass('on')
        $('.recommand_con3 .recommand_info_btn li:nth-child(3) a').css({"background-color":"coral"});

    })


    $('.recommand_info_btn ul>li:nth-child(1) a').click(function(e){
        e.preventDefault();


        $('.recommand_con1 .recommand_info_btn li:nth-child(1) a').css({"background-color":"coral"});
        $('.recommand_con2').removeClass('on')
        $('.recommand_con3').removeClass('on')
        $('.recommand_con1').addClass('on')

    })

    $('.recommand_info_btn ul>li:nth-child(2) a').click(function(e){
        e.preventDefault();

        $('.recommand_con2 .recommand_info_btn li:nth-child(2) a').css({"background-color":"coral"});
        $('.recommand_con1').removeClass('on')
        $('.recommand_con3').removeClass('on')
        $('.recommand_con2').addClass('on')

    })

    $('.recommand_info_btn ul>li:nth-child(3)').click(function(e){
        e.preventDefault();
        
        $('.recommand_con3 .recommand_info_btn li:nth-child(3) a').css({"background-color":"coral"});
        $('.recommand_con1').removeClass('on')
        $('.recommand_con2').removeClass('on')
        $('.recommand_con3').addClass('on')

    })


    $('.playlist a:nth-child(1)').click(function(e){
        e.preventDefault();

        $('playlist ul').css({'transform':'rotateX(390px)'});


    })

    $('.playlist a:nth-child(2)').click(function(e){
        e.preventDefault();


    })

   

})