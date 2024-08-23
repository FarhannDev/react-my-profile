import education from '../../../../models/Education';
import EducationItem from './EducationItem';

const EducationListItem = () => (
  <div className="about-education__list">
    {education.map((edu, index) => (
      <EducationItem key={index} {...edu} />
    ))}
  </div>
);

export default EducationListItem;
