$(document).ready(function() {
    scrollShow('.about .product__letter');
    scrollShow('.about .common-paragraph__title');
    scrollShow('.about .common-paragraph__text');
    $(window).scroll(function() {
        scrollShow('.about .product__letter');
        scrollShow('.about .common-paragraph__title');
        scrollShow('.about .common-paragraph__text');
    })
})
