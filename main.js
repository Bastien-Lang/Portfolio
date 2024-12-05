
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





  //si pas cliquer les cookies pendant 2 sec le compte des cookies descend
  let cookieClicker = document.querySelector("#cookieClicker");
  let cookieCount = document.querySelector("#cookie-count b");
  let cookiePlural = document.querySelector("#cookie-plural");
  let count = 1;
  
  cookieClicker.addEventListener("click", function() {
    cookieCount.textContent = count++;
  
    afficherCookie()
    changeCookie()
  
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
    } else if (count == 151) {
      cookieRain();
    } else if (count > 151 && count < 300) {
      cookiePlural.textContent = "AHAHAHA COOKIEE";
    } else if (count >= 300) {
      cookieRain();
    }
  
    // Calcul de la durée de l'animation (vitesse du tremblement)
    let animationDuration = Math.max(0.1, 1 - (count - 15) * 0.05);
    cookieClicker.style.animationDuration = `${animationDuration}s`;
  
    // Ajuste l'amplitude du tremblement (plus fort avec plus de cookies)
    let shakeDistance = Math.min(30, (count - 15) * 2); // Maximum 30px de tremblement
    cookieClicker.style.setProperty('--shake-distance', `${shakeDistance}px`);
  
    // Si l'amplitude est maximale, ajoute un léger mouvement vertical
    let shakeVertical = shakeDistance >= 30 ? '5px' : '0px';
    cookieClicker.style.setProperty('--shake-vertical', shakeVertical);
  
    // Redémarre l'animation de la div entière avec l'effet de résonance
    cookieClicker.classList.remove('shake-resonate');
    void cookieClicker.offsetWidth; // Reflow pour réinitialiser l'animation
    cookieClicker.classList.add('shake-resonate');
  
    // Retire la classe après la durée totale de l'animation pour la div entière
    setTimeout(() => {
      cookieClicker.classList.remove('shake-resonate');
    }, animationDuration * 1000 * 4); // 4 fois la durée de l'animation
  });
  





let compteur1 = 0
let compteur2 = 0
let cookieArray = ['cookie', 'cookie 1','cookie 2', 'cookie 3','cookie 4', 'cookie 5', 'cookie 6']
let cookieImg = document.getElementById("imgCookie")
function changeCookie(){
  cookieImg.src = `${cookieArray[compteur1]}.svg`
  if(compteur1>=cookieArray.length-1){
    compteur1 = cookieArray.length-1
  }else if(compteur2 %30 == 0){
    compteur1++
  }
  compteur2++
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

let budget = {
  "url":"budget", 
  "desc":'Projet personnel : site  type "bancaire" de gestion de dépenses',
  "descEN" : 'Personal project: "banking"-style expense management site',
  "blur" : true
};
let weackers = {
  "url":"weackers", 
  "desc":"Projet étudiant en binôme : site de vente de chaussures",
  "descEN":"Student project in pairs: shoe sales website",
  "blur" : true
};

let upfest = {
  "url":"upfest", 
  "desc":"Projet étudiant : Création et communication autour d'un festival",
  "descEN":"Student project : Creation and communication around a festival",
  "blur" : true
};

let mirror = {
  "url":"mirror", 
  "titre" :"Mirror",
  "desc":"Projet étudiant : Affiche pour le Musée d'Art Moderne de Paris",
  "descEN":"Student project : Poster for the Musée d'Art Moderne de Paris",
  "descDetaillee" : "Student project: Poster for the Musée d'Art Moderne de Paris. Software used: Photoshop",
  "scale" : true
};

let hanzzimmer = {
  "url":"hanzzimmer", 
  "titre" :"Hanz Zimmer",
  "desc":"Projet étudiant : Première de couverture pour Hanz Zimmer",
  "descEN":"Student project : Cover for Hanz Zimmer",
  "descDetaillee" : "Student project: Cover Premiere for Hanz Zimmer. Software used: Photoshop",
  "scale" : true
};
let saulbass = {
  "url":"Saul_bass", 
  "titre" :"Mystère à l'iut",
  "desc":"Projet étudiant : Affiche / photos dans le style Saul Bass",
  "descEN":"Student project: Poster/ photos in the style of Saul Bass",
  "descDetaillee" : "Student project: Poster/ photos in the style of Saul Bass. Software used : Photoshop, photos taken by ourselves",
  "scale" : true
};

let cardsUrl = [budget, weackers, upfest, mirror, hanzzimmer, saulbass];
let cards = document.querySelectorAll(".background");
let card = document.querySelectorAll(".card");
let cardsBack = document.querySelectorAll(".card-back span");
const overlay = document.querySelector('#overlay')
const overlayImg = document.querySelector("#overlay img")
const overlayH2 = document.querySelector('#overlay div h2')
const overlaySpan = document.querySelector("#overlay div span")

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
            overlayImg.src = `${cardsUrl[i].url}.png`
            overlayH2.textContent = cardsUrl[i].titre
            overlaySpan.textContent = cardsUrl[i].descDetaillee
            overlay.addEventListener("click", function(){
                overlayImg.src = ""
                overlayH2.textContent = ""
                overlaySpan.textContent = ""
                overlay.classList.add("hide")
                overlay.classList.remove("show")
            })
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

function setupScrollBehavior() {
  const isDesktop = window.matchMedia("(min-width: 768px)").matches;

  if (isDesktop) {
    console.log("Desktop detected: Activating segmented scroll");
   // document.body.style.scrollSnapType = "y mandatory";
  } else {
    console.log("Mobile detected: Resetting to default scroll");
    leftNav.classList.add("hide")
    rightNav.classList.add("hide")
    document.body.style.scrollSnapType = "none";
    document.body.style.overflow = "auto";
  }
}

const burger = document.querySelector('#burger')
const leftNav = document.querySelector('#left-nav')
const rightNav = document.querySelector('#right-nav')
const header = document.querySelector("header")
burger.addEventListener("click", function(){
  leftNav.classList.toggle("deroulee")
  leftNav.classList.toggle("hide")
  header.style.height = "auto"
})


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

mybutton.addEventListener("click", topFunction)




// Initialisation
// Initialisation par défaut des cartes en français
updateCardDescriptions(true);
changeCookie()
setupScrollBehavior()

