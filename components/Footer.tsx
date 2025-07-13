'use client'

import { Coffee, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ]

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' }
  ]

  const services = [
    { name: 'Coffee Catering', href: '#' },
    { name: 'Private Events', href: '#' },
    { name: 'Coffee Subscriptions', href: '#' },
    { name: 'Barista Training', href: '#' },
    { name: 'Corporate Orders', href: '#' },
    { name: 'Gift Cards', href: '#' }
  ]

  return (
    <footer className="bg-coffee-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-coffee-800">
        <div className="container-custom py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Stay Connected with Aroma Coffee
            </h3>
            <p className="text-coffee-200 mb-8">
              Subscribe to our newsletter for the latest updates, special offers, and coffee tips.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cream-400"
              />
              <button className="bg-cream-500 hover:bg-cream-600 text-coffee-900 font-medium px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Coffee className="h-8 w-8 text-cream-400" />
              <span className="text-2xl font-serif font-bold">Aroma Coffee</span>
            </div>
            <p className="text-coffee-200 mb-6 leading-relaxed">
              Crafting exceptional coffee experiences since 2008. From bean to cup, 
              we&apos;re passionate about delivering the perfect brew every time.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-coffee-800 hover:bg-cream-500 rounded-full flex items-center justify-center transition-colors duration-300 group"
                >
                  <social.icon className="h-5 w-5 text-coffee-200 group-hover:text-coffee-900" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-coffee-200 hover:text-cream-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-coffee-200 hover:text-cream-400 transition-colors duration-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-cream-400 mt-1 flex-shrink-0" />
                <div className="text-coffee-200">
                  <p>123 Coffee Street</p>
                  <p>Downtown District</p>
                  <p>City, State 12345</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-cream-400 flex-shrink-0" />
                <div className="text-coffee-200">
                  <p>+62-858-7612-0167</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cream-400 flex-shrink-0" />
                <div className="text-coffee-200">
                  <p>hadzipamuji5@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="mt-6">
              <h5 className="font-medium mb-2">Opening Hours</h5>
              <div className="text-sm text-coffee-200 space-y-1">
                <p>Mon - Fri: 6:00 AM - 9:00 PM</p>
                <p>Sat - Sun: 7:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-coffee-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-coffee-200 text-sm">
              © 2024 Aroma Coffee. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-coffee-200 hover:text-cream-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-coffee-200 hover:text-cream-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-coffee-200 hover:text-cream-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}