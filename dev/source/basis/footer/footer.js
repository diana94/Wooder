$(document).ready( function(){
    scrollShow('.footer-logo');
    scrollShow('.common-paragraph__title');
    scrollShow('.common-paragraph__text');
    
    $(window).scroll(function() {
        scrollShow('.footer-logo');
        scrollShow('.common-paragraph__title');
        scrollShow('.common-paragraph__text');
    })
})
