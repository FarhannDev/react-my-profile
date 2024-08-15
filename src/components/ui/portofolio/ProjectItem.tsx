import React from 'react';
import { Link } from 'react-router-dom';

type ProjectItemProps = {
  n: string | null;
};

const ProjectItem: React.FC<ProjectItemProps> = () => {
  return (
    <div className="portofolio-list__items">
      <Link to={'/portofolio/12121/project'}>
        <img
          className="portofolio-list__items-image"
          src="/images/sertifikat_magang_msib_3.png"
        />
      </Link>

      <div className="portofolio-list__items-date">8 jam yang lalu</div>

      <div className="portofolio-list__items-name">
        Magang MSIB Batch 5 Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Rem, nihil.
      </div>

      <div className="portofolio-list__items-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        facilis, quas vero recusandae maiores, nesciunt rerum, quod est impedit
        laborum cupiditate tempore quaerat nostrum rem unde molestias inventore
        nihil culpa voluptatibus. Officia, rerum laborum quam dicta accusamus
        minima ducimus doloremque illo porro neque molestiae quasi commodi ab
        iusto, iste sequi!
      </div>
    </div>
  );
};

export default ProjectItem;
