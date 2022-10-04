'strict';
// Buttons
const mainMenuButton = document.querySelector('.header__menu-button');
const subMenuButtons = document.querySelectorAll('.navigation__button--sub-menu');
const featuresButton = document.querySelector('.navigation__button--features');
const backButton = document.querySelector('.header__back-button');

// Elements
const body = document.querySelector('.body');
const nav = document.querySelector('.navigation');
const navMainMenu = document.querySelector('.navigation__main');
const navSubMenu = document.querySelectorAll('.navigation__category');
const headerLogo = document.querySelector('.header__logo-container');


let mainNavigationOpen = false;
let subNavigationOpen = false;

// Initialization 
init();

function init () {
  hideSubMenus();
  
  navMainMenu.classList.remove('hide')
  backButton.classList.remove('header__back-button--open');
	headerLogo.classList.remove('header__logo-container--open');

  subNavigationOpen = false;
}

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

// Sub-menu - Display
function hideSubMenus() {
  
  let delayInMilliseconds = 400;

  setTimeout(function () {
    for (let i = 0; i < navSubMenu.length; i++) {
      navSubMenu[i].classList.add('hide');
    };
  }, delayInMilliseconds);  
} 

// Main-menu - Display
function displayMainMenu() {

  if(subNavigationOpen) {
    navMainMenu.classList.remove('hide');   
  } else {
  let delayInMilliseconds = 400;

  setTimeout(function () {
    navMainMenu.classList.add('hide');   
  }, delayInMilliseconds);  
  }

} 

function toggleMainMenuButton() {
  if(mainNavigationOpen) {
    mainMenuButton.classList.remove('header__menu-button--open');
  } else {
    mainMenuButton.classList.add('header__menu-button--open');
  }
}

function toggleSubMenuButton() {
  if(subNavigationOpen) {
    backButton.classList.remove('header__back-button--open');
    headerLogo.classList.remove('header__logo-container--open');
  } else {
    backButton.classList.toggle('header__back-button--open');
    headerLogo.classList.toggle('header__logo-container--open');
  }
}

// Open/close main menu
function mainMenuButtonClickHandler(event) {
  if (mainNavigationOpen) {
    slide('up');
    init();
  }
  else {
    slide('down');
  }

  toggleMainMenuButton()
  mainNavigationOpen = !mainNavigationOpen;
  console.log(mainNavigationOpen);
}

// Open/clos sub menu
function subMenuButtonsClickHandler(event) {
  if (subNavigationOpen) {
    hideSubMenus()
    slide('right');
    displayMainMenu()
  }
  else {
    displaySubCurrentMenu(event)
    displayMainMenu()
    slide('left');
  }

  toggleSubMenuButton();
  subNavigationOpen = !subNavigationOpen;
  console.log(subNavigationOpen);
}

// Display Sub Menu 
function displaySubCurrentMenu (event) {
  let currentSubMenu = event.target.innerText.toLowerCase();
  document.getElementById(`${currentSubMenu}`).classList.remove('hide');
}


// Eventlisteners
mainMenuButton.addEventListener('click', mainMenuButtonClickHandler);

for (let i = 0; i < subMenuButtons.length; i++) {
  subMenuButtons[i].addEventListener('click', subMenuButtonsClickHandler)
}

backButton.addEventListener('click', subMenuButtonsClickHandler)

// Other
const mobileNavigationWidth = 990;