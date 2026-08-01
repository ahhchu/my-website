import type { TypeExperience } from '../types';

export const experience: TypeExperience[] = [
  {
    id: 'exp-1',
    role: 'AgBioTech Data Science Intern',
    company: 'University of Georgia',
    startDate: 'Jun 2023',
    endDate: 'Aug 2023',
    summary: 'Funded by USDA NIFA, applied machine learning algorithms to statewide weather data interpolation, helping the research team identify key drivers of cotton growth.',
    highlights: [
      {
        keyword: 'Machine Learning',
        text: 'Engineered a Random Forest regression workflow across a 10-year USDA and UGA climate dataset, cleaning missing values, standardizing features, and identifying key weather drivers affecting multi-regional cotton growth.',
      },
    ],
    skills: ['Python', 'R', 'Random Forest', 'Data Cleaning & Preprocessing', 'NumPy', 'Scikit-learn'],
  },
  {
    id: 'exp-2',
    role: 'Technology Consultant',
    company: 'Credera',
    startDate: 'Jun 2024',
    endDate: 'Aug 2024',
    summary: 'Provided technical guidance and support for a leading luxury car manufacturer, ensuring successful delivery and customer satisfaction.',
    highlights: [
      {
        keyword: 'Stakeholder Communication',
        text: "Presented data driven recommendations to 4 client stakeholders,technical recommendations were adopted into the client's Q3 roadmap.",
      },
     {
        keyword: 'Machine Learning',
        text: 'Built an automated K-Means clustering model in Python (pandas, NumPy) with dynamic cluster selection, validating results via PCA and PowerBI to cut manual analysis time by 10% for client sales strategy.',
      },
      {
        keyword: 'Data Engineering',
        text: 'Refactored Python ETL pipelines to automate file intake, cutting processing time from 1 hour down to 3 minutes (90% manual reduction).',
      },
    ],
    skills: [
      'Python',
      'R',
      'NumPy',
      'K-Means Clustering',
      'ETL/ELT Pipelines',
      'AWS',
      'GitHub Actions',
      'Azure DevOps',
    ],
  },
  {
    id: 'exp-3',
    role: 'Software Engineer',
    company: 'Sprout Social',
    startDate: 'Jun 2025',
    endDate: 'Jul 2026',
   summary: 'Engineered accessible web applications, built AI workflow tools, and led product features from concept to production.',
    highlights: [
      {
        keyword: 'Accessibility & Compliance',
        text: 'Tested and fixed 30+ components for WCAG 2.2 AA compliance via axe and VoiceOver, directly supporting a $1.65M enterprise deal.',
      },
      {
        keyword: 'Feature Ownership',
        text: 'Owned a production web feature end-to-end, driving 8,000+ user interactions within two months of launch.',
      },
      {
        keyword: 'AI Automation',
        text: 'Built AI tooling that accelerated engineering processes and project delivery by 66.7%.',
      },
      {
        keyword: 'Testing & Monitoring',
        text: 'Utilized Datadog for real-time monitoring and enforced software quality using Jest and Cypress automated test suites.',
      },
    ],
    skills: [
      'TypeScript',
      'React',
      'JavaScript',
      'Node.js',
      'Python',
      'Cypress',
      'Jest',
      'Datadog',
      'Git',
      'WCAG / Web Accessibility',
    ],
  }
];