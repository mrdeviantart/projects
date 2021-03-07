let
    images = document.images,
    videos = document.querySelector("video"),
    imgVid = [...images, videos],
    imgVidTotalCount = imgVid.length,
    imgVidLoadedCount = 0,
    preloader = document.getElementById("preloader"),
    percentage = document.getElementById("percentage"),
    loadProgress = document.getElementById("load-progress");
console.log(loadProgress);

// for (let i = 0; i < imgVidTotalCount; i++) {
//     let image_clone = new Image();
//     image_clone.onload = imageLoaded;
//     image_clone.onerror = imageLoaded;
//     image_clone.src = imgVid[i].src;
// }
//
// function imageLoaded() {
//     imgVidLoadedCount++;
//     let percentageCount = (((100 / imgVidTotalCount) * imgVidLoadedCount) << 0);
//     // let loadPercent = 440 - (440 * +percentageCount) / 100;
//     // loadProgress.style.strokeDashoffset = `${loadPercent}`;
//     // percentage.innerHTML = percentageCount + "%";
//
//     if (imgVidLoadedCount >= imgVidTotalCount) {
//         setTimeout(function () {
//             if (!preloader.classList.contains("done")) {
//                 preloader.classList.add("done");
//             }
//         }, 1000);
//     }
// }

function showPercent(num) {
    if (num < 20) {
        setTimeout(showPercent, 25, ++num);
    } else if (num >=20 && num < 88) {
        setTimeout(showPercent, 20, num+=2);
    } else if (num >= 88 && num < 96) {
        setTimeout(showPercent, 180, ++num);
    } else if (num >= 96 && num < 100) {
        setTimeout(showPercent, 25, ++num);
    } else if (num === 100) {
        setTimeout(() => {
            if (!preloader.classList.contains("done")) {
                preloader.classList.add("done");
            }
        }, 100);
    }
    percentage.innerHTML = num + "%";
    let loadPercent = 440 - (440 * num) / 100;
    loadProgress.style.strokeDashoffset = `${loadPercent}`;
}

setTimeout(showPercent, 10, 0);