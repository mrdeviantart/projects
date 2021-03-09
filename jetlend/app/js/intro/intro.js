const introInfo = $(".intro-info");
const introNav = $(".intro-nav-wrapper");
const arrow = $(".intro-nav-arrow");

if (introInfo.length) {

    introInfo.slick({
        draggable: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        speed: 500,
        focusOnSelect: true,
        fade: true
    });

    introNav.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: introInfo,
        focusOnSelect: true,
        variableWidth: true
    });

    introInfo.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        if (nextSlide === 0) {
            $(".intro-nav-btn").removeClass("slick-current");
            $(".intro-nav-btn.first").addClass("slick-current");
        } else if (nextSlide === 1) {
            $(".intro-nav-btn").removeClass("slick-current");
            $(".intro-nav-btn.second").addClass("slick-current");
        } else if (nextSlide === 2) {
            $(".intro-nav-btn").removeClass("slick-current");
            $(".intro-nav-btn.third").addClass("slick-current");
        }
    });

    $(window).on("load resize", function () {
        if ($(this).width() <= 600) {
            introInfo.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
                if (nextSlide === 0) {
                    arrow.css("left", 13);
                } else if (nextSlide === 1) {
                    arrow.css("left", 108);
                } else if (nextSlide === 2) {
                    arrow.css("left", 211);
                }
            });
        } else {
            introInfo.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
                if (nextSlide === 0) {
                    arrow.css("left", 17);
                } else if (nextSlide === 1) {
                    arrow.css("left", 117);
                } else if (nextSlide === 2) {
                    arrow.css("left", 228);
                }
            });
        }
    })
}
