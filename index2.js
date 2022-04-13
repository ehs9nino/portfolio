// The object for dynamic Cards

const projects = [{
  // First Project
  name: 'Profesional Art Printing Data',
  discription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry`s standard',
  languages: ['html', 'bootstrap', 'Ruby'],
}];
// creating generic elements
function addElement(element, classes, parent) {
  const newElem = document.createElement(element);
  classes.forEach((cl) => newElem.classList.add(cl));
  parent.appendChild(newElem);
  return newElem;
}

// dynamic content

const workContainer = document.querySelector('.work-display');
const workCard = addElement('div', ['work-2', 'work-a', 'work-x'], workContainer);
const workContent = addElement('div', ['work2-content'], workCard);
const workHeading1 = addElement('h1', [], workContent);
workHeading1.textContent = projects[0].name;
const workParagraph1 = addElement('p', [], workContent);
workParagraph1.textContent = projects[0].discription;
const listUrl = addElement('ul', [], workContent);
const listItems = addElement('li', [], listUrl);
const items;
projects
const workButton = addElement('div', ['work2-button', 'work2buttonA'], workCard);
