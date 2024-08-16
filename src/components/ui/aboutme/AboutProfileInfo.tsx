import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type AboutProfileInfoProps = {
  image: string;
  name: string;
  jobs: string;
};

const AboutProfileInfo: React.FC<AboutProfileInfoProps> = ({
  image,
  name,
  jobs,
}) => {
  return (
    <div className="profile-info w-100 d-flex justify-content-center align-items-center g-3">
      <div className="profile-info-bio">
        <LazyLoadImage
          alt={'Profile'}
          src={image}
          effect="blur"
          loading="lazy"
          className="img-fluid profile-info-bio__image"
        />

        <div className="profile-info-bio__name">{name}</div>
        <div className="profile-info-bio__jobs">{jobs}</div>
      </div>
    </div>
  );
};

export default AboutProfileInfo;
