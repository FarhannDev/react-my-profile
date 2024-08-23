import { Row, Col } from 'react-bootstrap';
import { Experience, experience } from '../../../../models/Experience';
import ExperienceItem from './ExperienceItem';

const ExperienceListItem = () => {
  const items: Experience[] = experience;

  return (
    <Row className="justify-content-start g-3 py-3">
      <Col lg={12} md={12} xl={12}>
        {items.map((item, index) => (
          <ExperienceItem key={index} {...item} />
        ))}
      </Col>
    </Row>
  );
};

export default ExperienceListItem;
