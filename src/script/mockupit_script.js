// local websites data
const websites = [
  {
    id: 1,
    title: "Mock-up #1: Kampaamo",
    img: "src/img/kampaamo-banneri.jpg",
    link: "mock-up1.html",
  },
  {
    id: 2,
    title: "Mock-up #2: Leipomo",
    img: "src/img/leipomo-banneri.jpg",
    link: "mock-up2.html",
  },
  {
    id: 3,
    title: "Mock-up #3: Lelukauppa",
    img: "src/img/lelukauppa-banneri.jpg",
    link: "mock-up3.html",
  },
  {
    id: 4,
    title: "Mock-up #4: Autokorjaamo",
    img: "src/img/korjaamo-banneri.jpg",
    link: "mock-up4.html",
  },
  {
    id: 5,
    title: "Mock-up #5: Löytöeläinkoti",
    img: "src/img/loytoelainkoti-banneri.jpg",
    link: "mock-up5.html",
  },
  {
    id: 6,
    title: "Mock-up #6: Korukauppa",
    img: "src/img/korukauppa-banneri.jpg",
    link: "mock-up6.html",
  },
  {
    id: 7,
    title: "Mock-up #7: Järjestö",
    img: "src/img/jarjesto-banneri.jpg",
    link: "mock-up7.html",
  },
];

//MOCK-UPIT -scriptit alkaa

var website = '';

websites.reverse().forEach(function(item) {
  website += '<div class="aikajana-itemi"><div class="aikajana-pallo"></div><div class="aikajana-sisalto aikajana-kortti"><a class="aikajana-linkki" href="' + item.link + '"><div class="aikajana-kuvaboksi-wrapper"><div class="aikajana-kuvaboksi" style="background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0, .9)), url(' + item.img + ') center center no-repeat; background-size: cover;"></div></div><h3 class="aikajana-otsikko">' + item.title + '</h3></a></div></div>';
});

document.querySelector(".container").innerHTML = website;
//MOCK-UPIT -scriptit loppuu
