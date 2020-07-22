const restaurantMenu = {
  dishes: [
    {
      type: 'North Indian',
      names: ['Dal Fry', 'Dal Makhni', 'Butter Chicken'],
    },
    {
      type: 'South Indian',
      names: ['Masala Dosa', 'Idli'],
    },
  ],
};

const loadMenu = () => {
  const contentDiv = document.querySelector('#content');
  const h2 = document.createElement('h2');
  const hr = document.createElement('hr');
  const ul = document.createElement('ul');

  contentDiv.innerHTML = '';
  h2.textContent = 'Restaurant Menu';
  restaurantMenu.dishes.forEach(dish => {
    const h3 = document.createElement('h3');
    h3.textContent = dish.type;
    ul.appendChild(h3);
    dish.names.forEach(name => {
      const li = document.createElement('li');
      li.textContent = name;
      ul.appendChild(li);
    });
  });
  contentDiv.appendChild(h2);
  contentDiv.appendChild(hr);
  contentDiv.appendChild(ul);
};

export default loadMenu;