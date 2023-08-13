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

//Functions
const cancel = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

//dinamically date
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
    "menu": ["Home", "About", "Services", "Projets", "Contact"],
    "bio": ["Hello,", "I'm AHMED MABROUKI", "FREELANCE WEB DESIGNER AND DEVELOPER"],
    "about": {
      "title": "ABOUT ME",
      "topic": "web Developpement Is My Passion",
      "content": `  Hi, I'm Ahmed. I’m a developer web from Morocco. I have over ${experienceNumber} years of experience in designing and developping beautiful things on web.
        When I'm not coding you can probably find me with my family or playing football..`,
    },
    "services": {
      "title": "SERVICES",
      "topic1": "Software Development",
      "content1": `Experienced in both functional and OOP: JavaScript, TypeScript.`,
      "topic2": "Frontend Dev Angular, NestJS",
      "content2": `Passionate about UI/UX. Over ${experienceNumber} years of development experience in HTML, CSS, JS, Anglar and NestJS frameworks.`,
      "topic3": "Ionic Dev Android, iOS",
      "content3": `Skilled in developing hybrid mobile apps and cross-platform solutions using the Ionic framework.`,
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
    "menu": ["Acceuil", "A propos", "Services", "Projets", "Contact"],
    "bio": ["Salut,", "je suis AHMED MABROUKI", "CONCEPTEUR ET DÉVELOPPEUR WEB FREELANCE"],
    "about": {
      "title": "À PROPOS",
      "topic": "Le développement web est ma passion",
      "content": `  Salut, je suis Ahmed. Je suis un développeur web du Maroc. J'ai plus de ${experienceNumber} ans d'expérience dans la conception et le développement de belles choses sur le web.
        Quand je ne code pas, vous pouvez probablement me trouver avec ma famille ou en train de jouer au football..`,
    },
    "services": {
      "title": "SERVICES",
      "topic1": "Développement de logiciels",
      "content1": `Expérimenté à la fois en fonctionnel et en OOP : JavaScript, TypeScript.`,
      "topic2": "Frontend Dev Angular, NestJS",
      "content2": `Passionné d'UI/UX. Plus de ${experienceNumber} ans d'expérience en développement dans les frameworks HTML, CSS, JS, Angular et NestJS.`,
      "topic3": "Ionic Dev Android, iOS",
      "content3": `Compétences dans le développement d'applications mobiles hybrides et de solutions multiplateformes à l'aide du framework Ionic.`,
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

getLang();
