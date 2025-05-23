'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, CheckCircle, ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

// Define the Service type
interface Service {
  id: number;
  title: string;
  description: string;
  link: string;
  image?: string;
  details?: string;
  features?: string[];
  benefits?: string[];
}

// Services data from the Services component
const services: Service[] = [
  {
    id: 1,
    title: "IT HARDWARE SOLUTIONS",
    description: "Our IT hardware offerings include a wide selection of computing devices tailored to individual needs and business requirements for gaming or creative systems.",
    link: "it-hardware-solutions",
    image: "/services/hardware.jpg",
    details: "At Abbas Computer, our IT hardware solutions are designed to meet the diverse needs of individuals and businesses alike. From high-performance gaming systems to professional workstations, we provide customized hardware configurations that align with your specific requirements.",
    features: [
      "Desktop computers optimized for gaming, design, or office use",
      "Laptops and ultrabooks for professionals on the go",
      "Servers and networking equipment for businesses",
      "Storage solutions including SSDs and external drives",
      "Peripherals such as monitors, keyboards, mice, and printers"
    ],
    benefits: [
      "Customized hardware solutions tailored to your specific needs",
      "Expert advice from our knowledgeable team",
      "Competitive pricing on all equipment",
      "Quality products from trusted brands",
      "Ongoing support and maintenance services"
    ]
  },
  {
    id: 2,
    title: "OFFICE FURNITURE",
    description: "Revamp your workspace with our stylish office furniture solutions! We offer everything from desks and chairs to complete workstations.",
    link: "office-furniture",
    image: "/services/furniture.jpg",
    details: "Create a workspace that promotes productivity and well-being with our extensive range of office furniture. We understand that a well-designed office environment is essential for employee satisfaction and performance.",
    features: [
      "Ergonomic office chairs designed for comfort during long working hours",
      "Adjustable desks including standing desk options",
      "Filing cabinets and storage solutions",
      "Conference tables and meeting room furniture",
      "Reception area seating and desks",
      "Complete office workstations"
    ],
    benefits: [
      "Enhanced workplace comfort and productivity",
      "Reduced employee fatigue and potential for injury",
      "Professional office appearance that impresses clients",
      "Efficient use of available space",
      "Furniture solutions that adapt to your changing needs"
    ]
  },
  {
    id: 3,
    title: "SECURITY CAMERA INSTALLATION",
    description: "Enhance the safety of your home or business with our expert security camera installation services. We provide comprehensive solutions to secure your property.",
    link: "security-camera-installation",
    image: "/services/security.jpg",
    details: "Protect what matters most with our professional security camera installation services. We provide end-to-end security solutions for both residential and commercial properties.",
    features: [
      "HD and 4K security cameras for crystal-clear footage",
      "Indoor and outdoor camera systems",
      "Night vision capable surveillance",
      "Motion detection systems",
      "Remote viewing capabilities via smartphone or computer",
      "DVR and NVR recording systems",
      "Professional installation and setup"
    ],
    benefits: [
      "Increased security and peace of mind",
      "Deterrence of potential intruders",
      "Video evidence in case of incidents",
      "Remote monitoring of your property",
      "Potential reduction in insurance premiums"
    ]
  },
  {
    id: 4,
    title: "REPAIR SERVICES",
    description: "Keep your devices working smoothly with our expert repair services. We specialize in computer/laptop repairs, mobile device fixes, and network troubleshooting.",
    link: "repair-services",
    image: "/services/repair.jpg",
    details: "When technology fails, our expert repair services get you back up and running quickly. We offer professional repair solutions for a wide range of devices and technical issues.",
    features: [
      "Computer and laptop repairs (hardware and software)",
      "Virus and malware removal",
      "Data recovery services",
      "Operating system reinstallation and updates",
      "Mobile phone screen replacements and repairs",
      "Network troubleshooting and setup",
      "Printer repairs and maintenance"
    ],
    benefits: [
      "Fast resolution of technical issues",
      "Cost-effective alternatives to device replacement",
      "Expert service from certified technicians",
      "Extended lifespan for your devices",
      "Minimized downtime for business operations"
    ]
  }
];

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  // Find the service by slug
  const service = services.find(s => s.link === params.slug);
  
  // If service not found, show 404
  if (!service) {
    notFound();
  }
  
  // Get other services for related section
  const otherServices = services.filter(s => s.id !== service.id);
  
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm">
          <Link href="/" className="text-gray-500 hover:text-[#D1AD5B]">Home</Link>
          <ChevronRight className="mx-2 h-4 w-4 text-gray-400 self-center" />
          <Link href="/Services" className="text-gray-500 hover:text-[#D1AD5B]">Services</Link>
          <ChevronRight className="mx-2 h-4 w-4 text-gray-400 self-center" />
          <span className="text-gray-700 font-medium">{service.title}</span>
        </nav>
        
        {/* Service Hero */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-16">
          <div className="relative h-64 md:h-96 w-full">
            {service.image ? (
              <Image 
                src={service.image} 
                alt={service.title} 
                fill 
                className="object-cover"
                sizes="100vw"
                priority
              />
            ) : (
              <div className="absolute inset-0 bg-[#CAB78B] opacity-20"></div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 md:p-10 text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h1>
                <p className="text-lg md:max-w-2xl">{service.description}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Service Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Service</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">{service.details}</p>
              
              {service.features && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Offer</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#D1AD5B] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {service.benefits && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#D1AD5B] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          
          {/* Contact Sidebar */}
          <div>
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Interested in this service?</h3>
              <p className="text-gray-600 mb-6">Contact us today to discuss how we can meet your specific needs.</p>
              <Link 
                href="/contact" 
                className="block w-full py-3 px-4 bg-[#D1AD5B] text-white font-medium rounded-md text-center hover:bg-[#c19b49] transition-colors"
              >
                Contact Us
              </Link>
            </div>
            
            {/* Other Services */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Other Services</h3>
              <ul className="space-y-4">
                {otherServices.map((s) => (
                  <li key={s.id}>
                    <Link 
                      href={`/Services/${s.link}`} 
                      className="flex items-center text-gray-700 hover:text-[#D1AD5B]"
                    >
                      <ChevronRight className="h-4 w-4 mr-2 text-[#D1AD5B]" />
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Back Button */}
        <div className="mb-16">
          <Link 
            href="/Services" 
            className="inline-flex items-center text-[#D1AD5B] hover:underline"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all services
          </Link>
        </div>
        
        {/* CTA Section */}
        <div className="bg-[#333] text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Our team is ready to help you with your {service.title.toLowerCase()} needs.
            Contact us today for a consultation or quote.
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