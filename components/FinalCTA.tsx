'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useRouter } from 'next/navigation';

export default function FinalCTA() {
  const router = useRouter();
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1, '0px 0px -100px 0px');

  return (
    <section className="py-24 bg-gradient-to-br from-[#00b67f] to-[#00a070] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border-2 border-white rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-2 border-white rounded-full animate-float-slow"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <div 
          ref={sectionRef}
          className={`max-w-3xl mx-auto text-center space-y-8 scroll-fade-in-slow ${sectionVisible ? 'visible' : ''}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium font-poppins">
            <Sparkles className="w-4 h-4" />
            Join Our Community
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl lg:text-6xl font-bold text-white font-poppins leading-tight">
            Join SEWNA Today — Your Next Outfit Starts with a Connection
          </h2>

          {/* Description */}
          <p className="text-xl text-white/90 font-poppins leading-relaxed">
            Whether you&apos;re seeking a designer to bring your vision to life or you&apos;re a talented creator ready to showcase your craft, 
            SEWNA is where fashion dreams become reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button 
              onClick={() => router.push('/designer-onboarding')}
              className="group px-8 py-4 bg-white text-[#00b67f] rounded-full font-semibold hover:bg-gray-100 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 font-poppins"
            >
              Get Started as a Client
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => router.push('/designer-onboarding')}
              className="group px-8 py-4 bg-transparent text-white border-2 border-white rounded-full font-semibold hover:bg-white hover:text-[#00b67f] hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all font-poppins"
            >
              Join as a Designer
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-12 pt-8 flex-wrap">
            <div className="text-center">
              <div className="text-4xl font-bold text-white font-poppins">500+</div>
              <div className="text-sm text-white/80 font-poppins">Designers</div>
            </div>
            <div className="h-12 w-px bg-white/30"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white font-poppins">2,000+</div>
              <div className="text-sm text-white/80 font-poppins">Happy Clients</div>
            </div>
            <div className="h-12 w-px bg-white/30"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white font-poppins">50+</div>
              <div className="text-sm text-white/80 font-poppins">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
