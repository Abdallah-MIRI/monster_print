window.addEventListener("scroll", () => {
  let h = document.getElementById("content-header");
  if (window.scrollY > 50) {
    h.classList.add("fixed", "shadow-lg");
    h.classList.remove("absolute");
  } else {
    h.classList.add("absolute");
    h.classList.remove("fixed", "shadow-lg");
  }
});

const btn = document.getElementById("menuBtn");
const menu = document.getElementById("menu-nav");
const body = document.getElementById("body");
const contentHeader = document.getElementById("content-header");

btn.addEventListener("click", () => {
  btn.classList.toggle("is-active");
  contentHeader.classList.toggle("h-[97%]");
  contentHeader.classList.toggle("rounded-full");
  contentHeader.classList.toggle("items-start");
  menu.classList.toggle("menu-nav-fixed");
  menu.classList.toggle("hidden");
  body.classList.toggle("overflow-hidden");
});
