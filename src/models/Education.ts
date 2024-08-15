export interface Education {
  campus: string;
  studyName: string;
  startDate: string;
  endDate: string;
  description: string;
  ipk: number | string;
}

const education: Education[] = [
  {
    campus: 'UNIVERSITAS BINA SARANA INFORMATIKA',
    studyName: 'Teknik Informatika',
    startDate: '2020',
    endDate: '2024',
    description:
      'I am a 5th semester computer science student at Bina Informatics University. I am currently participating in the MBKM program from the Ministry of Education and Culture. I am someone who really likes and studies current technology. The technologies studied are JavaScript for the frontend and PHP for the backend.',
    ipk: 3.91,
  },
  {
    campus: 'SMK 10 NOVEMBER TAMBUN SELATAN',
    studyName: 'TEKNIK KOMPUTER & JARINGAN',
    startDate: '2017',
    endDate: '2020',
    description:
      'Lulusan SMK 10 November Tambun Selatan jurusan Teknik Komputer & Jaringan. Pelajari cara menginstal sistem operasi / OS pada PC, mengkonfigurasi jaringan LAN menggunakan proxy, membangun jaringan LAN, memperbaiki perangkat keras & perangkat lunak.',
    ipk: '',
  },
];

export default education;
