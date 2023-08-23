// local reviews data
const reviews = [
  {
    id: 1,
    name: "Veikko Hyyrynen",
    title: "entinen mFabrik Production Oy:n toimitusjohtaja",
    text:
      "Sofia on hoitanut työnsä ahkerasti ja tunnollisesti hätkähtämättä pienistä. Hän on motivoitunut työntekijä, joka osaa toimia niin itsenäisesti kuin ryhmässäkin. Hän on osoittanut luotettavuutta ja hyvää aloitekykyä työssään ollen reipas ja positiivinen työtään kohtaan. Voimme suositella Sofiaa vastaaviin tehtäviin.",
  },
  {
    id: 2,
    name: "mFabrikin yhteyshenkilö maailmanlaajuisesta tapahtumasta",
    title: "",
    text:
      "Kiitos erittäin paljon hyvästä työstä kutsuprosessin kanssa. Tämä meni todella hyvin loppupeleissä 🙂",
  },
  {
    id: 3,
    name: "mFabrikin yhteistyökumppani",
    title: "",
    text:
      "Haluan nöyrimmin kiittää teitä mahtavasta yhteistyöstä, hienoista projekteista sekä kaikista opeista yhteisen matkamme varrella. Toivottavasti tiemme kohtaavat vielä joko busineksen tai muiden aktiviteettien puitteissa jatkossakin.",
  },
];

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
