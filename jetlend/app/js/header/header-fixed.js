//--------------------------------------------------------------
// Header fixed ----------
//--------------------------------------------------------------

// const header = $(".header");
// const headerHeight = header.innerHeight();
// const main = $(".main");
// let scrollOffset = $(window).scrollTop();
//
// checkScroll(scrollOffset);
//
// $(window).on("scroll", function () {
//     scrollOffset = $(this).scrollTop();
//     checkScroll(scrollOffset);
//     console.log(scrollOffset);
// });
//
// function checkScroll(scrollOffset) {
//     if (scrollOffset >= headerHeight) {
//         header.addClass("header--fixed");
//         main.addClass("main-active");
//     } else if (scrollOffset === 0) {
//         header.removeClass("header--fixed");
//         main.removeClass("main-active");
//     }
//
// }

const header = $(".header");

if (header) {

    let scrollPrev = 0;

    $(window).on("scroll", function () {
        let scrolled = $(window).scrollTop();

        if (scrolled > 0 && scrolled > scrollPrev) {
            header.addClass("header--hidden");
        } else {
            header.removeClass("header--hidden");
        }
        scrollPrev = scrolled;
    });
}

