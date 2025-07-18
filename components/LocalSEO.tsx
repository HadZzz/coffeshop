'use client'

import { MapPin, Clock, Phone, Star, Wifi, Car } from 'lucide-react'

export default function LocalSEO() {
  return (
    <section className="section-padding bg-gradient-to-br from-coffee-50 to-cream-100">
      <div className="container-custom">
        {/* Local Business Info */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-coffee-900 mb-6">
            Tempat Ngopi Enak di Sukoharjo #1
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            <strong>Kedai kopi Mbahhadi</strong> adalah <strong>tempat ngopi enak di Sukoharjo</strong> terbaik yang telah melayani 
            masyarakat sejak 2019. Sebagai <strong>coffee shop Sukoharjo</strong> dengan rating 4.8/5, 
            kami menjadi <strong>cafe Sukoharjo</strong> favorit dan <strong>rekomendasi coffee shop Sukoharjo</strong> #1.
          </p>
        </div>

        {/* Location & Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Location Info */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-serif font-bold text-coffee-900 mb-6 flex items-center">
              <MapPin className="h-6 w-6 mr-3 text-coffee-600" />
              Lokasi Coffeshop Mbahhadi
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-coffee-800 mb-2">Alamat Lengkap:</h4>
                <p className="text-gray-600">
                  Jl. Jenderal Sudirman No. 123<br />
                  Pusat Kota Sukoharjo, Jawa Tengah 57511<br />
                  <span className="text-coffee-600 font-medium">
                    (Dekat Alun-alun Sukoharjo, mudah dijangkau dari segala arah)
                  </span>
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-coffee-800 mb-2">Mengapa Lokasi Kami Strategis?</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• 5 menit dari Alun-alun Sukoharjo</li>
                  <li>• Akses mudah dari Jalan Raya Solo-Yogya</li>
                  <li>• Dekat dengan perkantoran dan sekolah</li>
                  <li>• Area parkir luas untuk motor dan mobil</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-serif font-bold text-coffee-900 mb-6 flex items-center">
              <Clock className="h-6 w-6 mr-3 text-coffee-600" />
              Jam Buka Kedai Kopi Sukoharjo
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-coffee-800 mb-2">Senin - Jumat</h4>
                  <p className="text-2xl font-bold text-coffee-600">06:00 - 21:00</p>
                  <p className="text-sm text-gray-600">Buka pagi untuk sarapan</p>
                </div>
                <div>
                  <h4 className="font-semibold text-coffee-800 mb-2">Sabtu - Minggu</h4>
                  <p className="text-2xl font-bold text-coffee-600">07:00 - 22:00</p>
                  <p className="text-sm text-gray-600">Weekend lebih lama</p>
                </div>
              </div>
              <div className="bg-coffee-50 p-4 rounded-lg">
                <p className="text-coffee-800 font-medium text-center">
                  ☕ Buka setiap hari! Tempat ngopi enak di Sukoharjo yang selalu siap melayani
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <Wifi className="h-12 w-12 text-coffee-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-coffee-900 mb-2">WiFi Gratis Sukoharjo</h4>
            <p className="text-gray-600">Internet cepat 100 Mbps untuk kerja, belajar, dan meeting online</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <Car className="h-12 w-12 text-coffee-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-coffee-900 mb-2">Parkir Luas</h4>
            <p className="text-gray-600">Area parkir motor dan mobil yang aman dan nyaman</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <Star className="h-12 w-12 text-coffee-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-coffee-900 mb-2">Rating 4.8/5</h4>
            <p className="text-gray-600">Dipercaya 1000+ pelanggan sebagai coffeshop Sukoharjo terbaik</p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-coffee-900 text-white p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-serif font-bold mb-4">
            Siap Berkunjung ke Tempat Ngopi Enak di Sukoharjo?
          </h3>
          <p className="text-cream-200 mb-6 max-w-2xl mx-auto">
            Hubungi kami untuk reservasi tempat meeting atau info lebih lanjut tentang 
            kedai kopi Mbahhadi yang menjadi rekomendasi coffee shop Sukoharjo #1
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+6285876120167" 
              className="flex items-center bg-coffee-600 hover:bg-coffee-700 px-6 py-3 rounded-lg transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              +62-858-7612-0167
            </a>
            <a 
              href="https://goo.gl/maps/aromacoffeesukoharjo" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-cream-600 hover:bg-cream-700 text-coffee-900 px-6 py-3 rounded-lg transition-colors"
            >
              <MapPin className="h-5 w-5 mr-2" />
              Lihat di Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}