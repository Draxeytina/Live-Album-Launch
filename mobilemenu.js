const menu = document.getElementById('menu');
const navbar = document.getElementById('nav');
const topNav = document.getElementById('top-nav');
const bottomNav = document.getElementById('bottom-nav');
const exitButton = document.getElementById('close-button');

function openMenu() {
  document.body.style.position = 'fixed';
  document.body.style.overflow = 'hidden';
  navbar.classList.add('open-menu');
  topNav.classList.add('top-nav');
  bottomNav.classList.add('bottom-nav');
}

function resetMenu() {
  document.body.style.position = 'relative';
  document.body.style.overflow = 'scroll';
  navbar.classList.remove('open-menu');
  topNav.classList.remove('top-nav');
  bottomNav.classList.remove('bottom-nav');
}

function resizeWindow() {
  if (window.innerWidth > 768) {
    resetMenu();
  }
}

exitButton.addEventListener('click', resetMenu);
window.addEventListener('resize', resizeWindow);
menu.addEventListener('click', openMenu);
