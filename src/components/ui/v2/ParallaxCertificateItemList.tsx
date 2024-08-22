import React, { useRef } from 'react';
import { Parallax, IParallax } from '@react-spring/parallax';
import ParallaxCertificateItem from './ParallaxCertificateItem';
import certificates from '../../../models/Certificate';

const ParallaxCertificateItemList: React.FC = () => {
  const parallax = useRef<IParallax>(null);
  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  return (
    <Parallax
      className={'sertifikasi-list'}
      ref={parallax}
      pages={10}
      horizontal
    >
      {certificates?.map((certificate, index) => (
        <ParallaxCertificateItem
          key={+index}
          offset={0}
          gradient="pink"
          onClick={() => scroll(1)}
        />
      ))}
    </Parallax>
  );
};

export default ParallaxCertificateItemList;
