import * as React from 'react';

type HeadingProps = { title: string };

const Heading: React.FC<HeadingProps> = ({ title }) => (
  <h1 className="profile-heading ">{title}</h1>
);

export default Heading;
