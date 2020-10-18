export interface IResumeBuilderContainerProps {
  resumeId?: number;
}

export interface IResumeFormBasic {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface IResumeForm {
  basicDetails: IResumeFormBasic;
  skills: string[];
}

export interface IResumeState {
  loading: boolean;
  refresh: boolean;
  formState: IResumeForm;
}
