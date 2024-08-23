import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../../styles/modules/about.module.css';

type IButtonProps = { name: string; links: string };

const ButtonActionDefault: React.FC<IButtonProps> = ({ links, name }) => {
  return (
    <Link
      to={links}
      className={`mx-2 ${styles.profileSummaryActionButton} bn632-hover bn28 `}
    >
      {name}
    </Link>
  );
};

export default ButtonActionDefault;
