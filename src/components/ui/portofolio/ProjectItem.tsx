import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../../models/Project';
import { postedAt } from '../../../utils/formattedDate';

type ProjectItemProps = Project;

const ProjectItem: React.FC<ProjectItemProps> = ({
  id,
  name,
  coverImage,
  description,
  insertDate,
}) => {
  return (
    <div className="portofolio-list__items">
      <Link to={`/portofolio/${id}/project`}>
        <img
          className="portofolio-list__items-image"
          src={coverImage}
          alt={name}
        />
      </Link>

      <div className="portofolio-list__items-date">{postedAt(insertDate)}</div>
      <div className="portofolio-list__items-name">{name}</div>
      <div className="portofolio-list__items-description">{description}</div>
    </div>
  );
};

export default ProjectItem;
