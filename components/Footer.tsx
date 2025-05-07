import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 pb-12">
      <div className="flex justify-start text-left py-8">
            <Image src="/ABBAS.png" alt="abbas shop" width={100} height={10}/>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1 - Logo and Map */}
          <div className="flex flex-col items-center lg:items-start">
         
            <div className="w-full h-48 mb-4">
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
            <p className="text-sm">
              Medea, Ain Dhaba
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="lg:px-8">
            <h3 className="text-xl font-semibold mb-6 text-[#CAB78B]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-[#CAB78B] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#CAB78B] transition-colors">Shop</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#CAB78B] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#CAB78B] transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#CAB78B] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Social and Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#CAB78B]">Connect With Us</h3>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-4 mb-8">
              <Link 
                href="#" 
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                facebook
              </Link>
              <Link 
                href="#" 
                className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                whatsup
              </Link>
              <Link 
                href="#" 
                className="flex items-center"
                aria-label="OuadKniss"
              >
                <span className="ml-2 text-[#CAB78B]">OuadKniss</span>
              </Link>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-medium mb-4">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#CAB78B]"
                />
                <button
                  className="px-4 py-2 bg-[#CAB78B] text-gray-900 rounded-r-md hover:bg-[#b19b6f] transition-colors"
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
        <div className="container mx-auto px-4 py-4">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} Abbas Computer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 