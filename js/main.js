const menuBtn = document.querySelector(".menu__btn");
const menuClose = document.querySelector(".menu__close-btn");
const menuList = document.querySelector(".menu__list");
const overlay = document.querySelector(".overlay");

const menuClickHandler = () => {
	menuList.classList.add("menu__list--active");
	overlay.classList.add("overlay--active");
};

const menuCloseHandler = () => {
	menuList.classList.remove("menu__list--active");
	overlay.classList.remove("overlay--active");
};

menuBtn.addEventListener("click", menuClickHandler);
menuClose.addEventListener("click", menuCloseHandler);
overlay.addEventListener("click", menuCloseHandler);
