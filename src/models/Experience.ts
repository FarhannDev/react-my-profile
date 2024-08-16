export interface Experience {
  company: string;
  job: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

const experience: Experience[] = [
  {
    company: 'PT Citi Asia Internasional',
    job: 'Full Stack Developer',
    location: 'Jakarta Selatan, Jakarta Raya, Indonesia',
    startDate: 'Aug 2023',
    endDate: 'Des 2023',
    description: `Selama kegiatan magang sebagai Full Stack Developer saya ditugaskan untuk Menentukan struktur halaman web dan mengubah desain situs web menjadi kode front-end di berbagi fitur di halaman web, 
Terlibat langsung dalam pengorganisasian, pengarahan, dan pelaksanaan proyek sesuai jadwal yang direncanakan, mendokumentasikan aplikasi yang telah dikembangkan dan Berkolaborasi dengan Tim Manajemen Proyek, Analis Sistem, Desainer, dan Pengembang UI/UX dalam pengembangan aplikasi web.`,
  },
  {
    company: 'PT Solusi Tiga Selaras',
    job: 'Full Stack Laravel Developer',
    location: 'Jakarta Selatan, Jakarta Raya, Indonesia',
    startDate: 'Aug 2022',
    endDate: 'Des 2022',
    description: `Selama kegiatan magang sebagai Full Stack Laravel Developer saya ditugaskan untuk membuat web aplikasi internal callon menggunakan Javascript dan PHP framework Laravel, implementasi desain database menggunakan fitur PHP Artisan Console pada framework Laravel, memperbaiki bug dalam pengembangan aplikasi, mendokumentasikan aplikasi yang telah dikembangkan, dan Berkolaborasi dengan Tim Manajemen Proyek, Pengembang, dan tim QA selama pengembangan aplikasi web.`,
  },
  {
    company: 'Universitas Bina Sarana Informatika',
    job: 'Volunteer Workshop DevOps Menggunakan Kubernetes (K8s)',
    location: '',
    startDate: 'Jun 2022',
    endDate: 'Jun 2022',
    description: `Selama kegiatan Volunteer Workshop DevOps Menggunakan Kubernetes (K8s) saya Membuat dan menjalankan images serta containers menggunakan Docker. Menguji aplikasi web dalam Docker dan Membantu peserta mengatasi masalah instalasi Docker.`,
  },
  {
    company: 'PT Bipie',
    job: 'Digital Marketing Intern',
    location: 'Tambun Selatan, Jawa Barat, Indonesia',
    startDate: 'Sep 2018',
    endDate: 'Mar 2019',
    description: `Selama kegiatan magang sebagai Digital Marketing Intern saya ditugaskan untuk Melakukan riset Search Engine Optimization (SEO), Menganalisis produk di marketplace,Membuat kode SKU, Mengumpulkan data produk, Mengembangkan rencana promosi dan Mengunggah produk ke media sosial. `,
  },
];

export { experience };
