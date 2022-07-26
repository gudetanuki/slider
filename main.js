'use strict';

const picArray = [
  "img/pic1.png",
  "img/pic2.png",
  "img/pic3.png",
  "img/pic4.png"
]

const selected = [];

const pics = document.getElementById('pics');
const thumb = document.getElementById('thumb');
const list = document.querySelectorAll('li');

let current = 0;

/* <li><button onclick="getImageNum(0)"><img src="img/pic1.png" alt=""></button></li> */
const createLi = () => {
  for (let i = 0; i < picArray.length; i++) {
    const li = document.createElement('li');
    const button = document.createElement('button');
    const img = document.createElement('img');
    img.src = picArray[i];
    li.appendChild(button);
    button.appendChild(img);
    thumb.appendChild(li);

    selected.push(li);

    button.addEventListener('click', () => {
      current = i;
      pics.src = picArray[current];
      upDate(current);
    });
  }
}
createLi();

const upDate = (current) => {
  selected.forEach(el => {
    el.classList.remove('select');
  }); 
  selected[current].classList.add('select');
}


const changeSlide = () => {
  if (current === 3) {
    current = 0;
    upDate(current);
  } else {
    current++;
    upDate(current);
  }
  pics.src = picArray[current];
};

setInterval(changeSlide, 3000);

console.log(selected);