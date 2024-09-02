/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { Link } from 'react-router-dom';

type ButtonSocialProp = {
  title: string;
  links: string;
  icons: any;
};

const ButtonSocial: React.FC<ButtonSocialProp> = ({ title, links, icons }) => (
  <Link
    target="_blank"
    to={links}
    className="btn text-white profile-info-bio__social-btn"
    title={title}
  >
    {icons}
  </Link>
);

export default ButtonSocial;
