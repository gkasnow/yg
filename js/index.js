$(function(){
    // a 태그 성격제거
    $('a[href="#"]').click(function(e){
        e.preventDefault();
    });
    // 버튼클릭시
    $('header > a').on('click',function(){
        $('.menu').css('display','block');
    });
    $('.menu a').on('click',function(){
        $('.menu').css('display','none');
        $('section').css('display','block');
        $('.section2').css('display','block');
        $('footer').css('display','block');
    });
    //마우스를 올렸을때
    $('.main_typo2 img').hover(function(){ //mouseenter()
        $('.main_typo2 img').css('width','82.240vw');
        $('.main_typo3 img').css('width','61.615vw');
    }, function(){//mouseleave()
        $('.main_typo2 img').css('width','62.240vw');
        $('.main_typo3 img').css('width','81.615vw');
    });

    $('.main_typo3 img').hover(function(){ //mouseenter()
        $('.main_typo2 img').css('width','52.240vw');
        $('.main_typo3 img').css('width','92.750vw');
    }, function(){//mouseleave()
        $('.main_typo2 img').css('width','62.240vw');
        $('.main_typo3 img').css('width','81.615vw');
    });

    //마우스스크롤시
    AOS.init();

});