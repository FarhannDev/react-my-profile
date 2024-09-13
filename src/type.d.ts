interface Certificate {
  idSertifikat: string;
  title: string;
  image: string;
  link: string | null;
  startDate: string;
  endDate: string;
  pdfPreview: string | undefined;
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

interface Skills {
  title: string;
  description: string;
  image: string;
  category?: string;
}
