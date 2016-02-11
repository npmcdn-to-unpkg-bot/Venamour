$(document).ready(function(){
    $('#continue').on('click', function(e){
        e.preventDefault();

        $('#expanded').show();
    });

    $('#btn-open-menu').on('click', function(){
        $('#main-nav').addClass('is-open');
    });

    $('#close-button').on('click', function(){
        $('#main-nav').removeClass('is-open');
    });

    setTimeout(function(){
        $('.grid').masonry({
            // options
            itemSelector: '.grid-item'
        });
    }, 200);
});