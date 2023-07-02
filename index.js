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
  name: 'Space Tourism Conference',
  discription: 'With required design I have completed this website with basic front end skills.Additionally it has About US page attached with this landing page website.',
  discriptionDesktop: 'With required design I have completed this website with basic front end skills.Additionally it has About US page attached with this landing page website.',
  languages: ['HTML', 'CSS', 'JavaScript'],
},
{
  // second Project
  name: 'Vacation Destination',
  discription: 'You can make a list of your favourite destination, It is just a simple learning project to get familiar with windows object and event listners in javaScript',
  discriptionDesktop: 'You can make a list of your favourite destination, It is just a simple learning project to get familiar with windows object and event listners in javaScript',
  languages: ['HTML', 'CSS', 'JavaScript'],
},
{
  // Third Project
  name: 'Distance Converter',
  discription: 'Tried both with JavaScript & JQuery Library to understand how build in libraries work for JavaScript.',
  discriptionDesktop: 'Implemented with JavaScript & JQuery Library for understanding libraries of JS. The projects converts dictance miles to km`s and vice versa.',
  languages: ['HTML', 'CSS', 'JQuery'],

},
{
  // Fourth Project
  name: 'Awesome Books Collection',
  discription: 'Made single page Application, here you can save you favourite books and maintain you library, I made sure once saved the date.',
  discriptionDesktop: 'Made single page Application, here you can save you favourite books and maintain you library, I made sure once saved the date.',
  languages: ['HTML', 'CSS', 'JavaScript'],
},
{
  // Fifth Project
  name: 'JQuery Learning',
  discription: 'Tried with both JavaScript & JQuery library to understand how to code efficiantly with build in tools.',
  discriptionDesktop: 'Tried with both JavaScript & JQuery library to understand how to code efficiantly with buildin tools. Also tried the same experiment with Slideshow.',
  languages: ['HTML', 'CSS', 'JQuery'],
},
{
  // sixth Project
  name: 'Informational Website',
  discription: 'General informational website for American Logistics Company which was completly solo project done from getting domain, design, theme, hosting.',
  discriptionDesktop: 'General informational website for American Logistics Company which was completly solo project done from getting domain, design, theme, hosting.',
  languages: ['WORDPRESS', 'Divi', 'GSuite'],
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
const workContainer = document.querySelector('.work-display');

/*const showWorkPopup = (index) => {
  // Define the targets
  const main = document.querySelector('.A');
  const sectionPopup = addElement('section', ['popUp'], main);
  const topPopup = addElement('div', ['pop-up-top'], sectionPopup);
  const h1Popup = addElement('h1', ['pop-up-h1'], topPopup);
  h1Popup.textContent = projects[index].name;
  const closePopup = addElement('img', ['close-icon-2'], topPopup);
  closePopup.setAttribute('src', 'svg/closeicone2.svg', 'alt', 'cancel-button');
  const languagePopups = addElement('ul', ['pop-up-languages'], sectionPopup);
  const languagePopup1 = addElement('li', ['pop-up-language-li'], languagePopups);
  languagePopup1.textContent = 'html';
  const languagePopup2 = addElement('li', ['pop-up-language-li'], languagePopups);
  languagePopup2.textContent = 'bootstrap';
  const languagePopup3 = addElement('li', ['pop-up-language-li'], languagePopups);
  languagePopup3.textContent = 'ruby on rails';
  const desktop1Popup = addElement('div', ['pop-up-desktop-1'], sectionPopup);
  const imagePopup = addElement('img', ['pop-up-image'], desktop1Popup);
  imagePopup.setAttribute('src', 'svg/snapshoot-portfolio.svg', 'alt', 'project-1 details');
  const desktop2popup = addElement('div', ['pop-up-desktop-2'], desktop1Popup);
  const desktop2Para = addElement('p', ['pop-up-description'], desktop2popup);
  if (window.innerWidth < 768) {
    // If mobile
    desktop2Para.textContent = projects[index].discription;
  } else {
    // If desktop
    desktop2Para.textContent = projects[index].discriptionDesktop;
  }
  const desktop2Buttons = addElement('ul', ['pop-up-buttons'], desktop2popup);
  const desktop2Button1 = addElement('li', ['pop-up-button1'], desktop2Buttons);
  const desktop2Btn1 = addElement('button', ['pop-up-btn1'], desktop2Button1);
  desktop2Btn1.setAttribute('type', 'button');
  desktop2Btn1.textContent = 'See Live';
  const desktop2Button2 = addElement('li', ['pop-up-button2'], desktop2Buttons);
  const desktop2Btn2 = addElement('button', ['pop-up-btn2'], desktop2Button2);
  desktop2Btn2.setAttribute('type', 'button');
  desktop2Btn2.textContent = 'See Source';
  // Add close function
  closePopup.addEventListener('click', () => {
    hide(sectionPopup);
    main.removeChild(sectionPopup);
  });

  // Show
  show(sectionPopup);
};*/
// dynamic content

/*projects.forEach((card, index) => {
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
});*/

projects.forEach((card) => {
  const workCard = addElement('div', ['work-2'], workContainer);
  const workContent = addElement('div', ['work2-content'], workCard);
  const workHeading1 = addElement('h1', [], workContent);
  workHeading1.textContent = card.name;
  const workHeading2 = addElement('h2', [], workContent);
  workHeading2.textContent = card.name;
  
  const workParagraph = addElement('p', [], workContent);
  if (window.innerWidth < 768) {
    // If mobile
    workParagraph.textContent = card.discription;
  } else {
    // If desktop
    workParagraph.textContent = card.discriptionDesktop;
  }

  const languageList = addElement('ul', [], workContent);
  card.languages.forEach((language) => {
    const listItem = addElement('li', ['list2'], languageList);
    listItem.textContent = language;
  });

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

// form variables
const emailForm = document.querySelector('#e-mail');
const popUpForm = document.querySelector('.form-popup');
const submit = document.querySelector('.submit');

emailForm.addEventListener('input', () => {
  if (/[A-Z]/.test(emailForm.value)) {
    popUpForm.style.display = 'block';
  } else {
    popUpForm.style.display = 'none';
  }
});

submit.addEventListener('click', (event) => {
  if (/[A-Z]/.test(emailForm.value)) {
    event.preventDefault();
  }
}, false);

const backgroundImages = [
  'png/card1.png',
  'png/card2.png',
  'png/card3.png',
  'png/card4.png',
  'png/card5.png',
  'png/card6.png',
  // Add more image URLs or paths as needed
];

const links = {
  project1: 'https://ehs9nino.github.io/capstone-o1-project/',
  project2: 'https://ehs9nino.github.io/vacationDestination/',
  project3: 'https://ehs9nino.github.io/advanceDistanceConverter/',
  project4: 'https://ehs9nino.github.io/Awesome-books-SPA/',
  project5: 'https://ehs9nino.github.io/TabbedInterfacewithjQuery/',
  project6: 'https://fnfglobalinc.com/',
};

const work2Divs = document.getElementsByClassName('work-2');

for (let i = 0; i < work2Divs.length; i++) {
  const work2Div = work2Divs[i];
  const button = work2Div.querySelector('.work2-button button');
  const link = links[`project${i + 1}`];
  const backgroundImage = backgroundImages[i];
  const gradient = 'linear-gradient(180.45deg, rgba(38, 38, 38, 0) 0.75%, rgba(38, 38, 38, 0.9) 84.18%)';

  // Set the background image and gradient for the work2-div
  work2Div.style.backgroundImage = `${gradient}, url(${backgroundImage})`;

  // Set the link as the href attribute of the button
  button.addEventListener('click', function() {
    window.location.href = link;
  });
}
function goToWorkSection() {
  // Perform the desired action here, such as scrolling to the "work" section
  window.open('https://drive.google.com/file/d/1J0-MzKC6gTuv25qdFXe7laWdzp_PBIau/view', '_blank');
}
function openGmail() {
  window.location.href = 'mailto:ehs9nino@gmail.com';
}