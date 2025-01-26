(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();


    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


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


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });

    // Number Counter Animation with Symbols
var counterAnimated = false; // Flag to prevent repeated animations
$(window).scroll(function () {
    var statisticsSection = $("#statistics");
    if (statisticsSection.length > 0) {
        var sectionOffset = statisticsSection.offset().top - window.innerHeight;
        if (!counterAnimated && $(window).scrollTop() > sectionOffset) {
            $(".stat-number").each(function () {
                var $this = $(this);
                var targetText = $this.text(); // Original text with symbols
                var targetNumber = parseFloat(targetText.replace(/[^0-9.]/g, '')); // Extract the numeric part
                var suffix = targetText.replace(/[0-9.]/g, ''); // Extract the symbol (e.g., +, K)

                if (!isNaN(targetNumber)) { // Ensure it's a valid number
                    $({ Counter: 0 }).animate(
                        { Counter: targetNumber },
                        {
                            duration: 2000,
                            easing: "swing",
                            step: function (now) {
                                $this.text(Math.ceil(now).toLocaleString() + suffix); // Add back the suffix
                            },
                        }
                    );
                }
            });
            counterAnimated = true; // Prevent animation from running again
        }
    }
});



    
                

    
})(jQuery);

