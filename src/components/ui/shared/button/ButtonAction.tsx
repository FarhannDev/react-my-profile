import * as React from 'react';
import { MyComponentInstance } from '../MyComponent';

type ButtonActionProps = {
  name: string;
  links: string;
  icons: string | null;
  isBlank: boolean;
  isDownload: boolean;
};

const ButtonAction: React.FC<ButtonActionProps> = ({
  name,
  links,
  isBlank,
  isDownload,
}) => {
  const content = isBlank ? (
    <MyComponentInstance.ButtonActionRedirect name={name} links={links} />
  ) : isDownload ? (
    <MyComponentInstance.ButtonActionDownload name={name} links={links} />
  ) : (
    <MyComponentInstance.ButtonActionDefault name={name} links={links} />
  );

  return content;
};

export default ButtonAction;
