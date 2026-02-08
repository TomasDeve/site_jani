import { Topic, Testimonial, NavItem } from './types';
import { Dna, Leaf, Microscope, Brain, Users, GraduationCap } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Aulas', href: '#classes' },
  { label: 'BioBot IA', href: '#biobot' },
  { label: 'Contato', href: '#contact' },
];

export const TOPICS = [
  {
    id: 'genetics',
    title: 'Genética',
    description: 'Desvendando os mistérios do DNA, hereditariedade e biotecnologia.',
    Icon: Dna,
  },
  {
    id: 'ecology',
    title: 'Ecologia',
    description: 'Compreendendo as relações entre os seres vivos e o meio ambiente.',
    Icon: Leaf,
  },
  {
    id: 'cytology',
    title: 'Citologia',
    description: 'O estudo das células, a unidade fundamental da vida.',
    Icon: Microscope,
  },
  {
    id: 'physiology',
    title: 'Fisiologia',
    description: 'Como funcionam os sistemas do corpo humano e animal.',
    Icon: Brain,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ana Silva',
    role: 'Estudante de Medicina',
    content: 'As aulas da Prof. Janielly foram essenciais para minha aprovação no vestibular. A didática é incrível!',
  },
  {
    id: '2',
    name: 'Pedro Santos',
    role: 'Aluno do Ensino Médio',
    content: 'Biologia era meu pesadelo, mas com os métodos visuais da Janielly, tudo ficou mais claro.',
  },
  {
    id: '3',
    name: 'Mariana Costa',
    role: 'Ex-aluna',
    content: 'A paixão dela pela natureza é contagiante. Aprendi não só a matéria, mas a amar a biologia.',
  },
];