'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Dimana lokasi Aroma Coffee Sukoharjo?',
      answer: 'Aroma Coffee Sukoharjo berlokasi di Jl. Jenderal Sudirman No. 123, pusat kota Sukoharjo. Lokasi strategis dan mudah dijangkau, menjadikan kami rekomendasi coffee shop Sukoharjo yang favorit.'
    },
    {
      question: 'Apakah Aroma Coffee termasuk tempat ngopi murah Sukoharjo?',
      answer: 'Ya! Kami adalah tempat ngopi murah Sukoharjo dengan harga mulai 8rb-an. Kedai kopi Mbahhadi menawarkan kopi premium dengan harga terjangkau untuk semua kalangan.'
    },
    {
      question: 'Apakah ada WiFi gratis Sukoharjo di sini?',
      answer: 'Tentu! Kami menyediakan WiFi gratis Sukoharjo berkecepatan tinggi untuk semua pelanggan. Cocok untuk bekerja, belajar, atau meeting di kedai kopi Mbahhadi.'
    },
    {
      question: 'Bisakah digunakan sebagai tempat meeting Sukoharjo?',
      answer: 'Sangat bisa! Aroma Coffee Sukoharjo adalah tempat meeting Sukoharjo yang nyaman dengan WiFi gratis, AC dingin, dan suasana tenang. Reservasi melalui +62-858-7612-0167.'
    },
    {
      question: 'Jam buka kedai kopi Mbahhadi berapa?',
      answer: 'Kedai kopi Mbahhadi buka setiap hari: Senin-Jumat pukul 06:00-21:00, Sabtu-Minggu pukul 07:00-22:00. Aroma Coffee Sukoharjo siap melayani dari pagi hingga malam.'
    },
    {
      question: 'Mengapa Aroma Coffee jadi rekomendasi coffee shop Sukoharjo?',
      answer: 'Karena kami menggabungkan kualitas premium dengan harga murah, WiFi gratis, tempat meeting nyaman, dan pelayanan terbaik. Rating 4.8/5 membuat kami rekomendasi coffee shop Sukoharjo #1.'
    }
  ]

  return (
    <section className="section-padding bg-cream-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-coffee-900 mb-6">
            FAQ Coffeshop Sukoharjo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pertanyaan yang sering ditanyakan tentang Aroma Coffee Mbahhadi - 
            tempat ngopi enak di Sukoharjo
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