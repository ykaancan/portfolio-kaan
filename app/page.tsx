import Link from "next/link";
import { Container } from "@/components/container";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />

        <Container className="relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Open to opportunities
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Senior Backend Developer specializing in{" "}
              <span className="text-primary">AI Systems</span> and{" "}
              <span className="text-primary">Distributed Architecture</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Building production-grade AI classification systems, distributed
              file processing pipelines, and vector search infrastructure.
              Experienced with Spring Boot, LLM integration, and scalable
              backend solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                View Projects
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
                  className="ml-2"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              <a
                href="/cv.pdf"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-transparent px-6 py-3 text-sm font-semibold text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
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
                Download CV
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 border-t border-border">
        <Container>
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8 text-center">
            Core Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Java 21", category: "Language" },
              { name: "Spring Boot 3.x", category: "Framework" },
              { name: "PostgreSQL", category: "Database" },
              { name: "AWS", category: "Cloud" },
              { name: "Spring AI", category: "AI/ML" },
              { name: "Vector DB", category: "Search" },
              { name: "Docker", category: "DevOps" },
              { name: "LLM Integration", category: "AI/ML" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <span className="font-semibold text-foreground text-sm">
                  {tech.name}
                </span>
                <span className="text-xs text-muted-foreground mt-1">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Detailed case studies of production systems with real metrics and
              technical insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                title: "AI-Powered Financial Document Classification",
                description:
                  "Two-stage AI classification system with 83% precision. Reduced processing time from 600s to 60s using vLLM and Chain-of-Thought reasoning.",
                metrics: ["83% precision", "10x faster", "4x RTX 5090"],
                slug: "ai-financial-classification",
              },
              {
                title: "Multi-Source File Import Infrastructure",
                description:
                  "Unified async pipeline supporting S3, SFTP, and local sources. Zero data loss through transaction management.",
                metrics: ["3 sources unified", "Async processing", "Zero data loss"],
                slug: "multi-source-import",
              },
            ].map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-medium"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center text-primary hover:underline font-medium"
            >
              View all projects
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
                className="ml-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
