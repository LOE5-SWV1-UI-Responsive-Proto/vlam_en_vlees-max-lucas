const hamburger = document.getElementById('hamburgerBtn');
const drawer = document.getElementById('navDrawer');
const overlay = document.getElementById('navOverlay');
const closeBtn = document.getElementById('navClose');

function openMenu() {
  drawer.classList.add('open');
  overlay.classList.add('open');
  document.body.classList.add('no-scroll');
}

function closeMenu() {
  drawer.classList.remove('open');
  overlay.classList.remove('open');
  document.body.classList.remove('no-scroll');
}

hamburger.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);