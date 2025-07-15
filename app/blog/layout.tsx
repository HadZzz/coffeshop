import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <div className="pt-16 md:pt-20">
        {children}
      </div>
      <Footer />
    </>
  )
}