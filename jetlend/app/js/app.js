//--------------------------------------------------------------
// Burger menu
//--------------------------------------------------------------

const burgerBtn = $(".burger-btn");
const burgerMenu = $(".burger-menu");
const burgerNav = $(".burger-nav");

burgerBtn.on("click", function (e) {
    e.preventDefault();
    // e.stopPropagation();
    $(this).toggleClass("burger-btn-active");
    burgerMenu.toggleClass("burger-menu-active");
    burgerNav.toggleClass("burger-nav-active");
});

$(document).on("click", function (e) {
    if (!burgerMenu.is(e.target) && burgerMenu.has(e.target).length === 0 && !burgerBtn.is(e.target) && burgerBtn.has(e.target).length === 0) {
        burgerBtn.removeClass("burger-btn-active")
        burgerMenu.removeClass("burger-menu-active");
        burgerNav.removeClass("burger-nav-active");
    }
});



//--------------------------------------------------------------
// Header fixed
//--------------------------------------------------------------

const header = $(".header");
const headerHeight = $(".header").innerHeight();
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

//--------------------------------------------------------------
// form
//--------------------------------------------------------------

//----------------------watching slider position----------------
const sumSlider = $("#sumSlider");
let sumFill = $(".sum-fill");
const termSlider = $("#termSlider");
let termFill = $(".term-fill");

function setSumBar() {
    sumFill.css("width", sumSlider.val()*(100/9500000) + "%");
}
sumSlider.on("input", setSumBar);
setSumBar();

function setTermBar() {
    termFill.css("width", termSlider.val()*(100/11) + "%");
}
termSlider.on("input", setTermBar);
setTermBar();