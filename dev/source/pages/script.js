function scrollShow(classEl) {
    var pointElement = $(classEl).offset().top;
    var pointWindow = $(window).scrollTop() + $(window).outerHeight();

    if(pointWindow >= pointElement) {
        console.log(classEl + ':' + pointElement);
        console.log('scroll position:' + pointWindow);
        $(classEl).addClass('scroll-active');
    }
}
