import * as React from 'react';
import ProfileHeading from './ProfileHeading';
import ProfileSummary from './ProfileSummary';
import { MyComponentInstance } from '../../shared/MyComponent';

type IProps = { headingName: string; summary: string };

const ProfileInfoAboutme: React.FC<IProps> = ({ summary, headingName }) => {
  const content = (
    <div className="profile-summary animate__animated animate__lightSpeedInLeft">
      <ProfileHeading heading={headingName} />
      <ProfileSummary summary={summary} />
      <div className="profile-summary__action">
        <div className="d-flex justify-content-start align-content-start g-3">
          <MyComponentInstance.ButtonAction
            isBlank={false}
            isDownload={true}
            name="Download CV"
            links="/uploads/download_farhan_cv_2024.pdf"
            icons=""
          />
          <MyComponentInstance.ButtonAction
            isBlank={false}
            isDownload={false}
            name="About Me"
            links="/me"
            icons=""
          />
        </div>
      </div>
    </div>
  );

  return content;
};

export default ProfileInfoAboutme;
