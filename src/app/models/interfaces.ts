export interface Project {
  _id: string;
  title: string;
  description: string;
  logoImg: string;
  imgscreenshot: string;
  url: string;
  projectType: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  __v: number;
}
export interface WorkExperiences {
  prevExperience: string;
  workPlace: string;
  location: string;
  period: string;
  periodCalenderStart: string;
  periodCalenderEnd: string;
}
export interface Education {
  education: string;
  educationPlace: string;
  educationStart: string;
  educationEnd: string;
}
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface navigationServiceValues {
  id: number;
  service: string;
}
