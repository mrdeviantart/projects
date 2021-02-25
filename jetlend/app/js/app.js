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

//--------------------------------------------------------------
// form
//--------------------------------------------------------------

//---------------------------------------sum slider

const sumInput = $("#sum");
const sumSlider = $("#sumSlider");
const sumFill = $(".sum-fill");
const sumMaxValue = sumSlider.attr("max");
const sumMinActualValue = sumInput.attr("min");
const sumMinValue = +sumSlider.attr("min") + +sumMinActualValue;
const sumStepValue = sumSlider.attr("step");

//watch input value and throw it to slider
function watchSumValue() {
    v = parseInt($(this).val());
    min = parseInt($(this).attr("min"));
    max = parseInt($(this).attr("max"));

    if (v < min) {
        $(this).val(min);
        sumSlider.attr("value", min - +sumStepValue);
        showSumCurrentValue();
        setSumBar();
    } else if (v > max) {
        $(this).val(max);
        sumSlider.attr("value", max - +sumStepValue);
        showSumCurrentValue();
        setSumBar();
    } else {
        sumSlider.attr("value", v - +sumStepValue);
        showSumCurrentValue();
        setSumBar();
    }
}
sumInput.on("change", watchSumValue);
//end watching

//watching slider current value
function showSumCurrentValue() {
    const sumCurrentValue = +sumSlider.val() + +sumMinValue;
    $(sumInput).attr("value", sumCurrentValue);
}
sumSlider.on("input", showSumCurrentValue);
showSumCurrentValue();
//end watching

//watching slider position
function setSumBar() {
    sumFill.css("width", sumSlider.val()*(100/sumMaxValue) + "%");
}
sumSlider.on("input", setSumBar);
setSumBar();
//end watching

//----------------------------------------------------------------------

//------------------------------------------term slider
const termInput = $("#term");
// const termInputValue = termInput.val();
const termSlider = $("#termSlider");
const termFill = $(".term-fill");
const termMaxValue = termSlider.attr("max");
const termMinValue = termSlider.attr("min");
const termStepValue = termSlider.attr("step");

//watch input value and throw it to slider
function watchTermValue() {
    v = parseInt($(this).val());
    min = parseInt($(this).attr("min"));
    max = parseInt($(this).attr("max"));

    if (v < min) {
        $(this).val(min);
        termSlider.attr("value", min - +termStepValue);
        showTermCurrentValue();
        setTermBar();
    } else if (v > max) {
        $(this).val(max);
        termSlider.attr("value", max - +termStepValue);
        showTermCurrentValue();
        setTermBar();
    } else {
        termSlider.attr("value", v - +termStepValue);
        showTermCurrentValue();
        setTermBar();
    }
}
termInput.on("change", watchTermValue);
//end watching

//watching slider current value
function showTermCurrentValue() {
    const termCurrentValue = +termSlider.val() + +termMinValue + +termStepValue;
    $(termInput).attr("value", termCurrentValue);
}
termSlider.on("input", showTermCurrentValue);
showTermCurrentValue();
//end watching

//watching slider position
function setTermBar() {
    termFill.css("width", termSlider.val()*(100/termMaxValue) + "%");
}
termSlider.on("input", setTermBar);
setTermBar();//end watching

//----------------------------------------------------------------------

// payment count = current sum value / current term value

