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

export const editStateEducation = {
  degree: "",
  institute: "",
  year: "2020",
};

export const editStateWorks1 = {
  designation: "2010",
  company: "2010",
  year: "2010",
};

export const editStateWorks2 = {
  designation: "2020",
  company: "2020",
  year: "2020",
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

export const editState = {
  loading: false,
  refresh: false,
  formState: {
    basicDetails: {
      name: "Nishil",
      phone: "9562161303",
      address: "Kappad",
      email: "nishila2@gmail.com",
    },
    skills: [],
    educations: [editStateEducation],
    experiences: [editStateWorks1, editStateWorks2],
  },
} as IResumeState;
