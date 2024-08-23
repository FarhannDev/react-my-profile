import React from 'react';
import { Education } from '../../../../models/Education';

type EducationItemProps = Education;

const EducationItem: React.FC<EducationItemProps> = ({
  campus,
  studyName,
  startDate,
  endDate,
  ipk,
  description,
}) => (
  <div className="about-education__list-item">
    <div className="about-education__list-item-campus">{campus}</div>
    <div className="about-education__list-item-prodi">{studyName}</div>
    <div className="about-education__list-item-date">
      {startDate} - {endDate}
    </div>
    <div className="about-education__list-item-date">IPK: {ipk}</div>
    <div className="about-education__list-item-description">{description}</div>
  </div>
);

export default EducationItem;
