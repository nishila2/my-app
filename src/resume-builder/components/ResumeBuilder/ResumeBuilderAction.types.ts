import { IEducationState, IResumeFormBasic, IWorkState } from "resume-builder/containers";

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

export interface IResumeSkillsProps {
  skills: string[];
  items: string[];
  onUpdateSkills: (newSkills: string[]) => void;
}

export interface IResumeEducationProps {
  educations: IEducationState[];
  onAddNewEducation: () => void;
  onUpdateEducations: (index: number, id: string, value: string) => void;
}

export interface IResumeEducationFormProps {
  model: IEducationState;
  index: number;
  onChange: (index: number, id: string, value: string) => void;
}

export interface IResumeWorkProps {
  experiences: IWorkState[];
  onAddNewWork: () => void;
  onUpdateWork: (index: number, id: string, value: string) => void;
}

export interface IResumeWorkFormProps {
  model: IWorkState;
  index: number;
  onChange: (index: number, id: string, value: string) => void;
}
