import { Col, Row } from 'react-bootstrap';
import {
  AboutProfileInfo,
  AboutSummaryHeading,
  AboutSummaryText,
  EducationListItem,
  Heading,
  SertifikasiListItem,
} from '../components/LoadableMyComponent';

const About = () => {
  return (
    <>
      <section className="about-section">
        <Row className="justify-content-start g-3 pt-5 ">
          <Col>
            <AboutProfileInfo
              image="/images/profile.png"
              name="Farhan"
              jobs="Front-End Developer"
            />
            <div className="profile-summary animate__animated animate__lightSpeedInLeft">
              <AboutSummaryHeading heading="Tentang Saya" />
              <AboutSummaryText text=" Saya Farhan, saya mahasiswa semester akhir di Universitas Bina Sarana Informatika jurusan Informatika. Saya memiliki minat dan keterampilan dalam pengembangan web, baik Front-End maupun Back-End. Selama kuliah saya mengikuti program Kampus Merdeka Belajar Merdeka dari Kementerian Pendidikan dan Kebudayaan RI yang memperluas wawasan saya dalam dunia teknologi dan meningkatkan kemampuan saya dalam beradaptasi dengan lingkungan kerja yang dinamis. Saya mempunyai kemampuan komunikasi yang baik, mudah bersosialisasi, dan selalu mempunyai inisiatif tinggi dalam menyelesaikan masalah. Saya suka bekerja mandiri atau dalam tim dan selalu tertarik mempelajari hal-hal baru." />
            </div>
          </Col>
        </Row>

        <Row className="justify-content-start g-3 pt-5 animate__animated animate__zoomInLeft animate__delay-2s">
          <Col>
            <Heading title="Pendidikan" />
            <EducationListItem />
          </Col>
        </Row>

        <Row className="justify-content-start g-3 pt-5 animate__animated animate__zoomInUp animate__delay-2s">
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
