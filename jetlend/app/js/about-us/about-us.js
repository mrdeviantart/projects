const playOrPauseIcon = $("#play-pause svg use");
const video = $("#video");
const bigPlayButton = $(".big-play-button");
const playButton = $("#play-pause");
const videoWrapper = $(".video-wrapper");
const videoControls = $(".video-controls");
const videoControlsPosition = "calc(100% - 6px)";
const progressBar = document.querySelector(".progress-bar-actual");

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
    } else {
        bigPlayButton.css("opacity","1");
        videoWrapper.on("mouseover", function () {
            videoControls.css("transform",`translateY(${videoControlsPosition})`);
        });
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
            videoControls.css("transform","translateY(100%)translateY(100%)");
        });
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