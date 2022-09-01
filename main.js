let link = document.querySelectorAll('.header ul li')[3];
let menu = document.querySelector('.mega-menu');

link.onclick = () => {
  menu.classList.toggle('show');
}