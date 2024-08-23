import certificates from '../../../../models/Certificate';
import SertifikasiItem from './SertifikasiItem';

const SertifikasiListItem = () => {
  return (
    <div className="sertifikasi-list">
      {certificates.map((certificate, index) => (
        <SertifikasiItem key={index} {...certificate} />
      ))}
    </div>
  );
};

export default SertifikasiListItem;
