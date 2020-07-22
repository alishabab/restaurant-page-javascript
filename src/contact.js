const address = {
  location: ['Cannaught Place', 'Shop No. 001', 'New Delhi, India'],
};

const loadContact = () => {
  const contentDiv = document.querySelector('#content');
  const h2 = document.createElement('h2');
  const hr = document.createElement('hr');
  const Addressdiv = document.createElement('div');
  Addressdiv.setAttribute('class', 'address');
  contentDiv.innerHTML = '';
  h2.textContent = 'Contact';
  address.location.forEach(line => {
    const p = document.createElement('p');
    p.textContent = line;
    Addressdiv.appendChild(p);
  });
  contentDiv.appendChild(h2);
  contentDiv.appendChild(hr);
  contentDiv.appendChild(Addressdiv);
};

export default loadContact;