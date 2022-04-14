function displayContent() {
  document.querySelector('.container').style.display = 'none';
  document.querySelector('.mobile-menu').style.display = 'block';
}
function closeMenu() {
  document.querySelector('.container').style.display = 'block';
  document.querySelector('.mobile-menu').style.display = 'none';
}
function portfolioSection() {
  closeMenu();
  window.location = `${window.location.pathname}#portfolio`;
}
function aboutSection() {
  closeMenu();
  window.location = `${window.location.pathname}#about`;
}
function contactSection() {
  closeMenu();
  window.location = `${window.location.pathname}#contact`;
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.hamburger > img').addEventListener('click', displayContent);
  document.querySelector('.close').addEventListener('click', closeMenu);
  document.querySelector('.portfolio').addEventListener('click', portfolioSection);
  document.querySelector('.about').addEventListener('click', aboutSection);
  document.querySelector('.contact').addEventListener('click', contactSection);
});
// The object for dynamic Cards

const projects = [{
  // First Project
  name: 'Profesional Art Printing Data',
  discription: 'First A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry`s standard',
  discriptionDesktop: 'Firsst Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  languages: ['html', 'bootstrap', 'Ruby'],
  reference: ['https://en.wikipedia.org/wiki/HTML', 'https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework', 'https://en.wikipedia.org/wiki/Ruby_(programming_language'],
},
{
  // second Project
  name: 'Data Dashboard Healthcare',
  discription: 'Second A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry`s standard',
  discriptionDesktop: 'Second Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  languages: ['html', 'bootstrap', 'Ruby'],
  reference: ['https://en.wikipedia.org/wiki/HTML', 'https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework', 'https://en.wikipedia.org/wiki/Ruby_(programming_language'],
},
{
  // Third Project
  name: 'Website Protfolio',
  discription: 'Third A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry`s standard',
  discriptionDesktop: 'Third Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  languages: ['html', 'bootstrap', 'Ruby'],
  reference: ['https://en.wikipedia.org/wiki/HTML', 'https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework', 'https://en.wikipedia.org/wiki/Ruby_(programming_language'],

},
{
  // Fourth Project
  name: 'Profesional Art Printing Data',
  discription: 'Fourth A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry`s standard',
  discriptionDesktop: 'Fourth Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  languages: ['html', 'bootstrap', 'Ruby'],
  reference: ['https://en.wikipedia.org/wiki/HTML', 'https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework', 'https://en.wikipedia.org/wiki/Ruby_(programming_language'],
},
{
  // Fifth Project
  name: 'Fifth Dashboard Healthcare',
  discription: 'Fifth A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry`s standard',
  discriptionDesktop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  languages: ['html', 'bootstrap', 'Ruby'],
  reference: ['https://en.wikipedia.org/wiki/HTML', 'https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework', 'https://en.wikipedia.org/wiki/Ruby_(programming_language'],
},
{
  // sixth Project
  name: 'Website Protfolio',
  discription: 'Sixth A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry`s standard',
  discriptionDesktop: 'Sixth Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  languages: ['html', 'bootstrap', 'Ruby'],
  reference: ['https://en.wikipedia.org/wiki/HTML', 'https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework', 'https://en.wikipedia.org/wiki/Ruby_(programming_language'],
},
];
// creating generic elements
function addElement(element, classes, parent) {
  const newElem = document.createElement(element);
  classes.forEach((cl) => newElem.classList.add(cl));
  parent.appendChild(newElem);
  return newElem;
}
// ==== Show-hide functions
function show(toSHow) {
  // Remove hide class and add show class
  toSHow.classList.remove('hide');
  toSHow.classList.add('show');
}

function hide(toHide) {
  // Remove show class and add hide class
  toHide.classList.remove('show');
  toHide.classList.add('hide');
}
// dynamic content
projects.forEach((card, index) => {
  const workCard = addElement('div', ['work-2'], workContainer);
  const workContent = addElement('div', ['work2-content'], workCard);
  const workHeading1 = addElement('h1', [], workContent);
  workHeading1.textContent = card.name;
  const workHeading2 = addElement('h2', [], workContent);
  workHeading2.textContent = card.name;
  const workParagraph1 = addElement('p', [], workContent);
  workParagraph1.textContent = card.discription;
  const listUrl = addElement('ul', [], workContent);
  const listItem1 = addElement('li', ['list2'], listUrl);
  listItem1.textContent = 'html';
  const listItem2 = addElement('li', ['list2'], listUrl);
  listItem2.textContent = 'bootstrap';
  const listItem3 = addElement('li', ['list2'], listUrl);
  listItem3.textContent = 'ruby on rails';
  const buttonWork = addElement('div', ['work2-button'], workCard);
  const buttonWork1 = addElement('button', [], buttonWork);
  buttonWork1.setAttribute('type', 'button');
  buttonWork1.textContent = 'See Project';

  buttonWork1.onclick = () => showWorkPopup(index);
});

// ==== Work popup
const seeProjectButtons = document.querySelectorAll('.work-show-button');

seeProjectButtons.forEach((button, index) => {
  button.onclick = () => showWorkPopup(index);
});