//--------------------------------------------------------------
// Burger menu ------------
//-------------------------------------------------------------
const burgerBtn = $(".burger-btn");

if (burgerBtn) {

    const menu = $(".menu");
    const body = $("body");

    burgerBtn.on("click", function (e) {
        e.preventDefault();
        body.toggleClass("show-menu");
    });

    $(document).on("click", function (e) {
        if (!menu.is(e.target) && menu.has(e.target).length === 0 && !burgerBtn.is(e.target) && burgerBtn.has(e.target).length === 0) {
            body.removeClass("show-menu");
        }
    });

    const navLink = document.querySelectorAll(".nav-link");
    const navBtn = document.querySelector(".nav-btn");

    const menuArr = [...navLink, navBtn];

    document.querySelector(".burger-btn").addEventListener("click", function () {
        if (document.getElementById("body").classList.contains("show-menu")) {
            function animateLinks(i) {
                menuArr[i].classList.add("active");
                if (i < menuArr.length - 1) {
                    setTimeout(animateLinks, 30, ++i);
                }
            }

            setTimeout(animateLinks, 300, 0);
        } else {
            for (let i = 0; i < menuArr.length; i++) {
                menuArr[i].classList.remove("active");
            }
        }
    });
}




