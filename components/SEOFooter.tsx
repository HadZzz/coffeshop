'use client'

export default function SEOFooter() {
  return (
    <section className="bg-coffee-50 py-16">
      <div className="container-custom">
        {/* SEO Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Coffeshop Sukoharjo */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-serif font-bold text-coffee-900 mb-4">
              Coffeshop Sukoharjo Terbaik
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Aroma Coffee Mbahhadi</strong> adalah <strong>coffeshop Sukoharjo</strong> yang telah 
              dipercaya sejak 2019. Sebagai <strong>tempat ngopi enak di Sukoharjo</strong>, kami menyajikan 
              kopi premium dengan harga terjangkau di lokasi strategis pusat kota.
            </p>
            <div className="text-sm text-coffee-600 space-y-1">
              <div>📍 Jl. Jenderal Sudirman No. 123</div>
              <div>⭐ Rating 4.8/5 dari 1000+ pelanggan</div>
              <div>☕ 50+ varian kopi premium</div>
            </div>
          </div>

          {/* Fasilitas */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-serif font-bold text-coffee-900 mb-4">
              Fasilitas Lengkap
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>WiFi gratis Sukoharjo</strong> berkecepatan tinggi, <strong>tempat meeting Sukoharjo</strong> 
              yang nyaman, AC dingin, dan parkir luas. Kedai kopi Mbahhadi dengan fasilitas modern 
              untuk kenyamanan maksimal.
            </p>
            <div className="text-sm text-coffee-600 space-y-1">
              <div>🌐 WiFi Gratis 100 Mbps</div>
              <div>🏢 Ruang Meeting Nyaman</div>
              <div>🚗 Parkir Motor & Mobil</div>
              <div>❄️ AC Full Ruangan</div>
            </div>
          </div>

          {/* Jam Buka */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-serif font-bold text-coffee-900 mb-4">
              Jam Buka & Kontak
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Kedai kopi Mbahhadi</strong> buka setiap hari dari pagi hingga malam. 
              Reservasi <strong>tempat meeting Sukoharjo</strong> atau info lebih lanjut 
              hubungi kami langsung.
            </p>
            <div className="text-sm text-coffee-600 space-y-1">
              <div>🕕 Sen-Jum: 06:00-21:00</div>
              <div>🕖 Sab-Min: 07:00-22:00</div>
              <div>📞 +62-858-7612-0167</div>
              <div>📧 hadzipamuji5@gmail.com</div>
            </div>
          </div>
        </div>

        {/* Keywords Footer */}
        <div className="bg-gradient-to-r from-coffee-900 to-coffee-800 text-white p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-serif font-bold mb-4">
            Rekomendasi Coffee Shop Sukoharjo #1
          </h3>
          <p className="text-cream-200 mb-6 max-w-4xl mx-auto leading-relaxed">
            <strong>Aroma Coffee Sukoharjo</strong> adalah pilihan terbaik untuk <strong>tempat ngopi murah Sukoharjo</strong> 
            dengan kualitas premium. Sebagai <strong>coffeshop Mbahhadi</strong> terpercaya, kami menjadi 
            <strong> rekomendasi coffee shop Sukoharjo</strong> untuk meeting, nongkrong, atau sekedar menikmati 
            kopi terbaik di <strong>kedai kopi Sukoharjo</strong> yang paling nyaman.
          </p>
          
          {/* Related Keywords */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-coffee-800/50 p-3 rounded-lg">
              <div className="font-semibold text-cream-300 mb-1">Lokasi</div>
              <div className="text-cream-200">Coffeshop Sukoharjo Pusat Kota</div>
            </div>
            <div className="bg-coffee-800/50 p-3 rounded-lg">
              <div className="font-semibold text-cream-300 mb-1">Fasilitas</div>
              <div className="text-cream-200">WiFi Gratis & Tempat Meeting</div>
            </div>
            <div className="bg-coffee-800/50 p-3 rounded-lg">
              <div className="font-semibold text-cream-300 mb-1">Harga</div>
              <div className="text-cream-200">Tempat Ngopi Murah Berkualitas</div>
            </div>
            <div className="bg-coffee-800/50 p-3 rounded-lg">
              <div className="font-semibold text-cream-300 mb-1">Rating</div>
              <div className="text-cream-200">4.8/5 ⭐ Terpercaya</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}