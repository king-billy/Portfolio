import {
  frontend,
  backend,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  resume,
  umassit,
  cics
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Experience'
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Development',
    icon: frontend,
  },
  {
    title: 'Photography',
    icon: backend,
  },
  {
    title: 'Diving',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Repair Center Technician',
    company_name: 'UMass IT',
    icon: umassit,
    iconBg: '#832325',
    date: 'Aug 2021 - May 2022',
  },
  {
    title: 'Systems Engineer',
    company_name: 'UMass Psych Lab',
    icon: umassit,
    iconBg: '#832325',
    date: 'September 2022 - Present',
  },
  {
    title: 'Undergraduate Researcher',
    company_name: 'UMass CICS',
    icon: cics,
    iconBg: '#832325',
    date: 'May 2023 - August 2023',
  },
  {
    title: 'Software Engineer Intern',
    company_name: 'Hill Candy Hospital',
    icon: resume,
    iconBg: '#333333',
    date: 'May 2023 - September 2023',
  },
];

const projects = [
  {
    id: '1',
    name: 'Appointment Dashboard',
    description: 'A dashboard for scheduling Doctor Appointments, currently being used at a Hospital',
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: resume,
    repo: 'https://github.com/king-billy/Appointment-Management-Dashboard-Public.git',
    demo: 'https://appointment-dashboard-04665a8e2eff.herokuapp.com/login',
  },
  {
    id: '2',
    name: 'Scrapr',
    description:
      'A website that scrapes all major E-Commerce website to help you find the best deals with one simple search',
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: resume,
    repo: '/',
    demo: '',
  },
  /*{
    id: '3',
    name: '3',
    description: 'Description',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: resume,
    repo: '/',
    demo: '',
  },*/
];

export { services, technologies, experiences, projects };
