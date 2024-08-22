import {
  AboutSummaryHeading,
  AboutSummaryText,
  AboutProfileInfo,
  ButtonAction,
} from '../components/LoadableMyComponent';
import HTML from '../components/shared/HTML';

const Home = () => {
  return (
    <>
      <HTML
        title="Beranda - Farhan Portofolio"
        description="Daftar Pengalaman"
        keywords="Portofolio, Farhan, Farhan Portofolio"
      />
      <section className="profile-section">
        <AboutProfileInfo
          image="/images/profile.png"
          name="Farhan"
          jobs="Front-End Developer"
        />
        <div className="profile-summary animate__animated animate__lightSpeedInLeft">
          <AboutSummaryHeading heading="Ringkasan" />
          <AboutSummaryText text=" Saya Farhan, saya mahasiswa semester akhir Universitas Bina Sarana Informatika jurusan Informatika. Saya memiliki minat dan keterampilan dalam pengembangan web, baik Front-End maupun Back-End.  Saya mempunyai kemampuan komunikasi yang baik, mudah bersosialisasi, dan selalu mempunyai inisiatif tinggi dalam menyelesaikan masalah. Saya suka bekerja mandiri atau dalam tim dan selalu tertarik mempelajari hal-hal baru." />
          <div className="profile-summary__action">
            <div className="d-flex justify-content-start align-content-start g-3">
              <ButtonAction
                isBlank={false}
                isDownload={true}
                name="Unduh CV"
                links="/uploads/download_farhan_cv_2024.pdf"
                icons=""
              />
              <ButtonAction
                isBlank={false}
                isDownload={false}
                name="Jelajahi"
                links="/me"
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
