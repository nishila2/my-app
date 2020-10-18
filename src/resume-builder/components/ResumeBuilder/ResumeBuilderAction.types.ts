import { IResumeFormBasic } from "resume-builder/containers";

export interface IResumeBuilderBasicDetailsProps {
  model: IResumeFormBasic;
  onChange: (key: string, value: string) => void;
}

export interface IResumeBuilderActionProps {
  isDirty: boolean;
  isSubmitting: boolean;
  onReset: () => void;
  onSave: () => void;
}