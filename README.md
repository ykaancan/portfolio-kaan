# Kaan Can Yıldırım - Portfolio Website

A modern, professional portfolio website showcasing technical projects and skills. Built with Next.js 14, TypeScript, Tailwind CSS, and MDX for content management.

## 🚀 Features

- ✨ **Modern Design** - Professional, clean design with distinctive emerald/teal color scheme
- 🌓 **Dark/Light Mode** - Built-in theme toggle with system preference detection
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 📝 **MDX Content** - Write case studies in Markdown with React components
- ⚡ **Fast Performance** - Optimized for speed with Next.js 14 App Router
- 🔍 **SEO Optimized** - Meta tags, structured data (JSON-LD), and sitemap
- 🎨 **Syntax Highlighting** - Beautiful code blocks with rehype-pretty-code
- 📊 **Project Metrics** - Display quantitative results for each project

## 📋 Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Content:** MDX with gray-matter
- **Syntax Highlighting:** rehype-pretty-code + Shiki
- **Theme:** next-themes
- **Deployment:** Vercel (recommended) or static export

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd portfolo-kaan
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and set your site URL:

   ```env
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Adding New Projects

Projects are stored as MDX files in the `content/projects/` directory. To add a new project:

1. **Create a new MDX file** in `content/projects/`:

   ```bash
   touch content/projects/your-project-slug.mdx
   ```

2. **Add frontmatter and content:**

   ```mdx
   ---
   title: 'Your Project Title'
   description: 'Brief description of your project'
   date: '2024-11-24'
   tags: ['Spring Boot', 'PostgreSQL', 'AWS']
   metrics:
     - label: 'Performance'
       value: '10x faster'
     - label: 'Accuracy'
       value: '95%'
   ---

   ## The Challenge

   Describe the problem you solved...

   ## Solution

   Explain your approach...

   ## Results

   Share the measurable impact...
   ```

3. **The project will automatically appear** on the projects page and be included in the sitemap.

## 🎨 Customization

### Update Personal Information

1. **Update site metadata** in `app/layout.tsx`:

   ```typescript
   export const metadata: Metadata = {
     title: 'Your Name - Senior Backend Developer',
     description: 'Your custom description',
     // ...
   };
   ```

2. **Update About page** in `app/about/page.tsx`:

   - Modify professional summary
   - Update skills list
   - Change philosophy section

3. **Update Footer links** in `components/footer.tsx`:
   - GitHub URL
   - LinkedIn URL
   - Email address

### Change Color Scheme

The site uses a teal/emerald color scheme. To change it, edit `app/globals.css`:

```css
:root {
  --primary: 174 72% 35%; /* Change this HSL value */
  /* ... */
}

.dark {
  --primary: 174 72% 45%; /* And this one for dark mode */
  /* ... */
}
```

### Add New Pages

To add a new page:

1. Create a new directory in `app/`:

   ```bash
   mkdir app/contact
   ```

2. Add a `page.tsx` file:

   ```typescript
   import { Container } from '@/components/container';

   export default function ContactPage() {
     return (
       <Container>
         <h1>Contact Me</h1>
         {/* Your content */}
       </Container>
     );
   }
   ```

3. Add the link to `components/header.tsx` navigation array.

## 📦 Building for Production

### Option 1: Deploy to Vercel (Recommended)

1. **Push your code to GitHub**

2. **Import your repository on Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repository
   - Deploy!

Vercel will automatically:

- Build your site
- Set up CI/CD
- Provide preview deployments
- Handle SSL certificates

### Option 2: Static Export

If you prefer self-hosting:

1. **Update `next.config.ts`:**

   ```typescript
   const nextConfig: NextConfig = {
     output: 'export',
     // ... rest of config
   };
   ```

2. **Build the site:**

   ```bash
   npm run build
   ```

3. **Deploy the `out/` directory** to your hosting provider (Netlify, GitHub Pages, etc.)

## 🧪 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server locally
npm start

# Run linter
npm run lint

# Type check
npx tsc --noEmit
```

## 📁 Project Structure

```
portfolo-kaan/
├── app/                        # Next.js 14 App Router
│   ├── about/                 # About page
│   ├── projects/              # Projects listing
│   │   └── [slug]/           # Individual project pages
│   ├── globals.css           # Global styles and theme
│   ├── layout.tsx            # Root layout with theme provider
│   ├── page.tsx              # Home page
│   ├── robots.ts             # Robots.txt configuration
│   ├── sitemap.ts            # Dynamic sitemap
│   └── not-found.tsx         # 404 page
├── components/                # React components
│   ├── header.tsx            # Navigation header
│   ├── footer.tsx            # Site footer
│   ├── container.tsx         # Layout container
│   ├── theme-provider.tsx    # Theme context provider
│   └── theme-toggle.tsx      # Dark/light mode toggle
├── content/                   # MDX content
│   └── projects/             # Project case studies
│       ├── ai-financial-classification.mdx
│       ├── multi-source-import.mdx
│       └── ...
├── lib/                       # Utility functions
│   └── projects.ts           # Project loading utilities
├── mdx-components.tsx         # MDX component overrides
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind configuration (if exists)
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

## 🔧 Configuration Files

### Environment Variables

Create `.env.local`:

```env
# Site URL for SEO (required)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### TypeScript

The project uses strict TypeScript. Configuration in `tsconfig.json`.

### Tailwind CSS

Uses Tailwind CSS v4 with `@import "tailwindcss"` in `globals.css`. Custom theme variables are defined in CSS custom properties for dark/light mode support.

## 🐛 Troubleshooting

### MDX files not rendering

- Ensure MDX files are in `content/projects/`
- Check frontmatter format (must have `---` delimiters)
- Verify required fields: `title`, `description`, `date`, `tags`

### Theme toggle not working

- Make sure `suppressHydrationWarning` is on the `<html>` tag in `app/layout.tsx`
- Check that ThemeProvider is wrapping your app

### Build errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

This is a personal portfolio, but if you find bugs or have suggestions:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Contact

- **GitHub:** [@yourusername](https://github.com/ykaancan)
- **LinkedIn:** [Your Name](https://linkedin.com/in/kaan-can-yildirim)
- **Email:** ykaancan@gmail.com

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
