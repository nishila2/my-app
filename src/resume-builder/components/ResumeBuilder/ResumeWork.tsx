import React from "react";
import { IResumeWorkProps, ResumeWorkForm } from ".";

export const ResumeWork: React.FC<IResumeWorkProps> = (props) => {
  const { experiences, onUpdateWork, onAddNewWork } = props;
  return (
    <div className="card p-4">
      <div className="col text-right mb-2 pr-0">
        <button type="button" className="btn btn-secondary" onClick={onAddNewWork}>
          Add New Work Experiences
        </button>
      </div>
      {experiences.map((item, index) => {
        return (
          <div className="card p-2 shadow mb-3" key={`ResumeWorkForm${index}`}>
            <ResumeWorkForm index={index} model={item} onChange={onUpdateWork} />
          </div>
        );
      })}
    </div>
  );
};
