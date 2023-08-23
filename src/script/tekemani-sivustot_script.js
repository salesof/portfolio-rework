// local websites data
const websites = [
  {
    id: 1,
    title: "Portfoliotyö #1",
    date: "Elokuu 2017",
    img: "src/img/portfolio1_banneri.jpg",
    link: "portfoliotyo1.html",
  },
  {
    id: 2,
    title: "Portfoliotyö #2",
    date: "Toukokuu 2018",
    img: "src/img/portfolio2_banneri.JPG",
    link: "portfoliotyo2.html",
  },
  {
    id: 3,
    title: "Portfoliotyö #3",
    date: "Syyskuu 2018",
    img: "src/img/portfolio3_banneri.jpeg",
    link: "portfoliotyo3.html",
  },
  {
    id: 4,
    title: "Lost in Music 2018",
    date: "Syyskuu 2018",
    img: "src/img/LIM_banneri.png",
    link: "lost-in-music.html",
  },
  {
    id: 5,
    title: "Musiikki & Media 2018",
    date: "Syyskuu 2018",
    img: "src/img/musamedia_banneri.png",
    link: "musiikki-media.html",
  },
  {
    id: 6,
    title: "Portfoliotyö #4",
    date: "Lokakuu 2018",
    img: "src/img/portfolio4_banneri.jpg",
    link: "portfoliotyo4.html",
  },
  {
    id: 7,
    title: "Portfoliotyö #5",
    date: "Maaliskuu 2019",
    img: "src/img/portfolio5_banneri.png",
    link: "portfoliotyo5.html",
  },
];

//TEKEMÄNI SIVUSTOT -scriptit alkaa

var website = '';

websites.reverse().forEach(function(item) {
  website += '<div class="aikajana-itemi"><div class="aikajana-pallo"></div><div class="aikajana-sisalto aikajana-kortti"><a class="aikajana-linkki" href="' + item.link + '"><div class="aikajana-kuvaboksi-wrapper"><div class="aikajana-kuvaboksi" style="background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0, .9)), url(' + item.img + ') center center no-repeat; background-size: cover;"></div></div><h3 class="aikajana-otsikko">' + item.title + '</h3><div class="pvm">' + item.date + '</div></a></div></div>';
});

document.querySelector(".container").innerHTML = website;
//TEKEMÄNI SIVUSTOT -scriptit loppuu
