$(document).ready(function(){
    $('.blueberry').blueberry();

    $('#continue').on('click', function(e){
        e.preventDefault();

        $('#expanded').toggleClass('active');
    });

    $('#btn-open-menu').on('click', function(){
        $('#main-nav').addClass('is-open');
    });

    $('#close-button').on('click', function(){
        $('#main-nav').removeClass('is-open');
    });

    setTimeout(function(){
        $('.grid').masonry({
            itemSelector: '.grid-item'
        });
    }, 300);

    function scrollMenu(){
        var scrollHeight = $(document).scrollTop() + 75,
            boxMenu = $('#page-header'),
            windowH = $(window).height();

        if(scrollHeight > (windowH - 1) && !boxMenu.hasClass('pos-menu')) {
            boxMenu.addClass('pos-menu')
        }
        else if (scrollHeight < windowH) {
            if(boxMenu.hasClass('pos-menu')) {
                boxMenu.removeClass('pos-menu');
            }
        }
    }

    $(document).scroll(function(){
        scrollMenu();
    });

    $(document).resize(function(){
        scrollMenu();
    });

    $('#footer-pretext').on('click', function() {
        $(this).removeClass('active');
        $('#close-footer').addClass('active');

        $('#footer').animate({
            'bottom': 0
        }, 500);
    });

    $('#close-footer').on('click', function() {
        var posBot;

        $(this).removeClass('active');
        $('#footer-pretext').addClass('active');

        if($(window).width() > 767) {
            posBot = -220
        }
        else {
            posBot = -275
        }

        $('#footer').animate({
            'bottom': posBot
        }, 500);
    });

    $(document).on('scroll', function(){
        var footerBlock = $('#footer'),
            scrollDocPos = $(document).scrollTop() + $(window).height(),
            hDoc = $(document).height();

        if(footerBlock.hasClass('remove-fix-footer')) {
            if(scrollDocPos < hDoc - footerBlock.height() - 30) {
                footerBlock.removeClass('remove-fix-footer').attr('style', '');
                $('.close-footer').removeClass('active');
                $('.footer-pretext').addClass('active');
            }
        }
        else {
            if(scrollDocPos === hDoc) {
                footerBlock.addClass('remove-fix-footer');
            }
        }
    });
});