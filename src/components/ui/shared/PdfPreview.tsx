import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

type IProps = { fileUrl: string | undefined };

const PdfPreview: React.FC<IProps> = ({ fileUrl }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
      >
        {fileUrl && (
          <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
        )}
      </Worker>
    </div>
  );
};

export default PdfPreview;
