import { Container } from '@/components/container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Kaan Can Yıldırım',
  description:
    'Senior Backend Developer with expertise in Java/Spring Boot, AI systems, and distributed architectures. Learn about my technical skills, experience, and approach to software engineering.',
};

const skills = {
  Backend: [
    { name: 'Java 21', level: 'expert' },
    { name: 'Spring Boot 3.x', level: 'expert' },
    { name: 'Spring AI', level: 'expert' },
    { name: 'Hibernate/JPA', level: 'expert' },
    { name: 'Spring Security', level: 'advanced' },
    { name: 'Spring WebFlux', level: 'advanced' },
  ],
  'AI/ML': [
    { name: 'LLM Integration', level: 'expert' },
    { name: 'Vector Databases', level: 'expert' },
    { name: 'Prompt Engineering', level: 'expert' },
    { name: 'Model Evaluation', level: 'advanced' },
    { name: 'vLLM/Ollama', level: 'advanced' },
    { name: 'OpenAI API', level: 'advanced' },
  ],
  Databases: [
    { name: 'PostgreSQL', level: 'expert' },
    { name: 'pgvector', level: 'expert' },
    { name: 'Spring Data JPA', level: 'expert' },
    { name: 'Query Optimization', level: 'advanced' },
    { name: 'Database Design', level: 'expert' },
  ],
  'Cloud/DevOps': [
    { name: 'AWS (S3, SQS, RDS)', level: 'advanced' },
    { name: 'Docker', level: 'advanced' },
    { name: 'Linux/systemd', level: 'advanced' },
    { name: 'Git', level: 'expert' },
    { name: 'CI/CD', level: 'intermediate' },
  ],
  'Best Practices': [
    { name: 'SOLID Principles', level: 'expert' },
    { name: 'Clean Code', level: 'expert' },
    { name: 'TDD', level: 'advanced' },
    { name: 'Design Patterns', level: 'expert' },
    { name: 'Exception Handling', level: 'expert' },
    { name: 'Code Review', level: 'expert' },
  ],
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Me</h1>
            <div className="h-1 w-20 bg-primary rounded" />
          </div>

          {/* Professional Summary */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Professional Summary</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a <strong className="text-foreground">Senior Backend Developer</strong>{' '}
                specializing in building{' '}
                <strong className="text-foreground">production-grade AI systems</strong> and{' '}
                <strong className="text-foreground">distributed architectures</strong>. My work
                focuses on the intersection of traditional backend engineering and modern AI/ML
                systems.
              </p>
              <p>
                Over the past few years, I've built systems that process financial documents using
                Large Language Models, implemented semantic search with vector databases, and
                designed distributed file processing pipelines handling thousands of files daily. I
                believe in writing code that is{' '}
                <strong className="text-foreground">maintainable, testable, and performant</strong>.
              </p>
              <p>
                My approach to software engineering is grounded in{' '}
                <strong className="text-foreground">pragmatism</strong>. I don't chase trends or
                over-engineer solutions. Instead, I focus on understanding the problem deeply,
                choosing the right tools, and delivering systems that actually work in production.
                I'm particularly passionate about proper exception handling, transaction management,
                and building systems that degrade gracefully when things go wrong.
              </p>
              <p>
                When it comes to AI integration, I take a{' '}
                <strong className="text-foreground">systematic, metrics-driven approach</strong>. I
                don't believe in "AI magic" - I believe in benchmarking multiple models, measuring
                precision and recall, and making data-driven decisions. My AI classification system
                didn't achieve 83% precision by luck - it got there through careful prompt
                engineering, two-stage verification, and systematic evaluation.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Technical Skills</h2>
            <div className="space-y-8">
              {Object.entries(skills).map(([category, categorySkills]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold text-foreground mb-4">{category}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {categorySkills.map(skill => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
                      >
                        <div
                          className={`h-2 w-2 rounded-full ${
                            skill.level === 'expert'
                              ? 'bg-primary'
                              : skill.level === 'advanced'
                              ? 'bg-primary/70'
                              : 'bg-primary/40'
                          }`}
                        />
                        <span className="text-sm text-foreground font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Engineering Philosophy</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'No Broad Exception Catches',
                  description:
                    'Never catch Exception or Throwable unless you have a specific reason. Catch specific exceptions and handle them appropriately. Let unexpected errors propagate.',
                },
                {
                  title: 'Transaction Management Matters',
                  description:
                    'Either a file import succeeds completely or fails completely. No partial states. Use @Transactional properly and understand when rollbacks happen.',
                },
                {
                  title: 'Metrics Over Intuition',
                  description:
                    "Test 5 models, measure precision/recall, and choose based on data. Don't pick a model because it's popular or because you 'think' it will work.",
                },
                {
                  title: 'Design for Failure',
                  description:
                    'External services will fail. Bloomberg will go down. Networks will timeout. Design systems that degrade gracefully and recover automatically.',
                },
                {
                  title: 'Code for Humans',
                  description:
                    "Write code that other developers can understand six months from now. Clear variable names, simple logic, and comments only when the 'why' isn't obvious.",
                },
                {
                  title: 'Test What Matters',
                  description:
                    'Integration tests with real infrastructure (Testcontainers) catch more bugs than unit tests mocking everything. Test the actual behavior, not the implementation.',
                },
              ].map(principle => (
                <div key={principle.title} className="p-6 rounded-lg border border-border bg-card">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{principle.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* What I'm Looking For */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-foreground mb-6">What I'm Looking For</h2>
            <div className="p-6 rounded-lg border border-primary/20 bg-primary/5">
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm open to opportunities where I can work on technically challenging problems,
                particularly at the intersection of backend engineering and AI systems. I thrive in
                environments that value:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary mt-0.5 flex-shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>
                    <strong className="text-foreground">Technical excellence</strong> over shipping
                    fast and breaking things
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary mt-0.5 flex-shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>
                    <strong className="text-foreground">Production systems</strong> with real users
                    and real consequences
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary mt-0.5 flex-shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>
                    <strong className="text-foreground">Mentorship and learning</strong> - I want to
                    work with people better than me
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary mt-0.5 flex-shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>
                    <strong className="text-foreground">Clear ownership</strong> - I like owning
                    systems end-to-end
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Let's Connect</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Interested in discussing opportunities, asking about my projects, or just connecting?
              Feel free to reach out.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/ykaancan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-transparent hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/kaan-can-yildirim"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
