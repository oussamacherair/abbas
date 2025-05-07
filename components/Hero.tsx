"use client";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <>
      {/* Hero */}
      <div className="hero_background-sm relative  overflow-hidden">
        <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32">
          {/* Title */}
          <div className="mx-auto mt-5 max-w-2xl">
            <h1 className="text-xl md:text-5xl text-white mb-6">
              We Provide A <span className="text-2xl md:text-6xl text-green-500 font-black">Complete Solution </span>
              For Your Business.
            </h1>
            <p className="text-lg text-white mb-8 block">
              Transform your workspace with our extensive
              range of IT hardware and office furniture.
            </p>
            <p className="text-lg text-white mb-8">
              At Abbas Computer, we combine practicality
              with style to create environments that
              enhance productivity and comfort.
            </p>
          </div>
         
          {/* Buttons */}
          <div className="mt-8">
            <Button 
              className="mt-5 bg-white text-black hover:bg-green-500  hover:text-white font-medium rounded-md px-6 py-2.5 text-md" size={"lg"} variant={"secondary"}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}