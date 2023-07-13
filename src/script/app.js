//ETUSIVU - MINUSTA SANOTTUA scriptit alkaa
// select items
const author = document.querySelector('#arvostelu-kirjoittaja');
const title = document.querySelector('#arvostelu-titteli');
const info = document.querySelector('#arvostelu-teksti');

const prevBtn = document.querySelector('.edellinen-nappi');
const nextBtn = document.querySelector('.seuraava-nappi');

//starting item
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded', function(){
  showPerson(currentItem);
});

//show person based on item
function showPerson(person){
  const item = reviews[person];
  author.textContent = item.name;
  title.textContent = item.title;
  info.textContent = item.text;
}

//show next person
nextBtn.addEventListener('click', function() {
  currentItem++;
  if (currentItem > reviews.length - 1){
    currentItem = 0;
  }
  showPerson(currentItem);
});

//show prev person
prevBtn.addEventListener('click', function() {
  currentItem--;
  if (currentItem < 0){
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
//ETUSIVU - MINUSTA SANOTTUA scriptit loppuu
