interface Education {
  title: string;
  studyName: string;
  startDate: string;
  endDate: string;
  description: string;
}

const education: Education[] = [
  {
    title: 'UNIVERSITAS BINA SARANA INFORMATIKA',
    studyName: 'Teknik Informatika',
    startDate: '2020',
    endDate: '2024',
    description:
      'I am a 5th semester computer science student at Bina Informatics University. I am currently participating in the MBKM program from the Ministry of Education and Culture. I am someone who really likes and studies current technology. The technologies studied are JavaScript for the frontend and PHP for the backend.',
  },
  {
    title: 'SMK 10 NOVEMBER TAMBUN SELATAN',
    studyName: 'TEKNIK KOMPUTER & JARINGAN',
    startDate: '2017',
    endDate: '2020',
    description:
      'Graduate of SMK 10 November South Tambun majoring in Computer & Network Engineering. Learn how to install an operation system / OS on a PC, configure a LAN network using a proxy, build a LAN network, repair hardware & software.',
  },
];

export default education;
