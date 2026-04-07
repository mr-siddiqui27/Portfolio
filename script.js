// Typed JS

var typed = new Typed('.text', {
    strings: ['Java Developer', 'Problem Solver', 'DSA Enthusiast', 'Full Stack Developer'],
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
let navLinks = document.querySelectorAll('.menu li a'); 
let barIcon = document.querySelector('.bars i');

bar.addEventListener('click',() =>{
    menu.classList.toggle('show_menu');
    bar.classList.toggle('active');
    if (barIcon) {
      barIcon.classList.toggle('ri-menu-2-fill');
      barIcon.classList.toggle('ri-close-line');
    }
});

//Hide menu when clicking outside
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !bar.contains(e.target)) {
      menu.classList.remove('show_menu');
      bar.classList.remove('active');
      if (barIcon) {
        barIcon.classList.add('ri-menu-2-fill');
        barIcon.classList.remove('ri-close-line');
      }
  }
});

// Hide menu when clicking on a nav link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
      menu.classList.remove('show_menu');
      bar.classList.remove('active');
      navLinks.forEach(item => item.classList.remove('active'));
      link.classList.add('active');
      if (barIcon) {
        barIcon.classList.add('ri-menu-2-fill');
        barIcon.classList.remove('ri-close-line');
      }
  });
});




// Projects section modal behavior
const projectModalOverlay = document.getElementById('projectModalOverlay');
const projectModalClose = document.getElementById('projectModalClose');
const projectModalImage = document.getElementById('projectModalImage');
const projectModalTitle = document.getElementById('projectModalTitle');
const projectModalStack = document.getElementById('projectModalStack');
const projectModalDesc = document.getElementById('projectModalDesc');
const projectOpenButtons = document.querySelectorAll('.open-project-btn');

function openProjectModal(card) {
  const imageEl = card.querySelector('.project_img img');
  const titleEl = card.querySelector('.project_info h2');
  const stackEl = card.querySelector('.project_info h5');
  const shortEl = card.querySelector('.project_info .short-text');
  const fullEl = card.querySelector('.project_info .full-text');

  const shortContent = shortEl ? shortEl.innerHTML.trim() : '';
  const fullContent = fullEl ? fullEl.innerHTML.trim() : '';
  const description = [shortContent, fullContent].filter(Boolean).join('<br><br>');

  projectModalImage.src = imageEl ? imageEl.src : '';
  projectModalImage.alt = imageEl ? imageEl.alt : 'Project image';
  projectModalTitle.textContent = titleEl ? titleEl.textContent.trim() : 'Project';
  projectModalStack.textContent = stackEl ? stackEl.textContent.trim() : '';
  projectModalDesc.innerHTML = description || 'Project details are coming soon.';

  projectModalOverlay.classList.add('show');
  document.body.classList.add('modal-open');
}

function closeProjectModal() {
  projectModalOverlay.classList.remove('show');
  document.body.classList.remove('modal-open');
}

projectOpenButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.project_card');
    if (!card) return;
    openProjectModal(card);
  });
});

projectModalClose.addEventListener('click', closeProjectModal);

projectModalOverlay.addEventListener('click', (event) => {
  if (event.target === projectModalOverlay) {
    closeProjectModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && projectModalOverlay.classList.contains('show')) {
    closeProjectModal();
  }
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