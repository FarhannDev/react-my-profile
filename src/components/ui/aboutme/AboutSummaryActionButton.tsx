import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../styles/modules/about.module.css';

type AboutSummaryActionButtonProps = {
  name: string;
  links: string;
  icons: string | null;
};

const AboutSummaryActionButton: React.FC<AboutSummaryActionButtonProps> = ({
  name,
  links,
}) => {
  return (
    <Link
      to={links}
      className={`mx-2 ${styles.profileSummaryActionButton} bn632-hover bn28 `}
    >
      {name}
    </Link>
  );
};

export default AboutSummaryActionButton;
