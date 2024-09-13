import HTML from '../components/ui/shared/HTML';
import { MyComponentInstance } from '../components/ui/shared/MyComponent';

const Home = () => {
  return (
    <>
      <HTML
        title="Home - Farhan"
        description="Daftar Pengalaman"
        keywords="Portofolio, Farhan, Farhan Portofolio"
      />
      <section className="home-container">
        <MyComponentInstance.ProfileInfo
          image="/images/profile.png"
          name="Farhan"
          jobs="Full Stack Developer"
        />

        <MyComponentInstance.ProfileInfoAboutMe
          headingName="About Me"
          summary="Informatics graduate from Bina Sarana Informatics University with experience in website development, both frontend and backend. During college, I participated in the Merdeka Belajar Kampus Merdeka program and worked as a Full Stack Developer. I have a high enthusiasm for learning new things with high initiative and am able to work independently or in a team."
        />
      </section>
    </>
  );
};

export default Home;
