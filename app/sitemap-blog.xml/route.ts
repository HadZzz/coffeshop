import { MetadataRoute } from 'next'

export async function GET(): Promise<Response> {
  const blogPosts = [
    {
      slug: 'tempat-ngopi-enak-sukoharjo',
      lastModified: '2024-01-15'
    },
    {
      slug: 'sejarah-kopi-jawa-tengah-sukoharjo', 
      lastModified: '2024-01-10'
    },
    {
      slug: 'tips-memilih-kopi-coffeshop-sukoharjo',
      lastModified: '2024-01-05'
    },
    {
      slug: 'event-kopi-sukoharjo-festival-2024',
      lastModified: '2024-01-01'
    }
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://aromacoffee-sukoharjo.vercel.app/blog</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  ${blogPosts.map(post => `
  <url>
    <loc>https://aromacoffee-sukoharjo.vercel.app/blog/${post.slug}</loc>
    <lastmod>${post.lastModified}T00:00:00.000Z</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}