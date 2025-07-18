'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Dimana tempat ngopi enak di Sukoharjo yang recommended?',
      answer: 'Kedai kopi Mbahhadi berlokasi di Jl. Jenderal Sudirman No. 123, pusat kota Sukoharjo. Sebagai tempat ngopi enak di Sukoharjo, lokasi kami strategis dan mudah dijangkau dari berbagai arah.'
    },
    {
      question: 'Apa yang membuat ini coffee shop Sukoharjo terbaik?',
      answer: 'Kami menyajikan kopi enak Sukoharjo dengan biji premium, suasana nyaman, dan pelayanan ramah. Sebagai cafe Sukoharjo favorit, kami berkomitmen memberikan pengalaman ngopi terbaik.'
    },
    {
      question: 'Apakah ini kedai kopi Sukoharjo dengan harga terjangkau?',
      answer: 'Ya! Sebagai tempat ngopi murah Sukoharjo, kami menawarkan kopi premium dengan harga mulai 8rb-an. Kedai kopi Mbahhadi mengutamakan kualitas tanpa menguras kantong.'
    },
    {
      question: 'Mengapa disebut warung kopi Sukoharjo terenak?',
      answer: 'Karena kami menggunakan biji kopi pilihan, barista berpengalaman, dan resep rahasia keluarga. Setiap cangkir kopi enak Sukoharjo dibuat dengan penuh perhatian dan cinta.'
    },
    {
      question: 'Jam buka tempat ngopi nyaman Sukoharjo ini berapa?',
      answer: 'Kedai kopi Mbahhadi buka setiap hari: Senin-Jumat pukul 06:00-21:00, Sabtu-Minggu pukul 07:00-22:00. Tempat ngopi enak di Sukoharjo yang siap melayani dari pagi hingga malam.'
    },
    {
      question: 'Kenapa jadi rekomendasi coffee shop Sukoharjo #1?',
      answer: 'Rating 4.8/5 dari 1000+ pelanggan membuktikan kualitas kami. Sebagai cafe Sukoharjo terbaik, kami menggabungkan kopi enak, suasana nyaman, dan harga terjangkau dalam satu tempat.'
    }
  ]

  return (
    <section className="section-padding bg-cream-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-coffee-900 mb-6">
            FAQ Tempat Ngopi Enak di Sukoharjo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pertanyaan yang sering ditanyakan tentang kedai kopi Mbahhadi - 
            coffee shop Sukoharjo terbaik dan cafe Sukoharjo favorit
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-coffee-900 pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-coffee-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-coffee-600 flex-shrink-0" />
                  )}
                </div>
                
                {openIndex === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Additional SEO Content */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-coffee-900 mb-4">
              Mengapa Memilih Coffeshop Mbahhadi Sukoharjo?
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Aroma Coffee Mbahhadi adalah coffeshop Sukoharjo terbaik yang telah melayani masyarakat 
              sejak 2019. Sebagai tempat ngopi enak di Sukoharjo, kami berkomitmen memberikan 
              pengalaman kopi terbaik dengan suasana yang nyaman dan harga yang terjangkau.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-coffee-600 mb-2">5+</div>
                <div className="text-sm text-gray-600">Tahun Melayani Sukoharjo</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-coffee-600 mb-2">1000+</div>
                <div className="text-sm text-gray-600">Pelanggan Setia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-coffee-600 mb-2">4.8★</div>
                <div className="text-sm text-gray-600">Rating Google</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}