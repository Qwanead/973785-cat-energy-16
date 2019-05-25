document.querySelector(".page-footer__map").classList.remove("page-footer__map--no-js");
document.querySelector(".page-footer__google-map").classList.remove("page-footer__google-map--no-js");

var toggle = document.querySelector(".page-header__toggle");
var menu = document.querySelector(".main-nav__list");

toggle.classList.remove("page-header__toggle--no-js");
toggle.classList.add("page-header__toggle--open");
menu.classList.add("main-nav__list--close");

toggle.addEventListener("click", function(evt) {
  if (toggle.classList.contains("page-header__toggle--open")) {
    toggle.classList.remove("page-header__toggle--open");
    toggle.classList.add("page-header__toggle--close");
    menu.classList.remove("main-nav__list--close");
  } else {
    toggle.classList.remove("page-header__toggle--close");
    toggle.classList.add("page-header__toggle--open");
    menu.classList.add("main-nav__list--close");
  }
});
