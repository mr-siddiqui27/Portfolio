// Typed JS

var typed = new Typed('.text', {
    strings: ['Web Developer', 'Software Developer', 'App Developer'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
});

// // SHOW EDUCATION AND EXPERIENCE

// let EducationBtn = document.querySelector('.education');
// let ExperienceBtn = document.querySelector('.experience');
// let show_box = document.querySelectorAll('.show_box');
// let hide_box = document.querySelectorAll('.hide_box');

// EducationBtn.addEventListener('click', () => {
//     show_box.forEach(Sbox => {
//         Sbox.style.opacity = '0';
//     });
//     hide_box.forEach(Hbox => {
//         Hbox.style.opacity = '1';
//     });
// });
// ExperienceBtn.addEventListener('click', () => {
//     show_box.forEach(Sbox => {
//         Sbox.style.opacity = '1';
//     });
//     hide_box.forEach(Hbox => {
//         Hbox.style.opacity = '0';
//     });
// });

let bar = document.querySelector('.bars');
let menu = document.querySelector('.menu');
let nav = document.querySelector('nav');

bar.addEventListener('click',() =>{
    menu.classList.toggle('show_menu');
    nav.classList.toggle('nav_border');
});

// contact me form
 
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});