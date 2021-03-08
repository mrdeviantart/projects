const introInfo = $(".intro-info");
const introNav = $(".intro-nav-wrapper");
const introInfoItem = $(".intro-info-item");
const arrow = $(".intro-nav-arrow");

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
        arrow.css("left", 23);
    } else if (nextSlide === 1) {
        arrow.css("left", 135);
    } else if (nextSlide === 2) {
        arrow.css("left", 258);
    }
});