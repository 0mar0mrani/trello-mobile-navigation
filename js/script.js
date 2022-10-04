'strict';
// Buttons
const mainMenuButton = document.querySelector('.header__menu-button');
const featuresButton = document.querySelector('.navigation__button--features');
const backButton = document.querySelector('.header__back-button');

// Elements
const body = document.querySelector('.body');
const nav = document.querySelector('.navigation');
const navMain = document.querySelector('.navigation__main');
const navSub = document.querySelectorAll('.navigation__sub');
const features = document.querySelector('.navigation__features');
const headerLogo = document.querySelector('.header__logo-container');
const buttonList = document.querySelectorAll('.navigation__button--sub-menu');


let navigationOpen = false;
let navigationExpanded = false;

// Move the navigation
function slide(direction) {
  nav.classList.remove(
    'navigation--slide-up',
    'navigation--slide-down',
    'navigation--slide-left',
    'navigation--slide-right'
  );
  nav.classList.add(`navigation--slide-${direction}`)
}

function toggleAllButtonAnimations() {
  mainMenuButton.classList.toggle('header__menu-button--open');
  backButton.classList.toggle('header__back-button--open');
	headerLogo.classList.toggle('header__logo-container--open');
}

// Open main menu
function mainMenuButtonClickHandler(event) {
  if (navigationExpanded) {
    slide('up');
  }
  else {
    slide('down');
  }

  toggleAllButtonAnimations()
  navigationExpanded = !navigationExpanded;
}

mainMenuButton.addEventListener('click', mainMenuButtonClickHandler);


/****************/
// Other
const mobileNavigationWidth = 990;