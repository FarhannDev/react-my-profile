import React from 'react';
type ProjectSearchEmptyProps = {
  image: string;
  text: string;
};

const ProjectSearchEmpty: React.FC<ProjectSearchEmptyProps> = ({
  image,
  text,
}) => (
  <div className="portofolio-searchempty-container">
    <img src={image} alt="" className="portofolio-searchempty-logo" />

    <div className="portofolio-searchempty-text">{text}</div>
  </div>
);

export default ProjectSearchEmpty;
