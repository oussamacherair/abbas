import React from 'react'

function AboutUs() {
    return (
        <div className='relative md:bg-[#333] my-12 md:my-20 lg:my-24'>
            {/* Mobile Background - Only visible on small screens */}
            <div className='md:hidden min-h-screen w-[300%] bg-[#333] rotate-[15deg] mt-35 relative top-[5%] -left-[50%] border-t-10 border-b-10 border-[#D1AD5B]'></div>
            
           
            
            {/* Content - Positioned properly for all screens */}
            <div className='absolute w-full md:static md:py-8 top-0 left-0'>
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <div className="poly-image"></div>
                    <div className="mt-12 relative">
                        <div className='flex flex-col justify-center items-center'>
                            {/* Title Section */}
                            <div className="-mt-10 flex flex-col items-center">
                                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-[#D1AD5B] text-center">Learn More About Us</h3>
                                <div className='w-full max-w-md md:max-w-lg lg:max-w-xl'>
                                    <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 text-white text-center">
                                        Your Partner in Technology and Workspace Solutions
                                    </p>
                                </div>

                                <div className="w-32 sm:w-50 md:w-60 py-[1px] my-5 bg-[#D1AD5B]"></div>
                            </div>

                            {/* Content Section - Different layouts for mobile and desktop */}
                            <div className="w-full max-w-6xl">
                                {/* Mobile Layout - Stack paragraphs */}
                                <div className="md:hidden px-4 space-y-4">
                                    <p className="text-white text-sm">
                                        At Abbas Computer, we are dedicated to providing comprehensive technology and workspace solutions that cater to your specific needs. With years of experience in the industry, we have the expertise to ensure that your equipment, furniture, and security systems are not only top-quality but also perfectly suited for your requirements.
                                    </p>
                                    <p className="text-white text-sm">
                                        Whether you&apos;re a small startup, a growing business, or a large corporate client, we are committed to making your office the best it can be. Experience the Abbas Computer difference today!
                                    </p>
                                </div>
                                
                                {/* Desktop Layout - Side by side paragraphs */}
                                <div className="hidden md:flex md:justify-between md:space-x-8 lg:space-x-16 px-8">
                                    <p className="text-white md:text-base lg:text-lg">
                                        At Abbas Computer, we are dedicated to providing comprehensive technology and workspace solutions that cater to your specific needs. With years of experience in the industry, we have the expertise to ensure that your equipment, furniture, and security systems are not only top-quality but also perfectly suited for your requirements. Our installation services and regular maintenance ensure that everything runs smoothly.
                                    </p>
                                    <p className="text-white md:text-base lg:text-lg flex-[1 0 50%]">
                                        Whether you&apos;re a small startup, a growing business, or a large corporate client, we are committed to making your office the best it can be. Experience the Abbas Computer difference today!
                                    </p>
                                </div>
                            </div>
                            
                            {/* Signature Section */}
                            <div className="mt-8 md:mt-12 lg:mt-16 px-4 w-full text-right">
                                <h4 className="text-md  font-semibold mb-2 text-[#D1AD5B]">YOUR RELIABLE IT PARTNER</h4>
                                <p className="italic text-gray-300 text-sm">- Abbas Team</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs