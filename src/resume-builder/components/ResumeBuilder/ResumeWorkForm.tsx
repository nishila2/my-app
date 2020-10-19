import React from "react";
import { IResumeWorkFormProps } from ".";

export const ResumeWorkForm: React.FC<IResumeWorkFormProps> = (props) => {
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
            Company
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="company"
            onChange={onTextChange}
            value={model.company}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col">
          <label htmlFor="email" className={"small"}>
            Designation
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="designation"
            onChange={onTextChange}
            value={model.designation}
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
