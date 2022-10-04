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

// Variables
let mainNavigationOpen = false;
let subNavigationOpen = false;
const delayInMilliseconds = 400;

// Initialization 
MobileNavigationInit();

function MobileNavigationInit () {
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
  	setTimeout(function () {
    	navMainMenu.classList.add('hide');   
  	}, delayInMilliseconds);  
  	}
} 

// Switch hamburger menu/x-button
function toggleMainMenuButton() {
	if(mainNavigationOpen) {
		mainMenuButton.classList.remove('header__menu-button--open');
	} else {
		mainMenuButton.classList.add('header__menu-button--open');
	}
}

// Switch logo/Back-button
function toggleSubMenuButton() {
	if(subNavigationOpen) {
		backButton.classList.remove('header__back-button--open');
		headerLogo.classList.remove('header__logo-container--open');
	} else {
		backButton.classList.add('header__back-button--open');
		headerLogo.classList.add('header__logo-container--open');
	}
}

// Display Current Sub Menu 
function displayCurrentSubMenu (event) {
	let currentSubMenu = event.target.innerText.toLowerCase();
	document.getElementById(`${currentSubMenu}`).classList.remove('hide');
}

// Open/close main menu
function mainMenuButtonClickHandler(event) {
	if (mainNavigationOpen) {
		slide('up');
		MobileNavigationInit();
	}
	else {
		slide('down');
	}

	toggleMainMenuButton()
	mainNavigationOpen = !mainNavigationOpen;
}

// Open/clos sub menu
function subMenuButtonsClickHandler(event) {
	if (subNavigationOpen) {
		slide('right');
		hideSubMenus()
	}
	else {
		displayCurrentSubMenu(event)
		slide('left');
	}
	
	displayMainMenu()
	toggleSubMenuButton();
	subNavigationOpen = !subNavigationOpen;
}

// Eventlisteners
mainMenuButton.addEventListener('click', mainMenuButtonClickHandler);

for (let i = 0; i < subMenuButtons.length; i++) {
	subMenuButtons[i].addEventListener('click', subMenuButtonsClickHandler);
}

backButton.addEventListener('click', subMenuButtonsClickHandler)

// Other
const mobileNavigationWidth = 990;