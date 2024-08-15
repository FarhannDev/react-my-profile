import projects from '../../../models/Project';
import ProjectItem from './ProjectItem';

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
