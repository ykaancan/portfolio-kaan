import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ProjectMetadata {
  title: string;
  description: string;
  date: string;
  tags: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface Project {
  slug: string;
  metadata: ProjectMetadata;
  content: string;
}

const projectsDirectory = path.join(process.cwd(), "content/projects");

export function getProjectBySlug(slug: string): Project | null {
  try {
    const realSlug = slug.replace(/\.mdx$/, "");
    const fullPath = path.join(projectsDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: realSlug,
      metadata: data as ProjectMetadata,
      content,
    };
  } catch (error) {
    return null;
  }
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const slugs = fs.readdirSync(projectsDirectory);
  const projects = slugs
    .filter((slug) => slug.endsWith(".mdx"))
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is Project => project !== null)
    .sort((a, b) => {
      return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime();
    });

  return projects;
}

export function getAllProjectSlugs(): string[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(projectsDirectory);
  return files.filter((file) => file.endsWith(".mdx")).map((file) => file.replace(/\.mdx$/, ""));
}
