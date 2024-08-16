import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Certificate } from '../../../models/Certificate';

type SertifikasiItemProps = Certificate;

const SertifikasiItem: React.FC<SertifikasiItemProps> = ({ title, image }) => {
  return (
    <div className="sertifikasi-list__item">
      <LazyLoadImage
        alt={title}
        src={image}
        effect="blur"
        loading="lazy"
        className="sertifikasi-list__item-image"
      />
    </div>
  );
};

export default SertifikasiItem;
