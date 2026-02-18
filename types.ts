
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'HTML' | 'React' | 'Fullstack';
  liveUrl: string;
  githubUrl: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}
