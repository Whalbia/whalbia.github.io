export interface Project {
  name: string;
  timeline: string;
  liveUrl: string | null;
  description: string;
  tags: string[];
}

export interface Experience {
  date: string;
  title: string;
  company: string;
  url: string | null;
  description: string;
  tags: string[];
  metrics?: string[];
  note?: string;
  screenshots?: string[];
}

export interface Links {
  github: string;
  linkedin: string;
  email: string;
  phone: string;
  resume: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  tagline: string;
  about: string[];
  links: Links;
  experience: Experience[];
  projects: Project[];
}
