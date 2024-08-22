import * as React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ParallaxLayer } from '@react-spring/parallax';

interface PageProps {
  offset: number;
  gradient: string;
  onClick: () => void;
}

const ParallaxCertificateItem: React.FC<PageProps> = ({
  offset,
  gradient,
  onClick,
}) => (
  <>
    <ParallaxLayer offset={offset} speed={0.3} onClick={onClick}>
      <div className="sertifikasi-list__item">
        <LazyLoadImage
          alt={'/images/sertifikat_magang_msib_5.png'}
          src={'/images/sertifikat_magang_msib_5.png'}
          effect="blur"
          loading="lazy"
          className="sertifikasi-list__item-image"
        />
      </div>
    </ParallaxLayer>
  </>
);

export default ParallaxCertificateItem;
