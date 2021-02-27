//--------------------------------------------------------------
// Burger menu ------------
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