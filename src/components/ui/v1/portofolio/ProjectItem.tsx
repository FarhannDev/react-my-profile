import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { postedAt } from '../../../../utils/formattedDate';

type ProjectItemProps = Project;

const ProjectItem: React.FC<ProjectItemProps> = ({
  id,
  name,
  coverImage,
  description,
  insertDate,
}) => (
  <div className="portofolio-list__items ">
    <Link to={`/porto/${id}/project`}>
      <LazyLoadImage
        alt={name}
        src={coverImage}
        effect="blur"
        loading="lazy"
        className="portofolio-list__items-image"
      />
    </Link>

    <div className="portofolio-list__items-date">
      {postedAt({ date: insertDate })}
    </div>
    <div className="portofolio-list__items-name">{name}</div>
    <div className="portofolio-list__items-description">{description}</div>
  </div>
);

export default ProjectItem;
