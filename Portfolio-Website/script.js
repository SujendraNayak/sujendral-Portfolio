function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  hamburgerIcon.classList.toggle("open");
}

document.querySelector(".hamburger-icon").addEventListener("click", toggleMenu);
