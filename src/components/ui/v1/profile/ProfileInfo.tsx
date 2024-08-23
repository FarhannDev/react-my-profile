import * as React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type IProps = { image: string; name: string; jobs: string };

const ProfileInfo: React.FC<IProps> = ({ name, image, jobs }) => (
  <>
    <div className="profile-info w-100 d-flex justify-content-center align-items-center g-3">
      <div className="profile-info-bio  animate__animated animate__zoomIn">
        <LazyLoadImage
          alt={name}
          src={image}
          effect="blur"
          loading="lazy"
          className="img-fluid profile-info-bio__image "
        />

        <div className="profile-info-bio__name">{name}</div>
        <div className="profile-info-bio__jobs">{jobs}</div>
      </div>
    </div>
  </>
);

export default ProfileInfo;
