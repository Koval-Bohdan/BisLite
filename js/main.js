$(function(){

    $('.slider__inner').slick({
        arrows: false,
        dots: true,
        fade: true,
    });

    $('.works__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow slick-prev" type="button" ><img src="images/slider/slide-left.svg" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next" type="button"><img src="images/slider/slide-right.svg" alt=""></button>',
    });

});