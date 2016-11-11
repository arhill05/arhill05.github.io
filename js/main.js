$('.nav a').click(function () {
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - 64
    }, 400);

    $('.scrollTop a').scrollTop();
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 8) {
        $("#header").addClass("active");
    }
    else {
        $("#header").removeClass("active");
    }

    if (scroll > 64 && scroll < $('#portfolio').scrollTop() - 64) {
        $('#about-card').addClass('box-shadow');
    }
    else {
        $('#about-card').addClass('box-shadow');
    }
});

$(document).ready(function () {

       $(window).on('load',function(){
        $('#preloader').fadeOut(1000, 'linear', function () { $(this).remove(); });
        $('#header').fadeIn('hidden', 10000000, 'linear');
       });
    $('.parallax').parallax();
});

