import * as React from 'react';
import styles from '../../../../styles/modules/about.module.css';

type ProfileSummaryProps = { summary: string };

const ProfileSummary: React.FC<ProfileSummaryProps> = ({ summary }) => (
  <div className={`${styles.profileSummaryText}`}>{summary}</div>
);

export default ProfileSummary;
