import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
        {/* Logo Section */}
        <div className="flex justify-start text-left py-6 sm:py-8 lg:py-10">
          <Image src="/ABBAS.png" alt="abbas shop" width={80} height={10} className="sm:w-[100px] lg:w-[120px] h-auto"/>
        </div>
        
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {/* Column 1 - Map (Full width on mobile, normal on desktop) */}
          <div className="flex flex-col items-center lg:items-start order-3 sm:order-1 sm:col-span-2 lg:col-span-1">
            <div className="w-full h-40 sm:h-48 lg:h-56 mb-4">
              <iframe
                title="Store Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.5!2d2.7!3d36.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQyJzAwLjAiTiAywrA0MicwMC4wIkU!5e0!3m2!1sen!2sdz!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
            <p className="text-sm md:text-base lg:text-lg">
              Medea, Ain Dhaba
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="order-1 sm:order-2">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold mb-4 sm:mb-6 lg:mb-8 text-[#CAB78B]">Quick Links</h3>
            <ul className="grid grid-cols-2 sm:block sm:space-y-3 md:space-y-4 lg:space-y-5 gap-y-2">
              <li>
                <Link href="/" className="hover:text-[#CAB78B] transition-colors text-sm sm:text-base md:text-lg lg:text-lg">Home</Link>
              </li>
              <li>
                <Link href="/Shop" className="hover:text-[#CAB78B] transition-colors text-sm sm:text-base md:text-lg lg:text-lg">Shop</Link>
              </li>
              <li>
                <Link href="/Services" className="hover:text-[#CAB78B] transition-colors text-sm sm:text-base md:text-lg lg:text-lg">Services</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#CAB78B] transition-colors text-sm sm:text-base md:text-lg lg:text-lg">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#CAB78B] transition-colors text-sm sm:text-base md:text-lg lg:text-lg">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Social and Newsletter */}
          <div className="order-2 sm:order-3">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold mb-4 sm:mb-6 lg:mb-8 text-[#CAB78B]">Connect With Us</h3>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-4 mb-6 sm:mb-8 lg:mb-10">
              <Link 
                href="#" 
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors md:p-3 lg:p-4"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-white md:h-6 md:w-6 lg:h-7 lg:w-7" />
              </Link>
              <Link 
                href="#" 
                className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors md:p-3 lg:p-4"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5 text-white md:h-6 md:w-6 lg:h-7 lg:w-7" />
              </Link>
              <Link 
                href="#" 
                className="flex items-center"
                aria-label="OuadKniss"
              >
                <span className="text-[#CAB78B] text-sm sm:text-base md:text-lg lg:text-xl">OuadKniss</span>
              </Link>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-base sm:text-lg md:text-xl lg:text-xl font-medium mb-3 sm:mb-4 lg:mb-5">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 md:py-3 lg:py-4 rounded-l-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#CAB78B] text-sm md:text-base lg:text-lg"
                />
                <button
                  className="px-3 sm:px-4 md:px-5 lg:px-6 py-2 md:py-3 lg:py-4 bg-[#CAB78B] text-gray-900 rounded-r-md hover:bg-[#b19b6f] transition-colors text-sm sm:text-base md:text-base lg:text-lg font-medium"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4 sm:py-5 lg:py-6">
          <p className="text-xs sm:text-sm md:text-base lg:text-base text-center">
            © {new Date().getFullYear()} Abbas Computer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 