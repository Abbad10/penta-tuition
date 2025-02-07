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
    document.getElementById("techCourseButton").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor action

    // Get the Tech Courses dropdown element
    let techCoursesDropdown = document.getElementById("techCoursesDropdown");

    // Check if the dropdown is already open
    let isDropdownOpen = techCoursesDropdown.classList.contains("show");

    // Close all other dropdowns first
    document.querySelectorAll(".dropdown-menu.show").forEach((dropdown) => {
        dropdown.classList.remove("show");
    });

    // Open the Tech Courses dropdown if it was not already open
    if (!isDropdownOpen) {
        techCoursesDropdown.classList.add("show");
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

    // JavaScript for Tab Functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and panes
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));

        // Add active class to clicked button and corresponding pane
        button.classList.add('active');
        const targetPane = document.getElementById(button.getAttribute('data-target'));
        targetPane.classList.add('active');
    });
});

    // Function to update fee details based on region
function updateFees(region) {
  document.getElementById("indian-fees").classList.add("hidden");
  document.getElementById("international-fees").classList.add("hidden");

  document.getElementById(`${region}-fees`).classList.remove("hidden");

  document.getElementById("indian-fees-btn").classList.remove("active");
  document.getElementById("international-fees-btn").classList.remove("active");

  document.getElementById(`${region}-fees-btn`).classList.add("active");
}

// Event Listeners for Region Selection
document.getElementById("indian-fees-btn").addEventListener("click", () => updateFees("indian"));
document.getElementById("international-fees-btn").addEventListener("click", () => updateFees("international"));



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

