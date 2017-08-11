$(document).ready(function() {
    scrollShow('.video .common-paragraph__title');
    scrollShow('.video .common-paragraph__text');
    $(window).scroll(function() {
        scrollShow('.video .common-paragraph__title');
        scrollShow('.video .common-paragraph__text');
    })
})
