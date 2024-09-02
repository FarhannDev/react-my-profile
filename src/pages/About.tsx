import { Col, Row } from 'react-bootstrap';
import { MyComponentInstance } from '../components/ui/shared/MyComponent';
import HTML from '../components/ui/shared/HTML';

const About = () => {
  return (
    <>
      <HTML
        title="Tentang Saya - Farhan"
        description="Daftar Pengalaman"
        keywords="Portofolio, Farhan, Farhan Portofolio"
      />
      <section className="about-section">
        <Row className="justify-content-start g-3 pt-5 ">
          <Col>
            <MyComponentInstance.ProfileInfo
              image="/images/profile.png"
              name="Farhan"
              jobs="Full Stack Developer"
            />

            <MyComponentInstance.ProfileInfoAboutMe
              headingName="Tentang Saya"
              summary="Saya Farhan,  lulusan program studi Informatika dari Universitas Bina Sarana Informatika. Saya berpengalaman sebagai Fullstack Developer selama 1 tahun dalam program magang bersertifikat Kampus Merdeka. Saya memiliki minat dan keterampilan dalam pengembangan web, baik Front-End maupun Back-End.  Saya mempunyai kemampuan komunikasi yang baik, mudah bersosialisasi, dan selalu mempunyai inisiatif tinggi dalam menyelesaikan masalah. Saya suka bekerja mandiri atau dalam tim dan selalu tertarik mempelajari hal-hal baru."
            />
          </Col>
        </Row>

        <Row className="justify-content-start g-3 pt-5">
          <Col>
            <MyComponentInstance.Heading title="Pendidikan" />
            <MyComponentInstance.EducationItemList />
          </Col>
        </Row>

        <Row className="justify-content-start g-3 pt-5 ">
          <Col>
            <MyComponentInstance.Heading title="Sertifikasi dan Penghargaan" />
            <MyComponentInstance.SertifikasiListItem />
          </Col>
        </Row>
      </section>
    </>
  );
};

export default About;
