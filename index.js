function displayContent() {
  document.querySelector('.container').style.display = 'none';
  document.querySelector('.mobile-menu').style.display = 'block';
}
document.querySelector('.hamburger > img').getaddEventListener('click', displayContent);

function closeMenu() {
  document.querySelector('.container').style.display = 'block';
  document.querySelector('.mobile-menu').style.display = 'none';
}
document.querySelector('.close').getaddEventListener('click', closeMenu);

function portfolioSection() {
  document.querySelector('.portfolio').location.asign = 'https://dashboard.microverse.org/progress';
}
document.querySelector('.portfolio').getaddEventListener('click', portfolioSection());
