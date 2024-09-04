import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm, SubmitHandler } from 'react-hook-form';
import Swal from 'sweetalert2';

// type ContactFormInputProps = {};

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const ContactFormInput: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log({ message: data });

    reset(); // Mereset form setelah submit berhasil

    Swal.fire({
      title: 'Berhasil',
      text: 'Pesan anda sudah dikirimkan',
      icon: 'success',
    });
  };

  return (
    <div className="contact-container">
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="contact-forminput-container"
      >
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
            {...register('name', { required: true })}
            aria-invalid={errors.name ? 'true' : 'false'}
            isInvalid={!!errors.name}
          />

          <Form.Control.Feedback type="invalid">
            {errors.name && <span>Bidang ini tidak boleh kosong</span>}
          </Form.Control.Feedback>
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
            {...register('email', {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            })}
            aria-invalid={errors.email ? 'true' : 'false'}
            isInvalid={!!errors.email}
          />

          <Form.Control.Feedback type="invalid">
            {errors.name && <span>Bidang ini tidak boleh kosong</span>}
          </Form.Control.Feedback>
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
            {...register('message', { required: true })}
            aria-invalid={errors.message ? 'true' : 'false'}
            isInvalid={!!errors.message}
          />

          <Form.Control.Feedback type="invalid">
            {errors.message && <span>Bidang ini tidak boleh kosong</span>}
          </Form.Control.Feedback>
        </Form.Group>

        <div className="contact-forminput__button-container">
          <button
            type="submit"
            className="contact-forminput-button bn632-hover bn28"
          >
            Kirimkan
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ContactFormInput;
