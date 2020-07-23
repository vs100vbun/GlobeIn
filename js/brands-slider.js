$(document).ready(function(){
    $('.brands__slider').slick({
        dots: true,
        dotsClass: 'brands__dots',
        arrows: false,
        draggable: false,
        slidesToShow: 4,
        responsive: [
            {
              breakpoint: 1920,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                draggable: false,
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                draggable: false,
              }
            },
            {
              breakpoint: 759,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                draggable: false,
              }
            }
          ]
    });
}); 