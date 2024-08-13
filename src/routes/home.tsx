import AboutSummaryHeading from '../components/ui/aboutme/AboutSummaryHeading';
import AboutSummaryText from '../components/ui/aboutme/AboutSummaryText';
import AboutSummaryActionButton from '../components/ui/aboutme/AboutSummaryActionButton';

const Home = () => {
  return (
    <>
      <section className="profile-section">
        <div className="profile-info w-100 d-flex justify-content-center align-items-center g-3">
          <div className="profile-info-bio">
            <img
              src="/images/profile.png"
              className="img-fluid profile-info-bio__image"
            />
            <div className="profile-info-bio__name">Farhan</div>
            <div className="profile-info-bio__jobs">
              Mahasiswa Teknik Informatika
            </div>
          </div>
        </div>

        <div className="profile-summary">
          <AboutSummaryHeading heading="About Me" />
          <AboutSummaryText
            text="  I am Farhan, I am a final semester students at Bina Sarana
            Informatika University, majoring in Informatics. I have interest and
            skills in web development, both Front-End and Back-End. During my
            studies I took part in the Independent Learning Independent Campus
            program from the Indonesian Ministry of Education and Culture, which
            broadened my horizons in the world of technology and increased my
            ability to adapt to a dynamic work environment. I have good
            communication skills, am easy to socialize with, and always take
            high initiative in solving problems. I like working independently or
            in a team and am always interested in learning new things."
          />
          <div className="profile-summary__action">
            <div className="d-flex justify-content-start align-content-start g-3">
              <AboutSummaryActionButton name="Download Cv" links="/" icons="" />
              <AboutSummaryActionButton
                name="Explore"
                links="/about"
                icons=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
