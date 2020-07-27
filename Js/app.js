const hamburgerIcon = document.querySelector('.mobile_nav__icon');

hamburgerIcon.addEventListener('click', openMobileMenu)

function openMobileMenu() {
  console.log('function is calles')
  const movileMenuContainer = document.querySelector('.movile_nav__menu-container');
  movileMenuContainer.classList.add('open');

}