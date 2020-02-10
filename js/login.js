const linkLogin = document.querySelector(".user_nav-link");
const popup = document.querySelector(".modal_login");
const closeLogin = document.querySelector(".modal_login-close");
const login = document.querySelector("[name=login]");

linkLogin.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal_login-show");
    login.focus();
});

closeLogin.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal_login-show");
});