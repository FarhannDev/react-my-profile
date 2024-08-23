import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

type IProps = { handleClose: () => void };

const ModalComponent: React.FC<IProps> = ({ handleClose }) => {
  const [show, setShow] = useState<boolean>(false);
  const onHandleClose = () => setShow(false);
  const onHandleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      </Modal>
    </>
  );
};

export default ModalComponent;
