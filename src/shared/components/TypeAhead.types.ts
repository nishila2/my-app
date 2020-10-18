export interface ITypeAheadCommonProps {
  items: string[];
}

export interface ITypeAheadProps extends ITypeAheadCommonProps {
  defaultValue: string;
  onUpdate: (newSkills: string) => void;
}

export interface ITypeAheadMultiSelectProps extends ITypeAheadCommonProps {
  defaultValue: string[];
  onUpdate: (newSkills: string[]) => void;
}
