'use client'

export default function SEOContent() {
  return (
    <section className="section-padding bg-gradient-to-br from-cream-50 to-coffee-50">
      <div className="container-custom">
        {/* Hidden SEO Content for Better Indexing */}
        <div className="sr-only">
          <h1>Tempat Ngopi Enak di Sukoharjo - Kedai Kopi Mbahhadi Terbaik</h1>
          <h2>Coffee Shop Sukoharjo Terbaik dengan Kopi Premium</h2>
          <h3>Cafe Sukoharjo Favorit untuk Tempat Nongkrong</h3>
          <h4>Warung Kopi Sukoharjo dengan Suasana Nyaman</h4>
          <h5>Kopi Enak Sukoharjo dengan Harga Terjangkau</h5>
          <h6>Rekomendasi Coffee Shop Sukoharjo #1</h6>
        </div>

        {/* Visible SEO-Rich Content */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee-900 mb-8">
            Tempat Ngopi Enak di Sukoharjo Sejak 2019
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-coffee-900 mb-4">
                Kedai Kopi Sukoharjo Terpercaya
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sebagai <strong>kedai kopi Sukoharjo</strong> yang telah melayani masyarakat sejak 2019, 
                kami bangga menjadi <strong>tempat ngopi enak di Sukoharjo</strong> dengan kualitas terjamin. 
                <strong>Coffee shop Sukoharjo</strong> kami menyajikan berbagai varian kopi premium 
                untuk memenuhi selera pecinta kopi di Sukoharjo.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-coffee-900 mb-4">
                Cafe Sukoharjo Favorit
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Menjadi <strong>cafe Sukoharjo</strong> favorit bukan tanpa alasan. 
                <strong>Warung kopi Sukoharjo</strong> kami menawarkan <strong>kopi enak Sukoharjo</strong> 
                dengan suasana yang nyaman dan hangat. Inilah yang membuat kami menjadi 
                <strong>rekomendasi coffee shop Sukoharjo</strong> #1 di hati pelanggan.
              </p>
            </div>
          </div>

          <div className="bg-coffee-900 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Mengapa Memilih Tempat Ngopi Nyaman Sukoharjo Ini?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-cream-300 mb-2">5+</div>
                <div className="text-sm text-cream-200">Tahun Melayani sebagai Kedai Kopi Sukoharjo</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cream-300 mb-2">1000+</div>
                <div className="text-sm text-cream-200">Pelanggan Setia Coffee Shop Sukoharjo</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cream-300 mb-2">4.8★</div>
                <div className="text-sm text-cream-200">Rating Cafe Sukoharjo Terbaik</div>
              </div>
            </div>
          </div>

          {/* Additional SEO Keywords Integration */}
          <div className="mt-12 text-left">
            <h4 className="text-2xl font-semibold text-coffee-900 mb-6 text-center">
              Varian Kopi Enak Sukoharjo di Kedai Kami
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-semibold text-coffee-800 mb-2">Espresso Premium</h5>
                <p className="text-sm text-gray-600">Kopi enak Sukoharjo dengan cita rasa bold dan rich</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-semibold text-coffee-800 mb-2">Cappuccino Sukoharjo</h5>
                <p className="text-sm text-gray-600">Favorit di tempat ngopi enak di Sukoharjo</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-semibold text-coffee-800 mb-2">Latte Art Special</h5>
                <p className="text-sm text-gray-600">Signature coffee shop Sukoharjo terbaik</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-semibold text-coffee-800 mb-2">Kopi Tubruk Tradisional</h5>
                <p className="text-sm text-gray-600">Warung kopi Sukoharjo dengan cita rasa autentik</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-semibold text-coffee-800 mb-2">Cold Brew Sukoharjo</h5>
                <p className="text-sm text-gray-600">Minuman segar di cafe Sukoharjo favorit</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-semibold text-coffee-800 mb-2">Affogato Mbahhadi</h5>
                <p className="text-sm text-gray-600">Dessert khas kedai kopi Sukoharjo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}