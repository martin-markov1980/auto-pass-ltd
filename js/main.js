(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });

    $.each($('#navbar').find('li'), function() {
        $(this).toggleClass('active',
          window.location.pathname.indexOf($(this).find('a').attr('href')) > -1);
    });

})(jQuery);

// let url = window.location.href;
// url = url.split('.html')[0];
// //url = url.substring(0, url.lastIndexOf("."));
// window.history.replaceState( null, null, url );

// const menuItems = document.querySelectorAll('.nav-item');
// console.log(menuItems);
// menuItems.forEach(item => {
//     item.addEventListener('click', function() {
//         // Remove the active class from all menu items
//         menuItems.forEach(item => {
//             item.classList.remove('active');
//             console.log('remove')
//         });
//
//         // Add the active class to the clicked menu item
//         this.classList.add('active');
//     });
// });

// document.addEventListener("DOMContentLoaded", () => {
//     console.log('Doc Ready!')
//     const menuItems = document.querySelectorAll('.nav-item');
//     console.log(menuItems);
//     menuItems.forEach(item => {
//         item.addEventListener('click', function(e) {
//             menuItems.forEach(item => {
//            item.classList.remove('active');
//              console.log('remove')
//          });
//             this.classList.add('active');
//         });
//     });
// });



