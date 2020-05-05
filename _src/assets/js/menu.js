'use strict';

// menu

const toggleMenu = () => {
  document.querySelector('.js-menu').classList.toggle('show');
};

document.querySelectorAll('.js-menu-btn').forEach(btn => {
  btn.addEventListener('click', toggleMenu);
});
