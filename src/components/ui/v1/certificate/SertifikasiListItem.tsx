import { useState } from 'react';
import certificates from '../../../../models/Certificate';
import SertifikasiItem from './SertifikasiItem';
import { Modal } from 'react-bootstrap';
import PdfPreview from '../../shared/PdfPreview';

const SertifikasiListItem = () => {
  const [show, setShow] = useState(false);
  const [sertifikasi, setSertifikasi] = useState<string>('');

  const handleClose = () => setShow(false);

  const handleShow = (sertifikasiId: string) => {
    setShow(true);
    setSertifikasi(sertifikasiId);
  };

  const getSertifikasiPrev = certificates?.find(
    (certificate) => certificate.idSertifikat == sertifikasi
  );

  return (
    <>
      <div className="sertifikasi-list">
        {certificates.map((certificate, index) => (
          <SertifikasiItem
            key={index}
            {...certificate}
            show={show}
            showChange={() => handleShow(certificate.idSertifikat)}
          />
        ))}
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        animation={true}
        scrollable
        data-bs-theme="dark"
        fullscreen
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-white fs-5 fw-normal">
            Sertifikasi & Penghargaan
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PdfPreview fileUrl={getSertifikasiPrev?.pdfPreview} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SertifikasiListItem;
