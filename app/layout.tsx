import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aroma Coffee - Premium Coffee Experience',
  description: 'Discover the finest coffee beans and experience the perfect brew at Aroma Coffee. Premium quality, exceptional taste.',
  keywords: 'coffee, premium coffee, coffee shop, espresso, latte, cappuccino',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}