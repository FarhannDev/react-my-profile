import React from 'react';
import styles from '../../../styles/modules/about.module.css';

type AboutSummaryTextProps = { text: string };

const AboutSummaryText: React.FC<AboutSummaryTextProps> = ({ text }) => {
  return <div className={`${styles.profileSummaryText}`}>{text}</div>;
};

export default AboutSummaryText;
