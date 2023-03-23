let link = document.querySelectorAll('.header ul li')[3];
let menu = document.querySelector('.mega-menu');

link.onclick = () => {
  menu.classList.toggle('show');
}
// Skills Section
let skillsSection = document.querySelector('.our-skills');
let progs = document.querySelectorAll('.progress-bar');

let statsSection = document.querySelector('.stats');
let numbers = document.querySelectorAll('.number');

window.onscroll = function () {
  if(window.scrollY >= skillsSection.offsetTop) {
    progs.forEach((prog)=>{
      prog.style.width = prog.dataset.width;
    });
  }
  // Awesome Section
  if(window.scrollY >= statsSection.offsetTop) {
    numbers.forEach((number)=>{
      // number.innerHTML = number.dataset.goal;
      number.innerHTML++;
    })

  }
  // Awesome Section
}
// Skills Section
// Events Section
let spans = document.querySelectorAll('.unit span:first-of-type');

let countDown = new Date('Oct 1 2023 23:59:59').getTime() ;
let counter = setInterval(() => {
  let dateNow = new Date();

  let dateDiff = countDown - dateNow;

  let days = Math.floor(dateDiff / (1000*60*60*24));

  let hours = Math.floor(dateDiff % (1000*60*60*24)/(1000*60*60));

  let minutes = Math.floor(dateDiff % (1000*60*60)/(1000*60));

  let seconds = Math.floor(dateDiff % (1000*60)/(1000));

  spans[0].innerHTML = days;
  spans[1].innerHTML = hours;
  spans[2].innerHTML = minutes;
  spans[3].innerHTML = seconds;
  console.log(hours);
}, 1000);
// Events Section