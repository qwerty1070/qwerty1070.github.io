$(document).ready(function () {
    $('.feedback-slider').slick({
        prevArrow: `<button typr="button" class="feedback-slider-btn feedback-prev-btn"><img src="img/svg/left-arrow.png"></button>`,
        nextArrow: `<button typr="button" class="feedback-slider-btn feedback-next-btn"><img src="img/svg/right-arrow.svg"></button>`
    });

    $('.feature-slayder').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: '<button class="prev arrow"></button>',
                    nextArrow: '<button class="next arrow"></button>'
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: '<button class="prev arrow"></button>',
                    nextArrow: '<button class="next arrow"></button>'
                }
            }
        ]
    });

});
$('.carde').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('card_active');
 });

    $('.menu').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu_active');
  $('.menu-nav').toggleClass('menu-nav_active');
    $('body').toggleClass('body_active');
    $('.indo').toggleClass('indo_active');
 });    
    $('.indo').on('click', function(e) {
        e.preventDefault;
        $('body').toggleClass('bodytwo_active');
    });