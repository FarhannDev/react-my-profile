import { useParams } from 'react-router-dom';
import ButtonAction from '../components/shared/ButtonAction';
import Heading from '../components/shared/Heading';
import projects, { Project } from '../models/Project';

const DetailProject = () => {
  const { id } = useParams();

  const detailProject: Project = projects.filter(
    (project) => project.id === id
  )[0];

  return (
    <section className="detailproject-section pb-5">
      <Heading title="Detail Proyek" />
      <hr className="text-secondary" />

      <div className="detail-project-container">
        <img
          className="detail-project__image"
          src={detailProject?.coverImage}
        />

        <div className="detail-project__content">
          <Heading title={detailProject?.name} />
          <div className="detail-project__content-description">
            {detailProject?.description}
          </div>

          <div className="detail-project__content-action">
            <ButtonAction
              isBlank
              isDownload={false}
              name="Tampilkan Proyek"
              links={detailProject?.links}
              icons=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailProject;
