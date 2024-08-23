import * as React from 'react';

type ProfileHeadingProps = { heading: string };

const ProfileHeading: React.FC<ProfileHeadingProps> = ({ heading }) => (
  <h1 className="profile-heading ">{heading}</h1>
);

export default ProfileHeading;
