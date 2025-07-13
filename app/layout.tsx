import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aroma Coffee Sukoharjo - Coffee Shop Terbaik & Tempat Ngopi Enak di Sukoharjo',
  description: 'Coffee shop terbaik di Sukoharjo! Tempat ngopi enak dengan kopi premium, suasana nyaman, dan pelayanan terbaik. Lokasi strategis di pusat kota Sukoharjo. Buka setiap hari!',
  keywords: 'coffee shop sukoharjo, tempat ngopi enak sukoharjo, kedai kopi sukoharjo, cafe sukoharjo, kopi terbaik sukoharjo, tempat nongkrong sukoharjo, coffee shop terbaik sukoharjo, kedai kopi enak sukoharjo, cafe nyaman sukoharjo, tempat ngopi murah sukoharjo',
  authors: [{ name: 'Aroma Coffee Sukoharjo' }],
  creator: 'Aroma Coffee Sukoharjo',
  publisher: 'Aroma Coffee Sukoharjo',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://aromacoffee-sukoharjo.vercel.app',
    siteName: 'Aroma Coffee Sukoharjo',
    title: 'Aroma Coffee Sukoharjo - Coffee Shop Terbaik & Tempat Ngopi Enak di Sukoharjo',
    description: 'Coffee shop terbaik di Sukoharjo! Tempat ngopi enak dengan kopi premium, suasana nyaman, dan pelayanan terbaik. Lokasi strategis di pusat kota Sukoharjo.',
    images: [
      {
        url: 'https://aromacoffee-sukoharjo.vercel.app/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Aroma Coffee Sukoharjo - Coffee Shop Terbaik di Sukoharjo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aroma Coffee Sukoharjo - Coffee Shop Terbaik & Tempat Ngopi Enak di Sukoharjo',
    description: 'Coffee shop terbaik di Sukoharjo! Tempat ngopi enak dengan kopi premium, suasana nyaman, dan pelayanan terbaik.',
    images: ['https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
  },
  verification: {
    google: '5mAM5b2AU2ijdyRFKokDSX1NQ6b22MibtjoO2wRlsR8',
  },
  alternates: {
    canonical: 'https://aromacoffee-sukoharjo.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/logo.svg" color="#43302b" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#43302b" />
        <meta name="msapplication-TileColor" content="#43302b" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CafeOrCoffeeShop",
              "name": "Aroma Coffee Sukoharjo",
              "description": "Coffee shop terbaik di Sukoharjo dengan kopi premium dan suasana nyaman",
              "url": "https://aromacoffee-sukoharjo.vercel.app",
              "telephone": "+62-858-7612-0167",
              "email": "hadzipamuji5@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Jenderal Sudirman No. 123",
                "addressLocality": "Sukoharjo",
                "addressRegion": "Jawa Tengah",
                "postalCode": "57511",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -7.6837,
                "longitude": 110.8407
              },
              "openingHours": [
                "Mo-Fr 06:00-21:00",
                "Sa-Su 07:00-22:00"
              ],
              "servesCuisine": "Coffee",
              "priceRange": "$$",
              "image": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150"
              },
              "hasMenu": "https://aromacoffee-sukoharjo.vercel.app#menu",
              "acceptsReservations": "True"
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}