export interface ProjectsFields {
  title: string;
  subtitle: string;
  gif: string;
  screen: string;
  projectTech: string[];
  text: string[];
  liveLink: string;
  repoLink: string;
}

export interface FormValidationPayload {
  validPayload: boolean;
  validateMessage: string;
}

export type SkillsType = string[];

export interface FormFieldsType {
  name?: string;
  email?: string;
  message?: string;
}
