"use strict";

//for including .js files
function include(url) {
    let script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

include("js/preloader/preloader.js"); // preloader js

include("js/img/img.js"); // img ---> inline svg

include("js/header/burger.js"); // include burger menu

include("js/header/header-fixed.js"); // include header-fixed

include("js/intro/intro.js"); // include intro slider content

include("js/form/form.js"); // include form and initializing form sliders

include("js/about-us/about-us.js"); // video player

include("js/sign-form/sign-form.js"); // sign form

