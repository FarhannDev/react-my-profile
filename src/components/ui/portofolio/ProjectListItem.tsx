import projects from '../../../models/Project';
import { ProjectItem } from '../../LoadableMyComponent';

const ProjectListItem = () => {
  return (
    <div className="portofolio-list">
      {projects.map((project) => (
        <ProjectItem key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectListItem;
