import React from 'react';
import SkillsItem from './SkillsItem';

type IProps = { skills: Skills[] };

const SkillsItemList: React.FC<IProps> = ({ skills }) => (
  <>
    <div className="skills-items-list pt-3">
      {skills.map((skill, index) => (
        <SkillsItem key={+index} {...skill} />
      ))}
    </div>
  </>
);

export default SkillsItemList;
