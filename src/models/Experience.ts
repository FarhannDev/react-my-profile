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
    company: 'PT.Winnicode Garuda Indonesia',
    job: 'Web Developer Laravel',
    location: 'Bandung, Jawa Barat, Indonesia',
    startDate: 'Aug 2024',
    endDate: 'Sekarang',
    description: ``,
  },
  {
    company: 'PT Citi Asia Internasional',
    job: 'Full Stack Developer',
    location: 'Jakarta Selatan, Jakarta Raya, Indonesia',
    startDate: 'Aug 2023',
    endDate: 'Des 2023',
    description: ``,
  },
  {
    company: 'PT SOLUSI TIGA SELARAS',
    job: 'Full Stack Laravel Developer',
    location: 'Jakarta Selatan, Jakarta Raya, Indonesia',
    startDate: 'Aug 2022',
    endDate: 'Des 2022',
    description: ``,
  },
  {
    company: 'Universitas Bina Sarana Informatika',
    job: 'Volunteer Workshop DevOps Menggunakan Kubernetes (K8s)',
    location: '',
    startDate: 'Jun 2022',
    endDate: 'Jun 2022',
    description: ``,
  },
  {
    company: 'PT Bipie',
    job: 'Digital Marketing Intern',
    location: 'Tambun Selatan, Jawa Barat, Indonesia',
    startDate: 'Sep 2018',
    endDate: 'Mar 2019',
    description: ``,
  },
];

export { experience };
