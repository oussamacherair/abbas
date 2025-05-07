import React from 'react';
import { ChevronRight } from 'lucide-react';
const Services = () => {
    const services = [
        {
            id: 1,
            title: "IT HARDWARE SOLUTIONS",
            description: "Our IT hardware offerings include a wide selection of computing devices tailored to individual needs and business requirements for gaming or creative systems. We expertise our team in ready to help you find the perfect hardware for your specific needs.",
            link: "contact   "
        },
        {
            id: 2,
            title: "OFFICE FURNITURE",
            description: "Revamp your workspace with our stylish office furniture solutions! We offer everything from desks and chairs to complete workstations, all designed to enhance comfort, productivity, and increase efficiency.",
            link: "contact   "
        },
        {
            id: 3,
            title: "SECURITY CAMERA INSTALLATION",
            description: "Enhance the safety of your home or business with our expert security camera installation services. We provide comprehensive solutions to secure your property with reliable systems, ensuring your peace of mind. We also provide working hour surveillance.",
            link: "contact   "
        },
        {
            id: 4,
            title: "REPAIR SERVICES",
            description: "Keep your devices working smoothly with our expert repair services. We specialize in computer/laptop repairs, mobile device fixes, network/internet troubleshooting, and maintenance support.",
            link: "contact   "
        }
    ];

    return (
        <section className="py-10 mt-8 mb-[210px] ">
            <div className="container px-3 mx-auto">
                <div className='mb-8'>
                    <h3 className="text-base text-center font-semibold mb-4 text-[#CAB78B]">EXPLORE OUR PRODUCTS AND SERVICES</h3>
                    <p className="mb-4 text-center">From high-performance computers to
                        ergonomic office furniture, we work
                        with you to meet all your IT
                        and workspace needs.</p>
                </div>
            
                <div className="flex flex-col space-y-12 md:grid md:grid-cols-2 md:gap-4">
                    {services.map((service) => (
                        <div key={service.id} className="pb-6 pt-4 px-6 bg-white  Mon-shadow relative">
                            <h3 className="text-base text-center font-semibold text-[#CAB78B] mb-2">{service.title}</h3>
                            <p className="text-gray-600 my-4">{service.description}</p>
                            <div className='flex items-center justify-center text-[#CCA64E] cursor-pointer'>
                              <a href="#">{service.link}</a>  
                              <span className="ml-3 relative top-[3px]"><ChevronRight /></span>
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