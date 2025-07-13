# Aroma Coffee - Landing Page

A modern, responsive landing page for a coffee shop built with Next.js, Tailwind CSS, and Bun.

## Features

- 🎨 Modern and elegant design
- 📱 Fully responsive layout
- ⚡ Fast performance with Next.js 14
- 🎭 Smooth animations and transitions
- 🖼️ Interactive image gallery
- 📧 Contact form
- 🎯 SEO optimized

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Package Manager**: Bun
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

1. Install dependencies:
```bash
bun install
```

2. Run the development server:
```bash
bun dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Menu.tsx        # Menu section
│   ├── Gallery.tsx     # Image gallery
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
└── public/            # Static assets
```

## Sections

1. **Header** - Navigation with smooth scrolling
2. **Hero** - Eye-catching banner with call-to-action
3. **About** - Company story and features
4. **Menu** - Interactive menu with categories
5. **Gallery** - Image showcase with lightbox
6. **Contact** - Contact form and information
7. **Footer** - Links and newsletter signup

## Customization

- Colors can be customized in `tailwind.config.js`
- Images can be replaced in the components
- Content can be modified in each component file

## Deployment

The project can be deployed on any platform that supports Next.js:

- Vercel (recommended)
- Netlify
- Railway
- Digital Ocean

## License

MIT License