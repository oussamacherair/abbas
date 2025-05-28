import React from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const Services = () => {
    const services = [
        {
            id: 1,
            title: "IT HARDWARE SOLUTIONS",
            description: "Our IT hardware offerings include a wide selection of computing devices tailored to individual needs and business requirements for gaming or creative systems. We expertise our team in ready to help you find the perfect hardware for your specific needs.",
            link: "it-hardware-solutions"
        },
        {
            id: 2,
            title: "OFFICE FURNITURE",
            description: "Revamp your workspace with our stylish office furniture solutions! We offer everything from desks and chairs to complete workstations, all designed to enhance comfort, productivity, and increase efficiency.",
            link: "office-furniture"
        },
        {
            id: 3,
            title: "SECURITY CAMERA INSTALLATION",
            description: "Enhance the safety of your home or business with our expert security camera installation services. We provide comprehensive solutions to secure your property with reliable systems, ensuring your peace of mind. We also provide working hour surveillance.",
            link: "security-camera-installation"
        },
        {
            id: 4,
            title: "REPAIR SERVICES",
            description: "Keep your devices working smoothly with our expert repair services. We specialize in computer/laptop repairs, mobile device fixes, network/internet troubleshooting, and maintenance support.",
            link: "repair-services"
        }
    ];

    return (
        <section className="py-10 md:py-16 lg:py-20 mt-8 mb-[210px] md:mb-24 lg:mb-32 relative">
            {/* Content Container - Different positioning for mobile vs desktop */}
            <div className="container px-3 md:px-6 lg:px-8 mx-auto">
                {/* Section Title */}
                <div className='mb-8 md:mb-12 lg:mb-16 px-4'>
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-center font-semibold mb-4 text-[#CAB78B]">
                        EXPLORE OUR PRODUCTS AND SERVICES
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 text-center max-w-2xl mx-auto">
                        From high-performance computers to ergonomic office furniture, 
                        we work with you to meet all your IT and workspace needs.
                    </p>
                </div>
            
                {/* Mobile Services Layout - Stack */}
                <div className="flex flex-col space-y-6 md:hidden">
                    {services.map((service) => (
                        <div key={service.id} className="pb-6 pt-4 px-6 bg-white Mon-shadow relative flex flex-col h-full mx-4">
                            <h3 className="text-base font-semibold text-[#CAB78B] mb-2 text-center">{service.title}</h3>
                            <p className="text-sm text-gray-600 my-4 flex-grow">{service.description}</p>
                            <div className='flex items-center justify-center text-[#CCA64E] cursor-pointer mt-auto'>
                                <Link href={`/Services/${service.link}`}>Learn More</Link>  
                                <span className="ml-3 relative top-[3px]"><ChevronRight /></span>
                            </div>
                            <div className='poly-mask'></div>
                        </div>
                    ))}
                </div>
                
                {/* Desktop Services Layout - Grid */}
                <div className="hidden md:grid md:grid-cols-2 md:gap-6 lg:gap-10 xl:gap-12 max-w-6xl mx-auto">
                    {services.map((service) => (
                        <div key={service.id} className="pb-6 pt-4 px-6 bg-white Mon-shadow relative flex flex-col h-full">
                            <h3 className="text-base md:text-lg lg:text-xl font-semibold text-[#CAB78B] mb-2 md:mb-4 text-center">{service.title}</h3>
                            <p className="text-gray-600 md:text-base lg:text-lg my-4 flex-grow">{service.description}</p>
                            <div className='flex items-center justify-center text-[#CCA64E] cursor-pointer mt-auto md:text-base lg:text-lg'>
                                <Link href={`/Services/${service.link}`}>Learn More</Link>  
                                <span className="ml-3 relative top-[3px]"><ChevronRight className="h-5 w-5 md:h-6 md:w-6" /></span>
                            </div>
                            <div className='poly-mask'></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services; 