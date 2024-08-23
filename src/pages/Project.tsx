import HTML from '../components/ui/shared/HTML';
import { MyComponentInstance } from '../components/ui/shared/MyComponent';

const Project: React.FC = () => {
  return (
    <>
      <HTML
        title="Proyek"
        description="Daftar Pengalaman"
        keywords="Portofolio, Farhan, Farhan Portofolio"
      />
      <section className="section-portofolio pb-5 animate__animated animate__jackInTheBox">
        <MyComponentInstance.Heading title="Proyek" />
        <MyComponentInstance.ProjectListItem />
      </section>
    </>
  );
};

export default Project;
