import * as React from 'react';
import { MyComponentInstance } from '../../shared/MyComponent';
import LogoSearchEmpty from '/icons/hand-drawn-no-data-illustration.png';

type ProjectListItemProps = { items: Project[] };

const ProjectListItem: React.FC<ProjectListItemProps> = ({ items }) => (
  <>
    {items?.length ? (
      <div className="portofolio-list">
        {items?.map((project) => (
          <MyComponentInstance.ProjectItem key={project.id} {...project} />
        ))}
      </div>
    ) : (
      <MyComponentInstance.ProjectSearchEmpty
        text=" Daftar proyek tidak ditemukan!"
        image={LogoSearchEmpty}
      />
    )}
  </>
);

export default ProjectListItem;
