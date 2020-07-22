const initialPageLoad = () => {
  const contentDiv = document.querySelector('#content');
  const h2 = document.createElement('h2');
  const hr = document.createElement('hr');
  const p = document.createElement('p');
  const div = document.createElement('div');
  const img = document.createElement('img');
  contentDiv.innerHTML = '';
  h2.textContent = 'My Restaurant';
  p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, enim impedit praesentium quis ducimus, incidunt alias doloribus beataerepudiandae ut eveniet animi aliquam a sapiente expedita necessitatibus tenetur, nobis porro.';
  div.setAttribute('class', 'img-main');
  img.setAttribute('src', 'https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?size=626&ext=jpg');
  img.setAttribute('alt', 'my-restaurant');
  div.appendChild(img);
  contentDiv.appendChild(h2);
  contentDiv.appendChild(hr);
  contentDiv.appendChild(p);
  contentDiv.appendChild(div);
};

export default initialPageLoad;