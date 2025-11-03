'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

interface WelcomeStepProps {
  onNext: () => void;
}

export default function WelcomeStep({ onNext }: WelcomeStepProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00b67f]/10 text-[#00b67f] rounded-full text-sm font-medium font-poppins">
          <Sparkles className="w-4 h-4" />
          Designer Studio
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl lg:text-6xl font-bold text-black font-poppins leading-tight">
            Welcome to <span className="text-[#00b67f]">SEWNA</span> Studio 🎨
          </h1>
          <p className="text-2xl text-gray-600 font-light font-poppins">
            Let&apos;s showcase your creativity and help clients discover your craft.
          </p>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed font-poppins">
          Build your designer portfolio in just a few steps. Share your unique style, 
          upload your best work, and connect with clients who are looking for talent just like yours.
        </p>

        {/* Image/Illustration */}
        <div className="relative w-full max-w-2xl mx-auto h-64 rounded-2xl overflow-hidden shadow-2xl my-12">
          <Image
            src="https://images.pexels.com/photos/3756523/pexels-photo-3756523.jpeg"
            alt="Designer workspace"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* CTA Button */}
        <button
          onClick={onNext}
          className="group inline-flex items-center gap-3 px-10 py-5 bg-[#00b67f] text-white rounded-full font-semibold text-lg hover:bg-[#00a070] hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all font-poppins"
        >
          Start Building Portfolio
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Step indicator */}
        <div className="pt-8">
          <p className="text-sm text-gray-500 font-poppins">
            Step 1 of 5 • Takes about 5 minutes
          </p>
        </div>
      </div>
    </section>
  );
}
