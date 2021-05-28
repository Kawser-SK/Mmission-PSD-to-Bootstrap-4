//////// Header   ////////

$(function(){
    $(window).on('scroll', function(){

        if($(window).scrollTop() > 200){
            $('.main-menu').addClass('menuColor');
        } else{
            $('.main-menu').removeClass('menuColor');
        }

    });
});

//////// AOS  ////////

AOS.init();

//////// Counter   ////////

$('.counter').counterUp({
    delay: 10,
    time: 3000
});

////////  Progress_Bar  ////////

$('.circlechart').circlechart();
