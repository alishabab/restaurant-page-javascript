import initialPageLoad from './initialPageLoad';

import loadMenu from './menu';

import loadContact from './contact';

let activeTab = null;
const tabs = document.querySelectorAll('.tab');

const clickHandler = (tab) => {
  if (activeTab) {
    activeTab.classList.remove('active');
  }
  activeTab = tab;
  tab.classList.add('active');
  if (tab.innerText === 'Home') {
    initialPageLoad();
  }
  if (tab.innerText === 'Menu') {
    loadMenu();
  }
  if (tab.innerText === 'Contact') {
    loadContact();
  }
};

tabs.forEach((tab) => {
  tab.addEventListener('click', () => clickHandler(tab));
});

initialPageLoad();