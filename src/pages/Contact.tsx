import { Button, Form } from 'react-bootstrap';
import { MyComponentInstance } from '../components/ui/shared/MyComponent';

const Contact = () => {
  return (
    <>
      <section className="contact-section">
        <MyComponentInstance.Heading title="Hubungi Saya" />

        <div className="contact-container">
          <Form className="contact-forminput-container">
            <Form.Group
              className="contact-forminput-group"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label className="contact-forminput-group__label">
                Nama
              </Form.Label>
              <Form.Control
                className="contact-forminput-group__input"
                type="text"
                placeholder="Nama Lengkap Anda"
                autoComplete="name"
              />
            </Form.Group>
            <Form.Group
              className="contact-forminput-group"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label className="contact-forminput-group__label">
                Email
              </Form.Label>
              <Form.Control
                className="contact-forminput-group__input"
                type="text"
                placeholder="Email Anda"
                autoComplete="email"
              />
            </Form.Group>

            <Form.Group
              className="contact-forminput-group"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="contact-forminput-group__label">
                Pesan
              </Form.Label>
              <Form.Control
                className="contact-forminput-group__textarea"
                as="textarea"
                placeholder="Tuliskan pesan"
              />
            </Form.Group>

            <div className="contact-forminput__button-container">
              <Button
                type="submit"
                className="contact-forminput-button bn632-hover bn28"
              >
                Kirimkan
              </Button>
            </div>
          </Form>
        </div>
      </section>
    </>
  );
};

export default Contact;
