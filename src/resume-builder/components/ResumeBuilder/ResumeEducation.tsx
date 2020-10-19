import React from "react";
import { IResumeEducationProps, ResumeEducationForm } from ".";

export const ResumeEducation: React.FC<IResumeEducationProps> = (props) => {
  const { educations, onUpdateEducations, onAddNewEducation } = props;
  return (
    <div className="card p-4">
      <div className="col text-right mb-2 pr-0">
        <button type="button" className="btn btn-secondary" onClick={onAddNewEducation}>
          Add New Education
        </button>
      </div>
      {educations.map((item, index) => {
        return (
          <div className="card p-2 shadow  mb-3" key={`ResumeEducationForm_${index}`}>
            <ResumeEducationForm index={index} model={item} onChange={onUpdateEducations} />
          </div>
        );
      })}
    </div>
  );
};
