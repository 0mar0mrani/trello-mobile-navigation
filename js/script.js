'strict';
// Buttons
const mainMenuButton = document.querySelector('.header__menu-button');
const featuresButton = document.querySelector('.navigation__button--features');
const backButton = document.querySelector('.header__back-button');

// Elements
const body = document.querySelector('.body');
const nav = document.querySelector('.navigation');
const navMain = document.querySelector('.navigation_main');
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

const resetMenu = function () {
  document.getElementById('navigation__main').style.display = 'unset';

  for (let i = 0; i < buttonList.length; i++) {
    let currentButton = buttonList[i].innerText.toLowerCase();

    document.getElementById(`${currentButton}`).style.display = 'none';
  }

  document.getElementById('navigation__main').style.display = 'unset';
};

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

  resetMenu();
});

// Allows for clicking in navigation to get to sub menus
buttonList.forEach(function (i) {
  i.addEventListener('click', function (e) {
    // Reset all
    resetMenu();

    // Get text from button clicked
    currentButton = e.target.innerText.toLowerCase();

    // Bring sub menu to front and display = unset
    document.getElementById(`${currentButton}`).style.display = 'unset';

    // Navigation main = removed after .3 s
    let delayInMilliseconds = 400;
    setTimeout(function () {
      document.getElementById('navigation__main').style.display = 'none';
    }, delayInMilliseconds);

    backButton.classList.add('header__back-button--open');
    headerLogo.classList.add('header__logo-container--open');

    // Transition main menu to left
    slideLeft();
  });
});

// Go back in mobile navigation
backButton.addEventListener('click', function (i) {
  backButton.classList.remove('header__back-button--open');
  headerLogo.classList.remove('header__logo-container--open');

  // Transition main menu to left
  nav.classList.remove('navigation--slide-left');
  nav.classList.add('navigation--slide-right');

  // Get back Navigation Main
  document.getElementById('navigation__main').style.display = 'block';

  // Navigation main = removed after .3 s
  let delayInMilliseconds = 400;
  setTimeout(function () {
    resetMenu();
  }, delayInMilliseconds);
});
