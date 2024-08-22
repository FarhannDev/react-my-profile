import { Heading, ProjectListItem } from '../components/LoadableMyComponent';

const Project: React.FC = () => {
  return (
    <section className="section-portofolio pb-5 animate__animated animate__jackInTheBox">
      <Heading title="Proyek" />
      <ProjectListItem />
    </section>
  );
};

export default Project;
