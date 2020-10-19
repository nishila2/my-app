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
  educations: IEducationState[];
  experiences: IWorkState[];
}

export interface IEducationState {
  year: string;
  institute: string;
  degree: string;
}

export interface IWorkState {
  year: string;
  company: string;
  designation: string;
}

export interface IResumeState {
  loading: boolean;
  refresh: boolean;
  formState: IResumeForm;
}

export const initialStateEducation = {
  degree: "",
  institute: "",
  year: "",
};

export const initialStateWorks = {
  designation: "",
  company: "",
  year: "",
};

export const skills = [
  "Asp.Net",
  "Css",
  "Jquery",
  "Html",
  "ReactJS",
  "TypeScript",
  "MsSQL",
  "MySQL",
  "Java",
  "Docker",
  "Azure",
];

export const initialState = {
  loading: false,
  refresh: false,
  formState: {
    basicDetails: {
      name: "",
      phone: "",
      address: "",
      email: "",
    },
    skills: [],
    educations: [initialStateEducation],
    experiences: [initialStateWorks],
  },
} as IResumeState;
