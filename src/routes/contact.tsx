import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <div>Halaman Contact</div>;
      <Link to={'/'} className="btn btn-danger rounded">
        Kembali Ke halaman utama
      </Link>
    </>
  );
};

export default Contact;
