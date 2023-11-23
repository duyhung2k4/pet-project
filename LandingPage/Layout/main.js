const menuMiniSize = document.querySelector("#list-link-mini-screen");
const buttonMenu = document.querySelector("#action-mini-screen");

buttonMenu.addEventListener("click", () => {
  const displayMenuMiniSize = menuMiniSize.style.display;
  if(`${displayMenuMiniSize}`.length === 0 || displayMenuMiniSize === "none") {
    menuMiniSize.style.display = "block";
  } else {
    menuMiniSize.style.display = "none";
  }
});

window.onresize = () => {
  if(window.innerWidth > 769) {
    menuMiniSize.style.display = "none";
  }
}