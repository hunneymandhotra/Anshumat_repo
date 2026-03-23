export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Expert';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  link?: string;
}

export interface CandidateProfile {
  name: string;
  email: string;
  bio: string;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
}
