import { MyComponentInstance } from '../components/ui/shared/MyComponent';
import HTML from '../components/ui/shared/HTML';
import SkillsItemList from '../components/ui/v1/skills/SkillsItemList';
import skills from '../models/Skill';

const About = () => {
  const programmingSkills = skills?.filter(
    (skill) => skill.category === 'Programming Languages'
  );

  const frameworkSkills = skills?.filter(
    (skill) => skill.category === 'Framework'
  );
  const toolsSkills = skills?.filter((skill) => skill.category === 'Tools');

  return (
    <>
      <HTML
        title="About Me - Farhan"
        description="Daftar Pengalaman"
        keywords="Portofolio, Farhan, Farhan Portofolio"
      />
      <div className="about-container">
        <div className="about-profile-container">
          <MyComponentInstance.ProfileInfo
            image="/images/profile.png"
            name="Farhan"
            jobs="Full Stack Developer"
          />

          <MyComponentInstance.ProfileInfoAboutMe
            headingName="About Me"
            summary="Informatics graduate from Bina Sarana Informatics University with experience in website development, both frontend and backend. During college, I participated in the Merdeka Belajar Kampus Merdeka program and worked as a Full Stack Developer. I have a high enthusiasm for learning new things with high initiative and am able to work independently or in a team."
          />
        </div>

        <div className="about-skills-container">
          <MyComponentInstance.Heading title="Skills" />

          <div className="skills-container">
            <div className="skills-proglang pt-3">
              <h3 className="skills-heading">Programming Languages</h3>

              <SkillsItemList skills={programmingSkills} />
            </div>
            <div className="skills-framework pt-3">
              <h3 className="skills-heading">Framework</h3>
              <SkillsItemList skills={frameworkSkills} />
            </div>
            <div className="skills-tools pt-3">
              <h3 className="skills-heading">Tools</h3>
              <SkillsItemList skills={toolsSkills} />
            </div>
          </div>
        </div>
        <div className="about-sertifikasi-container">
          <MyComponentInstance.Heading title="Certifications & Awards" />
          <MyComponentInstance.SertifikasiListItem />
        </div>
      </div>
    </>
  );
};

export default About;
