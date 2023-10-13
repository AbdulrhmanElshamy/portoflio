$(document).ready(function () {
    $(window).resize(function () {

        if ($(this).width() > 835) {
            $('#AboutPic img').css("transform", "translateX(18%)");
        } else {
            $('#AboutPic img').css("transform", "translateX(0%)");
        }

    });

    // Transition effect for navbar 
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class

        if ($(this).scrollTop() > 500) {
            $('nav').addClass('nav-solid');
            $('.bi-rocket-takeoff').css("right", "1%");
            $('.bi-rocket-takeoff').css("display", "block");
            if ($(this).width() > 835) {
                $('#AboutPic img').css("transform", "translateX(18%)");
            } else {
                $('#AboutPic img').css("transform", "translateX(0%)");
            }

        } else {
            $('nav').removeClass('nav-solid');
            $('.bi-rocket-takeoff').css("right", "-5%");
            $('.bi-rocket-takeoff').css("display", "none");
            $('.bi-rocket-takeoff').css("bottom", "2%");
            $('.bi-rocket-takeoff').css("font-size", "40px");
            if ($(this).width() > 835) {

                $('#AboutPic img').css("transform", "translateX(87%)");
            } else {
                $('#AboutPic img').css("transform", "translateX(0%)");
            }


        }
    });
    $('.bi-rocket-takeoff').on('click', function () {
        $('.bi-rocket-takeoff').css("bottom", "90%");
        $('.bi-rocket-takeoff').css("font-size", "0px");
        $('body, html').animate({
            scrollTop: $("#Home").offset().top
        }, 600);
    });
});

