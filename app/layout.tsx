import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tempat Ngopi Enak di Sukoharjo - Kedai Kopi Mbahhadi | Coffee Shop Sukoharjo Terbaik',
  description: 'Tempat ngopi enak di Sukoharjo! Kedai kopi Mbahhadi - coffee shop Sukoharjo terbaik dengan kopi premium, suasana nyaman, harga murah. Cafe Sukoharjo favorit sejak 2019. Warung kopi terenak di pusat kota!',
  keywords: 'tempat ngopi enak di sukoharjo, kedai kopi sukoharjo, coffee shop sukoharjo, cafe sukoharjo, warung kopi sukoharjo, kopi enak sukoharjo, tempat ngopi murah sukoharjo, kedai kopi mbahhadi, coffeshop mbahhadi, aroma coffee sukoharjo, tempat nongkrong sukoharjo, kopi terbaik sukoharjo, rekomendasi coffee shop sukoharjo, tempat ngopi nyaman sukoharjo, kedai kopi enak sukoharjo, coffee shop terbaik sukoharjo, warung kopi mbahhadi, cafe enak sukoharjo, tempat minum kopi sukoharjo'gramable sukoharjo, tempat ngopi romantis sukoharjo',
  authors: [{ name: 'Aroma Coffee Sukoharjo' }],
  creator: 'Aroma Coffee Sukoharjo',
  publisher: 'Aroma Coffee Sukoharjo',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://aromacoffee-sukoharjo.vercel.app',
    siteName: 'Aroma Coffee Sukoharjo',
    title: 'Tempat Ngopi Enak di Sukoharjo - Kedai Kopi Mbahhadi | Coffee Shop Sukoharjo Terbaik',
    description: 'Tempat ngopi enak di Sukoharjo! Kedai kopi Mbahhadi - coffee shop Sukoharjo terbaik dengan kopi premium, suasana nyaman, harga murah.',
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
    title: 'Tempat Ngopi Enak di Sukoharjo - Kedai Kopi Mbahhadi | Coffee Shop Sukoharjo Terbaik',
    description: 'Tempat ngopi enak di Sukoharjo! Kedai kopi Mbahhadi - coffee shop Sukoharjo terbaik dengan kopi premium, suasana nyaman, harga murah.',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/logo.svg" color="#43302b" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#43302b" />
        <meta name="msapplication-TileColor" content="#43302b" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Local SEO Meta Tags */}
        <meta name="geo.region" content="ID-JI" />
        <meta name="geo.placename" content="Sukoharjo" />
        <meta name="geo.position" content="-7.6837;110.8407" />
        <meta name="ICBM" content="-7.6837, 110.8407" />
        <meta name="DC.title" content="Tempat Ngopi Enak di Sukoharjo - Kedai Kopi Mbahhadi" />
        <meta name="DC.subject" content="Tempat Ngopi Enak, Kedai Kopi, Coffee Shop Sukoharjo" />
        <meta name="DC.description" content="Tempat ngopi enak di Sukoharjo - Kedai kopi Mbahhadi, coffee shop Sukoharjo terbaik" />
        <meta name="DC.creator" content="Aroma Coffee Mbahhadi" />
        <meta name="DC.language" content="id" />
        <meta name="DC.coverage" content="Sukoharjo, Jawa Tengah, Indonesia" />
        
        {/* Business specific meta tags */}
        <meta name="business:contact_data:street_address" content="Jl. Jenderal Sudirman No. 123" />
        <meta name="business:contact_data:locality" content="Sukoharjo" />
        <meta name="business:contact_data:region" content="Jawa Tengah" />
        <meta name="business:contact_data:postal_code" content="57511" />
        <meta name="business:contact_data:country_name" content="Indonesia" />
        <meta name="business:contact_data:phone_number" content="+62-858-7612-0167" />
        <meta name="business:contact_data:email" content="hadzipamuji5@gmail.com" />
        
        {/* Enhanced Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["CafeOrCoffeeShop", "LocalBusiness", "Restaurant"],
              "name": "Kedai Kopi Mbahhadi - Tempat Ngopi Enak di Sukoharjo",
              "alternateName": ["Tempat Ngopi Enak di Sukoharjo", "Kedai Kopi Sukoharjo", "Coffee Shop Sukoharjo", "Cafe Sukoharjo", "Warung Kopi Mbahhadi", "Aroma Coffee Sukoharjo"],
              "description": "Tempat ngopi enak di Sukoharjo - Kedai kopi Mbahhadi, coffee shop Sukoharjo terbaik dengan kopi premium dan suasana nyaman",
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
              "servesCuisine": ["Coffee", "Indonesian Coffee", "Espresso", "Cappuccino"],
              "priceRange": "$$",
              "image": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150",
                "bestRating": "5",
                "worstRating": "1"
              },
              "hasMenu": "https://aromacoffee-sukoharjo.vercel.app#menu",
              "acceptsReservations": "True",
              "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Mobile Payment"],
              "currenciesAccepted": "IDR",
              "smokingAllowed": false,
              "amenityFeature": [
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Free WiFi",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification", 
                  "name": "Air Conditioning",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Parking Available",
                  "value": true
                }
              ],
              "keywords": "tempat ngopi enak di sukoharjo, kedai kopi sukoharjo, coffee shop sukoharjo, cafe sukoharjo, warung kopi sukoharjo, kopi enak sukoharjo, tempat ngopi murah sukoharjo, kedai kopi mbahhadi, tempat nongkrong sukoharjo, kopi terbaik sukoharjo, rekomendasi coffee shop sukoharjo, tempat ngopi nyaman sukoharjo",
              "sameAs": [
                "https://www.instagram.com/aromacoffeesukoharjo",
                "https://www.facebook.com/aromacoffeesukoharjo", 
                "https://goo.gl/maps/aromacoffeesukoharjo"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Menu Kopi Aroma Coffee Sukoharjo",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Kopi Espresso Premium"
                    },
                    "price": "12000",
                    "priceCurrency": "IDR"
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Cappuccino Sukoharjo"
                    },
                    "price": "15000",
                    "priceCurrency": "IDR"
                  }
                ]
              },
              "makesOffer": [
                {
                  "@type": "Offer",
                  "name": "WiFi Gratis Sukoharjo",
                  "description": "Internet gratis untuk semua pelanggan"
                },
                {
                  "@type": "Offer",
                  "name": "Tempat Meeting Sukoharjo", 
                  "description": "Ruang meeting nyaman dengan AC dan WiFi"
                }
              ]
            })
          }}
        />
        
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Coffeshop Sukoharjo",
                  "item": "https://aromacoffee-sukoharjo.vercel.app"
                },
                {
                  "@type": "ListItem", 
                  "position": 2,
                  "name": "Tempat Ngopi Enak di Sukoharjo",
                  "item": "https://aromacoffee-sukoharjo.vercel.app#about"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Menu Kopi Sukoharjo",
                  "item": "https://aromacoffee-sukoharjo.vercel.app#menu"
                }
              ]
            })
          }}
        />
        
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Dimana lokasi coffeshop Mbahhadi di Sukoharjo?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Aroma Coffee Mbahhadi berlokasi di Jl. Jenderal Sudirman No. 123, pusat kota Sukoharjo. Lokasi strategis dan mudah dijangkau, menjadikan kami tempat ngopi enak di Sukoharjo yang favorit."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "Jam buka coffeshop Sukoharjo ini berapa?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Coffeshop Sukoharjo kami buka setiap hari: Senin-Jumat pukul 06:00-21:00, Sabtu-Minggu pukul 07:00-22:00. Tempat ngopi enak di Sukoharjo yang buka dari pagi hingga malam."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Apa yang membuat Aroma Coffee Mbahhadi istimewa?", 
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sebagai coffeshop Mbahhadi terpercaya, kami menggunakan biji kopi premium, barista berpengalaman, suasana nyaman, dan harga terjangkau. Inilah yang membuat kami menjadi tempat ngopi enak di Sukoharjo pilihan utama."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}