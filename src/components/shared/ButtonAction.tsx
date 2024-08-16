import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/modules/about.module.css';

type ButtonActionProps = {
  name: string;
  links: string;
  icons: string | null;
  isBlank: boolean;
  isDownload: boolean;
};

type IButtonProps = {
  name: string;
  links: string;
};

const ButtonDownload: React.FC<IButtonProps> = ({ links, name }) => {
  return (
    <Link
      to={links}
      target="_blank"
      download
      className={`mx-2 ${styles.profileSummaryActionButton} bn632-hover bn28 `}
    >
      {name}
    </Link>
  );
};

const ButtonRedirectPage: React.FC<IButtonProps> = ({ links, name }) => {
  return (
    <Link
      to={links}
      target="_blank"
      className={`mx-2 ${styles.profileSummaryActionButton} bn632-hover bn28 `}
    >
      {name}
    </Link>
  );
};

const ButtonDefault: React.FC<IButtonProps> = ({ links, name }) => {
  return (
    <Link
      to={links}
      className={`mx-2 ${styles.profileSummaryActionButton} bn632-hover bn28 `}
    >
      {name}
    </Link>
  );
};

const ButtonAction: React.FC<ButtonActionProps> = ({
  name,
  links,
  isBlank,
  isDownload,
}) => {
  const content = isBlank ? (
    <ButtonRedirectPage name={name} links={links} />
  ) : isDownload ? (
    <ButtonDownload name={name} links={links} />
  ) : (
    <ButtonDefault name={name} links={links} />
  );

  return content;
};

export default ButtonAction;
