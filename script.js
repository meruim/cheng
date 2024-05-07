document.addEventListener("DOMContentLoaded", function () {
  let menu = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");

  menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
  };
});

window.addEventListener("scroll", function () {
  // Call AOS.refresh() to force AOS to reinitialize and reanimate elements
  AOS.refresh();
});

function redirectToNature() {
  window.location.href = "nature.html";
}

function redirectToSky() {
  window.location.href = "sky.html";
}

function redirectToAdventure() {
  window.location.href = "adventure.html";
}
