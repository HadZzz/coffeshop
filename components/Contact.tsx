"use client";

import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Lokasi Coffeshop Sukoharjo",
      details: ["Jl. Jenderal Sudirman No. 123", "Pusat Kota Sukoharjo", "Jawa Tengah 57511"],
    },
    {
      icon: Phone,
      title: "Telepon Coffeshop Mbahhadi",
      details: ["+62-858-7612-0167", "WhatsApp: +62-858-7612-0167"],
    },
    {
      icon: Mail,
      title: "Email Tempat Ngopi Sukoharjo",
      details: ["hadzipamuji5@gmail.com", "info@aromacoffee-sukoharjo.com"],
    },
    {
      icon: Clock,
      title: "Jam Buka Coffeshop Sukoharjo",
      details: [
        "Senin - Jumat: 06:00 - 21:00",
        "Sabtu - Minggu: 07:00 - 22:00",
      ],
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-coffee-900 mb-6">
            Kontak Coffeshop Mbahhadi Sukoharjo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ada pertanyaan tentang kopi kami atau ingin reservasi tempat di coffeshop Sukoharjo? 
            Hubungi Aroma Coffee Mbahhadi - tempat ngopi enak di Sukoharjo yang siap melayani Anda!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-cream-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-coffee-900 mb-6">
              Kirim Pesan ke Coffeshop Mbahhadi
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-colors"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-coffee-900 mb-6">
                Informasi Kontak Coffeshop Sukoharjo
              </h3>
              <p className="text-gray-600 mb-8">
                Kami siap membantu dan menjawab pertanyaan Anda tentang coffeshop Mbahhadi. 
                Sebagai tempat ngopi enak di Sukoharjo, kami menantikan kunjungan Anda!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-coffee-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-6 w-6 text-coffee-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-coffee-900 mb-1">
                      {info.title}
                    </h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8">
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Interactive Map</p>
                  <p className="text-sm text-gray-400">
                    Location: 123 Coffee Street
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

