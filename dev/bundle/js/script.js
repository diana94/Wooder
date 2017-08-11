function scrollShow(classEl) {
    var pointElement = $(classEl).offset().top;
    var pointWindow = $(window).scrollTop() + $(window).outerHeight();

    if(pointWindow >= pointElement) {
        $(classEl).addClass('scroll-active');
    }
}
;$(document).ready( function(){
    scrollShow('.footer-logo');
    $(window).scroll(function() {
        scrollShow('.footer-logo');
    })
})
;$(document).ready(function() {
    var headerPosition = $('.header').offset().top;
    var home = $('.hero').offset().top,
        product = $('.products').offset().top,
        about = $('.about').offset().top;

    //anchor function and sticky header
    $('.home-anchor').click( function(e) {
        animateGoToAnchor(home)
    });

    $('.product-anchor').click( function(e) {
        animateGoToAnchor(product)
    });

    $('.about-anchor').click( function() {
        animateGoToAnchor(about)
    });

    headerFunction();
    checkPointHero();

    $(window).scroll( function(){
        checkPointHero();
        headerFunction();
    });

    $(document).click(function(e) {
        if (!$(e.target).closest('.select-styled').length) {
            $('.select-styled').removeClass('active');
            $('ul.select-options').removeClass('active');
        }
    });

    //custom-select function
    if($('.custom-select').length) {
        $('.custom-select').each(function(){

            var $this           = $(this),
                numberOfOptions = $(this).children('option').length;

            $this.addClass('is-hidden');
            $this.wrap('<div class="select-group"></div>');
            $this.after('<div class="select-styled"></div>');

            var $styledSelect = $this.next('div.select-styled');
            $styledSelect.text($this.children('option').eq(0).text());

            var $list = $('<ul />', {
                'class': 'select-options'
            }).insertAfter($styledSelect);

            for (var i = 0; i < numberOfOptions; i++) {
                $('<li />', {
                    text: $this.children('option').eq(i).text(),
                    rel: $this.children('option').eq(i).val()
                }).appendTo($list);
            }

            var $listItems = $list.children('li');

            $styledSelect.click(function(e) {
                $('div.select-styled.active').not(this).each(function(){
                    $(this).removeClass('active').next('ul.select-options').removeClass('active');
                });
                $(this).toggleClass('active').next('ul.select-options').toggleClass('active');
            });

            $listItems.click(function(e) {
                e.stopPropagation();
                $styledSelect.text($(this).text()).removeClass('active');
                $this.val($(this).attr('rel'));
                $list.removeClass('active');
            });
        });
    }

    //animate header logo
    scrollShow('.header .logo');
    $(window).scroll(function() {
        scrollShow('.header .logo');
    })

    //next section function
    $('#next-section').click( function(){
        $('body').animate({
            scrollTop: $('.products').offset().top
        }, 2000)
    })

});

function heroPoint(pointID){
    $('.nav__item.is-active').not(pointID).removeClass('is-active');
    $(pointID).addClass('is-active');
};

function headerFunction() {
    if ($(window).scrollTop() > 0) {
        $('.header').addClass('is-active');
    } else { $('.header').removeClass('is-active'); }
};

function animateGoToAnchor(section) {
    event.stopImmediatePropagation();
    $('body').animate({
        scrollTop: section
    }, 2000)
};

function checkPointHero() {
    var home = $('.hero').offset().top,
        product = $('.products').offset().top,
        about = $('.about').offset().top;
    var pointWindow = $(window).scrollTop() + $(window).outerHeight();
    if(pointWindow >= about) {
        heroPoint('.about-anchor')
    } else if(pointWindow >= product) {
        heroPoint('.product-anchor')
    } else {
        heroPoint('.home-anchor')
    }
};
;$(document).ready(function() {
    $(window).scroll(function() {
        scrollShow('.about .product__letter');
        scrollShow('.about .product__name');
    })
})
;;$(document).ready(function() {
    $(window).scroll(function() {
        scrollShow('.m-furniture .product__letter');
        scrollShow('.m-furniture .product__name');
        scrollShow('.m-furniture .common-paragraph__title');
        scrollShow('.m-furniture .common-paragraph__text');
        scrollShow('.m-decor .product__name');
        scrollShow('.m-decor .product__letter');
        scrollShow('.m-decor .common-paragraph__title');
        scrollShow('.m-decor .common-paragraph__text');
    })
})
;$(document).ready(function() {
    scrollShow('.video .common-paragraph__title');
    scrollShow('.video .common-paragraph__text');
    $(window).scroll(function() {
        scrollShow('.video .common-paragraph__title');
        scrollShow('.video .common-paragraph__text');
    })
})
;$(document).ready( function(){
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
;$(document).ready( function() {
    $('.share__button').click( function() {
        $('.share__list').toggleClass('is-active');
    });
})
