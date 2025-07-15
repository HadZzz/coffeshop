import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog Coffeshop Sukoharjo - Tips Kopi & Berita Terbaru | Aroma Coffee Mbahhadi',
  description: 'Blog coffeshop Sukoharjo dengan tips kopi, resep minuman, dan berita terbaru dari Aroma Coffee Mbahhadi. Tempat ngopi enak di Sukoharjo dengan informasi lengkap seputar dunia kopi.',
  keywords: 'blog coffeshop sukoharjo, tips kopi sukoharjo, berita kopi sukoharjo, coffeshop mbahhadi blog, tempat ngopi enak sukoharjo artikel',
}

const blogPosts = [
  {
    id: 1,
    title: '5 Tempat Ngopi Enak di Sukoharjo yang Wajib Dikunjungi',
    excerpt: 'Discover the best coffee shops in Sukoharjo, including our very own Aroma Coffee Mbahhadi. Perfect spots for coffee lovers and hangout sessions.',
    author: 'Tim Aroma Coffee',
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'tempat-ngopi-enak-sukoharjo'
  },
  {
    id: 2,
    title: 'Sejarah Kopi di Jawa Tengah dan Perkembangannya di Sukoharjo',
    excerpt: 'Explore the rich history of coffee culture in Central Java and how it has evolved in Sukoharjo, making it a perfect place for coffee enthusiasts.',
    author: 'Barista Mbahhadi',
    date: '2024-01-10',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'sejarah-kopi-jawa-tengah-sukoharjo'
  },
  {
    id: 3,
    title: 'Tips Memilih Kopi yang Tepat untuk Coffeshop Sukoharjo',
    excerpt: 'Learn how to choose the perfect coffee beans and brewing methods that make Aroma Coffee Mbahhadi the best coffeshop in Sukoharjo.',
    author: 'Master Roaster',
    date: '2024-01-05',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'tips-memilih-kopi-coffeshop-sukoharjo'
  },
  {
    id: 4,
    title: 'Event Kopi Terbesar di Sukoharjo - Coffee Festival 2024',
    excerpt: 'Join us at the biggest coffee event in Sukoharjo! Aroma Coffee Mbahhadi will be participating in the annual coffee festival with special promotions.',
    author: 'Event Manager',
    date: '2024-01-01',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'event-kopi-sukoharjo-festival-2024'
  }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-cream-50">
      {/* Header */}
      <section className="bg-coffee-900 text-white py-20">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Blog Coffeshop Sukoharjo
            </h1>
            <p className="text-xl text-cream-200 max-w-2xl mx-auto">
              Tips kopi, berita terbaru, dan cerita menarik dari Aroma Coffee Mbahhadi - 
              tempat ngopi enak di Sukoharjo
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{new Date(post.date).toLocaleDateString('id-ID')}</span>
                    <User className="h-4 w-4 ml-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-coffee-900 mb-3 hover:text-coffee-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-coffee-600 hover:text-coffee-800 font-medium transition-colors"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-coffee-900 mb-6">
              Mengapa Memilih Coffeshop Mbahhadi di Sukoharjo?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold text-coffee-800 mb-3">
                  Tempat Ngopi Enak di Sukoharjo
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Aroma Coffee Mbahhadi adalah coffeshop Sukoharjo yang menyajikan pengalaman ngopi terbaik. 
                  Sebagai tempat ngopi enak di Sukoharjo, kami menawarkan berbagai varian kopi premium dengan 
                  suasana yang nyaman untuk bersantai atau meeting.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-coffee-800 mb-3">
                  Coffeshop Sukoharjo Terpercaya
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dengan pengalaman lebih dari 5 tahun, coffeshop Mbahhadi telah menjadi pilihan utama 
                  masyarakat Sukoharjo. Lokasi strategis di pusat kota membuat kami mudah dijangkau 
                  sebagai tempat ngopi enak di Sukoharjo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}