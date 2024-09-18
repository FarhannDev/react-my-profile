import { MyComponentInstance } from '../components/ui/shared/MyComponent';
import PdfPreview from '../components/ui/shared/PdfPreview';

const ResumeOnline = () => {
  return (
    <>
      <div className="resume-online-container">
        <MyComponentInstance.Heading title="Online Resume" />
        <hr className="text-secondary" />

        <div className="resume-online-preview">
          <PdfPreview fileUrl="/uploads/CV FARHAN EN.pdf" scale={1.5} />
        </div>
      </div>
    </>
  );
};

export default ResumeOnline;
