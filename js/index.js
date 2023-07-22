/* PAGE BACKGROUND (ANIMATED GRADIENT) */
import { Gradient } from "./gradient.min.js";

const gradient = new Gradient();

gradient.initGradient(".gradient-canvas");

/* SCROLL PADDING FOR FIXED HEADER */
const headerHeight = document.querySelector(".header").offsetHeight;
document.documentElement.style.setProperty(
  "--scroll-padding",
  headerHeight + "px"
);

/* MOBILE MENU */
const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

const toggleMenu = () => {
  document.body.classList.toggle("is-locked");
  menuIcon.classList.toggle("is-active");
  menu.classList.toggle("is-opened");
};

menuIcon.addEventListener("click", toggleMenu);

if (window.matchMedia("(max-width: 992px)").matches) {
  const menuAnchors = document.querySelectorAll(".menu__link");
  const menuIdAnchors = []; 

  menuAnchors.forEach((anchor) => {
    if (anchor.getAttribute("href").includes("#")) {
      menuIdAnchors.push(anchor);
    }
  });

  menuIdAnchors.forEach((idAnchor) => {
    idAnchor.addEventListener("click", toggleMenu);
  });
}
