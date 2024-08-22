import { Heading, ProjectListItem } from '../components/LoadableMyComponent';
import HTML from '../components/shared/HTML';

const Project: React.FC = () => {
  return (
    <>
      <HTML
        title="Proyek - Farhan Portofolio"
        description="Daftar Pengalaman"
        keywords="Portofolio, Farhan, Farhan Portofolio"
      />
      <section className="section-portofolio pb-5 animate__animated animate__jackInTheBox">
        <Heading title="Proyek" />
        <ProjectListItem />
      </section>
    </>
  );
};

export default Project;
