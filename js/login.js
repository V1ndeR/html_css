const linkLogin = document.querySelector(".user_nav-link");
const popup = document.querySelector(".modal_login");
const closeLogin = document.querySelector(".modal_login-close");
const login = document.querySelector("[name=login]");
const buttonTrailer = document.querySelector(".top_button-link");
const trailerMain = document.querySelector(".video_trailer");

buttonTrailer.addEventListener("click", function (evt) {
    evt.preventDefault();
    trailerMain.classList.add("video_trailer-show");
});

closeLogin.addEventListener("click", function (evt) {
    evt.preventDefault();
    trailerMain.classList.remove("video_trailer-show");
});

linkLogin.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal_login-show");
    login.focus();
});

closeLogin.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal_login-show");
});