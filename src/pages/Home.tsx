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
          <AboutSummaryHeading heading="Tentang Saya" />
          <AboutSummaryText text=" Saya Farhan, saya mahasiswa semester akhir Universitas Bina Sarana Informatika jurusan Informatika. Saya memiliki minat dan keterampilan dalam pengembangan web, baik Front-End maupun Back-End. Selama kuliah saya mengikuti program Kampus Merdeka Belajar Merdeka dari Kementerian Pendidikan dan Kebudayaan RI yang memperluas wawasan saya dalam dunia teknologi dan meningkatkan kemampuan saya dalam beradaptasi dengan lingkungan kerja yang dinamis. Saya mempunyai kemampuan komunikasi yang baik, mudah bersosialisasi, dan selalu mempunyai inisiatif tinggi dalam menyelesaikan masalah. Saya suka bekerja mandiri atau dalam tim dan selalu tertarik mempelajari hal-hal baru." />
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
