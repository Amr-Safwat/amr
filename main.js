let link = document.querySelectorAll('.header ul li')[3];
let menu = document.querySelector('.mega-menu');

link.onclick = () => {
  menu.classList.toggle('show');
}
// Skills Section
let skillsSection = document.querySelector('.our-skills');
let progs = document.querySelectorAll('.progress-bar');

window.onscroll = function () {
  if(window.scrollY >= skillsSection.offsetTop) {
    progs.forEach((prog)=>{
      prog.style.width = prog.dataset.width;
    })
  }
}
// Skills Section