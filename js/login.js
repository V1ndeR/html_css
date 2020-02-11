const linkLogin = document.querySelector(".user_nav-link");
const popup = document.querySelector(".modal_login");
const closeLogin = document.querySelector(".modal_login-close");
const login = document.querySelector("[name=login]");
const buttonTrailer = document.querySelector(".top_button-link");
const trailerMain = document.querySelector(".video_trailer");
const overlay = document.querySelector(".modal_overlay");
const closeVideo = document.querySelector(".modal_video-close")

buttonTrailer.addEventListener("click", function (evt) {
    evt.preventDefault();
    trailerMain.classList.add("video_trailer-show");
    overlay.classList.add("overlay_show");
});

closeVideo.addEventListener("click", function (evt) {
    evt.preventDefault();
    trailerMain.classList.remove("video_trailer-show");
    overlay.classList.remove("overlay_show");
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