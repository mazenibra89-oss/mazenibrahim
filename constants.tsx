import { Project, Skill, TimelineItem, Stat } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'POS',
    description: 'A modern point-of-sale system with real-time transactions and an intuitive, clean interface.',
    image: 'images/pos.PNG',
    tags: ['React', 'Tailwind', 'Node.js'],
    category: 'Fullstack',
    liveUrl: 'https://ibra-pos.vercel.app/',
    githubUrl: '#'
  },
  {
    id: '2',
    title: 'Booking System',
    description: 'A streamlined booking system with real-time availability and a smooth, responsive interface.',
    image: 'images/arena.PNG',
    tags: ['React', 'D3.js', 'Chart.js'],
    category: 'React',
    liveUrl: 'https://arenabooking-theta.vercel.app/',
    githubUrl: '#'
  },
  {
    id: '3',
    title: 'Lapor RT/RW',
    description: 'A smart community reporting platform with structured workflows and a user-friendly, modern UI.',
    image: 'images/laporbos.PNG',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'HTML',
    liveUrl: 'https://laporbos-psi.vercel.app/',
    githubUrl: '#'
  },
  {
    id: '4',
    title: 'E - Commerce',
    description: 'A modern e-commerce storefront with high performance and clean UI.',
    image: 'images/ecommerce.PNG',
    tags: ['React', 'Firebase', 'Mapbox'],
    category: 'Fullstack',
    liveUrl: 'https://ibracommerce.vercel.app/',
    githubUrl: '#'
  }
];

export const SKILLS: Skill[] = [
  { name: 'HTML/CSS', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'UI/UX Design', level: 85 }
];

export const TIMELINE: TimelineItem[] = [
  { year: '2022', title: 'Started the Journey', description: 'Began learning HTML, CSS, and basic JavaScript principles.' },
  { year: '2023', title: 'First Freelance Project', description: 'Built a custom landing page for a local coffee shop .' },
  { year: '2024', title: 'Mastering Web', description: 'Deep dived into the React ecosystem and built several SPA projects.' },
  { year: '2025', title: 'Accepted at Sepuluh Nopember Institute of Technology', description: 'Entering the Bachelor of Information Systems study program.' }
];

export const STATS: Stat[] = [
  { label: 'Projects Completed', value: '45', suffix: '+' },
  { label: 'Years Experience', value: '3', suffix: '' },
  { label: 'Happy Clients', value: '28', suffix: '' },
  { label: 'Coffee Cups', value: '999', suffix: '+' }
];
