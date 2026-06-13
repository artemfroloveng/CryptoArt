const burgerButton = document.querySelector('.burger__button');
const menu = document.querySelector('.mobile__menu');
const menuLinks = document.querySelectorAll('.mobile__link');

const closeMenu = () => {
  burgerButton.classList.remove('is-open');
  menu.classList.remove('is-open');
  menu.setAttribute('aria-hidden', 'true');
  burgerButton.setAttribute('aria-expanded', 'false');
  burgerButton.setAttribute('aria-label', 'Open menu');
  document.body.classList.remove('no-scroll');
};

const openMenu = () => {
  burgerButton.classList.add('is-open');
  menu.classList.add('is-open');
  menu.setAttribute('aria-hidden', 'false');
  burgerButton.setAttribute('aria-expanded', 'true');
  burgerButton.setAttribute('aria-label', 'Close menu');
  document.body.classList.add('no-scroll');
};

if (burgerButton && menu) {
  burgerButton.addEventListener('click', () => {
    const isOpen = burgerButton.classList.contains('is-open');

    if (isOpen) {
      closeMenu();
      return;
    }

    openMenu();
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      closeMenu();
    }
  });
}
