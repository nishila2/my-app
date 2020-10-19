import React from "react";
import { IResumeEducationFormProps } from ".";

export const ResumeEducationForm: React.FC<IResumeEducationFormProps> = (props) => {
  const { onChange, index, model } = props;

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    onChange(index, id, value);
  };

  return (
    <div>
      <div className="form-row">
        <div className="form-group col">
          <label htmlFor="name" className={"small"}>
            Institute
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="institute"
            onChange={onTextChange}
            value={model.institute}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col">
          <label htmlFor="email" className={"small"}>
            Degree
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="degree"
            onChange={onTextChange}
            value={model.degree}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col">
          <label htmlFor="phone" className={"small"}>
            Year
          </label>
          <input
            type="number"
            className="form-control form-control-sm"
            id="year"
            onChange={onTextChange}
            value={model.year}
          />
        </div>
      </div>
    </div>
  );
};
