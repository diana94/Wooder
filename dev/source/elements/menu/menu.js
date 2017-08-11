$(document).ready( function(){
    $(document).click( function(e){
        if (!$(e.target).closest("#menu-button").length) {
            $('#menu-button').removeClass('open');
            $('.menu__list').removeClass('open');
        }
    });

    $('#menu-button').click( function(){
        $('#menu-button').toggleClass('open');
        $('.menu__list').toggleClass('open');
    });
})
