export default function Header() {
	// // // //
	// Buttons
	// // // //
	const mainMenuButton = document.querySelector('.header__menu-button');
	const subMenuButtons = document.querySelectorAll('.navigation__button--sub-menu');
	const backButton = document.querySelector('.header__back-button');

	// // // //
	// Elements
	// // // //
	const body = document.querySelector('.body');
	const nav = document.querySelector('.navigation');
	const navMainMenu = document.querySelector('.navigation__main');
	const navSubMenu = document.querySelectorAll('.navigation__category');
	const headerLogo = document.querySelector('.header__logo-container');

	// // // //
	// Variables
	// // // //
	let mainNavigationOpen = false;
	let subNavigationOpen = false;
	const mobileNavigationWidth = 990;
	const delayInMilliseconds = 400;

	// // // //
	// Eventlisteners
	// // // //
	mainMenuButton.addEventListener('click', handlerMainMenuButtonClick);

	for (let i = 0; i < subMenuButtons.length; i++) {
		subMenuButtons[i].addEventListener('click', handlerSubMenuButtons);
	}

	backButton.addEventListener('click', handlerBackButtonClick)

	// // // //
	// Handlers
	// // // //
	function handlerMainMenuButtonClick() {
		toggleMainMenu();
	}

	function handlerSubMenuButtons() {
		toggleSubMenu();
	}

	function handlerBackButtonClick() {
		toggleSubMenu();
	}

	// // // //
	// Initialization 
	// // // //
	MobileNavigationInit();

	function MobileNavigationInit () {
		hideSubMenus();

		navMainMenu.classList.remove('hide')
		backButton.classList.remove('header__back-button--open');
		headerLogo.classList.remove('header__logo-container--open');

		subNavigationOpen = false;
	}

	// // // //
	// Functions
	// // // //

	// Open/close main menu
	function toggleMainMenu() {
		if (mainNavigationOpen) {
			slide('up');
			MobileNavigationInit();
			toggleNoScrollBehindNavigation();
		}
		else {
			slide('down');
			toggleNoScrollBehindNavigation();
		}

		toggleMainMenuButton()
		mainNavigationOpen = !mainNavigationOpen;
	}

	// Open/clos sub menu
	function toggleSubMenu() {
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

	// Move the navigation
	function slide(direction) {
		nav.classList.remove(
			'navigation--slide-up',
			'navigation--slide-down',
			'navigation--slide-left',
			'navigation--slide-right'
		);
		nav.classList.add(`navigation--slide-${direction}`);
	}

	// Make elements behind navigation not scrollable
	function toggleNoScrollBehindNavigation () {
		body.classList.toggle('body--no-scroll');
	}

	// Hide sub-menu 
	function hideSubMenus() {
		setTimeout(addHideClass, delayInMilliseconds);

		function addHideClass() {
			for (let i = 0; i < navSubMenu.length; i++) {
				navSubMenu[i].classList.add('hide');
			}
		}
	} 

	// Hide/Display main menu 
	function displayMainMenu() {
		if(subNavigationOpen) {
			navMainMenu.classList.remove('hide');   
		} else {
			setTimeout(addHideClass, delayInMilliseconds);

			function addHideClass() {
				navMainMenu.classList.add('hide');   
			}
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
		document.querySelector(`#${currentSubMenu}`).classList.remove('hide');
	}
}