import React from 'react';
import { Experience } from '../../../../models/Experience';

type ExperienceItemProps = Experience;

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  job,
  location,
  startDate,
  endDate,
  description,
}) => (
  <div className="experience-items">
    <div className="experience-items__job">{job}</div>
    <div className="experience-items__company">{company} </div>
    <div className="experience-items__date">
      {startDate} - {endDate}
    </div>
    <div className="experience-items__location">{location}</div>
    <div className="experience-items__description">{description}</div>
  </div>
);

export default ExperienceItem;
