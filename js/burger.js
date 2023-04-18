const burger = document.querySelector(".header__mobile-burger");
const menu = document.querySelector(".header__mobile-menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
});
