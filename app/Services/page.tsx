'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

// Define the Service type
interface Service {
  id: number;
  title: string;
  description: string;
  link: string;
  image?: string;
  details?: string;
}

// Services data from the Services component
const services: Service[] = [
  {
    id: 1,
    title: "IT HARDWARE SOLUTIONS",
    description: "Our IT hardware offerings include a wide selection of computing devices tailored to individual needs and business requirements for gaming or creative systems.",
    link: "it-hardware-solutions",
    image: "/services/hardware.jpg",
    details: "At Abbas Computer, our IT hardware solutions are designed to meet the diverse needs of individuals and businesses alike. From high-performance gaming systems to professional workstations, we provide customized hardware configurations that align with your specific requirements.\n\nOur offerings include:\n\n- Desktop computers optimized for gaming, design, or office use\n- Laptops and ultrabooks for professionals on the go\n- Servers and networking equipment for businesses\n- Storage solutions including SSDs and external drives\n- Peripherals such as monitors, keyboards, mice, and printers\n\nOur team of experts is ready to assess your needs and recommend the perfect hardware solutions that balance performance, reliability, and value."
  },
  {
    id: 2,
    title: "OFFICE FURNITURE",
    description: "Revamp your workspace with our stylish office furniture solutions! We offer everything from desks and chairs to complete workstations.",
    link: "office-furniture",
    image: "/services/furniture.jpg",
    details: "Create a workspace that promotes productivity and well-being with our extensive range of office furniture. We understand that a well-designed office environment is essential for employee satisfaction and performance.\n\nOur office furniture selection includes:\n\n- Ergonomic office chairs designed for comfort during long working hours\n- Adjustable desks including standing desk options\n- Filing cabinets and storage solutions\n- Conference tables and meeting room furniture\n- Reception area seating and desks\n- Complete office workstations\n\nWe focus on providing furniture that combines functionality, durability, and aesthetic appeal, helping you create a workspace that reflects your company's culture and supports your team's work style."
  },
  {
    id: 3,
    title: "SECURITY CAMERA INSTALLATION",
    description: "Enhance the safety of your home or business with our expert security camera installation services. We provide comprehensive solutions to secure your property.",
    link: "security-camera-installation",
    image: "/services/security.jpg",
    details: "Protect what matters most with our professional security camera installation services. We provide end-to-end security solutions for both residential and commercial properties.\n\nOur security services include:\n\n- HD and 4K security cameras for crystal-clear footage\n- Indoor and outdoor camera systems\n- Night vision capable surveillance\n- Motion detection systems\n- Remote viewing capabilities via smartphone or computer\n- DVR and NVR recording systems\n- Professional installation and setup\n\nOur experienced technicians will assess your property, recommend optimal camera placement, and ensure your system is properly installed and configured for maximum security coverage."
  },
  {
    id: 4,
    title: "REPAIR SERVICES",
    description: "Keep your devices working smoothly with our expert repair services. We specialize in computer/laptop repairs, mobile device fixes, and network troubleshooting.",
    link: "repair-services",
    image: "/services/repair.jpg",
    details: "When technology fails, our expert repair services get you back up and running quickly. We offer professional repair solutions for a wide range of devices and technical issues.\n\nOur repair services cover:\n\n- Computer and laptop repairs (hardware and software)\n- Virus and malware removal\n- Data recovery services\n- Operating system reinstallation and updates\n- Mobile phone screen replacements and repairs\n- Network troubleshooting and setup\n- Printer repairs and maintenance\n\nWith fast turnaround times and competitive pricing, we ensure that your technology issues are resolved efficiently and effectively by our certified technicians."
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 ">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <div className="w-24 h-1 bg-[#D1AD5B] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            From high-performance computers to ergonomic office furniture, security solutions, and repair services, 
            we work with you to meet all your IT and workspace needs.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48 w-full bg-gray-100">
                {service.image ? (
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#CAB78B] opacity-20"></div>
                )}
              </div>
              
              <div className="p-6 relative">
                <h2 className="text-xl font-semibold text-[#CAB78B] mb-3">{service.title}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <Link 
                  href={"#"} 
                  className="inline-flex items-center text-[#CCA64E] font-medium hover:underline"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
                
                <div className="poly-mask"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="bg-[#333] text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Our team is ready to work with you to develop tailored solutions that meet your specific needs.
            Contact us today to discuss how we can help transform your workspace.
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-6 py-3 bg-[#D1AD5B] text-white font-medium rounded-md hover:bg-[#c19b49] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
