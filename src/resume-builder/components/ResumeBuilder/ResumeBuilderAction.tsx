import React from "react";
import { IResumeBuilderActionProps } from ".";

export const ResumeBuilderAction: React.FC<IResumeBuilderActionProps> = ({
  onReset,
  onSave,
  isDirty,
  isSubmitting,
}) => {
  return (
    <div className="row">
      <div className="col text-right">
        <button type="button" className="btn btn-light pl-4 pr-4 mr-2" disabled={isSubmitting} onClick={onReset}>
          Reset
        </button>
        <button type="button" className="btn btn-primary pl-4 pr-4" disabled={isSubmitting || isDirty} onClick={onSave}>
          Save
        </button>
      </div>
    </div>
  );
};
