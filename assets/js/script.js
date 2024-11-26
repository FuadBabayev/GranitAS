$(function () {
    "use strict";

    // Language
    let sidebar_language = $(".sidebar .sidebar_settings .language");
    if (sidebar_language) {
        sidebar_language.on("click", function () {
            let sidebar_language_item = $(".sidebar .sidebar_settings .language .dropdown_item");
            if(sidebar_language_item.hasClass("active")) {
                sidebar_language_item.removeClass("active");
            } else {
                sidebar_language_item.addClass("active");
            }
        });
    }
    // Language


    // Search
    let header_search_form = $("header .header_top .header_top_settings .search_bar_wrapper");
    let header_search_button = $("header .header_top .header_top_settings .search_bar_wrapper .search_bar .search_button");
    if(header_search_form) {
        header_search_button.on("click", function () {
           if(header_search_form.hasClass("active")) {
               header_search_form.removeClass("active");
           }else {
               header_search_form.addClass("active");
           }
        });
    }

    let sidebar_search_form = $(".sidebar .sidebar_settings .search_bar_wrapper");
    let sidebar_search_button = $(".sidebar .sidebar_settings .search_bar_wrapper .search_bar .search_button");
    if(sidebar_search_form) {
        sidebar_search_button.on("click", function () {
           if(sidebar_search_form.hasClass("active")) {
               sidebar_search_form.removeClass("active");
           }else {
               sidebar_search_form.addClass("active");
           }
        });
    }
    // Search

    // Sidebar
    let sidebar = $(".sidebar");
    let sidebarOpen = $(".hamburger");
    let sidebarClose = $(".sidebar .close_button");
    if (sidebar) {
        sidebarOpen.on("click", function () {
            if (sidebar.hasClass("active")) {
                sidebar.removeClass('active');
                $("body").removeClass('active');
            }
            else {
                $("body").addClass('active');
                sidebar.addClass('active');
            }
        });
        sidebarClose.on('click', function () {
            sidebar.removeClass('active');
            $("body").removeClass('active');
        });
    }
    // Sidebar


    // Login
    let login_section = $("section.login.sign");
    let login_buttons = $(".sign_buttons button.login");
    let login_buttons_close = $("section.login.sign .close_button");
    if (login_buttons) {
        login_buttons.each(function (index, item) {
            $(item).on("click", function () {
                login_section.addClass("active");
                sidebar.removeClass('active');
                $("body").addClass('active');
            });
        });
        login_buttons_close.on('click', function () {
            if (login_section.hasClass("active")) {
                login_section.removeClass("active");
                $("body").removeClass('active');
            }
        });
    }
    // Login


    // Register
    let register_section = $("section.login.register");
    let register_buttons = $(".sign_buttons button.registration");
    let register_buttons_close = $("section.login.register .close_button");
    if (register_buttons) {
        register_buttons.each(function (index, item) {
            $(item).on("click", function () {
                register_section.addClass('active');
                $("body").addClass('active');
                login_section.removeClass("active");
                sidebar.removeClass('active');
            });
        });
        register_buttons_close.on('click', function () {
            if (register_section.hasClass("active")) {
                register_section.removeClass("active");
                $("body").removeClass('active');
            }
        });
    }
    // Register


    // Window Click and KeyPress
    $(window).on('click', function (e) {
        if (sidebar.hasClass("active") && !$(e.target).closest(sidebar).length && !$(e.target).closest(sidebarOpen).length) {
            sidebar.removeClass("active");
            $("body").removeClass('active');
        }
        if (login_section.hasClass("active") && !$(e.target).closest(login_section).length && !$(e.target).closest(login_buttons).length && !$(e.target).closest("section.login.register form .register a").length) {
            login_section.removeClass("active");
            $("body").removeClass('active');
        }
        if (register_section.hasClass("active") && !$(e.target).closest(register_section).length && !$(e.target).closest(register_buttons).length && !$(e.target).closest("section.login.sign form .register a").length) {
            register_section.removeClass("active");
            $("body").removeClass('active');
        }
    });
    $(window).on('keydown', function (e) {
        if (e.key == "Escape") {
            if (sidebar.hasClass("active")) {
                sidebar.removeClass("active");
                $("body").removeClass('active');
            }
            if (login_section.hasClass("active")) {
                login_section.removeClass("active");
                $("body").removeClass('active');
            }
            if (register_section.hasClass("active")) {
                register_section.removeClass("active");
                $("body").removeClass('active');
            }
        }
    });
    // Window Click and KeyPress


    // Walk Around Login and Register Links
    let login_anchor = $("section.login.sign form .register a");
    let register_anchor = $("section.login.register form .register a");
    login_anchor.on('click', function () {
        login_section.removeClass('active');
        register_section.addClass('active');
    });
    register_anchor.on('click', function () {
        login_section.addClass('active');
        register_section.removeClass('active');
    });
    // Walk Around Login and Register Links



    // Show & Hide Password
    let togglePassword = $("section.login form .form_group .input .blind_button");
    togglePassword.each(function (index, item) {
        $(item).on("click", function () {
            let type = $(this).prev().attr("type");
            if (type == "password") {
                $(this).prev().attr("type", "text");
                $(this).children().attr("class", "fa-regular fa-eye");
            } else {
                $(this).prev().attr("type", "password");
                $(this).children().attr("class", "fa-regular fa-eye-slash");
            }
        });
    });
    // Show & Hide Password



    // Fixed Navbar
    let header = $("header");
    if (header) {
        let scrollPoint = 0;
        $(window).on("scroll", function () {
            if (window.scrollY > 200) {
                if (scrollPoint < window.scrollY) {
                    header.addClass("active");
                    if (sidebar.hasClass('active')) {
                        header.removeClass("active");
                    }
                } else {
                    header.removeClass("active");
                }

                scrollPoint = window.scrollY;
            } else {
                header.removeClass("active");
            }
        });
    }
    // Fixed Navbar


    // Back to Top Button
    let backToTopButton = $(".backToTopButton");
    if (backToTopButton) {
        let scrollPoint = 0;
        $(window).on("scroll", function () {
            let currentScroll = window.scrollY;
            if (window.scrollY > 200) {
                if (scrollPoint < currentScroll) {
                    backToTopButton.addClass("active");
                    if (sidebar.hasClass('active')) {
                        backToTopButton.removeClass("active");
                    }
                } else {
                    backToTopButton.removeClass("active");
                }
                scrollPoint = currentScroll;
            } else {
                backToTopButton.removeClass("active");
            }
        });
        backToTopButton.on("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    }
    // Back to Top Button


    // Testimonial Swiper
    let testimonialsSwiper = new Swiper("#testimonials .swipeTestimonials", {
        direction: "vertical",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        keyboard: {
            enabled: true,
        },
    });
    // Testimonial Swiper



    // Restaurants Details Swiper
    let restaurantsDetailsSwiper = new Swiper(".restoran_details_swiper .swipeRestoranDetails", {
        direction: "horizontal",
        slidesPerView: 2.7,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        keyboard: {
            enabled: true,
        },
        breakpoints: {
            992: {
                slidesPerView: 2.7,
            },
            768: {
                slidesPerView: 2.4,
            },
            576: {
                slidesPerView: 1.4,
            },
            0: {
                slidesPerView: 1,
            }
          },
    });
    // Restaurants Details Swiper
    
    

    // FancyBox
    Fancybox.bind('[data-fancybox="gallery"]', {
        dragToClose: false,
        closeButton: "top",
        Image: {
            zoom: false,
        },
        on: {
            initCarousel: (fancybox) => {
                const slide = fancybox.Carousel.slides[fancybox.Carousel.page];
                fancybox.$container.style.setProperty(
                    "--bg-image",
                    `url("${slide.$thumb.src}")`
                );
            },
            "Carousel.change": (fancybox, carousel, to, from) => {
                const slide = carousel.slides[to];
                fancybox.$container.style.setProperty(
                    "--bg-image",
                    `url("${slide.$thumb.src}")`
                );
            },
        },
    });
    // FancyBox




    // MobiScroll JavaScript Calendar
    mobiscroll.setOptions({
        locale: mobiscroll.localeRu,
        theme: 'ios',
        themeVariant: 'light'
    });
    let calendar = mobiscroll.datepicker('#booking_main_information #calendar', {
        controls: ['calendar'],                                             // Displays the calendar view
        select: 'range',                                                    // Enables range selection
        showRangeLabels: true,                                              // Shows labels for range start and end
        rangeHighlight: true,                                               // Highlights the range
        touchUi: true,                                                      // Optimized for touch devices
        display: 'inline',
        onChange: function (event, inst) {
            const range = inst.getVal();                                    // Retrieves the selected range
            if (range) {
                console.log("Start date:", range[0]);
                console.log("End date:", range[1]);
            } else {
                console.log("No range selected.");
            }
        }
    });
    // ! Range Between Days
    // var now = new Date();
    // var week = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6);
    // calendar.setVal([now, week]);

    // MobiScroll JavaScript Calendar
});