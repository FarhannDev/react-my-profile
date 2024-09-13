import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type IProps = Skills;

const SkillsItem: React.FC<IProps> = ({ title, description, image }) => (
  <>
    <div className="skills-items">
      <div className="skills-items__info">
        <div className="skills-items__info-name">{title}</div>
        <div className="skills-items__info-status">{description}</div>
      </div>
      <LazyLoadImage
        src={image}
        alt={title}
        loading="lazy"
        effect="blur"
        className="skills-items__image"
      />
    </div>
  </>
);

export default SkillsItem;
