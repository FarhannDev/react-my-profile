import React from 'react';
import { Certificate } from '../../../models/Certificate';

type SertifikasiItemProps = Certificate;

const SertifikasiItem: React.FC<SertifikasiItemProps> = ({ image }) => {
  return (
    <div className="sertifikasi-list__item">
      <img className="sertifikasi-list__item-image" src={image} />
    </div>
  );
};

export default SertifikasiItem;
