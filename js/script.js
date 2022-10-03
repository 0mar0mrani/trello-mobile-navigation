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

function toggleMainMenuButton() {
  mainMenuButton.classList.toggle('header__menu-button--open');
}

// Open main menu
function mainMenuButtonClickHandler(event) {
  if (navigationExpanded) {
    slide('up');
  }
  else {
    slide('down');
  }

  toggleMainMenuButton()
  navigationExpanded = !navigationExpanded;
}

mainMenuButton.addEventListener('click', mainMenuButtonClickHandler);


/****************/
// Other
const mobileNavigationWidth = 990;


// // Make navigation ready for desktop view
// const resetMenu = function () {
//   document.getElementById('navigation__main').style.display = 'unset';

//   for (let i = 0; i < buttonList.length; i++) {
//     let currentButton = buttonList[i].innerText.toLowerCase();

//     document.getElementById(`${currentButton}`).style.display = 'none';
//   }

//   document.getElementById('navigation__main').style.display = 'unset';
// };

// const resetMenuDesktop = function () {
//   for (let i = 0; i < buttonList.length; i++) {
//     let currentButton = buttonList[i].innerText.toLowerCase();
//     document.getElementById(`${currentButton}`).style.display = 'none';
//   }

//   document.getElementById('navigation__main').style.display = 'flex';
// };

// // Check width when resized
// const updateNavBar = function () {
//   if (window.innerWidth > mobileNavigationWidth) {
//     resetMenuDesktop();
//   } else {
//     resetMenu();
//   }
// };

// updateNavBar();

// window.addEventListener('resize', updateNavBar);

// // Open Mobile Navigation
// mainMenuButton.addEventListener('click', function () {
//   if (nav.classList.contains('navigation--slide-up')) {
//     slideDown();
//   } else if (
//     nav.classList.contains('navigation--slide-down') ||
//     nav.classList.contains('navigation--slide-left') ||
//     nav.classList.contains('navigation--slide-right')
//   ) {
//     slideUp();
//   } else {
//     slideDown();
//   }

//   // Swap back-button to Trello logo
//   backButton.classList.remove('header__back-button--open');
//   headerLogo.classList.remove('header__logo-container--open');

//   // Animation on burger menu
//   mainMenuButton.classList.toggle('header__menu-button--open');

//   // Make body not scrollable
//   body.classList.toggle('body--no-scroll');

//   resetMenu();
// });

// // Allows for clicking in navigation to get to sub menus

// let latestCurrentButton;

// buttonList.forEach(function (i) {
//   i.addEventListener('click', function (e) {
//     // Get text from button clicked
//     let currentButton = e.target.innerText.toLowerCase();
//     console.log(currentButton);

//     if (currentButton === latestCurrentButton) {
//       document.getElementById(`${currentButton}`).style.display = 'none';
//     } else {
//       // Reset all
//       if (window.innerWidth <= mobileNavigationWidth) {
//         resetMenu();
//       } else {
//         resetMenuDesktop();
//       }

//       // Bring sub menu to front and display = unset
//       document.getElementById(`${currentButton}`).style.display = 'unset';

//       console.log(currentButton);

//       currentButton = latestCurrentButton;

//       if (window.innerWidth <= mobileNavigationWidth) {
//         backButton.classList.add('header__back-button--open');
//         headerLogo.classList.add('header__logo-container--open');

//         // Transition main menu to left
//         slideLeft();

//         // Navigation main = removed after .3 s
//         let delayInMilliseconds = 400;
//         setTimeout(function () {
//           document.getElementById('navigation__main').style.display = 'none';
//         }, delayInMilliseconds);
//       }
//     }
//   });
// });

// // Go back in mobile navigation
// backButton.addEventListener('click', function (i) {
//   backButton.classList.remove('header__back-button--open');
//   headerLogo.classList.remove('header__logo-container--open');

//   // Transition main menu to left
//   nav.classList.remove('navigation--slide-left');
//   nav.classList.add('navigation--slide-right');

//   // Get back Navigation Main
//   document.getElementById('navigation__main').style.display = 'block';

//   // Navigation main = removed after .3 s
//   let delayInMilliseconds = 400;
//   setTimeout(function () {
//     resetMenu();
//   }, delayInMilliseconds);
// });
