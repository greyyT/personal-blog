import { Aisia, Hcmus } from '@/public/company';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export const navbarItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

export const socialMedia = [
  {
    href: 'mailto:nhannguyen312003@gmail.com',
    icon: Mail,
  },
  {
    href: 'https://github.com/greyyT',
    icon: Github,
  },
  {
    href: 'https://www.linkedin.com/in/greyyt/',
    icon: Linkedin,
  },
];

export const experiences = [
  {
    title: 'Bachelor Degree in Data Science',
    company_name: 'University of Science - VNUHCM',
    icon: Hcmus,
    iconBg: '#E6DEDD',
    date: 'Oct 2021 - Present',
    points: [
      {
        content: 'Current GPA: 3.26/4.0',
        subContent: null,
      },
      {
        content: 'Revelant Coursework:',
        subContent: [
          'Databases',
          'Database Management Systems',
          'Computer Network',
          'Data Structures and Algorithms',
          'Probability and Statistics',
          'Discrete Math',
          'Object Oriented Programming',
        ],
      },
      {
        content: 'Activities:',
        subContent: ['Former member of the VNU HCMUS Math and Computer Science Academic Club (2021 - 2022).'],
      },
    ],
  },
  {
    title: 'Frontend Developer Freelancer',
    company_name: 'AISIA Research Lab',
    icon: Aisia,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - March 2023',
    points: [
      {
        content:
          'Reimplementing the old website written in Wordpress to a new, clean, maintainable website supported by Ruby on Rails template engine and other technologies.',
        subContent: null,
      },
      {
        content:
          'Collaborating with cross-functional teams including designers and other developers to create high-quality products.',
        subContent: null,
      },
      {
        content: 'Implementing responsive design and ensuring cross-browser compatibility.',
        subContent: null,
      },
      {
        content: 'Participating in code reviews and providing constructive feedback to other developers.',
        subContent: null,
      },
    ],
  },
];
