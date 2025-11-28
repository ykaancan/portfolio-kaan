'use client';

import { Experience } from '@/lib/experience';

interface ExperienceCardProps {
  experience: Experience;
  showTimeline?: boolean;
}

const techColors: Record<string, string> = {
  'Java': 'bg-orange-500/10 text-orange-500 border-orange-500/20',
  'Java 21': 'bg-orange-500/10 text-orange-500 border-orange-500/20',
  'Java Spring': 'bg-green-500/10 text-green-500 border-green-500/20',
  'Spring Boot': 'bg-green-500/10 text-green-500 border-green-500/20',
  'Spring AI': 'bg-green-500/10 text-green-500 border-green-500/20',
  'Angular': 'bg-red-500/10 text-red-500 border-red-500/20',
  'PostgreSQL': 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  'MySQL': 'bg-blue-600/10 text-blue-600 border-blue-600/20',
  'Docker': 'bg-blue-400/10 text-blue-400 border-blue-400/20',
  'AWS S3': 'bg-yellow-600/10 text-yellow-600 border-yellow-600/20',
  'AWS SQS': 'bg-yellow-600/10 text-yellow-600 border-yellow-600/20',
  '.NET': 'bg-purple-500/10 text-purple-500 border-purple-500/20',
  'C#': 'bg-purple-500/10 text-purple-500 border-purple-500/20',
  'REST API': 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20',
  'Git': 'bg-gray-500/10 text-gray-500 border-gray-500/20',
};

const getTechColor = (tech: string): string => {
  return techColors[tech] || 'bg-muted text-muted-foreground border-border';
};

const getTypeColor = (type: string): string => {
  switch (type) {
    case 'Full-time':
      return 'bg-green-500/10 text-green-500 border-green-500/20';
    case 'Contract':
      return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
    case 'Internship':
      return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
    default:
      return 'bg-muted text-muted-foreground border-border';
  }
};

export default function ExperienceCard({ experience, showTimeline = false }: ExperienceCardProps) {
  const isCurrent = experience.endDate === 'Present';

  return (
    <div className="relative">
      {/* Timeline connector */}
      {showTimeline && (
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border ml-2 md:ml-3" />
      )}

      <div className="relative pl-8 md:pl-10 pb-12 last:pb-0">
        {/* Timeline dot */}
        {showTimeline && (
          <div className={`absolute left-0 top-2 w-4 h-4 md:w-6 md:h-6 rounded-full border-2 ${
            isCurrent
              ? 'border-primary bg-primary shadow-lg shadow-primary/50'
              : 'border-border bg-card'
          }`}>
            {isCurrent && (
              <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-75" />
            )}
          </div>
        )}

        {/* Card */}
        <div className={`p-6 rounded-lg border bg-card transition-all hover:shadow-lg ${
          isCurrent
            ? 'border-primary/50 shadow-md shadow-primary/10'
            : 'border-border hover:border-primary/50'
        }`}>
          {/* Header */}
          <div className="space-y-3 mb-4">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {experience.position}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="text-foreground font-medium">
                    {experience.company}
                  </span>
                  {experience.isConsulting && experience.consultingCompany && (
                    <span className="text-muted-foreground">
                      via {experience.consultingCompany}
                    </span>
                  )}
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${getTypeColor(experience.type)}`}>
                    {experience.type}
                  </span>
                </div>
              </div>

              <div className="text-right text-sm text-muted-foreground">
                <div className="font-medium">{experience.duration}</div>
                <div className="text-xs">{experience.location}</div>
              </div>
            </div>

            {/* Consulting info */}
            {experience.isConsulting && (experience.client || experience.project) && (
              <div className="flex flex-wrap gap-2 text-sm">
                {experience.client && (
                  <span className="px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20 text-xs font-medium">
                    Client: {experience.client}
                  </span>
                )}
                {experience.project && (
                  <span className="text-muted-foreground text-xs">
                    Project: {experience.project}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            {experience.description}
          </p>

          {/* Responsibilities */}
          {experience.responsibilities.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-foreground mb-2">Core Responsibilities:</h4>
              <ul className="space-y-1.5">
                {experience.responsibilities.map((resp, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start">
                    <span className="text-primary mr-2 mt-0.5">▸</span>
                    <span className="flex-1">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          {experience.techStack.length > 0 && (
            <div>
              <h4 className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={`px-2.5 py-1 rounded text-xs font-medium border ${getTechColor(tech)}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
