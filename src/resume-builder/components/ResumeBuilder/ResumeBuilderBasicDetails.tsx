import React from "react";
import { IResumeBuilderBasicDetailsProps } from ".";

export const ResumeBuilderBasicDetails: React.FC<IResumeBuilderBasicDetailsProps> = (props) => {
  const { onChange, model } = props;

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    onChange(id, value);
  };

  const onTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    onChange(id, value);
  };

  return (
    <div className="card p-4">
      <div className="form-row">
        <div className="form-group col">
          <label htmlFor="name" className={"small"}>
            Name
          </label>
          <input
            type="email"
            className="form-control form-control-sm"
            id="name"
            onChange={onTextChange}
            value={model.name}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col">
          <label htmlFor="email" className={"small"}>
            Email
          </label>
          <input
            type="email"
            className="form-control form-control-sm"
            id="email"
            onChange={onTextChange}
            value={model.email}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col">
          <label htmlFor="address" className={"small"}>
            Address
          </label>
          <textarea
            className="form-control form-control-sm"
            id="address"
            onChange={onTextAreaChange}
            value={model.address}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col">
          <label htmlFor="phone" className={"small"}>
            Phone
          </label>
          <input
            type="email"
            className="form-control form-control-sm"
            id="phone"
            onChange={onTextChange}
            value={model.phone}
          />
        </div>
      </div>
    </div>
  );
};
