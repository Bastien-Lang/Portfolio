// const shape = document.querySelector('.animated-shape');

  // document.addEventListener('mousemove', (e) => {
  //   const mouseX = e.clientX / window.innerWidth;
  //   const mouseY = e.clientY / window.innerHeight;

  //   // Augmente l'intensité des transformations
  //   const translateX = (mouseX - 1) * 100; // Mouvement horizontal plus large
  //   const translateY = (mouseY - 1) * 100; // Mouvement vertical plus large
  //   const scaleX = 1 + (mouseX - 1) * 1; // Déformation horizontale accentuée
  //   const scaleY = 1 + (mouseY - 1) * 1; // Déformation verticale accentuée

  //   // Appliquer les transformations
  //   shape.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`;
  // });





  let cookieClicker = document.querySelector("#cookieClicker");
  let cookieCount = document.querySelector("#cookie-count b");
  let cookiePlural = document.querySelector("#cookie-plural");
  let cookieImg = document.getElementById("imgCookie");
  
  let count = 0;
  let compteur1 = 0;
  let compteur2 = 0;
  let cookieArray = ["cookie", "cookie 1", "cookie 2", "cookie 3", "cookie 4", "cookie 5", "cookie 6"];
  
  // Fonction d'animation shake et mise à jour des cookies
  cookieClicker.addEventListener("click", () => {
    count++;
    cookieCount.textContent = count;
  
    // Gestion du singulier/pluriel pour "cookie"
    if (count === 1) {
      cookiePlural.textContent = "cookie";
    } else if (count < 15) {
      cookiePlural.textContent = "cookies";
    } else if (count < 30) {
      cookiePlural.textContent = "super cookies";
    } else if (count < 50) {
      cookiePlural.textContent = "mega cookies";
    } else if (count < 80) {
      cookiePlural.textContent = "giga cookies";
    } else if (count < 100) {
      cookiePlural.textContent = "omega cookieeees";
    } else if (count < 150) {
      cookiePlural.textContent = "AHHHHHHHHHHH";
    } else if (count >= 150) {
      cookiePlural.textContent = "AHAHAHA COOKIEE";
    }
    if (count >= 150 && count % 15 === 0) {
      cookieRain(); // Appelle la fonction cookieRain à 150 et tous les 15 clics suivants
    }

    // Change l'image du cookie
    changeCookie();
  
    // Ajoute l'animation de tremblement
    cookieImg.classList.add("active");
    setTimeout(() => {
      cookieImg.classList.remove("active");
    }, 700);
  
    // Ajoute un effet "pop" au clic
    let popEffect = document.createElement("div");
    popEffect.classList.add("cookie-effect");
    popEffect.textContent = `+${count}`;
    popEffect.style.left = `${Math.random() * 100}px`;
    popEffect.style.top = `${Math.random() * 50}px`;
    cookieClicker.appendChild(popEffect);
  
    setTimeout(() => {
      popEffect.remove();
    }, 600);
  });
  
  // Fonction pour changer l'image
  function changeCookie() {
    cookieImg.src = `${cookieArray[compteur1]}.svg`;
    if (compteur1 >= cookieArray.length - 1) {
      compteur1 = cookieArray.length - 1;
    } else if (compteur2 % 30 == 0) {
      compteur1++;
    }
    compteur2++;
  }
  








let fallSpeed = 1; // Durée de chute initiale en secondes (par défaut 7s)
let tmp = 0

function createCookie() {
  tmp ++
  if(tmp >= 200) return

  const cookie = document.createElement('div');
  cookie.classList.add('cookie');

  // Positionnement aléatoire sur l'axe X
  cookie.style.left = Math.random() * 100 + 'vw'; 

  const min = 70
  const max = 150

  const rdmSize = Math.floor(Math.random() * (max - min + 1)) + min
  cookie.style.width = rdmSize + "px"
  cookie.style.height = rdmSize + "px"
  // Durée aléatoire pour la chute, ajustée avec la vitesse
  const fallDuration = Math.random() * 2 + fallSpeed; // Chute entre fallSpeed et fallSpeed+2 secondes
  cookie.style.animationDuration = fallDuration + 's';

  document.getElementById('cookie-container').appendChild(cookie);

  setTimeout(() => {
    cookie.remove();
  }, fallDuration * 1000);
}

function accelerateCookies() {
  if (fallSpeed > 2) { // Limite minimale à 2 secondes pour éviter trop de vitesse
    fallSpeed -= 0.1; // Réduire la durée de chute petit à petit
  }
}


function cookieRain(){
  console.log("pluie de cookies")
  setInterval(createCookie, 20);
  setInterval(accelerateCookies, 1000);
}



function afficherCookie() {
  const divCookie = document.querySelector('#cookieClicker');
  const cookieElement = document.createElement('span');
  cookieElement.innerText = `+ 1 cookie`;
  cookieElement.className = 'compteCookie';
  divCookie.appendChild(cookieElement);
  cookieElement.style.transition = "opacity 0.5s, transform 0.5s"; // Transition pour les effets
  setTimeout(() => {
      cookieElement.style.opacity = "0"; // Animation de disparition
      cookieElement.style.transform = "translateY(-10px)"; // Animation de déplacement
  }, 0);
  setTimeout(() => {
      cookieElement.remove(); // Retirer le texte après un court instant
  }, 1000);
}


let sendMessage = document.querySelector("#contact>div>button")
let contactForm = document.getElementById("contact-form")
let sections = document.querySelectorAll("section")
let closeForm = document.getElementById("closeForm")
let croix = document.getElementById("close")

function close(){
  contactForm.classList.toggle("hidden") 
  closeForm.classList.toggle("hidden") 
  contactForm.classList.toggle("show")  
  closeForm.classList.toggle("show")
  for(let section of sections){
    section.classList.toggle("blur")  
  }
}

croix.addEventListener("click", close)
sendMessage.addEventListener("click", close)
closeForm.addEventListener("click", close)






let english = document.getElementById("english");
let aboutMe = document.getElementById("about-me");
let skills = document.getElementById("skills");

let aPropos = document.getElementById("à-propos");
let competences = document.getElementById("competences");
let french = document.getElementById("french");

let englishFlags = document.querySelectorAll(".english-flag");
let frenchFlags = document.querySelectorAll(".french-flag");

let collab = {
  "url":"collab", 
  "titre" :"Corolle X Le routard",
  "desc":'Projet étudiant en groupe : Collaboration fictive entre une marque et un magazine de voyage',
  "descEN" : 'Student group project: fake collaboration between a brand and a travel magazine',
  "descDetaillee" : 'Student group project: fake collaboration between a brand and a travel magazine. Used R3F for 3D rendering of the doll <br>Difficulties : Using React Three Fiber to make the doll in 3D :( <br>Tech used: Nextjs, CSS, Framer Motion, React Three Fiber',
  "blur" : true,
  "scale":true,
  "finalUrl":false,
  "multiImg": ["collab", "doll"]
}
let escape = {
  "url":"escape", 
  "titre" :"Escape Game",
  "desc":'Projet étudiant en groupe : Escape Game en ligne',
  "descEN" : 'Student group project: online escape game',
  "descDetaillee" : 'Student group project: online escape game. <br>Difficulties : The number of assets made it almost impossible to make reponsive :( <br>Tech used: Nextjs, CSS, GSAP',
  "blur" : true,
  "scale":true,
  "finalUrl":false,
}

let lumina = {
  "url":"lumina", 
  "titre" :"Lumina",
  "desc":'Projet étudiant en groupe : Agence web fictive de création de sites internet',
  "descEN" : 'Student group project: fictional web agency creating websites',
  "descDetaillee" : 'Student group project: fictional web agency creating websites.I used ThreeJS for the cube, camera movements and lighting. <br>Difficulties : First time using ThreeJS <br>Tech used: Nextjs, CSS, ThreeJS, Framer Motion',
  "blur" : true,
  "scale":true,
  "finalUrl":false,
}

let budget = {
  "url":"budget", 
  "titre" :"Budget App",
  "desc":'Projet personnel : site  type "bancaire" de gestion de dépenses',
  "descEN" : 'Personal project: "banking"-style expense management site',
  "descDetaillee" : 'Personnal project: banking"-style expense management site in collaboration with Maxime Baudet. I did the front-end and I also participated in half of the back-end. <br>Difficulties : It it my most complex back-end project so far ! <br>Languages used: PHP, CSS, MYSQL',
  "blur" : true,
  "scale":true,
  "finalUrl":false,
};
let weackers = {
  "url":"weackers", 
  "titre" :"Weackers",
  "desc":"Projet étudiant en binôme : site de vente de chaussures",
  "descEN":"Student project in pairs: shoe sales website",
  "descDetaillee" : "Student project: shoe sales website in collaboration with Maxime Delattre. I did all the back-end and participated in the front-end. <br>Difficulties : We didn't have any flexbox class yet... <br>Languages used: PHP, CSS",
  "blur" : true,
  "scale":true,
  "finalUrl":false,
};

let traveller = {
  "url":"traveller_login", 
  "titre" :"Traveller",
  "desc":"Projet étudiant : Marathon du web, site de voyage à faire en 48h non stop",
  "descEN":"Student project : Web marathon, travel site to be done in 48h non-stop",
  "descDetaillee" : "Student project: Web marathon, travel site to be done in 48h non-stop. I did the most of the front-end and designs. <br>Difficulties : The time limit ! <br>Languages used: PHP (laravel), CSS, JS",
  "scale" : true,
  "blur":true,
  "finalUrl":false,
  "multiImg": ["traveller.gif", "traveller_login"]
};

let upfest = {
  "url":"upfest", 
  "titre" :"UPFEST",
  "desc":"Projet étudiant : Création et communication autour d'un festival",
  "descEN":"Student project : Creation and communication around a festival",
  "descDetaillee" : "Student project: Creation and communication around a festival. I made the whole custom wordpress theme by mylsef. <br>Difficulties : the amount of SVG's I was given was had to make responsive ! <br>Languages used: PHP, CSS, (Wordpress custom theme)",
  "blur" : true,
  "scale":true,
  "finalUrl":false,
};

let mirror = {
  "url":"mirror", 
  "titre" :"Mirror",
  "desc":"Projet étudiant : Affiche pour le Musée d'Art Moderne de Paris",
  "descEN":"Student project : Poster for the Musée d'Art Moderne de Paris",
  "descDetaillee" : "Student project: Poster for the Musée d'Art Moderne de Paris. <br>Software used: Photoshop",
  "scale" : true,
  "blur":false,
  "finalUrl":false,
};


let hanzzimmer = {
  "url":"hanzzimmer", 
  "titre" :"Hanz Zimmer",
  "desc":"Projet étudiant : Première de couverture pour Hanz Zimmer",
  "descEN":"Student project : Cover for Hanz Zimmer",
  "descDetaillee" : "Student project: Cover Premiere for Hanz Zimmer. <br>Software used: Photoshop",
  "scale" : true,
  "blur" : false,
  "finalUrl":false,
};
let saulbass = {
  "url":"Saul_bass", 
  "titre" :"Mystère à l'iut",
  "desc":"Projet étudiant : Affiche / photos dans le style Saul Bass",
  "descEN":"Student project: Poster/ photos in the style of Saul Bass",
  "descDetaillee" : "Student project: Poster/ photos in the style of Saul Bass. <br>Software used : Photoshop, <br>photos taken by ourselves",
  "scale" : true,
  "blur" : false,
  "finalUrl":false,
};

let cardsUrl = [budget, weackers,traveller, upfest, mirror, hanzzimmer, saulbass];
let cards = document.querySelectorAll(".background");
let card = document.querySelectorAll(".card");
let cardsBack = document.querySelectorAll(".card-back span");
const overlay = document.querySelector('#overlay')
const overlayImg = document.querySelector("#overlay img")
const overlayH2 = document.querySelector('#overlay div h2')
const overlaySpan = document.querySelector("#overlay div p")
const overlayLink = document.querySelector('#overlay a')
// Fonction pour mettre à jour les descriptions des cartes en fonction de la langue
function updateCardDescriptions(isEnglish) {
  for (let i = 0; i < cardsUrl.length; i++) {
    if(cardsUrl[i].blur){cards[i].style.filter= "blur(4px)"}
    cardsBack[i].textContent = isEnglish ? cardsUrl[i].descEN : cardsUrl[i].desc;
    cards[i].style.backgroundImage = `url(${cardsUrl[i].url}.png)`
  }
}
  for (let i = 0; i < cardsUrl.length; i++) {
    if(cardsUrl[i].scale){
        card[i].addEventListener("click", function(){
          console.log(cards[i])
            overlay.classList.add("show")
            overlay.classList.remove("hide")
            if (cardsUrl[i].multiImg) {
              let divMultiImg = document.createElement('div');
              divMultiImg.classList.add("multiImg");
              cardsUrl[i].multiImg.forEach(imgUrl => {
                let imgElement = document.createElement('img');
                let extension = imgUrl.includes('.') ? '' : '.png';
                imgElement.src = `${imgUrl}${extension}`;
                divMultiImg.appendChild(imgElement);
                imgElement.classList.add("multiImg");
              });
              overlay.appendChild(divMultiImg);
            } else {
              let extension = cardsUrl[i].url.includes('.') ? '' : '.png';
              overlayImg.src = `${cardsUrl[i].url}${extension}`;
            }
            overlayImg.classList.add("multiImgUnique");
            overlayH2.textContent = cardsUrl[i].titre;
            overlaySpan.innerHTML = cardsUrl[i].descDetaillee;
            if (cardsUrl[i].finalUrl != false) {
              overlayLink.href = cardsUrl[i].finalUrl;
              overlayLink.style.display = "block";
            } else {
              overlayLink.style.display = "none";
            }
            overlay.addEventListener("click", function() {
              overlayImg.src = "";
              overlayH2.textContent = "";
              overlaySpan.textContent = "";
              overlay.classList.add("hide");
              overlay.classList.remove("show");
              overlayLink.href = "";
              
              // Supprimer les éléments de la classe multiImg et leurs enfants
              let multiImgElements = document.querySelectorAll('.multiImg');
              multiImgElements.forEach(element => {
                element.remove();
              });
            });
        });
    }
  }

// Fonction pour afficher la version anglaise
function showEnglish() {
  english.classList.remove("hidden");
  aboutMe.classList.remove("hidden");
  skills.classList.remove("hidden");
  englishFlags.forEach(flag => flag.classList.add("showFlag"));

  frenchFlags.forEach(flag => flag.classList.remove("showFlag"));
  aPropos.classList.add("hidden");
  competences.classList.add("hidden");
  french.classList.add("hidden");

  // Mettre à jour les descriptions des cartes en anglais
  updateCardDescriptions(true);
}

// Fonction pour afficher la version française
function showFrench() {
  aPropos.classList.remove("hidden");
  competences.classList.remove("hidden");
  french.classList.remove("hidden");
  frenchFlags.forEach(flag => flag.classList.add("showFlag"));

  englishFlags.forEach(flag => flag.classList.remove("showFlag"));
  english.classList.add("hidden");
  aboutMe.classList.add("hidden");
  skills.classList.add("hidden");

  // Mettre à jour les descriptions des cartes en français
  updateCardDescriptions(false);
}

// Ajout des écouteurs d'événements pour tous les drapeaux anglais
englishFlags.forEach(flag => {
  flag.addEventListener("click", showEnglish);
});

// Ajout des écouteurs d'événements pour tous les drapeaux français
frenchFlags.forEach(flag => {
  flag.addEventListener("click", showFrench);
});

const burger = document.querySelector('#burger')
const leftNav = document.querySelector('#left-nav')
const rightNav = document.querySelector('#right-nav')
const header = document.querySelector("header")

function updateNavVisibility() {
  if (window.innerWidth < 768) {
    // Ajouter la classe "hide" si elle n'est pas déjà présente
    if (!leftNav.classList.contains("hide")) {
      leftNav.classList.add("hide");
    }
  } else {
    // Enlever la classe "hide" si elle est présente
    if (leftNav.classList.contains("hide")) {
      leftNav.classList.remove("hide");
    }
  }
}

updateNavVisibility();

burger.addEventListener("click", function () {
  leftNav.classList.toggle("deroulee")
  leftNav.classList.toggle("hide")
  header.style.height = "auto"
})

window.addEventListener("resize", updateNavVisibility)

let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0
}

mybutton.addEventListener("click", topFunction)

document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const mainContent = document.getElementById("main-content");
  const animationDuration = 2000; // Durée de l'animation en millisecondes

  // Démarre une fois que la page a chargé complètement
  window.addEventListener("load", () => {
    const animationStart = performance.now();

    // Calculer le temps restant si le chargement a pris moins de temps que l'animation
    const remainingTime = Math.max(animationDuration - (performance.now() - animationStart), 0);

    setTimeout(() => {
      // Cacher l'écran de chargement et afficher le contenu
      loadingScreen.style.display = "none"; // Cache l'écran de chargement
      mainContent.style.opacity = "1"; // Fait apparaître le contenu principal
    }, remainingTime);
  });
});


// Initialisation
// Initialisation par défaut des cartes en français
updateCardDescriptions(true);
changeCookie()


