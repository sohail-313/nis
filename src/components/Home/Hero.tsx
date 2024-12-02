import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="flex items-center opacity-0 animate-fade-in [--animation-delay:400ms] spacing-vertical">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Welcome to Nasr International School
            </h1>
            <p className="text-lg sm:text-xl mb-8">
              Where the future begins, we are a school that is dedicated to
              providing the best education for your child.
            </p>
            <Button className="text-lg px-8 py-4 sm:px-10 sm:py-5">
              Learn More
              <span className="ml-2">→</span>
            </Button>
          </div>

          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
            <Image
              src="/images/nasr-school.jpg"
              alt="Nasr International School"
              layout="fill"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
