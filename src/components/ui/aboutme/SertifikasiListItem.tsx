import certificates from '../../../models/Certificate';
import { SertifikasiItem } from '../../LoadableMyComponent';

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
