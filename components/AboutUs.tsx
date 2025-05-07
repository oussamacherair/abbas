import React from 'react'

function AboutUs() {
    return (
        <div className='min-h-screen relative my-28 '>
            <div className='md:hidden min-h-screen  w-[300%] bg-[#333] rotate-[15deg] mt-35 relative top-[5%] -left-[50%] border-t-10 border-b-10 border-[#D1AD5B] '></div>
            <div className='absolute md:block md:relative md:py-8 md:bg-[#333] top-0 left-0'>
                <div>
                    <div className="poly-image"></div>
                    <div className="mt-12  relative">
                        <div className='flex flex-col justify-center align-center'>
                            <div className="-mt-10 flex flex-col items-center">
                                <h3 className="text-2xl font-semibold mb-4 text-[#D1AD5B] text-center"> Learn More About Us</h3>
                                <div className='w-55'>
                                    <p className="text-base mb-6 text-white  text-center">
                                        Your Partner in Technology and Workspace Solutions
                                    </p>
                                </div>

                                <div className="w-50 py-[1px] my-5 bg-[#D1AD5B]"></div>
                            </div>

                            <div className=" md:flex md:justify-between md:space-x-8 px-8">
                                <p className="text-white">
                                    At Abbas Computer, we are dedicated to providing comprehensive technology and workspace solutions that cater to your specific needs. With years of experience in the industry, we have the expertise to ensure that your equipment, furniture, and security systems are not only top-quality but also perfectly suited for your requirements. Our installation services and regular maintenance ensure that everything runs smoothly.
                                </p>
                                <p className="text-white mt-4 flex-[1 0 50%] md:mt-0">
                                    Whether you&apos;re a small startup, a growing business, or a large corporate client, we are committed to making your office the best it can be. Experience the Abbas Computer difference today!
                                </p>
                            </div>
                            <div className="mt-8 px-4 text-right">
                                <h4 className="text-xl font-semibold mb-2 text-[#D1AD5B]">YOUR RELIABLE IT PARTNER</h4>
                                <p className="italic text-gray-300">- Abbas Team</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutUs