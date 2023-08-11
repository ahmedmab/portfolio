//DOM variables
let body = document.querySelector("body");
let navBar = document.querySelector(".customNavbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let actuelYear = new Date().getUTCFullYear();
let experienceNumber = actuelYear - 2020;
let year = document.getElementById('year');
let experience = document.querySelectorAll('.yearsOfexperience');
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
let lang = document.querySelector("#lang").value;

//Functions
const cancel = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

//dinamically date and years of experience
experience[0].innerHTML = experienceNumber;
experience[1].innerHTML = experienceNumber;
year.innerHTML = actuelYear;


// Sticky Navigation Menu JS Code
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Lang on onresize page 
window.onresize = function () {
  if (document.body.clientWidth > 750) {
    if (menuContainer.contains(langEl)) {
      menuContainer.removeChild(langEl)
    }
    navBar.appendChild(langEl)
  } else {
    menuContainer.appendChild(langEl)
  }

}
// Side NavIgation Menu JS Code
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = () => {
  cancel();
}

//Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    cancel();
    // navBar.classList.remove("active");
    // menuBtn.style.opacity = "1";
    // menuBtn.style.pointerEvents = "auto";
  });
}

//lang
const getLang = () => {
  let lang = document.querySelector("#lang").value;
  let count = 0;
  menuEl.forEach(el => {
    el.children[0].textContent = data[lang].menu[count];
    count++;
  });
  count = 0;
  bioEl.forEach(el => {
    el.textContent = data[lang].bio[count];
    count++;
  });

  //title
  document.title = data[lang].title
  //about
  aboutTitle.textContent = data[lang].about.title
  aboutTopic.textContent = data[lang].about.topic
  aboutContent.textContent = data[lang].about.content
  //SKILLS
  skillTitle.textContent = data[lang].skills.title
  skillTopic.textContent = data[lang].skills.topic
  skillContent.textContent = data[lang].skills.content
  skillExp.textContent = data[lang].skills.experience
  //services
  servicesTitle.textContent = data[lang].services.title;
  servicesTopic1.textContent = data[lang].services.topic1;
  servicesContent1.textContent = data[lang].services.content1;
  servicesTopic2.textContent = data[lang].services.topic2;
  servicesContent2.textContent = data[lang].services.content2;
  servicesTopic3.textContent = data[lang].services.topic3;
  servicesContent3.textContent = data[lang].services.content3;
  //services
  productsTitle.textContent = data[lang].projets.title;
  product1.textContent = data[lang].projets.product1;
  product2.textContent = data[lang].projets.product2;
  //contact
  contactTitle.textContent = data[lang].contact.title
  contactTopic.textContent = data[lang].contact.topic
  contactContent.textContent = data[lang].contact.content

}
//***********Data******************

const data = {
  "en": {
    "title": "Ahmed Mabrouki – Web developer",
    "menu": ["Home", "About", "Skills", "Services", "Projets", "Contact"],
    "bio": ["Hello,", "I'm AHMED MABROUKI", "FREELANCE WEB DESIGNER AND DEVELOPER"],
    "about": {
      "title": "ABOUT ME",
      "topic": "web Developpement Is My Passion",
      "content": ` years Experience as front end developer in Angular with Ionic is
      preferred. Well-versed in fundamental visual and interactive design discipline.
      Strive to use web standards to build solutions using semantic markup and CSS. Pre-processor CSS systems such
      as SASS to compile style files is a must.
      Working Experience in building mobile experiences using responsive design. Developing using front end
      toolkits such as HTML5 Boilerplate / Bootstrap or any other HTML/CSS framework and implementing JS UI
      frameworks.`,
    },
    "skills": {
      "title": "SKILLS",
      "topic": "Skills Reflects Our Knowledge",
      "content": `Being able to code to a high standard, Writing AngularJs, SCSS, and HTML.
      Understanding the importance of good UX, and converting Figma files to UI, pixel perfect
      Gather as much information beforehand to avoid mistakes
      Reliability and high level of communication
      Code consistency, cleanliness and quality
      Troubleshoot and fix lighthouse issues within the current Angular Project
      Proven experience implementing front-end JavaScript applications.`,
      "experience": `Years Of Experience`
    },
    "services": {
      "title": "SERVICES",
      "topic1": "Web Applications",
      "content1": `I create successful responsive websites that are fast, easy to use, and built with best practices. The main
      area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps with
      Angular, features,
      animations, and coding interactive layouts.`,
      "topic2": "Mobile apps",
      "content2": `With the right knowledge and skills about the latest technology in mobile app development, with IONIC i
      create mobile app and solutions for our clients across sectors`,
      "topic3": "Creation of websites",
      "content3": `I create successful responsive websites that are fast, easy to use, and built with best practices. The main
      area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps with
      Angular, features,
      animations, and coding interactive layouts.`,
    },
    "projets": {
      "title": "PROJECTS",
      "product1": `I create successful responsive websites that are fast, easy to use, and built with best practices. The main
      area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps with
      Angular, features,
      animations, and coding interactive layouts.`,
      "product2": `With the right knowledge and skills about the latest technology in mobile app development, with IONIC i
      create mobile app and solutions for our clients across sectors`,
    },
    "contact": {
      "title": "Contact Me",
      "topic": "Have Any Project ?",
      "content": `You are now one step a way from getting your website or app, just leave a message for me or contact me
      directly via`,
    }
  },

  "fr": {
    "title": "Ahmed Mabrouki – Développeur web",
    "menu": ["Acceuil", "A propos", "Compétences", "Services", "Projets", "Contact"],
    "bio": ["Salut,", "je suis AHMED MABROUKI", "CONCEPTEUR ET DÉVELOPPEUR WEB FREELANCE"],
    "about": {
      "title": "À PROPOS DE MOI",
      "topic": "Le développement web est ma passion",
      "content": ` ans d'expérience en tant que développeur front-end dans Angular avec Ionic est
      préféré. Bien versé dans la discipline fondamentale du design visuel et interactif.
      S'efforcer d'utiliser les normes Web pour créer des solutions utilisant le balisage sémantique et CSS. Systèmes CSS pré-processeur tels
      comme SASS pour compiler les fichiers de style est un must.
      Expérience de travail dans la création d'expériences mobiles à l'aide d'un design réactif. Développer avec le front-end
      des boîtes à outils telles que HTML5 Boilerplate / Bootstrap ou tout autre framework HTML/CSS et implémentant JS UI
      cadres.`,
    },
    "skills": {
      "title": "COMPÉTENCES",
      "topic": "Les compétences reflètent nos connaissances",
      "content": `Être capable de coder selon des normes élevées, d'écrire AngularJs, SCSS et HTML.
      Comprendre l'importance d'une bonne UX et convertir les fichiers Figma en UI, pixel perfect
      Rassemblez un maximum d'informations en amont pour éviter les erreurs
      Fiabilité et haut niveau de communication
      Cohérence, propreté et qualité du code
      Dépanner et résoudre les problèmes de phare dans le projet Angular actuel
      Expérience éprouvée dans la mise en œuvre le front-end des applications JavaScript.`,
      "experience": `Années d'Experience`
    },
    "services": {
      "title": "SERVICES",
      "topic1": "Applications web",
      "content1": `Je crée des sites Web réactifs performants, rapides, faciles à utiliser et construits avec les meilleures pratiques. Le principal
      mon domaine d'expertise est le développement front-end, HTML, CSS, JS, la création d'applications Web petites et moyennes avec
      Angular, fonctionnalités, animations et codage de mises en page interactives.`,
      "topic2": "Applications mobile",
      "content2": `Avec les bonnes connaissances et compétences sur les dernières technologies en matière de développement d'applications mobiles, avec IONIC nous
      allons créer des applications et des solutions mobiles pour nos clients dans tous les secteurs`,
      "topic3": "Création des sites web",
      "content3": `Je crée des sites Web réactifs performants, rapides, faciles à utiliser et construits avec les meilleures pratiques. Le principal
      mon domaine d'expertise est le développement front-end, HTML, CSS, JS, la création d'applications Web petites et moyennes avec
      Angular, fonctionnalités, animations et codage de mises en page interactives.`,
    },
    "projets": {
      "title": "PROJETS",
      "product1": `Je crée des sites Web réactifs performants, rapides, faciles à utiliser et construits avec les meilleures pratiques. Le principal
      mon domaine d'expertise est le développement front-end, HTML, CSS, JS, la création d'applications Web petites et moyennes avec
      Angular, fonctionnalités,
      animations et codage de mises en page interactives.`,
      "product2": `Avec les bonnes connaissances et compétences sur les dernières technologies en matière de développement d'applications mobiles, avec IONIC je
      vais créer des applications et des solutions mobiles pour nos clients dans tous les secteurs`,
    },
    "contact": {
      "title": "Contactez moi",
      "topic": "Vous avez un projet ?",
      "content": `Vous êtes maintenant sur le point d'obtenir votre site Web ou votre application, laissez-moi simplement un message ou contactez-moi
      directement via`,
    }
  }
}

//home
const menuEl = document.querySelectorAll('.menu>li');
const bioEl = document.querySelectorAll('.bio>div');
const menuContainer = document.querySelector('.menu');
const langEl = document.querySelector('.menu>form');
//about
const aboutTitle = document.querySelector('.about>.content>.title>span');
const aboutTopic = document.querySelector('.about .topic');
const aboutContent = document.querySelector('.about p');
const aboutDowload = document.querySelector('.about a');
//skills
const skillTitle = document.querySelector('.skills>.content>.title>span');
const skillTopic = document.querySelector('.skills .topic');
const skillContent = document.querySelector('.skills p');
const skillExp = document.querySelector('.skills .exp');
//services
const servicesTitle = document.querySelector('.services>.content>.title>span');
const servicesTopic1 = document.querySelector('.topic1 .topic');
const servicesContent1 = document.querySelector('.topic1 p');
const servicesTopic2 = document.querySelector('.topic2 .topic');
const servicesContent2 = document.querySelector('.topic2 p');
const servicesTopic3 = document.querySelector('.topic3 .topic');
const servicesContent3 = document.querySelector('.topic3 p');
//projets
const productsTitle = document.querySelector('.projets>.content>.title>span');
const product1 = document.querySelector('.product1 p');
const product2 = document.querySelector('.product2 p');
//about
const contactTitle = document.querySelector('.contact>.content>.title>span');
const contactTopic = document.querySelector('.contact .topic');
const contactContent = document.querySelector('.contact p');

getLang();
