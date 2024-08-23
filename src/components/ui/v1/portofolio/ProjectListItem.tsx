import projects from '../../../../models/Project';
import { MyComponentInstance } from '../../shared/MyComponent';

const ProjectListItem = () => (
  <div className="portofolio-list">
    {projects.map((project) => (
      <MyComponentInstance.ProjectItem key={project.id} {...project} />
    ))}
  </div>
);

export default ProjectListItem;
