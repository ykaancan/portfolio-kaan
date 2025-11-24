import Link from "next/link";
import { Container } from "@/components/container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Kaan Can",
  description:
    "Detailed case studies of production systems including AI classification, distributed architectures, and vector search implementations.",
};

const projects = [
  {
    title: "AI-Powered Financial Document Classification",
    slug: "ai-financial-classification",
    description:
      "Built a two-stage AI classification system with Chain-of-Thought reasoning and verification for M&A and corporate news articles.",
    tags: ["Spring Boot", "Spring AI", "vLLM", "LLM", "GPU Computing"],
    metrics: [
      { label: "Precision", value: "83%" },
      { label: "Speed Improvement", value: "10x" },
      { label: "GPU Setup", value: "4x RTX 5090" },
    ],
    featured: true,
  },
  {
    title: "Multi-Source File Import Infrastructure",
    slug: "multi-source-import",
    description:
      "Unified async file import pipeline with transaction management supporting AWS S3, SFTP, and local filesystem sources.",
    tags: ["Spring Boot", "AWS S3", "SQS", "Apache Tika", "Docker"],
    metrics: [
      { label: "Sources Unified", value: "3" },
      { label: "Data Loss", value: "Zero" },
      { label: "Processing", value: "Async" },
    ],
    featured: true,
  },
  {
    title: "Semantic Search with Vector Database",
    slug: "vector-search-mcp",
    description:
      "Implemented PostgreSQL pgvector extension with MCP integration enabling real-time LLM access to company database during inference.",
    tags: ["PostgreSQL", "pgvector", "OpenAI Embeddings", "MCP", "Spring JPA"],
    metrics: [
      { label: "Vector Dimensions", value: "1536" },
      { label: "Companies Indexed", value: "7,842+" },
      { label: "Search Type", value: "Semantic" },
    ],
    featured: false,
  },
  {
    title: "Bloomberg Real-Time Data Integration",
    slug: "bloomberg-integration",
    description:
      "Built Bloomberg SAPI integration with session-per-request pattern for real-time shareholder data enrichment with zero data persistence.",
    tags: ["Spring Boot", "Bloomberg SAPI", "JWT", "Spring Security"],
    metrics: [
      { label: "Data Persistence", value: "Zero" },
      { label: "Fetch Mode", value: "Real-time" },
      { label: "Degradation", value: "Graceful" },
    ],
    featured: false,
  },
  {
    title: "AI Model Benchmarking Framework",
    slug: "model-benchmarking",
    description:
      "Automated benchmarking system for LLM evaluation with ground truth validation and parallel processing for faster evaluation.",
    tags: ["Spring Boot", "JUnit 5", "Parallel Processing", "Model Evaluation"],
    metrics: [
      { label: "Models Tested", value: "5+" },
      { label: "Reporting", value: "CSV" },
      { label: "Processing", value: "Parallel" },
    ],
    featured: false,
  },
  {
    title: "Audit System with Javers",
    slug: "audit-system",
    description:
      "Enterprise audit system with UUID to Long migration and custom commit metadata for comprehensive entity change tracking.",
    tags: ["Spring Boot", "Javers", "PostgreSQL", "Audit Logging"],
    metrics: [
      { label: "Migration", value: "UUID→Long" },
      { label: "Tracking", value: "Entity Changes" },
      { label: "Metadata", value: "Custom" },
    ],
    featured: false,
  },
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="py-16">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Detailed case studies of production systems with real metrics,
            technical decisions, and architectural insights. Each project
            includes specific challenges, solutions, and measurable results.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Other Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg h-full"
    >
      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
        {project.title}
      </h3>

      <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-2 mb-4 pb-4 border-b border-border">
        {project.metrics.map((metric) => (
          <div key={metric.label} className="text-center">
            <div className="text-sm font-semibold text-primary">
              {metric.value}
            </div>
            <div className="text-xs text-muted-foreground">{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 3 && (
          <span className="text-xs px-2 py-1 text-muted-foreground">
            +{project.tags.length - 3} more
          </span>
        )}
      </div>
    </Link>
  );
}
