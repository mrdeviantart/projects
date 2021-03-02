const playOrPauseIcon = $("#play-pause svg use");
const video = $("#video");
const bigPlayButton = $(".big-play-button");
const playButton = $("#play-pause");
const videoWrapper = $(".video-wrapper");
const videoControls = $(".video-controls");
const videoControlsPosition = "calc(100% - 6px)";
const progress = document.querySelector(".progress-bar");
const progressBar = document.querySelector(".progress-bar-actual");

//play and pause ------------------------------------------------

function togglePlayPause() {
    bigPlayButton.toggleClass("active");
    if (bigPlayButton.hasClass("active")) {
        bigPlayButton.css("opacity","0");
        videoWrapper.on("mouseover", function () {
            videoControls.css("transform","translateY(0)");
        });
        videoWrapper.on("mouseout", function () {
            videoControls.css("transform",`translateY(${videoControlsPosition})`);
        });
        bigPlayButton.css("height","calc(100% - 56px)");
    } else {
        bigPlayButton.css("opacity","1");
        videoWrapper.on("mouseover", function () {
            videoControls.css("transform",`translateY(${videoControlsPosition})`);
        });
        bigPlayButton.css("height","100%");
    }

    playButton.toggleClass("active");
    if (playButton.hasClass("active")) {
        playOrPauseIcon.attr("xlink:href", "#pause");
        video.trigger("play");
    } else {
        playOrPauseIcon.attr("xlink:href", "#play");
        video.trigger("pause");
        bigPlayButton.removeClass("active");
        bigPlayButton.css("opacity","1");
        videoWrapper.on("mouseout", function () {
            videoControls.css("transform","translateY(100%)");
        });
        bigPlayButton.css("height","100%");
    }
}

playButton.on("click", function () {
    togglePlayPause();
});
bigPlayButton.on("click", function () {
    togglePlayPause();
});

document.getElementById("video").addEventListener("timeupdate", function () {
    let progressBarPosition = (document.getElementById("video").currentTime / document.getElementById("video").duration) * 100;
    progressBar.style.width = progressBarPosition + "%";
})

progress.addEventListener("click", function (e) {
    let pos = (e.pageX - this.offsetLeft) / this.offsetWidth;
    document.getElementById("video").currentTime = pos * document.getElementById("video").duration;
});

//volume --------------------------------------------------

const volumeButton = $(".video-buttons > .volume > #volume-mute");
const volumeIcon = $("#volume-mute svg use");
const volumeProgressBarActual = $(".volume-progress-bar-actual");
const volumeProgressBar = document.querySelector(".volume-progress-bar");

volumeButton.on("click", function () {
    volumeButton.toggleClass("active");
    if ($(this).hasClass("active")) {
        volumeIcon.attr("xlink:href","#mute");
        volumeProgressBarActual.css("width","0");
    } else {
        volumeIcon.attr("xlink:href","#volume");
        volumeProgressBarActual.css("width","100%");
    }
});

document.getElementById("volume-mute").addEventListener("click", function () {
    document.getElementById("video").muted = !document.getElementById("video").muted;
});

let currentVolume = document.getElementById("video").volume;

volumeProgressBar.addEventListener("click", function (e) {
    let volumePos = +((e.pageX - this.offsetLeft) / this.offsetWidth).toFixed(1);
    document.querySelector(".volume-progress-bar-actual").style.width = (volumePos * 100) + "%";
    if (volumePos === 0) {
        document.querySelector("#volume-mute svg use").setAttribute("xlink:href", "#mute");
    } else {
        document.querySelector("#volume-mute svg use").setAttribute("xlink:href", "#volume");
    }
});