'use client'

import { ArrowDown, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2061&q=80')`
        }}
      />
      
      {/* Floating Coffee Beans */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-coffee-600 rounded-full animate-float opacity-20"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-coffee-500 rounded-full animate-float opacity-30" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-coffee-700 rounded-full animate-float opacity-25" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-coffee-600 rounded-full animate-float opacity-20" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 animate-fade-in">
            Coffee Shop Terbaik
            <span className="block text-cream-300">di Sukoharjo</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto animate-slide-up">
            Tempat ngopi enak di Sukoharjo dengan kopi premium, suasana nyaman, dan pelayanan terbaik. 
            Kedai kopi favorit untuk nongkrong dan meeting di pusat kota Sukoharjo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <button className="btn-primary text-lg px-8 py-4">
              Lihat Menu Kopi
            </button>
            <button className="flex items-center space-x-2 text-white hover:text-cream-300 transition-colors duration-300">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Play className="h-5 w-5 ml-1" />
              </div>
              <span className="font-medium">Cerita Kami</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto animate-slide-up">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-cream-300">50+</div>
              <div className="text-sm text-gray-300">Varian Kopi</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-cream-300">1000+</div>
              <div className="text-sm text-gray-300">Pelanggan Puas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-cream-300">5+</div>
              <div className="text-sm text-gray-300">Tahun di Sukoharjo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-cream-300">4.8★</div>
              <div className="text-sm text-gray-300">Rating Google</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white" />
      </div>
    </section>
  )
}