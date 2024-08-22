import Heading from '../components/shared/Heading';
import HTML from '../components/shared/HTML';
import ExperienceListItem from '../components/ui/experience/ExperienceListItem';

const Experience = () => {
  return (
    <>
      <HTML
        title="Pengalaman - Farhan Portofolio"
        description="Daftar Pengalaman"
        keywords="Portofolio, Farhan, Farhan Portofolio"
      />
      <section className="section-experience animate__animated animate__jackInTheBox">
        <Heading title="Pengalaman" />
        <ExperienceListItem />
      </section>
    </>
  );
};

export default Experience;
