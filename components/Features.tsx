'use client'

import { Wifi, Users, Coffee, Clock, MapPin, Star } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Wifi,
      title: 'WiFi Gratis Sukoharjo',
      description: 'Internet cepat dan stabil untuk bekerja, belajar, atau meeting di tempat ngopi terbaik Sukoharjo.'
    },
    {
      icon: Users,
      title: 'Tempat Meeting Sukoharjo',
      description: 'Ruang nyaman untuk meeting bisnis, diskusi, atau gathering di kedai kopi Mbahhadi.'
    },
    {
      icon: Coffee,
      title: 'Tempat Ngopi Murah',
      description: 'Harga terjangkau untuk semua kalangan tanpa mengurangi kualitas kopi premium kami.'
    },
    {
      icon: Clock,
      title: 'Buka Pagi Hingga Malam',
      description: 'Aroma Coffee Sukoharjo buka dari pagi hingga malam untuk kenyamanan Anda.'
    },
    {
      icon: MapPin,
      title: 'Lokasi Strategis',
      description: 'Terletak di pusat kota Sukoharjo, mudah dijangkau dari berbagai arah.'
    },
    {
      icon: Star,
      title: 'Rekomendasi Terbaik',
      description: 'Rating 4.8/5 dari pelanggan membuat kami rekomendasi coffee shop Sukoharjo #1.'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-coffee-900 mb-6">
            Mengapa Pilih Aroma Coffee Sukoharjo?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kedai kopi Mbahhadi dengan fasilitas lengkap dan pelayanan terbaik. 
            Tempat ngopi murah yang tidak murahan di pusat kota Sukoharjo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-cream-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-coffee-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-8 w-8 text-coffee-600" />
              </div>
              <h3 className="text-xl font-semibold text-coffee-900 mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional SEO Content */}
        <div className="mt-16 bg-coffee-50 p-8 rounded-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-serif font-bold text-coffee-900 mb-4">
              Fasilitas Lengkap di Kedai Kopi Mbahhadi
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-coffee-600 mb-2">WiFi Gratis</div>
                <div className="text-sm text-gray-600">Internet Cepat 24/7</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-coffee-600 mb-2">AC Dingin</div>
                <div className="text-sm text-gray-600">Suasana Nyaman</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-coffee-600 mb-2">Parkir Luas</div>
                <div className="text-sm text-gray-600">Motor & Mobil</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-coffee-600 mb-2">Harga Murah</div>
                <div className="text-sm text-gray-600">Mulai 8rb-an</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}