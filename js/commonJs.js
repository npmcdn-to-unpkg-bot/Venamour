$(document).ready(function(){
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

    $('#btn-open-filter').on('click', function(){
        $('body').css('overflow', 'hidden');
        $('#filter').addClass('is-open');
    });

    $('#close-filter').on('click', function(){
        $('body').css('overflow', 'initial');
        $('#filter').removeClass('is-open');
    });


    $(window).load(function(){
        $('.grid').masonry({
            itemSelector: '.grid-item'
        });

        $('.blueberry').blueberry();
    });

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

    $('#pager').find('a').on('click', function(e){
        e.preventDefault();
        var $this = $(this),
            wrapFilter = $('#wrap-filter');

        $('#btn-open-filter').text($this.text());

        if($this.parent().hasClass('item-all')) {
            if(!wrapFilter.hasClass('hide')) {
                wrapFilter.addClass('hide');
            }
        }
        else {
            if(wrapFilter.hasClass('hide')) {
                wrapFilter.removeClass('hide');
            }
        }
    });

    $('.close-modal').on('click', function(e){
        e.preventDefault();

        $(this).closest('.modal-window').addClass('hide');
    });

    $('#btn-detail-modal').on('click', function(e){
        e.preventDefault();

        $('#modal-detail').removeClass('hide');
    });

    $('#btn-personalization-modal').on('click', function(e){
        e.preventDefault();

        $('#personalization-modal').removeClass('hide');
    });

    var flagQuestion = true;
    $('.question-js').on('click', function(e){
        e.preventDefault();

        if(flagQuestion) {
            flagQuestion = false;

            $(this).parent().find('.answer').slideToggle(400, function(){
                flagQuestion = true;
            });
        }
    });


    $('#filter-accept').on('click', function() {
        var textInput = $('.list-filter').find('input:checked').siblings('span'),
            btnOpenFilter = $('#btn-open-filter');

        var newVal = textInput.map(function(item){
            return textInput[item].innerHTML;
        });

        btnOpenFilter.text('');

        newVal.each(function(index) {
            btnOpenFilter.text(btnOpenFilter.text() + newVal[index] + ', ');
        });

        if(newVal.length !== 0) {
            $('#filter').removeClass('is-open');
        }
    });

    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 0, 500 ],
        slide: function( event, ui ) {
            $( "#amount" ).text( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).text( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $( "#slider-range" ).slider( "values", 1 ) );

    $('.show-block').on('click', function(){
        var $this = $(this),
            text = $this.text();
        
        $this.parent().children('.collection-values').slideToggle();
        $this.text(text == "Показать" ? "Скрыть" : "Показать");
    });

    $('#picker').farbtastic('#color');
});