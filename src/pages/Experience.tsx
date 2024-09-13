import HTML from '../components/ui/shared/HTML';
import { MyComponentInstance } from '../components/ui/shared/MyComponent';

const Experience = () => {
  return (
    <>
      <HTML
        title="Pengalaman - Farhan"
        description="Daftar Pengalaman"
        keywords="Portofolio, Farhan, Farhan Portofolio"
      />
      <section className="section-experience">
        <MyComponentInstance.Heading title="Pengalaman Kerja" />
        <MyComponentInstance.ExperienceListItem />
      </section>
    </>
  );
};

export default Experience;
