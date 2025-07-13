'use client'

import { useState } from 'react'
import { Star, Plus } from 'lucide-react'

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('coffee')

  const categories = [
    { id: 'coffee', name: 'Coffee' },
    { id: 'espresso', name: 'Espresso' },
    { id: 'cold', name: 'Cold Drinks' },
    { id: 'pastry', name: 'Pastries' }
  ]

  const menuItems = {
    coffee: [
      {
        name: 'House Blend',
        description: 'Our signature medium roast with notes of chocolate and caramel',
        price: '$4.50',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        popular: true
      },
      {
        name: 'Ethiopian Single Origin',
        description: 'Bright and fruity with floral notes and wine-like acidity',
        price: '$5.50',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Colombian Supreme',
        description: 'Rich and full-bodied with nutty undertones',
        price: '$5.00',
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ],
    espresso: [
      {
        name: 'Classic Espresso',
        description: 'Double shot of our premium espresso blend',
        price: '$3.50',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        popular: true
      },
      {
        name: 'Cappuccino',
        description: 'Espresso with steamed milk and microfoam',
        price: '$4.75',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Caffe Latte',
        description: 'Smooth espresso with steamed milk and light foam',
        price: '$5.25',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ],
    cold: [
      {
        name: 'Cold Brew',
        description: 'Smooth and refreshing 12-hour cold extraction',
        price: '$4.25',
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        popular: true
      },
      {
        name: 'Iced Latte',
        description: 'Espresso with cold milk over ice',
        price: '$5.00',
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Frappuccino',
        description: 'Blended coffee with ice and whipped cream',
        price: '$5.75',
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ],
    pastry: [
      {
        name: 'Croissant',
        description: 'Buttery, flaky French pastry baked fresh daily',
        price: '$3.25',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1555507036-ab794f4afe5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Blueberry Muffin',
        description: 'Moist muffin loaded with fresh blueberries',
        price: '$3.75',
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        popular: true
      },
      {
        name: 'Chocolate Cake',
        description: 'Rich chocolate cake with ganache frosting',
        price: '$4.50',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ]
  }

  return (
    <section id="menu" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-coffee-900 mb-6">
            Our Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium coffees, expertly crafted beverages, 
            and delicious pastries made fresh daily.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-coffee-800 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {item.popular && (
                  <div className="absolute top-4 left-4 bg-coffee-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </div>
                )}
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
                  <Plus className="h-5 w-5 text-coffee-800" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-coffee-900">{item.name}</h3>
                  <span className="text-xl font-bold text-coffee-600">{item.price}</span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{item.rating}</span>
                  </div>
                  
                  <button className="bg-coffee-100 hover:bg-coffee-200 text-coffee-800 px-4 py-2 rounded-lg font-medium transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="btn-primary text-lg px-8 py-4">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  )
}