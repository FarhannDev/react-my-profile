import education from '../../../models/Education';
import { EducationItem } from '../../LoadableMyComponent';

const EducationListItem = () => {
  return (
    <div className="about-education__list">
      {education.map((edu, index) => (
        <EducationItem key={index} {...edu} />
      ))}
    </div>
  );
};

export default EducationListItem;
