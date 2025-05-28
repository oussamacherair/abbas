'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, CheckCircle, ArrowLeft, Search, X } from 'lucide-react';
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

// Define the Repair Status type
interface RepairStatus {
  id: string;
  customerName: string;
  deviceType: string;
  brand: string;
  model: string;
  serialNumber: string;
  dateReceived: string;
  status: 'pending' | 'inProgress' | 'completed' | 'readyForPickup';
  diagnostics?: string;
  diskHealth?: string;
  batteryHealth?: string;
  replacedParts?: {
    name: string;
    cost: number;
    id: string;
  }[];
  laborCost: number;
  totalCost: number;
  notes?: string;
  estimatedCompletionDate?: string;
}

// Sample repair status data
const sampleRepairData: RepairStatus[] = [
  {
    id: "REP-2023-001",
    customerName: "John Smith",
    deviceType: "Laptop",
    brand: "Dell",
    model: "XPS 15",
    serialNumber: "DELL12345XPS",
    dateReceived: "2023-11-05",
    status: "completed",
    diagnostics: "Hard drive failure and slow performance. System overheating due to dust buildup.",
    diskHealth: "Critical - Failed",
    batteryHealth: "Fair - 72% capacity",
    replacedParts: [
      { name: "1TB SSD", cost: 120, id: "SSD-1TB-001" },
      { name: "Cooling Fan", cost: 45, id: "FAN-001" }
    ],
    laborCost: 75,
    totalCost: 240,
    notes: "System fully restored with data recovery. Recommended future RAM upgrade."
  },
  {
    id: "REP-2023-002",
    customerName: "Sarah Johnson",
    deviceType: "Desktop PC",
    brand: "HP",
    model: "Pavilion",
    serialNumber: "HP98765PAV",
    dateReceived: "2023-11-10",
    status: "inProgress",
    diagnostics: "Power supply failure and corrupted Windows installation.",
    diskHealth: "Good - 92% health",
    replacedParts: [
      { name: "Power Supply Unit 650W", cost: 85, id: "PSU-650-001" }
    ],
    laborCost: 60,
    totalCost: 145,
    estimatedCompletionDate: "2023-11-17",
    notes: "Windows re-installation in progress."
  },
  {
    id: "REP-2023-003",
    customerName: "Ahmed Hassan",
    deviceType: "Laptop",
    brand: "Lenovo",
    model: "ThinkPad X1",
    serialNumber: "LEN54321TP",
    dateReceived: "2023-11-12",
    status: "pending",
    diagnostics: "Pending initial assessment",
    laborCost: 0,
    totalCost: 0,
    estimatedCompletionDate: "2023-11-19"
  }
];

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

export default function RepairServiceDetail() {
  // Find the repair service
  const service = services.find(s => s.link === "repair-services");
  
  // If service not found, show 404
  if (!service) {
    notFound();
  }
  
  // Get other services for related section
  const otherServices = services.filter(s => s.id !== service.id);
  
  // State for repair tracking form
  const [repairId, setRepairId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [repairData, setRepairData] = useState<RepairStatus | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Validate inputs
    if (!repairId || !customerName) {
      setError("Please enter both Repair ID and Customer Name");
      setRepairData(null);
      return;
    }
    
    // Search for repair with matching id and name (case insensitive for name)
    const foundRepair = sampleRepairData.find(
      repair => repair.id === repairId && 
      repair.customerName.toLowerCase() === customerName.toLowerCase()
    );
    
    if (foundRepair) {
      setRepairData(foundRepair);
      setShowModal(true);
    } else {
      setError("No repair found with the provided ID and name. Please check your information and try again.");
      setRepairData(null);
    }
  };
  
  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };
  
  // Get status badge style
  const getStatusBadge = (status: RepairStatus['status']) => {
    switch(status) {
      case 'pending':
        return { text: "Pending Assessment", bgColor: "bg-yellow-100", textColor: "text-yellow-800" };
      case 'inProgress':
        return { text: "In Progress", bgColor: "bg-blue-100", textColor: "text-blue-800" };
      case 'completed':
        return { text: "Completed", bgColor: "bg-green-100", textColor: "text-green-800" };
      case 'readyForPickup':
        return { text: "Ready for Pickup", bgColor: "bg-purple-100", textColor: "text-purple-800" };
      default:
        return { text: "Unknown", bgColor: "bg-gray-100", textColor: "text-gray-800" };
    }
  };
  
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
        
        {/* Repair Tracking Form */}
        <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Track Your Repair</h2>
          <p className="text-gray-600 mb-6">Enter your Repair ID and name to check the status of your device repair.</p>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="repairId" className="block text-sm font-medium text-gray-700 mb-1">
                  Repair ID
                </label>
                <input
                  type="text"
                  id="repairId"
                  value={repairId}
                  onChange={(e) => setRepairId(e.target.value)}
                  placeholder="e.g. REP-2023-001"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D1AD5B] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="customerName" className="block text-sm font-medium text-gray-700 mb-1">
                  Customer Name
                </label>
                <input
                  type="text"
                  id="customerName"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D1AD5B] focus:outline-none"
                />
              </div>
            </div>
            
            {error && (
              <div className="mb-6 p-3 bg-red-50 text-red-700 rounded-md">
                {error}
              </div>
            )}
            
            <button
              type="submit"
              className="flex items-center justify-center w-full md:w-auto px-6 py-3 bg-[#D1AD5B] text-white font-medium rounded-md hover:bg-[#c19b49] transition-colors"
            >
              <Search className="mr-2 h-5 w-5" />
              Check Repair Status
            </button>
          </form>
        </div>
        
        {/* Repair Status Modal */}
        {showModal && repairData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-xl shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-900">Repair Status</h3>
                <button 
                  onClick={() => setShowModal(false)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <X className="h-6 w-6 text-gray-500" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Repair ID</p>
                    <p className="font-semibold">{repairData.id}</p>
                  </div>
                  <div className={`${getStatusBadge(repairData.status).bgColor} ${getStatusBadge(repairData.status).textColor} px-3 py-1 rounded-full text-sm font-medium`}>
                    {getStatusBadge(repairData.status).text}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Customer Name</p>
                    <p className="font-medium">{repairData.customerName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date Received</p>
                    <p className="font-medium">{new Date(repairData.dateReceived).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Device Type</p>
                    <p className="font-medium">{repairData.deviceType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Brand & Model</p>
                    <p className="font-medium">{repairData.brand} {repairData.model}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Serial Number</p>
                    <p className="font-medium">{repairData.serialNumber}</p>
                  </div>
                  {repairData.estimatedCompletionDate && (
                    <div>
                      <p className="text-sm text-gray-500">Estimated Completion</p>
                      <p className="font-medium">{new Date(repairData.estimatedCompletionDate).toLocaleDateString()}</p>
                    </div>
                  )}
                </div>
                
                {repairData.diagnostics && (
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-1">Diagnostics</p>
                    <p className="p-3 bg-gray-50 rounded-md">{repairData.diagnostics}</p>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {repairData.diskHealth && (
                    <div>
                      <p className="text-sm text-gray-500">Disk Health</p>
                      <p className="font-medium">{repairData.diskHealth}</p>
                    </div>
                  )}
                  {repairData.batteryHealth && (
                    <div>
                      <p className="text-sm text-gray-500">Battery Health</p>
                      <p className="font-medium">{repairData.batteryHealth}</p>
                    </div>
                  )}
                </div>
                
                {repairData.replacedParts && repairData.replacedParts.length > 0 && (
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-2">Replaced Parts</p>
                    <div className="bg-gray-50 rounded-md overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Part</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {repairData.replacedParts.map((part, index) => (
                            <tr key={index}>
                              <td className="px-4 py-3 text-sm text-gray-900">{part.name}</td>
                              <td className="px-4 py-3 text-sm text-gray-500">{part.id}</td>
                              <td className="px-4 py-3 text-sm text-gray-900 text-right">{formatCurrency(part.cost)}</td>
                            </tr>
                          ))}
                          <tr>
                            <td className="px-4 py-3 text-sm font-medium text-gray-900">Labor</td>
                            <td className="px-4 py-3"></td>
                            <td className="px-4 py-3 text-sm text-gray-900 text-right">{formatCurrency(repairData.laborCost)}</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr className="bg-gray-50">
                            <td className="px-4 py-3 text-sm font-semibold text-gray-900">Total</td>
                            <td></td>
                            <td className="px-4 py-3 text-right font-semibold text-[#D1AD5B]">{formatCurrency(repairData.totalCost)}</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                )}
                
                {repairData.notes && (
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-1">Notes</p>
                    <p className="p-3 bg-gray-50 rounded-md">{repairData.notes}</p>
                  </div>
                )}
                
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50"
                  >
                    Close
                  </button>
                  
                  <button
                    onClick={() => window.print()}
                    className="px-4 py-2 bg-[#D1AD5B] text-white font-medium rounded-md hover:bg-[#c19b49]"
                  >
                    Print Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
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