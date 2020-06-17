import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Moritz Mücke | Software Engineer', // e.g: 'Name | Developer'
  lang: 'de', // e.g: en, es, fr, jp
  description: 'Portfolio Page of Moritz Mücke', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Moritz Mücke',
  subtitle: 'and I\'m a',
  profession: 'Software Engineer',
  cta: 'Tell me more!',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hi I\'m Moritz, 32 years old software engineer from Kassel. In 2016 I finished my B.Sc. degree in Media and Computer Science at the RheinMain University of Applied Sciences. I am working in the IT business since 2005. At the moment I am working for the awesome company',
  paragraphOneWork: 'AOE GmbH.',
  paragraphTwo: 'I spent the past years with designing and developing web applications and microservices, doing Identity- and Access Management (IAM) stuff like single sign on and lots of DevOps related work.',
  paragraphThree: 'Besides my work as a software engineer I\'m organizing a Rock-Music Festval with some friends called Haune-Rock. It takes place in Germany in a small village called Haunetal-Odensachsen.'
};

// SKILLS DATA
export const skillsData = [
  {
    id: uuidv1(),
    img: 'backend-development.png',
    title: 'Backend Development',
    info: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
  },
  {
    id: uuidv1(),
    img: 'iam.png',
    title: 'Identity- and Access Management',
    info: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
  },
  {
    id: uuidv1(),
    img: 'cicd.png',
    title: 'CI / CD',
    info: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
  },
  {
    id: uuidv1(),
    img: 'app.png',
    title: 'App Development',
    info: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
  }
];

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'haune-rock.png',
    title: 'Haune-Rock Festival',
    info: 'Started as an experiment but has grown to a small to medium-sized Music Festival with bands from all over the nation and also some bands outside of Germany.',
    info2: 'My tasks besides everything web related like our Homepage, eCommerce and Social Media is also scouting of bands which fits to our audience.',
    url: 'https://haune-rock.de',
    repo: '', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: 'Wanna talk to me? Go ahead!',
  btn: 'Mail me!',
  email: 'hi@moritz-muecke.de',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/moritz_muecke',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/moritz-m%C3%BCcke-375641158/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/moritz-muecke',
    },
  ],
};
