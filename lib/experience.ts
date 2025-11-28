export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  startDate: string;
  endDate: string | 'Present';
  location: string;
  type: 'Full-time' | 'Contract' | 'Internship';
  description: string;
  responsibilities: string[];
  techStack: string[];
  isConsulting?: boolean;
  consultingCompany?: string;
  client?: string;
  project?: string;
}

export const experiences: Experience[] = [
  {
    id: 'rodgers-almer',
    company: 'Rodgers Almer LLC',
    position: 'Senior Backend Developer',
    duration: 'July 2024 – Present',
    startDate: '2024-07',
    endDate: 'Present',
    location: 'Remote (United States)',
    type: 'Full-time',
    description: 'Backend developer specializing in financial technology systems, focusing on AI-powered document processing, real-time data integration, and enterprise-grade Spring Boot applications for M&A analytics platform.',
    responsibilities: [
      'Building AI/ML infrastructure for financial document classification',
      'Developing file import systems with multi-source support (S3, SFTP, local)',
      'Implementing real-time data integrations (Bloomberg SAPI)',
      'Architecting audit logging and compliance systems',
      'Optimizing GPU-accelerated inference pipelines'
    ],
    techStack: [
      'Java 21',
      'Spring Boot',
      'Spring AI',
      'PostgreSQL',
      'pgvector',
      'AWS SQS',
      'AWS S3',
      'Apache Tika',
      'Docker',
      'vLLM',
      'Ollama',
      'OpenAI API',
      'Bloomberg SAPI',
      'Testcontainers',
      'JUnit 5',
      'Git'
    ]
  },
  {
    id: 'rocket-partners',
    company: 'Rocket Partners',
    position: 'Backend Developer Consultant',
    duration: 'April 2024 – July 2025',
    startDate: '2024-04',
    endDate: '2025-07',
    location: 'Remote',
    type: 'Contract',
    isConsulting: true,
    consultingCompany: 'Rodgers Almer LLC',
    client: 'Circle K',
    project: 'Inventory Tracking System',
    description: 'Contracted through Rodgers Almer LLC to develop an enterprise inventory tracking system for Circle K, streamlining supply chain management across multiple store locations.',
    responsibilities: [
      'REST API development for inventory management',
      'Real-time stock monitoring and alerting',
      'Integration with existing POS systems',
      'Reporting and analytics implementation',
      'Database design and optimization'
    ],
    techStack: [
      'Java',
      'Spring Boot',
      'MySQL',
      'REST API',
      'Docker',
      'Git'
    ]
  },
  {
    id: 'palit-consulting',
    company: 'Palit Consulting',
    position: 'Full-Stack Developer',
    duration: 'September 2023 – July 2024',
    startDate: '2023-09',
    endDate: '2024-07',
    location: 'Ghent, Belgium',
    type: 'Full-time',
    description: 'Full-stack development for Appointer, an appointment management platform.',
    responsibilities: [
      'Payment gateway integration (Stripe)',
      'Subscription management system development',
      'RESTful API design and implementation',
      'Frontend component development',
      'Automated notification systems'
    ],
    techStack: [
      'Java',
      'Spring Boot',
      'Angular',
      'Stripe API',
      'PostgreSQL',
      'REST API',
      'Git'
    ]
  },
  {
    id: 'felece',
    company: 'Felece',
    position: 'Software Developer',
    duration: 'January 2022 – July 2023',
    startDate: '2022-01',
    endDate: '2023-07',
    location: 'Eskişehir, Türkiye',
    type: 'Full-time',
    description: 'Backend and frontend development for ITSM (IT Service Management) platform.',
    responsibilities: [
      'Backend service development with Spring',
      'Database design and optimization',
      'Frontend component development',
      'REST API implementation',
      'Agile team collaboration'
    ],
    techStack: [
      'Java Spring',
      'Angular',
      'MySQL',
      'REST API',
      'Git',
      'Jira',
      'Agile/Scrum'
    ]
  },
  {
    id: 'ester-teknoloji',
    company: 'Ester Teknoloji A.Ş',
    position: 'Software Developer Intern',
    duration: 'July 2021 – September 2021',
    startDate: '2021-07',
    endDate: '2021-09',
    location: 'Eskişehir, Türkiye',
    type: 'Internship',
    description: 'Project-based internship focused on social media API integration.',
    responsibilities: [
      'REST API development with .NET/C#',
      'Social media API integrations (LinkedIn, Facebook, Instagram)',
      'OAuth 2.0 implementation',
      'Data transformation pipelines'
    ],
    techStack: [
      '.NET',
      'C#',
      'REST API',
      'LinkedIn API',
      'Facebook API',
      'Instagram API'
    ]
  }
];

export function getFeaturedExperiences(count: number = 3): Experience[] {
  return experiences.slice(0, count);
}

export function getExperienceById(id: string): Experience | undefined {
  return experiences.find(exp => exp.id === id);
}
