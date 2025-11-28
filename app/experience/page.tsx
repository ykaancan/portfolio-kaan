import { Container } from '@/components/container';
import ExperienceSection from '@/components/experience-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Experience | Kaan Can Yıldırım',
  description:
    '3+ years of experience building scalable backend systems, AI-powered applications, and full-stack solutions across fintech, retail, and enterprise domains.',
};

export default function ExperiencePage() {
  return (
    <div className="py-12 md:py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Professional Experience
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              A comprehensive timeline of my professional journey, from early internships to
              senior backend development roles. Specialized in building AI-powered systems,
              distributed architectures, and scalable enterprise solutions.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="p-6 rounded-lg border border-border bg-card text-center">
              <div className="text-3xl font-bold text-primary mb-1">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="p-6 rounded-lg border border-border bg-card text-center">
              <div className="text-3xl font-bold text-primary mb-1">5</div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </div>
            <div className="p-6 rounded-lg border border-border bg-card text-center">
              <div className="text-3xl font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="p-6 rounded-lg border border-border bg-card text-center">
              <div className="text-3xl font-bold text-primary mb-1">10+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
          </div>

          {/* Experience Timeline */}
          <ExperienceSection featured={false} showTimeline={true} showViewAll={false} />

          {/* Download CV Section */}
          <div className="mt-16 p-8 rounded-lg border border-border bg-card text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Interested in working together?
            </h3>
            <p className="text-muted-foreground mb-6">
              Download my full resume to learn more about my experience and skills.
            </p>
            <a
              href="https://drive.google.com/uc?export=download&id=1pa8zFl_a--aCrNEDe62ZLfWlGvn-EpEz"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
              Download Full Resume
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
