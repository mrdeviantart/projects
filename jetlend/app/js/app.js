//--------------------------------------------------------------
// Burger menu
//--------------------------------------------------------------

const burgerBtn = $(".burger-btn");
const burgerMenu = $(".burger-menu");
const burgerNav = $(".burger-nav");

burgerBtn.on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("burger-btn-active");
    burgerMenu.toggleClass("burger-menu-active");
    burgerNav.toggleClass("burger-nav-active");
})

