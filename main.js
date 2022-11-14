
const menu =document.querySelector('.menue');
const menuBtn = document.querySelector(".menue-btn");

menuBtn.addEventListener("click", () => {
   menu.classList.toggle('menu-open');
});
