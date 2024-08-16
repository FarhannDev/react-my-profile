type SummaryHeadingProps = { heading: string };
import styles from '../../../styles/modules/about.module.css';

const AboutSummaryHeading: React.FC<SummaryHeadingProps> = ({ heading }) => {
  return <h1 className={styles.profileSummaryHeading}>{heading}</h1>;
};

export default AboutSummaryHeading;
