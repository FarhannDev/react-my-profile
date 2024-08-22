import React from 'react';

type HeadingProps = { title: string };

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return <h1 className="profile-heading ">{title}</h1>;
};

export default Heading;
