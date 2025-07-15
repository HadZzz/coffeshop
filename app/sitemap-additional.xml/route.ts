import { NextResponse } from 'next/server'

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  
  <!-- Enhanced Main Pages with Mobile and Image -->
  <url>
    <loc>https://aromacoffee-sukoharjo.vercel.app</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <mobile:mobile/>
    <image:image>
      <image:loc>https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80</image:loc>
      <image:title>Coffeshop Sukoharjo - Aroma Coffee Mbahhadi</image:title>
      <image:caption>Tempat ngopi enak di Sukoharjo dengan kopi premium dan WiFi gratis</image:caption>
    </image:image>
  </url>
  
  <!-- Location-based URLs -->
  <url>
    <loc>https://aromacoffee-sukoharjo.vercel.app/lokasi-coffeshop-sukoharjo</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <mobile:mobile/>
  </url>
  
  <!-- Service-based URLs -->
  <url>
    <loc>https://aromacoffee-sukoharjo.vercel.app/wifi-gratis-sukoharjo</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <mobile:mobile/>
  </url>
  
  <url>
    <loc>https://aromacoffee-sukoharjo.vercel.app/tempat-meeting-sukoharjo</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <mobile:mobile/>
  </url>
  
  <!-- Product-based URLs -->
  <url>
    <loc>https://aromacoffee-sukoharjo.vercel.app/menu-kopi-sukoharjo</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <mobile:mobile/>
  </url>
  
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}