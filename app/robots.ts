import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      }
    ],
    sitemap: [
      'https://aromacoffee-sukoharjo.vercel.app/sitemap.xml',
      'https://aromacoffee-sukoharjo.vercel.app/sitemap-blog.xml',
      'https://aromacoffee-sukoharjo.vercel.app/sitemap-additional.xml'
    ],
    host: 'https://aromacoffee-sukoharjo.vercel.app',
  }
}