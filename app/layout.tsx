import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Kaan Can - Senior Backend Developer",
  description:
    "Senior Backend Developer specializing in Java/Spring Boot and AI systems. Explore detailed case studies of production AI systems, distributed architectures, and high-performance backend solutions.",
  keywords: [
    "Spring Boot developer",
    "Java developer",
    "AI integration",
    "vector database",
    "financial technology",
    "backend engineer",
    "LLM integration",
    "PostgreSQL",
    "AWS",
  ],
  authors: [{ name: "Kaan Can" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yoursite.com",
    siteName: "Kaan Can - Portfolio",
    title: "Kaan Can - Senior Backend Developer",
    description:
      "Senior Backend Developer specializing in Java/Spring Boot and AI systems",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaan Can - Senior Backend Developer",
    description:
      "Senior Backend Developer specializing in Java/Spring Boot and AI systems",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
