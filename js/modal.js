const linkLogin = document.querySelector(".user_nav-link");
const popup = document.querySelector(".modal_login");
const closeLogin = document.querySelector(".modal_login-close");
const login = document.querySelector("[name=login]");
const buttonTrailer = document.querySelector(".top_button-link");
const trailerMain = document.querySelector(".video_trailer");
const overlay = document.querySelector(".modal_overlay");
const closeVideo = document.querySelector(".modal_video-close");
const videoButton = document.querySelector("[type=button]");


buttonTrailer.addEventListener("click", function (evt) {
    evt.preventDefault();
    trailerMain.classList.add("video_trailer-show");
    overlay.classList.add("overlay_show");
    videoButton.focus();
});

closeVideo.addEventListener("click",  function (evt) {
    evt.preventDefault();
    trailerMain.classList.remove("video_trailer-show");
    overlay.classList.remove("overlay_show");
    console.log(player);
    player.stopVideo();
});

linkLogin.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal_login-show");
    overlay.classList.add("overlay_show");
    login.focus();
});

closeLogin.addEventListener("click", function (evt) {
    evt.preventDefault();
    trailerMain.classList.remove("video_trailer-show");
    popup.classList.remove("modal_login-show");
    overlay.classList.remove("overlay_show");
});

let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '400',
        width: '640',
        videoId: 'ndl1W4ltcmg',
        events: {
            // 'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}


// function onPlayerReady(event) {
//     event.target.playVideo();
// }

let done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}
// function stopVideo() {
//     player.stopVideo();
// }

