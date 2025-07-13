'use client'

import { Coffee, Award, Users, Heart } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Coffee,
      title: 'Premium Quality',
      description: 'We source only the finest coffee beans from sustainable farms around the world.'
    },
    {
      icon: Award,
      title: 'Expert Roasting',
      description: 'Our master roasters bring out the unique flavors in every batch with precision and care.'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'We believe in building connections and creating a warm, welcoming space for everyone.'
    },
    {
      icon: Heart,
      title: 'Passion Driven',
      description: 'Every cup is crafted with love and dedication to deliver the perfect coffee experience.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-cream-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-coffee-900 mb-6">
                Our Story of
                <span className="block text-coffee-600">Coffee Excellence</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded in 2008, Aroma Coffee began as a small family business with a simple mission: 
                to share our passion for exceptional coffee with our community. What started as a humble 
                coffee cart has grown into a beloved local institution.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that great coffee is more than just a beverage—it&apos;s a moment of connection, 
                a daily ritual, and a source of inspiration. Every cup we serve is a testament to our 
                commitment to quality, sustainability, and the art of coffee making.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Learn More
              </button>
              <button className="btn-secondary">
                Visit Our Farm
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Coffee roasting process"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-coffee-100 rounded-full flex items-center justify-center">
                  <Coffee className="h-6 w-6 text-coffee-600" />
                </div>
                <div>
                  <div className="font-bold text-coffee-900">15+ Years</div>
                  <div className="text-sm text-gray-600">of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-coffee-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-coffee-200 transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-coffee-600" />
              </div>
              <h3 className="text-xl font-semibold text-coffee-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}