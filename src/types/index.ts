export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  isOpenSource: boolean;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  screenshots?: string[];
};

export type Experience = {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
};

export type Skill = {
  category: string;
  items: string[];
};

export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type SocialLink = {
  name: string;
  url: string;
  icon: string;
};
