import HTML from '../components/ui/shared/HTML';
import { MyComponentInstance } from '../components/ui/shared/MyComponent';

const Experience = () => {
  return (
    <>
      <HTML
        title="Pengalaman"
        description="Daftar Pengalaman"
        keywords="Portofolio, Farhan, Farhan Portofolio"
      />
      <section className="section-experience animate__animated animate__jackInTheBox">
        <MyComponentInstance.Heading title="Pengalaman" />
        <MyComponentInstance.ExperienceListItem />
      </section>
    </>
  );
};

export default Experience;
