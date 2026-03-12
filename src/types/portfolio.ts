export interface PortfolioData {
  name: string;
  title: string;
  profileImage: string;
  introduction: string;
  about: string;
  skills: Record<string, { name: string; level: number }[]>;
  projects: {
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo?: string;
  }[];
  experience: {
    role: string;
    organization: string;
    period: string;
    description: string;
  }[];
  contact: {
    email: string;
    github: string;
    linkedin: string;
  };
  socialLinks: {
    platform: string;
    url: string;
  }[];
}
