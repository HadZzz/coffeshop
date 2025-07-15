import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface BlogPost {
  id: number
  title: string
  content: string
  excerpt: string
  author: string
  date: string
  image: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '5 Tempat Ngopi Enak di Sukoharjo yang Wajib Dikunjungi',
    excerpt: 'Discover the best coffee shops in Sukoharjo, including our very own Aroma Coffee Mbahhadi.',
    content: `
      <h2>Coffeshop Sukoharjo Terbaik untuk Pecinta Kopi</h2>
      <p>Sukoharjo memiliki banyak tempat ngopi enak yang patut dikunjungi. Sebagai coffeshop Mbahhadi yang telah berpengalaman, kami ingin berbagi rekomendasi tempat ngopi enak di Sukoharjo:</p>
      
      <h3>1. Aroma Coffee Mbahhadi - Coffeshop Sukoharjo Terbaik</h3>
      <p>Sebagai coffeshop Sukoharjo yang telah melayani sejak 2019, Aroma Coffee Mbahhadi menawarkan pengalaman ngopi terbaik dengan:</p>
      <ul>
        <li>Kopi premium berkualitas tinggi</li>
        <li>Suasana nyaman untuk nongkrong</li>
        <li>Lokasi strategis di pusat kota Sukoharjo</li>
        <li>Harga terjangkau untuk semua kalangan</li>
      </ul>
      
      <h3>Mengapa Memilih Coffeshop Mbahhadi?</h3>
      <p>Tempat ngopi enak di Sukoharjo ini menjadi pilihan utama karena:</p>
      <ul>
        <li>Barista berpengalaman dan ramah</li>
        <li>Menu kopi lengkap dari espresso hingga specialty coffee</li>
        <li>WiFi gratis untuk bekerja atau belajar</li>
        <li>Parkir luas dan mudah dijangkau</li>
      </ul>
      
      <p>Kunjungi coffeshop Sukoharjo kami di Jl. Jenderal Sudirman No. 123 dan rasakan pengalaman ngopi terbaik di tempat ngopi enak Sukoharjo yang satu ini!</p>
    `,
    author: 'Tim Aroma Coffee',
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    slug: 'tempat-ngopi-enak-sukoharjo'
  }
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Blog Post Not Found - Coffeshop Sukoharjo',
    }
  }

  return {
    title: `${post.title} | Blog Coffeshop Sukoharjo - Aroma Coffee Mbahhadi`,
    description: post.excerpt,
    keywords: 'tempat ngopi enak sukoharjo, coffeshop sukoharjo, coffeshop mbahhadi, blog kopi sukoharjo',
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-cream-50">
      {/* Header */}
      <section className="bg-coffee-900 text-white py-20">
        <div className="container-custom">
          <Link 
            href="/blog"
            className="inline-flex items-center text-cream-200 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali ke Blog
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center text-sm text-cream-200 mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{new Date(post.date).toLocaleDateString('id-ID')}</span>
              <User className="h-4 w-4 ml-4 mr-2" />
              <span>{post.author}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-cream-200">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-coffee-900 mb-8">
              Kunjungi Coffeshop Mbahhadi Sukoharjo
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Setelah membaca tentang tempat ngopi enak di Sukoharjo, langsung saja kunjungi 
              Aroma Coffee Mbahhadi untuk merasakan pengalaman kopi terbaik!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="btn-primary">
                Kunjungi Sekarang
              </Link>
              <Link href="/#menu" className="btn-secondary">
                Lihat Menu Kopi
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}