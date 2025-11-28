'use client';

import { experiences, getFeaturedExperiences } from '@/lib/experience';
import ExperienceCard from './experience-card';
import Link from 'next/link';

interface ExperienceSectionProps {
  featured?: boolean;
  showTimeline?: boolean;
  showViewAll?: boolean;
}

export default function ExperienceSection({
  featured = false,
  showTimeline = true,
  showViewAll = false
}: ExperienceSectionProps) {
  const displayExperiences = featured ? getFeaturedExperiences(3) : experiences;

  // Calculate total years of experience
  const calculateYearsOfExperience = () => {
    if (experiences.length === 0) return 0;

    // Get the earliest start date
    const earliestDate = experiences.reduce((earliest, exp) => {
      const expDate = new Date(exp.startDate + '-01');
      return expDate < earliest ? expDate : earliest;
    }, new Date());

    const now = new Date();
    const years = (now.getTime() - earliestDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
    return Math.floor(years);
  };

  const yearsOfExperience = calculateYearsOfExperience();

  return (
    <section className="py-16 md:py-20">
      <div className="mb-12">
        <div className="flex items-end justify-between mb-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Professional Experience
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              {yearsOfExperience}+ years of experience building scalable backend systems,
              AI-powered applications, and full-stack solutions across fintech, retail,
              and enterprise domains.
            </p>
          </div>

          {showViewAll && (
            <Link
              href="/experience"
              className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
            >
              View All
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          )}
        </div>
      </div>

      <div className="space-y-0">
        {displayExperiences.map((experience) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            showTimeline={showTimeline}
          />
        ))}
      </div>

      {showViewAll && (
        <div className="mt-8 flex justify-center md:hidden">
          <Link
            href="/experience"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium px-6 py-3 rounded-lg border border-primary/20 bg-primary/5 hover:bg-primary/10"
          >
            View All Experience
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      )}
    </section>
  );
}
