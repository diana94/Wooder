function scrollShow(classEl) {
    var pointElement = $(classEl).offset().top;
    var pointWindow = $(window).scrollTop() + $(window).outerHeight();

    if(pointWindow >= pointElement) {
        $(classEl).addClass('scroll-active');
    }
}
