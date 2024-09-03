/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaCode, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import ButtonSocial from '../../shared/button/ButtonSocial';

type IProps = { image: string; name: string; jobs: string };

interface SocialIcon {
  title: string;
  links: string;
  icons: any;
}

const socialIcons: SocialIcon[] = [
  {
    title: 'Github',
    links: 'https://github.com/FarhannDev',
    icons: <FaGithub fontSize={22} color="white" />,
  },
  {
    title: 'Linkedln',
    links: 'https://linkedin.com/in/farhan18',
    icons: <FaLinkedin fontSize={22} color="white" />,
  },
  {
    title: 'Dicoding',
    links: 'https://www.dicoding.com/users/farhannn18/academies',
    icons: <FaCode fontSize={22} color="white" />,
  },

  {
    title: 'Whats App',
    links:
      'https://api.whatsapp.com/send/?phone=6282298717364&text&type=phone_number&app_absent=0',
    icons: <FaWhatsapp fontSize={22} color="white" />,
  },
];

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
        <div className="profile-info-bio__social">
          {socialIcons?.map((social, index) => (
            <ButtonSocial
              key={+index}
              title={social?.title}
              links={social?.links}
              icons={social?.icons}
            />
          ))}
        </div>
      </div>
    </div>
  </>
);

export default ProfileInfo;
