import React from "react";
import { TypeAheadMultiSelect } from "shared/components";
import { IResumeSkillsProps } from ".";

export const ResumeSkills: React.FC<IResumeSkillsProps> = (props) => {
  const { skills, items, onUpdateSkills } = props;

  return (
    <div className="card p-4">
      <div className="form-row">
        <div className="form-group col">
          <label htmlFor="name" className={"small"}>
            Skills
          </label>
          <TypeAheadMultiSelect items={items} defaultValue={skills} onUpdate={onUpdateSkills} />
        </div>
      </div>
    </div>
  );
};
