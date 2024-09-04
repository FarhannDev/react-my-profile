import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import {
  DefaultLayoutPlugin,
  defaultLayoutPlugin,
} from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

type IProps = { fileUrl: string | undefined };

const PdfPreview: React.FC<IProps> = ({ fileUrl }) => {
  const defaultLayoutPluginInstance: DefaultLayoutPlugin =
    defaultLayoutPlugin();
  const workerUrl: string =
    'https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js';

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Worker workerUrl={workerUrl}>
        {fileUrl && (
          <Viewer
            fileUrl={fileUrl}
            plugins={[defaultLayoutPluginInstance]}
            enableSmoothScroll
            defaultScale={1.0}
            theme={'dark'}
          />
        )}
      </Worker>
    </div>
  );
};

export default PdfPreview;
