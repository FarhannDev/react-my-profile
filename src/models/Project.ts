import { nanoid } from 'nanoid';

export interface Project {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  links: string;
  coverImage: string;
  insertDate: string;
}

const projects: Project[] = [
  {
    id: nanoid(16),
    name: 'Proyek Implementasi Asynchronous Communication pada Aplikasi E-Commerce App',
    coverImage: '',
    startDate: 'Feb 2024',
    endDate: 'Feb 2024',
    description: '',
    links: 'https://github.com/FarhannDev/a433-microservices',
    insertDate: new Date().toISOString(),
  },
  {
    id: nanoid(16),
    name: 'Proyek Deploy Aplikasi Karsa Jobs dengan Kubernetes',
    coverImage: '',
    startDate: 'Feb 2024',
    endDate: 'Feb 2024',
    description: '',
    links: 'https://github.com/FarhannDev/a433-microservices',
    insertDate: new Date().toISOString(),
  },
  {
    id: nanoid(16),
    name: 'Proyek Deploy Aplikasi Item App dengan Docker Compose',
    coverImage: '',
    startDate: 'Feb 2024',
    endDate: 'Feb 2024',
    description: '',
    links: 'https://github.com/FarhannDev/a433-microservices',
    insertDate: new Date().toISOString(),
  },
  {
    id: nanoid(16),
    name: 'Proyek Membangun CI/CD Pipeline dengan Jenkins',
    coverImage: '',
    startDate: 'Feb 2024',
    endDate: 'Feb 2024',
    description: '',
    links: 'https://github.com/FarhannDev/a428-cicd-labs',
    insertDate: new Date().toISOString(),
  },
  {
    id: nanoid(16),
    name: 'Proyek Konfigurasi SSH Server',
    coverImage: '',
    startDate: 'Feb 2024',
    endDate: 'Feb 2024',
    description: '',
    links: 'https://github.com/FarhannDev/a428-cicd-labs',
    insertDate: new Date().toISOString(),
  },
  {
    id: nanoid(16),
    name: 'Proyek  Katalog Restoran PWA + Testing and Optimized',
    coverImage: '',
    startDate: 'Feb 2024',
    endDate: 'Feb 2024',
    description: '',
    links: 'https://github.com/FarhannDev/a428-cicd-labs',
    insertDate: new Date().toISOString(),
  },
  {
    id: nanoid(16),
    name: 'Forum Discussion App',
    coverImage: '/images/proyek_forum_discussion.png',
    startDate: 'Jan 2024',
    endDate: 'Jan 2024',
    description: '',
    links: 'https://forumdiscuss.vercel.app',
    insertDate: new Date().toISOString(),
  },
  {
    id: nanoid(16),
    name: 'Open Space App',
    coverImage: '/images/proyek_open_space.png',
    startDate: 'Jan 2024',
    endDate: 'Jan 2024',
    description:
      ' Implementasi Redux pada Aplikasi Sosial Media Open Space (Twitter Like App)',
    links: 'https://dicoding-open-space-app-starter.vercel.app/',
    insertDate: new Date().toISOString(),
  },
  {
    id: nanoid(16),
    name: 'Indonesia Berita App',
    coverImage: '/images/proyek_indonesia_berita.png',
    startDate: 'Jan 2024',
    endDate: 'Jan 2024',
    links: 'https://23id-berita.vercel.app',
    description:
      'Indonesia berita  adalah sebuah website yang dibuat bertujuan untuk menampilkan berita-berita lokal,terbaru, maupun internasional. Proyek ini dibangun menggunakn bahasa pemrograman javascript, API backend berita indo, dan proyek ini menerapkan PWA.',
    insertDate: new Date().toISOString(),
  },
  {
    id: nanoid(16),
    name: 'Movie Catalogue App',
    coverImage: '/images/proyek_movie_catalogue.png',
    startDate: 'Jan 2024',
    endDate: 'Jan 2024',
    links: 'https://mymovies-catalogue.netlify.app/#/',
    description:
      'Movie Catalogue adalah Aplikasi Website yang dibuat bertujuan untuk menampilkan daftar film-film terbaru / terpopuler saat ini. Project ini dibuat menggunakan bahasa pemrograman javascript, backend API The Movie / (TMDB) dan project ini juga menerapkan Progressive Web Apps (PWA)',
    insertDate: new Date().toISOString(),
  },
  {
    id: nanoid(16),
    name: 'Football Club Finder App',
    coverImage: '/images/proyek_footbal_club_finder.png',
    startDate: 'Jan 2024',
    endDate: 'Jan 2024',
    links: 'https://mymovies-catalogue.netlify.app/#/',
    description:
      'Football Club Finder adalah Aplikasi Website yang dibuat bertujuan untuk mencari dan menampilkan daftar Club Olahraga Sepak Bola. Project ini dibuat menggunakan bahasa pemrograman javascript',
    insertDate: new Date().toISOString(),
  },
  {
    id: nanoid(16),
    name: 'Personal Notes App',
    coverImage: '/images/proyek_personalnotes.png',
    startDate: 'Jan 2024',
    endDate: 'Jan 2024',
    links: 'https://23mynote.vercel.app/note',
    description: '',
    insertDate: new Date().toISOString(),
  },
  {
    id: nanoid(16),
    name: 'TodoList App',
    coverImage: '/images/proyek_todolist.png',
    startDate: 'Jan 2024',
    endDate: 'Jan 2024',
    links: 'https://23mytodo.vercel.app/',
    description: '',
    insertDate: new Date().toISOString(),
  },
];

export default projects;
