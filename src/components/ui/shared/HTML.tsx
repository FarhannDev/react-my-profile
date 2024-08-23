import * as React from 'react';
import { Helmet } from 'react-helmet';

type IProps = { title: string; description: string; keywords: string };

const HTML: React.FC<IProps> = ({ title, description, keywords }) => (
  <Helmet>
    <title>{title} </title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
  </Helmet>
);

export default HTML;
