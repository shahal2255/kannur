export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  deliverables: string[];
  toolsUsed: string[];
  timeline: string;
  benefits: string[];
}

export type ProjectCategory = 'all' | 'website' | 'branding' | 'social' | 'ads' | 'creative';

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'website' | 'branding' | 'social' | 'ads' | 'creative';
  categoryLabel: string;
  thumbnail: string;
  summary: string;
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
  }[];
  techStack: string[];
  year: string;
  isDemo: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  experienceYears: number;
  expertise: string[];
  socials: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metricsResult: string;
  avatarInitials: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: string;
  summary: string;
  content: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  service: string;
  budget: string;
  message: string;
}

export interface ConsultationBooking {
  goal: string;
  preferredDate: string;
  preferredTime: string;
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  notes: string;
}
