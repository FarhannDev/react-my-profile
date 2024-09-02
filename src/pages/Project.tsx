import { MyComponentInstance } from '../components/ui/shared/MyComponent';
import HTML from '../components/ui/shared/HTML';

const Project: React.FC = () => {
  return (
    <>
      <HTML
        title="Portofolio - Farhan"
        description="Daftar Pengalaman"
        keywords="Portofolio, Farhan, Farhan Portofolio"
      />

      <section className="section-portofolio pb-5 ">
        <MyComponentInstance.Heading title="Proyek" />
        <MyComponentInstance.ProjectListItem />
      </section>
    </>
  );
};

export default Project;
