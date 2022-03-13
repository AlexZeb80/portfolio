// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "={developer}",
};

const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit tellus mauris a diam. ",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    //svg:
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "SASS",
    // svg: '',
    faClass: "fab fa-sass",
  },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },
  {
    name: "Ethereum",
    // svg: '',
    faClass: "fab fa-ethereum",
  },
  {
    name: "Crypto",
    // svg: '',
    faClass: "fab fa-bitcoin",
  },
  {
    name: "Github",
    // svg: '',
    faClass: "fab fa-github-square",
  },
  {
    name: "Database",
    // svg: '',
    faClass: "fas fa-database",
  },
  {
    name: "AWS",
    // svg: '',
    faClass: "fab fa-aws",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Recent Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "NFT Minter",
    skills: ["Solidity smart contract, Web3, ReactJS, Infura, IPFS, CSS, JavaScript"],
    url: "https://google.com",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "NFT Marketplace",
    skills: ["Solidity smart contracts, Web3, ReactJS, API, JSON, IPFS, SCSS, Tailwind, JavaScript"],
    url: "https://google.com",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Crypto Exchange (DEX)",
    skills: ["ReactJS, Moralis framework, 1inch protocol"],
    url: "https://google.com",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Cryptocurrency Price Chart",
    skills: ["ReactJS, JS, Web3, Axios, API calls, responsive grid with filters and search. Details page for each token."],
    url: "https://google.com",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "Cryptocurrency ticker",
    skills: ["Websocket http requests to the Coinbase to receive real time price data. ReactJS, SCSS, JSON, API JavaScript"],
    url: "https://google.com",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "Cryptography module for HASH (sha256+key), and (aes256+key+iv)",
    skills: ["ReactJS, JavaScript, CSS"],
    url: "https://google.com",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Earlier Projects";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Multiple Widgets and Webparts for SharePoint portals",
    url: "https://google.com",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: ".NET development of various modules for enterprise applications",
    url: "https://google.com",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "Miscellaneous 3",
    url: "https://google.com",
  },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Contact";
const contact = {
  pitch:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae.",
  copyright: "Kaustubh Mishra",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com",
  facebook: "https://facebook.com",
  // twitter: "https://twitter.com",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
  resume: "https://novoresume.com/",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
