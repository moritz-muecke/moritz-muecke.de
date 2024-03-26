import uuidv1 from 'uuid/v1';
import {calculateAge} from "./age";

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
  img: 'profile.png',
  paragraphOne: `Hi I'm Moritz, ${calculateAge()} years old software engineer from Bad Hersfeld. In 2016 I finished my B.Sc. degree in Media and Computer Science at the RheinMain University of Applied Sciences. I am working in the IT business since 2005. At the moment I am working for the awesome company`,
  paragraphOneWork: 'AOE GmbH as a Senior Software Developer.',
  paragraphTwo: 'I spent the past years with designing and developing web applications and microservices, creating Software Architectures, doing Identity- and Access Management (IAM) stuff like single sign on and lots of DevOps related work.',
  paragraphThree: 'Besides my work as a software engineer I\'m organizing a Music Festival with some friends called Haune-Rock. It takes place in Germany in a small village called Haunetal-Odensachsen.'
};

// SKILLS DATA
export const skillsData = [
  {
    id: uuidv1(),
    img: 'backend-development.png',
    title: 'Software Development',
    info: 'Building production ready reactive Microservices has been one major topic for me the past years using state of the art technologies to create APIs, persistence layers and event sourcing. Those projects have been realized in a variety of different industries like telecommunication, aviation and logistics.'
  },
  {
    id: uuidv1(),
    img: 'iam.png',
    title: 'Identity- and Access Management',
    info: 'Securing APIs in distributed systems is essential to protect resources from unauthorized access. Authorization, Authentication, OAuth2, SAML and OpenID Connect are just some of the big buzzwords here. Another huge topic is to bundle a variety of identity management systems within a Single Sign On Provider.'
  },
  {
    id: uuidv1(),
    img: 'cicd.png',
    title: 'CI / CD',
    info: 'A good automated workflow to build, test and deploy/ship your software can be a game changer in efficiency. There are many good open source tools out there which help us to create a good fitting Continues Integration and Deployment solution. In my recent projects we put a lot of effort in building pipelines and concepts for release processes in high scaling systems like Kubernetes.'
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
