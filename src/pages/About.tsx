import { Col, Row } from 'react-bootstrap';
import AboutSummaryHeading from '../components/ui/aboutme/AboutSummaryHeading';
import AboutSummaryText from '../components/ui/aboutme/AboutSummaryText';
import Heading from '../components/shared/Heading';
import EducationListItem from '../components/ui/aboutme/EducationListItem';
import SertifikasiListItem from '../components/ui/aboutme/SertifikasiListItem';

const About = () => {
  return (
    <>
      <section className="about-section">
        <Row className="justify-content-start g-3 pt-4">
          <Col>
            <div className="profile-info w-100 d-flex justify-content-center align-items-center g-3">
              <div className="profile-info-bio">
                <img
                  src="/images/profile.png"
                  className="img-fluid profile-info-bio__image"
                />
                <div className="profile-info-bio__name">Farhan</div>
                <div className="profile-info-bio__jobs">
                  Front-End Developer
                </div>
              </div>
            </div>
            <div className="profile-summary">
              <AboutSummaryHeading heading="Tentang Saya" />
              <AboutSummaryText text=" Saya Farhan, saya mahasiswa semester akhir Universitas Bina Sarana Informatika jurusan Informatika. Saya memiliki minat dan keterampilan dalam pengembangan web, baik Front-End maupun Back-End. Selama kuliah saya mengikuti program Kampus Merdeka Belajar Merdeka dari Kementerian Pendidikan dan Kebudayaan RI yang memperluas wawasan saya dalam dunia teknologi dan meningkatkan kemampuan saya dalam beradaptasi dengan lingkungan kerja yang dinamis. Saya mempunyai kemampuan komunikasi yang baik, mudah bersosialisasi, dan selalu mempunyai inisiatif tinggi dalam menyelesaikan masalah. Saya suka bekerja mandiri atau dalam tim dan selalu tertarik mempelajari hal-hal baru." />
            </div>
          </Col>
        </Row>

        <Row className="justify-content-start g-3 pt-4">
          <Col>
            <Heading title="Pendidikan" />
            <EducationListItem />
          </Col>
        </Row>

        <Row className="justify-content-start g-3 pt-4">
          <Col>
            <Heading title="Sertifikasi dan Penghargaan" />
            <SertifikasiListItem />
          </Col>
        </Row>
      </section>
    </>
  );
};

export default About;
