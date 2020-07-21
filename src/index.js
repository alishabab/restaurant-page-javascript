import initialPageLoad from './initialPageLoad';

import loadMenu from './menu';

import loadContact from './contact';

const contentDiv = document.querySelector('#content');
const tabs = document.querySelectorAll('.tab');
const removeClass = (element, className) => {
  element.classList.remove(className);
};

const addClass = (element, className) => {
  element.classList.add(className);
};
const clickHandler = (tab) => {
  tabs.forEach(tab => removeClass(tab, 'active'));
  if (tab.innerText === 'Home') {
    initialPageLoad(contentDiv);
    addClass(tab, 'active');
  }
  if (tab.innerText === 'Menu') {
    loadMenu(contentDiv);
    addClass(tab, 'active');
  }
  if (tab.innerText === 'Contact') {
    loadContact(contentDiv);
    addClass(tab, 'active');
  }
};

tabs.forEach((tab) => {
  tab.addEventListener('click', () => clickHandler(tab));
});

initialPageLoad(contentDiv);