import React from 'react';
import { MyComponentInstance } from '../components/ui/shared/MyComponent';
import ContactFormInput from '../components/ui/v1/contacts/ContactFormInput';
import HTML from '../components/ui/shared/HTML';

const Contact: React.FC = () => {
  return (
    <>
      <HTML
        title="Contact  - Farhan"
        description="Daftar Pengalaman"
        keywords="Portofolio, Farhan, Farhan Portofolio"
      />
      <div className="contacts-container">
        <MyComponentInstance.Heading title="Contact Me" />
        <hr className="text-secondary" />
        <ContactFormInput />
      </div>
    </>
  );
};

export default Contact;
