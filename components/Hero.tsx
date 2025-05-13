"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      {/* Hero */}
      <div className="hero_background-sm relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24 lg:py-32">
          {/* Title */}
          <div className="mx-auto max-w-2xl">
            {/* Mobile Hero Content (visible on small screens) */}
            <div className="md:hidden">
              <h1 className="text-2xl sm:text-3xl text-white mb-4">
                We Provide A <span className="text-3xl sm:text-4xl text-green-500 font-black block mt-1 mb-2">Complete Solution</span>
                For Your Business.
              </h1>
              <p className="text-base text-white mb-6">
                Transform your workspace with our extensive
                range of IT hardware and office furniture.
              </p>
              <p className="text-base text-white mb-6">
                At Abbas Computer, we combine practicality
                with style to create environments that
                enhance productivity and comfort.
              </p>
            </div>
            
            {/* Desktop Hero Content (hidden on small screens) */}
            <div className="hidden md:block">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl text-white mb-6">
                We Provide A <span className="text-5xl lg:text-6xl xl:text-7xl text-green-500 font-black">Complete Solution </span>
                For Your Business.
              </h1>
              <p className="text-lg lg:text-xl text-white mb-4">
                Transform your workspace with our extensive
                range of IT hardware and office furniture.
              </p>
              <p className="text-lg lg:text-xl text-white mb-8">
                At Abbas Computer, we combine practicality
                with style to create environments that
                enhance productivity and comfort.
              </p>
            </div>
          </div>
         
          {/* Buttons */}
          <div className="mt-6 md:mt-8">
            <Link href="/contact">
              <Button 
                className="bg-white text-black hover:bg-green-500 hover:text-white font-medium rounded-md px-4 py-2 md:px-6 md:py-2.5 text-sm md:text-base transition-all" 
                size="lg"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}