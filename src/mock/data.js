import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: 'fr', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Bonjour, mon nom est ',
  name: 'Claver Akpaki',
  subtitle: 'Je suis un développeur FullStack',
  cta: 'Savoir plus',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `je suis un jeune développeur web , d'applications mobiles et desktop vivant à Montreal au Canada. Passionné et curieux depuis l'enfance par les nouvelles technologies, j'ai décidé d'en faire mon métier de tous les jours. `,
  paragraphTwo: `Mon langage de prédilection est javascript notamment avec la librairie React, je suis également compétent avec des langages comme Php,Java,C++,C# et biens d'autres.`,
  paragraphThree:
    'Vous pouvez en apprendre plus sur mes compétences et expériences en cliquant sur le bouton ci-dessous',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'allofafrica.png',
    title: 'All Of Africa',
    info: `website d'un client dans le domaine du tourisme en Afrique. Ce projet aborde le domaine touristique et comme outils de developpement: Next.js,Cervel`,
    info2: '',
    url: 'https://all-of-africa.now.sh/',
    repo: 'https://github.com/eteka03/allOfAfrica', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Voulez-vous travailler avec moi ? Super! ',
  btn: 'Discutons',
  email: 'eteka03.akpaki@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'www.linkedin.com/in/claver-Akpaki',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/eteka03',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
