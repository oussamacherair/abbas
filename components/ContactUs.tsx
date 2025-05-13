import React from 'react';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ContactUs = () => {
  return (
    <section className="py-12 sm:py-16 relative z-[999]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <div className="w-16 sm:w-24 h-1 bg-[#D1AD5B] mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            {/* Left side - Contact Info */}
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden">
              <div className="h-full p-6 sm:p-8 bg-gradient-to-br from-gray-900 to-gray-800 contact-right relative">
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8">Contact Information</h3>
                  
                  {/* Phone Numbers */}
                  <div className="flex items-start mb-6 sm:mb-8">
                    <div className="mr-4 self-end p-2 sm:p-3 bg-[#D1AD5B] bg-opacity-20 rounded-lg">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white opacity-90">+213 06 68 61 62 63</p>
                      <p className="text-white opacity-90">+213 06 68 61 62 63</p>
                    </div>
                  </div>

                  {/* Email Addresses */}
                  <div className="flex items-start mb-6 sm:mb-8">
                    <div className="mr-4 p-2 sm:p-3 self-end bg-[#D1AD5B] bg-opacity-20 rounded-lg">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white opacity-90">abbaskhaled@gmail.com</p>
                      <p className="text-white opacity-90">abbaskhaled@hotmail.com</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start mb-6 sm:mb-8">
                    <div className="mr-4 p-2 sm:p-3 bg-[#D1AD5B] bg-opacity-20 rounded-lg">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white opacity-90">Medea, Ain Dhaba</p>
                    </div>
                  </div>

                  {/* Social media icons */}
                  <div className="mt-8 sm:mt-12">
                    <h4 className="text-[#D1AD5B] text-xl sm:text-2xl font-medium mb-4">Follow Us</h4>
                    <div className="flex items-center space-x-4">
                      <Link href="#" className="p-2 sm:p-3 hover:bg-opacity-30 transition-all duration-300">
                        <Facebook size={30} className="text-white" />
                      </Link>
                      <Link href="#" className="p-2 sm:p-3 hover:bg-opacity-30 transition-all duration-300">
                        <Image src="/WhatsApp.jpg" alt="whatsup" width={25} height={25} className="sm:w-[30px] sm:h-[30px]"/>
                      </Link>
                      <Link href="#" className="p-2 sm:p-3 font-bold text-lg sm:text-xl hover:bg-opacity-30 transition-all duration-300">
                        <span className="text-white">Ouad</span>
                        <span className="text-[#D1AD5B]">Kniss</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Send us a Message</h3>
                <p className="text-gray-600">Have a question? We&apos;re here to help.</p>
              </div>

              <form className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">First Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="firstName"
                        placeholder="Enter your first name"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D1AD5B] focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Last Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="lastName"
                        placeholder="Enter your last name"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D1AD5B] focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email address"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D1AD5B] focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none">
                      <span className="flex items-center border-r pr-2">
                        <Image 
                          src="https://flagcdn.com/w20/dz.png" 
                          alt="Algeria flag" 
                          width={20} 
                          height={15}
                          className="h-4 w-6"
                          unoptimized
                        />
                      </span>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Enter your phone number"
                      className="w-full pl-16 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D1AD5B] focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D1AD5B] focus:border-transparent transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 sm:py-3 px-4 sm:px-6 bg-[#D1AD5B] text-white font-medium rounded-lg hover:bg-[#c19b49] transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs; 