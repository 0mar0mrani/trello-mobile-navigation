'strict';
// Buttons
const mainMenuButton = document.querySelector('.header__menu-button');
const featuresButton = document.querySelector('.navigation__button--features');
const backButton = document.querySelector('.header__back-button');

// Elements
const body = document.querySelector('.body');
const nav = document.querySelector('.navigation');
const features = document.querySelector('.navigation__features');
const headerLogo = document.querySelector('.header__logo-container');
const buttonList = document.querySelectorAll('.navigation__button--sub-menu');

const slideDown = function () {
  nav.classList.add('navigation--slide-down');

  nav.classList.remove(
    'navigation--slide-up',
    'navigation--slide-left',
    'navigation--slide-right'
  );
};

const slideUp = function () {
  nav.classList.add('navigation--slide-up');

  nav.classList.remove(
    'navigation--slide-down',
    'navigation--slide-left',
    'navigation--slide-right'
  );
};

const slideLeft = function () {
  nav.classList.add('navigation--slide-left');

  nav.classList.remove(
    'navigation--slide-up',
    'navigation--slide-right',
    'navigation--slide-down'
  );
};

const slideRight = function () {
  nav.classList.add('navigation--slide-right');

  nav.classList.remove(
    'navigation--slide-left',
    'navigation--slide-up',
    'navigation--slide-down'
  );
};

// Give one sub menu very high z-index and put the rest to 1.

// Open Mobile Navigation
mainMenuButton.addEventListener('click', function () {
  if (nav.classList.contains('navigation--slide-up')) {
    slideDown();
  } else if (
    nav.classList.contains('navigation--slide-down') ||
    nav.classList.contains('navigation--slide-left') ||
    nav.classList.contains('navigation--slide-right')
  ) {
    slideUp();
  } else {
    slideDown();
  }

  // Swap back-button to Trello logo
  backButton.classList.remove('header__back-button--open');
  headerLogo.classList.remove('header__logo-container--open');

  // Animation on burger menu
  mainMenuButton.classList.toggle('header__menu-button--open');

  // Make body not scrollable
  body.classList.toggle('body--no-scroll');
});

// Allows for clicking in navigation to get to sub menus
buttonList.forEach(function (i) {
  i.addEventListener('click', function (e) {
    // Reset all z-index for all menus
    for (let i = 0; i < buttonList.length; i++) {
      let currentButton = buttonList[i].innerText.toLowerCase();
      document.getElementById(`${currentButton}`).style.zIndex = '1';
    }

    // Get text from button clicked
    currentButton = e.target.innerText.toLowerCase();

    // Bring sub menu to front
    document.getElementById(`${currentButton}`).style.zIndex = '999999999';

    backButton.classList.add('header__back-button--open');
    headerLogo.classList.add('header__logo-container--open');

    // Transition main menu to left
    slideLeft();
  });
});

// Go back in mobile navigation
backButton.addEventListener('click', function () {
  for (let i = 0; i < buttonList.length; i++) {
    const currentButton = buttonList[i].innerText.toLowerCase();

    const el = document.querySelector(`.navigation__${currentButton}`);
    el.classList.remove(`navigation__${currentButton}--open`);
  }

  backButton.classList.remove('header__back-button--open');
  headerLogo.classList.remove('header__logo-container--open');

  // Transition main menu to left
  nav.classList.remove('navigation--slide-left');
  nav.classList.add('navigation--slide-right');
});
