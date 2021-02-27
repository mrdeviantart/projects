//--------------------------------------------------------------
// Header fixed ----------
//--------------------------------------------------------------

const header = $(".header");
const headerHeight = header.innerHeight();
const main = $(".main");
let scrollOffset = $(window).scrollTop();

checkScroll(scrollOffset);

$(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
});

function checkScroll(scrollOffset) {
    if (scrollOffset >= headerHeight) {
        header.addClass("header--fixed");
        main.addClass("main-active");
    } else if (scrollOffset === 0) {
        header.removeClass("header--fixed");
        main.removeClass("main-active");
    }

}