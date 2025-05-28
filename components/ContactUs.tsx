"use client"
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: ''
  });
 
  
  
  interface ApiResponse {
    message?: string;
    error?: string;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  
  
 
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });
    
  
    
  
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: formData.message
        }),
      });
  
      const data: ApiResponse = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus({ loading: false, success: true, error: '' });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error: unknown) {
      setStatus({
        loading: false,
        success: false,
        error: error instanceof Error ? error.message : 'Failed to send message'
      });
    }
  };
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative z-[999]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <div className="w-16 sm:w-24 md:w-32 h-1 bg-[#D1AD5B] mx-auto"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
            {/* Left side - Contact Info */}
            <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden">
              <div className="h-full p-6 sm:p-8 md:p-10 lg:p-12 bg-gradient-to-br from-gray-900 to-gray-800 contact-right relative">
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-white mb-6 sm:mb-8 md:mb-10">Contact Information</h3>
                  
                  {/* Phone Numbers */}
                  <div className="flex items-start mb-6 sm:mb-8 md:mb-10">
                    <div className="mr-4 self-end p-2 sm:p-3 md:p-4 bg-[#D1AD5B] bg-opacity-20 rounded-lg">
                      <Phone size={20} className="text-white md:h-6 md:w-6 lg:h-7 lg:w-7" />
                    </div>
                    <div>
                      <p className="text-white opacity-90 md:text-lg lg:text-xl">+213 06 68 61 62 63</p>
                      <p className="text-white opacity-90 md:text-lg lg:text-xl">+213 06 68 61 62 63</p>
                    </div>
                  </div>

                  {/* Email Addresses */}
                  <div className="flex items-start mb-6 sm:mb-8 md:mb-10">
                    <div className="mr-4 p-2 sm:p-3 md:p-4 self-end bg-[#D1AD5B] bg-opacity-20 rounded-lg">
                      <Mail size={20} className="text-white md:h-6 md:w-6 lg:h-7 lg:w-7" />
                    </div>
                    <div>
                      <p className="text-white opacity-90 md:text-lg lg:text-xl">abbaskhaled@gmail.com</p>
                      <p className="text-white opacity-90 md:text-lg lg:text-xl">abbaskhaled@hotmail.com</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start mb-6 sm:mb-8 md:mb-10">
                    <div className="mr-4 p-2 sm:p-3 md:p-4 bg-[#D1AD5B] bg-opacity-20 rounded-lg">
                      <MapPin size={20} className="text-white md:h-6 md:w-6 lg:h-7 lg:w-7" />
                    </div>
                    <div>
                      <p className="text-white opacity-90 md:text-lg lg:text-xl">Medea, Ain Dhaba</p>
                    </div>
                  </div>

                  {/* Social media icons */}
                  <div className="mt-8 sm:mt-12 md:mt-16">
                    <h4 className="text-[#D1AD5B] text-xl sm:text-2xl md:text-2xl lg:text-3xl font-medium mb-4 md:mb-6">Follow Us</h4>
                    <div className="flex items-center space-x-4 md:space-x-6">
                      <Link href="#" className="p-2 sm:p-3 md:p-4 hover:bg-opacity-30 transition-all duration-300">
                        <Facebook size={30} className="text-white md:h-8 md:w-8 lg:h-9 lg:w-9" />
                      </Link>
                      <Link href="https://wa.me/2130673070040?text=contact us" className="p-2 sm:p-3 md:p-4 hover:bg-opacity-30 transition-all duration-300">
                        <Image src="/WhatsApp.jpg" alt="whatsup" width={25} height={25} className="sm:w-[30px] sm:h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px]"/>
                      </Link>
                      <Link href="#" className="p-2 sm:p-3 md:p-4 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl hover:bg-opacity-30 transition-all duration-300">
                        <span className="text-white">Ouad</span>
                        <span className="text-[#D1AD5B]">Kniss</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="w-full lg:w-1/2 bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="mb-6 sm:mb-8 md:mb-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-gray-900 mb-2 md:mb-3">Send us a Message</h3>
                <p className="text-gray-600 md:text-lg lg:text-xl">Have a question? We&apos;re here to help.</p>
              </div>

              {status.success && (
                <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
                  Message sent successfully! We&apos;ll get back to you soon.
                </div>
              )}

              {status.error && (
                <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
                  {status.error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2 md:text-base lg:text-lg">First Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 md:py-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D1AD5B] focus:border-transparent transition-all duration-300 md:text-lg"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2 md:text-base lg:text-lg">Last Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter your last name"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 md:py-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D1AD5B] focus:border-transparent transition-all duration-300 md:text-lg"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2 md:text-base lg:text-lg">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 md:py-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D1AD5B] focus:border-transparent transition-all duration-300 md:text-lg"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2 md:text-base lg:text-lg">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none">
                      <span className="flex items-center border-r pr-2">
                        <Image 
                          src="https://flagcdn.com/w20/dz.png" 
                          alt="Algeria flag" 
                          width={20} 
                          height={15}
                          className="h-4 w-6 md:h-5 md:w-7"
                          unoptimized
                        />
                      </span>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full pl-16 pr-3 sm:pr-4 py-2 sm:py-3 md:py-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D1AD5B] focus:border-transparent transition-all duration-300 md:text-lg"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2 md:text-base lg:text-lg">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 md:py-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D1AD5B] focus:border-transparent transition-all duration-300 resize-none md:text-lg"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className={`w-full py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 bg-[#D1AD5B] text-white font-medium md:text-lg lg:text-xl rounded-lg hover:bg-[#c19b49] transition-all duration-300 transform hover:scale-[1.02] ${
                    status.loading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {status.loading ? 'Sending...' : 'Send Message'}
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