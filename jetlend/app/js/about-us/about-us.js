const video = document.getElementById("video");
const videoControls = document.getElementById("video-controls");
const bigPlayButton = document.getElementById("big-play-button");
const bigPlayButtonIcon = document.querySelector("#big-play-button svg use");
const playButton = document.getElementById("play-pause");
const playButtonIcon = document.querySelector("#play-pause svg use");
const progressBar = document.getElementById("video-progress-bar");
const seek = document.getElementById("seek");
const seekTooltip = document.getElementById("seek-tooltip");
const timeElapsed = document.getElementById("video-time-elapsed");
const duration1 = document.getElementById("video-duration");
//------------------------------------------------------------------------//

//check if user has JS enabled, if yes -> show custom, if no -> show native controls
const videoWorks = !!document.createElement("video").canPlayType;
if (videoWorks) {
    video.controls = false;
    videoControls.classList.remove("hidden");
}
//-------------------------

//play and pause ------------------------------------------------
function togglePlay() {
    if (video.paused || video.ended) {
        video.play();
        bigPlayButton.style.opacity = "0";
        bigPlayButton.style.visibility = "hidden";
        bigPlayButton.style.width = "90px";
        bigPlayButton.style.height = "90px";
        bigPlayButtonIcon.setAttribute("xlink:href", "#pause");
        playButtonIcon.setAttribute("xlink:href", "#pause");
    } else {
        video.pause();
        bigPlayButton.style.opacity = "1";
        bigPlayButton.style.visibility = "visible";
        bigPlayButton.style.width = "60px";
        bigPlayButton.style.height = "60px";
        bigPlayButtonIcon.setAttribute("xlink:href", "#play");
        playButtonIcon.setAttribute("xlink:href", "#play");
    }
}

bigPlayButton.addEventListener("click", togglePlay);
playButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
//---------------------------

//update time----------------------------------------------------
function formatTime(timeInSeconds) {
    const result = new Date(timeInSeconds * 1000).toISOString().substr(11,8);

    return {
        minutes: result.substr(3,2),
        seconds: result.substr(6,2),
    };
}

function initializeTime() {
    const videoDuration = Math.round(video.duration);
    seek.setAttribute("max", `${videoDuration}`);
    progressBar.setAttribute("max", `${videoDuration}`);
    const time = formatTime(videoDuration);
    duration1.innerText = `${time.minutes}:${time.seconds}`;
    duration1.setAttribute("datetime", `${time.minutes}m ${time.seconds}s`);
}

function updateTimeElapsed() {
    const time = formatTime(Math.round(video.currentTime));
    timeElapsed.innerText = `${time.minutes}:${time.seconds}`;
    timeElapsed.setAttribute("datetime", `${time.minutes}m ${time.seconds}s`);
}

 initializeTime();
video.addEventListener("timeupdate", updateTimeElapsed);
//-----------------------

// update progress duration bar ---------------------------
// window.addEventListener("load", function () {
//     const videoWrapperWidth = document.getElementById("video-wrapper").offsetWidth;
//     console.log(videoWrapperWidth);
// });
// window.addEventListener("resize", function () {
//     const videoWrapperWidth = document.getElementById("video-wrapper").offsetWidth;
//     console.log(videoWrapperWidth);
// });

function updateProgress() {
    seek.value = Math.round(video.currentTime);
    progressBar.value = Math.round(video.currentTime);
}

function updateSeekTooltip(event) {
    const skipTo = Math.round((event.offsetX / event.target.clientWidth) * parseInt(event.target.getAttribute("max"), 10));
    seek.setAttribute("data-seek", `${skipTo}`);
    const t = formatTime(skipTo);
    seekTooltip.textContent = `${t.minutes}:${t.seconds}`;
    const rect = video.getBoundingClientRect();
    if (event.pageX < 30) {
        seekTooltip.style.left = "10px";
    } else if (event.pageX >= 930) {
        seekTooltip.style.left = "910px"
    } else {
        seekTooltip.style.left = `calc(${event.pageX - rect.left}px - 18px)`;
    }

    // console.log(event.pageX);
    // console.log(rect.left);
}

function skipAhead(event) {
    const skipTo = event.target.dataset.seek ? event.target.dataset.seek : event.target.value;
    video.currentTime = skipTo;
    progressBar.value = skipTo
    seek.value = skipTo;
}

video.addEventListener("timeupdate", updateProgress);
seek.addEventListener("mousemove", updateSeekTooltip);
seek.addEventListener("input", skipAhead);
//------------------

//volume update -------------------------------------------------
const volumeButton = document.querySelector("#volume-mute");
const volumeIcon = document.querySelector("#volume-mute svg use");
const volume = document.getElementById("volume");
const volumeProgressBar = document.getElementById("volume-progress-bar");

function updateVolume() {
    if (video.muted) {
        video.muted = false;
    }

    video.volume = volume.value;
    volumeProgressBar.value = volume.value;
}

function updateVolumeIcon() {
    if (video.muted || video.volume === 0) {
        volumeIcon.setAttribute("xlink:href", "#mute");
    } else if (video.volume > 0 && video.volume <= 0.5) {
        volumeIcon.setAttribute("xlink:href", "#volume-min");
    } else {
        volumeIcon.setAttribute("xlink:href", "#volume-max");
    }
}

function muteVideo() {
    video.muted = !video.muted;

    if (video.muted) {
        volume.setAttribute("data-volume", volume.value);
        volume.value = 0;
        volumeProgressBar.value = 0;
    } else {
        volume.value = volume.dataset.volume;
        volumeProgressBar.value = volume.value;
    }
}

volume.addEventListener("input", updateVolume);
volumeButton.addEventListener("click", muteVideo);
video.addEventListener("volumechange", updateVolumeIcon);
//---------------------------
