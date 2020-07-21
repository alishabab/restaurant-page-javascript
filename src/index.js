import initialPageLoad from './initialPageLoad';

import loadMenu from './menu';

const contentDiv = document.querySelector('#content');
const tabs = document.querySelectorAll('.tab');
const clickHandler = (tab) => {
  if (tab.innerText === 'Menu') {
    loadMenu(contentDiv);
  }
  if (tab.innerText === 'Home') {
    initialPageLoad(contentDiv);
  }
};

tabs.forEach((tab) => {
  tab.addEventListener('click', () => clickHandler(tab));
});

initialPageLoad(contentDiv);