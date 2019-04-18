const hamburgerList = document.getElementsByClassName("navbar__buttons");
const hamburgerButton = document.getElementsByClassName("navbar__hamburger");
hamburgerButton[0].addEventListener("click", showMenu);

function showMenu(e) {
  e.preventDefault();
  hamburgerList[0].classList.toggle("navbar__buttons--show");
}
