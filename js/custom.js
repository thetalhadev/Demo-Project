$(function(){
    //Sticky Header
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        
        if(scrolling > 200){
            $('.navbar').addClass('sticky_header');
        }
        else {
             $('.navbar').removeClass('sticky_header');
        }
        });  
    //Sticky Header

    //Banner Slider
    $('.banner_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        arrows: false,
    });
    //Banner slider

    //Service Slider
    $('.service_slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    });
    //Service Slider

    //Portfolio Mixitup
    var containerEl = document.querySelector('.portfolio_mixitup');

    var mixer = mixitup(containerEl);
    //portfolio Mixitup

    //Venobox
    new VenoBox({
        selector: '.my-video-links',
    });
    //Venobox

    //CounterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    //CounterUp

    //Blog Slider
    $('.blog_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    });
    //Blog Slider

    //Client Slider
    $('.client_slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    });
    //Client Slider

    //==== Back-to-top button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    //==== Animate the scroll to top
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1000);
    });

    });