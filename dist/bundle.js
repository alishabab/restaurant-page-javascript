!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(){var e=document.querySelector("#content"),t=document.createElement("h2"),n=document.createElement("hr"),r=document.createElement("p"),a=document.createElement("div"),i=document.createElement("img");e.innerHTML="",t.textContent="My Restaurant",r.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, enim impedit praesentium quis ducimus, incidunt alias doloribus beataerepudiandae ut eveniet animi aliquam a sapiente expedita necessitatibus tenetur, nobis porro.",a.setAttribute("class","img-main"),i.setAttribute("src","https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?size=626&ext=jpg"),i.setAttribute("alt","my-restaurant"),a.appendChild(i),e.appendChild(t),e.appendChild(n),e.appendChild(r),e.appendChild(a)},a={dishes:[{type:"North Indian",names:["Dal Fry","Dal Makhni","Butter Chicken"]},{type:"South Indian",names:["Masala Dosa","Idli"]}]},i=function(){var e=document.querySelector("#content"),t=document.createElement("h2"),n=document.createElement("hr"),r=document.createElement("ul");e.innerHTML="",t.textContent="Restaurant Menu",a.dishes.forEach((function(e){var t=document.createElement("h3");t.textContent=e.type,r.appendChild(t),e.names.forEach((function(e){var t=document.createElement("li");t.textContent=e,r.appendChild(t)}))})),e.appendChild(t),e.appendChild(n),e.appendChild(r)},o={location:["Cannaught Place","Shop No. 001","New Delhi, India"]},c=function(){var e=document.querySelector("#content"),t=document.createElement("h2"),n=document.createElement("hr"),r=document.createElement("div");r.setAttribute("class","address"),e.innerHTML="",t.textContent="Contact",o.location.forEach((function(e){var t=document.createElement("p");t.textContent=e,r.appendChild(t)})),e.appendChild(t),e.appendChild(n),e.appendChild(r)},u=null,d=document.querySelectorAll(".tab");d.forEach((function(e){e.addEventListener("click",(function(){return function(e){u&&u.classList.remove("active"),u=e,e.classList.add("active"),"Home"===e.innerText&&r(),"Menu"===e.innerText&&i(),"Contact"===e.innerText&&c()}(e)}))})),r()}]);