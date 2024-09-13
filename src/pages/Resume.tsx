import HTML from '../components/ui/shared/HTML';
import { MyComponentInstance } from '../components/ui/shared/MyComponent';
import '../styles/resume.css';

const Resume = () => {
  return (
    <>
      <HTML
        title="Resume - Farhan"
        description="Daftar Pengalaman"
        keywords="Portofolio, Farhan, Farhan Portofolio"
      />

      <div className="resume-container">
        <MyComponentInstance.Heading title="Resume" />
        <hr className="text-secondary" />

        <div className="resume-education">
          <h1 className="resume-item__heading ">Education</h1>
          <MyComponentInstance.EducationItemList />
        </div>
        <div className="resume-experience">
          <h1 className="resume-item__heading ">Work Experience</h1>
          <MyComponentInstance.ExperienceListItem />
        </div>
      </div>
    </>
  );
};

export default Resume;
