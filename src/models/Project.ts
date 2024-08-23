import { nanoid } from 'nanoid';

export interface Project {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  links: string;
  type: string;
  coverImage: string;
  insertDate: string;
}

const projects: Project[] = [
  {
    id: nanoid(16),
    name: 'Proyek Implementasi Asynchronous Communication pada Aplikasi E-Commerce App',
    coverImage: '/images/13429_ILL_DevOpsLoop.webp',
    startDate: 'Feb 2024',
    endDate: 'Feb 2024',
    description:
      'Proyek Implementasi Asynchronous Communication pada Aplikasi E-Commerce App merupakan proyek akhir dari pembelajaran Belajar Membangun Arsitektur Microservices. Proyek ini menggunakan Menggunakan Starter Project (E-Commerce App), Mengunggah Container Image ke Docker Hub dan Deploy Aplikasi dengan Docker Compose.',
    links: 'https://github.com/FarhannDev/a433-microservices',
    type: 'DevOps',
    insertDate: '2024-08-23T08:02:49.926Z',
  },
  {
    id: nanoid(16),
    name: 'Proyek Deploy Aplikasi Karsa Jobs dengan Kubernetes',
    coverImage: '/images/13429_ILL_DevOpsLoop.webp',
    startDate: 'Feb 2024',
    endDate: 'Feb 2024',
    description:
      'Proyek Deploy Aplikasi Item App dengan Docker Compose adalah proyek kedua dari pembelajaran Belajar Membangun Arsitektur Microservices. Proyek ini Menggunakan Starter Project (Karsa Jobs), Membuat Script untuk Build dan Push Docker Image dan Deploy Aplikasi ke Kubernetes.',
    links: 'https://github.com/FarhannDev/a433-microservices',
    type: 'DevOps',
    insertDate: '2024-08-23T08:02:49.926Z',
  },
  {
    id: nanoid(16),
    name: 'Proyek Deploy Aplikasi Item App dengan Docker Compose',
    coverImage: '/images/13429_ILL_DevOpsLoop.webp',
    startDate: 'Feb 2024',
    endDate: 'Feb 2024',
    description:
      'Proyek Deploy Aplikasi Item App dengan Docker Compose adalah proyek pertama dari pembelajaran Belajar Membangun Arsitektur Microservices. Proyek ini Menggunakan Starter Project (Item App), Membuat Berkas Dockerfile, Membuat Script untuk Build dan Push Docker Image dan Menggunakan Docker Compose',
    links: 'https://github.com/FarhannDev/a433-microservices',
    type: 'DevOps',
    insertDate: '2024-08-23T08:02:49.926Z',
  },
  {
    id: nanoid(16),
    name: 'Proyek Membangun CI/CD Pipeline dengan Jenkins',
    coverImage: '/images/13429_ILL_DevOpsLoop.webp',
    startDate: 'Feb 2024',
    endDate: 'Feb 2024',
    description:
      'Proyek Membangun CI/CD Pipeline dengan Jenkins adalah proyek akhir dari pembelajaran Belajar Implementasi CI/CD. Proyek ini Menggunakan Proyek Sebelumnya, Menambahkan Deploy Stage, Menjeda Eksekusi Pipeline pada Deploy Stage, Menambahkan Manual Approval Stage dan Memantau Jenkins Pipeline dengan Prometheus dan Grafana.',
    links: 'https://github.com/FarhannDev/a428-cicd-labs',
    type: 'DevOps',
    insertDate: '2024-08-23T08:02:49.926Z',
  },
  {
    id: nanoid(16),
    name: 'Proyek Membangun CI/CD Pipeline dengan Jenkins',
    coverImage: '/images/13429_ILL_DevOpsLoop.webp',
    startDate: 'Feb 2024',
    endDate: 'Feb 2024',
    description:
      'Proyek Membangun CI/CD Pipeline dengan Jenkins adalah proyek pertama dari pembelajaran Belajar Implementasi CI/CD. Proyek ini Menggunakan Source Code React App, Mengaktifkan Fitur Signup dan Membuat Akun Baru di Jenkins dan Membuat Jenkins Pipeline Baru.',
    links: 'https://github.com/FarhannDev/a428-cicd-labs',
    type: 'DevOps',
    insertDate: '2024-08-23T08:02:49.926Z',
  },
  {
    id: nanoid(16),
    name: 'Proyek Konfigurasi SSH Server',
    coverImage: '/images/13429_ILL_DevOpsLoop.webp',
    startDate: 'Feb 2024',
    endDate: 'Feb 2024',
    description:
      'Proyek Konfigurasi SSH Server adalah proyek akhir dari pembelajaran Menjadi Linux System Administrator. Kebutuhan proyek ini Membuat User Baru, Mengonfigurasi SSH dan Membuat Berkas Daftar User dan Log SSH.',
    links: 'https://github.com/FarhannDev/a428-cicd-labs',
    type: 'DevOps',
    insertDate: '2024-08-23T08:02:49.926Z',
  },
  {
    id: nanoid(16),
    name: 'Proyek Shell Scripting',
    coverImage: '/images/13429_ILL_DevOpsLoop.webp',
    startDate: 'Feb 2024',
    endDate: 'Feb 2024',
    description:
      ' Proyek Shell Scripting adalah proyek pertama dari pembelajaran Menjadi Linux System Administrator. Kebutuhan proyek ini Membuat Berkas Shell Script, Melampirkan Berkas Berisi Command History dan Mengarsipkan dan Mengompresi Berkas.',
    links: 'https://github.com/FarhannDev/a428-cicd-labs',
    type: 'DevOps',
    insertDate: '2024-08-23T08:02:49.926Z',
  },
  {
    id: nanoid(16),
    name: 'Proyek Mendesain Ulang Tampilan UI Website Smartnation Menggunakan React',
    coverImage: '/images/proyek_smarrtnation.png',
    startDate: 'Feb 2024',
    endDate: 'Feb 2024',
    description: '',
    links: 'https://smartnation.vercel.app/',
    type: 'Frontend',
    insertDate: '2024-08-23T08:02:49.926Z',
  },
  {
    id: nanoid(16),
    name: 'Proyek  Katalog Restoran PWA + Testing and Optimized',
    coverImage: '',
    startDate: 'Feb 2024',
    endDate: 'Feb 2024',
    description: '',
    links: 'https://github.com/FarhannDev/submission_web_mahir_dicoding',
    type: 'Frontend',
    insertDate: '2024-08-23T08:02:49.926Z',
  },
  {
    id: nanoid(16),
    name: 'Proyek: Membangun Aplikasi React dengan Redux',
    coverImage: '/images/proyek_forum_discussion.png',
    startDate: 'Jan 2024',
    endDate: 'Jan 2024',
    description:
      'Proyek: Membangun Aplikasi React dengan Redux adalah proyek pertama dari pembelajaran Menjadi React Web Developer Expert. Proyek aplikasi React bertemakan “Aplikasi Forum Diskusi” yang memanfaatkan API dari Dicoding Forum API. mengedepankan kreativitas Anda dalam membangun aplikasi, tetapi pastikan aplikasi yang dibuat memenuhi kriteria yang dijelaskan di seperti Fungsionalitas Aplikasi, Bugs Highlighting, dan Arsitektur Aplikasi.',
    links: 'https://forumdiscuss.vercel.app',
    type: 'Frontend',
    insertDate: '2024-08-23T08:02:49.926Z',
  },
  {
    id: nanoid(16),
    name: 'Proyek Menerapkan Automation Testing dan CI/CD pada Aplikasi Forum Diskusi',
    coverImage: '/images/proyek_forum_discussion.png',
    startDate: 'Jan 2024',
    endDate: 'Jan 2024',
    description:
      'Proyek Menerapkan Automation Testing dan CI/CD pada Aplikasi Forum Diskusi adalah proyek akhir dari pembelajaran Menjadi React Web Developer Expert. Proyek aplikasi React bertemakan “Aplikasi Forum Diskusi” yang memanfaatkan API dari Dicoding Forum API. Untuk menguji pemahaman dan lulus dari kelas ini, kami perlu melakukan asesmen dengan memberikan tugas, yakni menerapkan Automation Testing dan CI/CD pada Aplikasi Forum Diskusi yang sudah Anda buat di submission sebelumnya. Tujuan dari proyek ini Buat pengujian mulai dari Unit, Integration, dan End-to-End pada Aplikasi Forum Diskusi, Deploy Aplikasi Forum Diskusi dengan teknik CI/CD dan Memanfaatkan salah satu React Ecosystem pada Aplikasi Forum Diskusi.',
    links: 'https://forumdiscuss.vercel.app',
    type: 'Frontend',
    insertDate: '2024-08-23T08:02:49.926Z',
  },
  {
    id: nanoid(16),
    name: 'Proyek Implementasi Redux pada Aplikasi Sosial Media Open Space (Twitter Like App)',
    coverImage: '/images/proyek_open_space.png',
    startDate: 'Jan 2024',
    endDate: 'Jan 2024',
    description:
      ' Sampai titik ini, pembelajaran yang kami sediakan sudah mencakup seluruh fitur dari Redux melalui pembuatan aplikasi sederhana, yaitu To-do App. Proyek ini bisa dibilang strategis untuk tujuan pembelajaran, tetapi kurang mewakilkan kompleksitas dari proyek yang ada di industri. Jadi, dengan bekal yang sudah kita miliki sejauh ini, seperti Redux, React Redux, dan React Middleware, kita akan membangun aplikasi yang lebih kompleks lagi. Pada dasarnya, kita akan membangun fitur yang esensial hadir di sosial media Twitter, seperti register, login, dan membuat tweet (Open Space menyebutnya talk). Untuk menggunakan aplikasi dan membuat talk, tentu pengguna harus mendaftar akun dan login terlebih dulu.',
    links: 'https://dicoding-open-space-app-starter.vercel.app/',
    type: 'Frontend',
    insertDate: '2024-08-23T08:02:49.926Z',
  },
  {
    id: nanoid(16),
    name: 'Proyek Membangun Aplikasi Indonesia Berita App Menggunakan React',
    coverImage: '/images/proyek_indonesia_berita.png',
    startDate: 'Jan 2024',
    endDate: 'Jan 2024',
    links: 'https://23id-berita.vercel.app',
    description:
      'Indonesia berita  adalah sebuah website yang dibuat bertujuan untuk menampilkan berita-berita lokal,terbaru, maupun internasional. Proyek ini dibangun menggunakn bahasa pemrograman javascript, API backend berita indo, dan proyek ini menerapkan PWA.',
    type: 'Frontend',
    insertDate: '2024-08-23T08:02:49.926Z',
  },
  {
    id: nanoid(16),
    name: 'Proyek Membangun Aplikasi Movie Catalogue App',
    coverImage: '/images/proyek_movie_catalogue.png',
    startDate: 'Jan 2024',
    endDate: 'Jan 2024',
    links: 'https://mymovies-catalogue.netlify.app/#/',
    description:
      'Movie Catalogue adalah Aplikasi Website yang dibuat bertujuan untuk menampilkan daftar film-film terbaru / terpopuler saat ini. Project ini dibuat menggunakan bahasa pemrograman javascript, backend API The Movie / (TMDB) dan project ini juga menerapkan Progressive Web Apps (PWA)',
    type: 'Frontend',
    insertDate: '2024-08-23T08:02:49.926Z',
  },
  {
    id: nanoid(16),
    name: 'Proyek Membangun Aplikasi Football Club Finder App',
    coverImage: '/images/proyek_footbal_club_finder.png',
    startDate: 'Jan 2024',
    endDate: 'Jan 2024',
    links: 'https://mymovies-catalogue.netlify.app/#/',
    description:
      'Football Club Finder adalah Aplikasi Website yang dibuat bertujuan untuk mencari dan menampilkan daftar Club Olahraga Sepak Bola. Project ini dibuat menggunakan bahasa pemrograman javascript',
    type: 'Frontend',

    insertDate: '2024-08-23T08:02:49.926Z',
  },
  {
    id: nanoid(16),
    name: 'Proyek Membangun Aplikasi Catatan Menggunakan React',
    coverImage: '/images/proyek_personalnotes.png',
    startDate: 'Jan 2024',
    endDate: 'Jan 2024',
    links: 'https://23mynote.vercel.app/note',
    description:
      'Proyek Membangun Aplikasi Catatan Menggunakan React adalah proyek akhir dari pembelajaran Belajar Membuat Aplikasi Web dengan React. Proyek aplikasi React bertemakan “Aplikasi Catatan Pribadi” yang Mampu Menampilkan Daftar Catatan,  Mampu Menambahkan Catatan, Mampu Menghapus Catatan, Terdapat Fitur Pencarian Catatan, Terdapat Limit Karakter pada Input Judul Catatan dan Terdapat Fitur Arsip Catatan.',
    type: 'Frontend',
    insertDate: '2024-08-23T08:02:49.926Z',
  },
  {
    id: nanoid(16),
    name: 'Proyek Membangun Aplikasi TodoList App Menggunakan Vue',
    coverImage: '/images/proyek_todolist.png',
    startDate: 'Jan 2024',
    endDate: 'Jan 2024',
    links: 'https://23mytodo.vercel.app/',
    description: '',
    type: 'Frontend',
    insertDate: '2024-08-23T08:02:49.926Z',
  },
  {
    id: nanoid(16),
    name: 'Proyek Membangun Aplikasi Lafood App Menggunakan Flutter',
    coverImage: '/images/proyek_todolist.png',
    startDate: 'Jan 2024',
    endDate: 'Jan 2024',
    links: 'https://github.com/FarhannDev/flutter_lafood_app',
    description:
      'Ini adalah tugas di semester 3 membuat aplikasi  menggunakan framework Flutter',
    type: 'Frontend',
    insertDate: '2024-08-23T08:02:49.926Z',
  },
];

export default projects;
