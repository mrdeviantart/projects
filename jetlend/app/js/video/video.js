const video = document.getElementById("video");
const videoControls = document.getElementById("video-controls");
const playButton = document.getElementById("play");
const playbackIcons = document.querySelectorAll(".playback-icons use");
const playIcon = document.querySelector(".play-icon");
const pauseIcon = document.querySelector(".pause-icon");

// hiding native controls and showing custom
const videoWorks = !!document.createElement("video").canPlayType;
if (videoWorks) {
    video.controls = false;
    videoControls.classList.remove("hidden");
}  // end------

// play and pause video by clicking on playButton
function togglePlay() {
    if (video.paused || video.ended) {
        video.play();
    } else {
        video.pause();
    }
    console.log('hello');
}
function updatePlayButton() {
    playbackIcons.forEach(icon => icon.classList.toggle("hidden"));

    if (video.paused) {
        playButton.setAttribute("data-title", "Play (k)");
    } else {
        playButton.setAttribute("data-title", "Pause (k)");
    }
}

playButton.addEventListener("click", togglePlay);
video.addEventListener("play", updatePlayButton);
video.addEventListener("pause", updatePlayButton);
// end------