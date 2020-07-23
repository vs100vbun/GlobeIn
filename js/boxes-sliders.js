$(document).ready(function(){
    $('.boxes__slider').slick({
        dots: false,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });

});

$(document).ready(function(){
    $('.boxes__items').slick({
        dots: false,
        arrows: false,
        speed: 300,
        slidesToShow: 3,
    });
}); 