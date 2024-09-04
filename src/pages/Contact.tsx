import React from 'react';
import { MyComponentInstance } from '../components/ui/shared/MyComponent';
import ContactFormInput from '../components/ui/v1/contacts/ContactFormInput';

const Contact: React.FC = () => {
  return (
    <>
      <section className="contact-section">
        <MyComponentInstance.Heading title="Hubungi Saya" />
        <ContactFormInput />
      </section>
    </>
  );
};

export default Contact;
