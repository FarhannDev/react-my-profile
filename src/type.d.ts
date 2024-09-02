interface Certificate {
  idSertifikat: string | null;
  title: string;
  image: string;
  link: string | null;
  startDate: string | null;
  endDate: string | null;
}

interface Project {
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

interface Education {
  campus: string;
  studyName: string;
  startDate: string;
  endDate: string;
  description: string;
  ipk: number | string;
}

interface Experience {
  company: string;
  job: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface MenuItem {
  name: string;
  links: string;
}
