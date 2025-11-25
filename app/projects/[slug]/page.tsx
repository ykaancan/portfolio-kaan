import { notFound } from 'next/navigation';
import { Container } from '@/components/container';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects';
import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map(slug => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.metadata.title} - Kaan Can Yıldırım`,
    description: project.metadata.description,
    keywords: project.metadata.tags,
    openGraph: {
      title: project.metadata.title,
      description: project.metadata.description,
      type: 'article',
      publishedTime: project.metadata.date,
    },
  };
}

const components = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 className="text-4xl font-bold mt-8 mb-4 text-foreground" {...props} />
  ),
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h2 className="text-3xl font-semibold mt-8 mb-4 text-foreground" {...props} />
  ),
  h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h3 className="text-2xl font-semibold mt-6 mb-3 text-foreground" {...props} />
  ),
  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p className="text-base leading-7 mb-4 text-muted-foreground" {...props} />
  ),
  ul: (props: React.HTMLProps<HTMLUListElement>) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-muted-foreground ml-4" {...props} />
  ),
  ol: ({ children, ...props }: any) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-muted-foreground ml-4" {...props}>
      {children}
    </ol>
  ),
  li: (props: React.HTMLProps<HTMLLIElement>) => <li className="ml-4" {...props} />,
  code: (props: React.HTMLProps<HTMLElement>) => (
    <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
  ),
  pre: (props: React.HTMLProps<HTMLPreElement>) => (
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4" {...props} />
  ),
  blockquote: (props: React.HTMLProps<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-primary pl-4 my-4 italic text-muted-foreground"
      {...props}
    />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-primary hover:underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  strong: (props: React.HTMLProps<HTMLElement>) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com';

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: project.metadata.title,
    description: project.metadata.description,
    author: {
      '@type': 'Person',
      name: 'Kaan Can',
      url: baseUrl,
    },
    datePublished: project.metadata.date,
    keywords: project.metadata.tags.join(', '),
    url: `${baseUrl}/projects/${resolvedParams.slug}`,
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {project.metadata.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                {project.metadata.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.metadata.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-sm px-3 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Metrics */}
              {project.metadata.metrics && project.metadata.metrics.length > 0 && (
                <div className="grid grid-cols-3 gap-4 p-6 rounded-lg border border-border bg-card">
                  {project.metadata.metrics.map(metric => (
                    <div key={metric.label} className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </header>

            {/* Content */}
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <MDXRemote
                source={project.content}
                components={components}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [
                      [
                        rehypePrettyCode,
                        {
                          theme: 'github-dark',
                          keepBackground: false,
                        },
                      ],
                    ],
                  },
                }}
              />
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
