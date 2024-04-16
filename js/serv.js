$(function () {
    if ($(".gallery-wrapper").length) {
        var galleryThumbs = new Swiper(
            ".gallery-wrapper .content .gallery.thumb .swiper-container",
            {
                speed: 900,
                effect: "slide",
                spaceBetween: 12,
                grabCursor: false,
                simulateTouch: true,
                loop: false,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                navigation: {
                    nextEl:
                        ".gallery-wrapper .content .gallery.thumb .swiper-next-button",
                    prevEl:
                        ".gallery-wrapper .content .gallery.thumb .swiper-prev-button",
                },
                breakpoints: {
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    414: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 7,
                        spaceBetween: 10,
                    },
                },
                on: {
                    init: function () {
                        let containerThumbWidth = $(
                            ".gallery-wrapper .content .gallery.thumb"
                        ).outerWidth();

                        let totalThumbWidth = 0;

                        $(
                            ".gallery.thumb .swiper-container .swiper-wrapper .swiper-slide"
                        ).each(function () {
                            let thumbWidth = $(this).outerWidth();
                            totalThumbWidth += thumbWidth;
                        });

                        if (totalThumbWidth < containerThumbWidth) {
                            $(
                                ".gallery.thumb .swiper-next-button, .gallery.thumb .swiper-prev-button"
                            ).addClass("hide");
                        } else {
                            $(
                                ".gallery.thumb .swiper-next-button, .gallery.thumb .swiper-prev-button"
                            ).removeClass("hide");
                        }
                    },
                },
            }
        );

        var galleryFull = new Swiper(
            ".gallery-wrapper .content .gallery.full .swiper-container",
            {
                speed: 900,
                effect: "slide",
                slidesPerView: 3,
                spaceBetween: 0,
                centeredSlides: true,
                autoplay: {
                    delay: 7000,
                    disableOnInteraction: false,
                    stopOnLastSlide: false,
                },
                keyboard: {
                    enabled: true,
                },
                grabCursor: false,
                simulateTouch: false,
                loop: true,
                navigation: {
                    nextEl: ".gallery-wrapper .content .gallery.full .swiper-next-button",
                    prevEl: ".gallery-wrapper .content .gallery.full .swiper-prev-button",
                },
                thumbs: {
                    swiper: galleryThumbs,
                },
                on: {
                    slideChangeTransitionStart: function () {
                        $(
                            ".gallery-wrapper .content .gallery.full .swiper-slide .overlay"
                        ).removeClass("show");
                    },
                    slideChangeTransitionEnd: function () {
                        $(
                            ".gallery-wrapper .content .gallery.full .swiper-slide-active .overlay"
                        ).addClass("show");
                    },
                },
            }
        );
    }
});

$(window).on("load", function () {
    setTimeout(function () {
        $(".loader").fadeOut();
    }, 1000);
});





$(function () {
    if ($(".gallery-wrapper").length) {
        var galleryThumbs = new Swiper(
            ".gallery-wrapper .content .gallery.thumb .swiper-container",
            {
                speed: 900,
                effect: "slide",
                spaceBetween: 12,
                grabCursor: false,
                simulateTouch: true,
                loop: false,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                navigation: {
                    nextEl: ".gallery-wrapper .content .gallery.thumb .swiper-next-button",
                    prevEl: ".gallery-wrapper .content .gallery.thumb .swiper-prev-button",
                },
                breakpoints: {
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    414: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 7,
                        spaceBetween: 10,
                    },
                },
                on: {
                    init: function () {
                        let containerThumbWidth = $(".gallery-wrapper .content .gallery.thumb").outerWidth();
                        let totalThumbWidth = 0;

                        $(".gallery.thumb .swiper-container .swiper-wrapper .swiper-slide").each(function () {
                            let thumbWidth = $(this).outerWidth();
                            totalThumbWidth += thumbWidth;
                        });

                        if (totalThumbWidth < containerThumbWidth) {
                            $(".gallery.thumb .swiper-next-button, .gallery.thumb .swiper-prev-button").addClass("hide");
                        } else {
                            $(".gallery.thumb .swiper-next-button, .gallery.thumb .swiper-prev-button").removeClass("hide");
                        }
                    },
                },
            }
        );

        var galleryFull = new Swiper(
            ".gallery-wrapper .content .gallery.full .swiper-container",
            {
                speed: 900,
                effect: "slide",
                slidesPerView: 3,
                spaceBetween: 0,
                centeredSlides: true,
                autoplay: {
                    delay: 7000,
                    disableOnInteraction: false,
                    stopOnLastSlide: false,
                },
                keyboard: {
                    enabled: true,
                },
                grabCursor: false,
                simulateTouch: false,
                loop: true,
                navigation: {
                    nextEl: ".gallery-wrapper .content .gallery.full .swiper-next-button",
                    prevEl: ".gallery-wrapper .content .gallery.full .swiper-prev-button",
                },
                thumbs: {
                    swiper: galleryThumbs,
                },
                on: {
                    slideChangeTransitionStart: function () {
                        $(".gallery-wrapper .content .gallery.full .swiper-slide .overlay").removeClass("show");
                    },
                    slideChangeTransitionEnd: function () {
                        $(".gallery-wrapper .content .gallery.full .swiper-slide-active .overlay").addClass("show");
                    },
                },
            }
        );

        // Function to pause autoplay
        function pauseAutoplay() {
            galleryFull.autoplay.stop();
        }

        // Function to resume autoplay after 10 seconds
        function resumeAutoplay() {
            setTimeout(function () {
                galleryFull.autoplay.start();
            }, 10000); // 10 seconds delay
        }

        // Event handlers for navigation buttons
        $(".gallery.full .swiper-next-button, .gallery.full .swiper-prev-button").on("click", function () {
            pauseAutoplay(); // Pause autoplay on button click
            resumeAutoplay(); // Resume autoplay after 10 seconds
        });
    }

    // Loader fadeout on window load
    $(window).on("load", function () {
        setTimeout(function () {
            $(".loader").fadeOut();
        }, 1000);
    });
});

