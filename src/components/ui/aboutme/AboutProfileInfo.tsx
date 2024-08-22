import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useSpring, animated } from '@react-spring/web';

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
  const props = useSpring({
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
  });

  const [styles, api] = useSpring(() => ({
    x: 0,
    y: 0,
    backgroundColor: '#ff0000',
    scale: [1, 1, 1],
    config: {
      precision: 0.0001,
    },
  }));

  const content = (
    <div className="profile-info w-100 d-flex justify-content-center align-items-center g-3">
      <div className="profile-info-bio  animate__animated animate__zoomIn">
        <animated.div>
          <LazyLoadImage
            alt={'Profile'}
            src={image}
            effect="blur"
            loading="lazy"
            className="img-fluid profile-info-bio__image "
          />
        </animated.div>

        <div className="profile-info-bio__name">{name}</div>
        <div className="profile-info-bio__jobs">{jobs}</div>
      </div>
    </div>
  );

  return content;
};

export default AboutProfileInfo;
