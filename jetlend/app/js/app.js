//for including .js files
function include(url) {
    let script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

include("js/img/img.js"); // img ---> inline svg

include("js/header/burger.js"); // include burger menu

//include("js/header/header-fixed.js"); // include header-fixed

include("js/form/form.js"); // include form

include("js/about-us/about-us.js"); // video player

