'use client';

import { ArrowRight, Palette, MessageCircle, Shirt } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useRouter } from 'next/navigation';

export default function HowItWorks() {
  const router = useRouter();
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1, '0px 0px -50px 0px');
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1, '0px 0px -100px 0px');
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.1, '0px 0px -150px 0px');

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1400px] mx-auto px-8">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 scroll-fade-in ${sectionVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-black flex items-baseline justify-center gap-3 font-poppins">
            How <span className="font-semibold text-[#00b67f]">SEWNA</span>  Works
          </h2>
          <p className="text-lg text-gray-700 font-poppins">Three simple steps to your custom outfit</p>
        </div>

        <div 
          ref={cardsRef}
          className={`grid md:grid-cols-3 gap-12 relative scroll-fade-in ${cardsVisible ? 'visible' : ''}`}
        >
          {/* Progress Line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00b67f]/20 via-[#00b67f]/40 to-[#00b67f]/20 animate-progress-line"></div>

          <div className="relative group">
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-[#00b67f] hover:shadow-xl transition-all transform hover:-translate-y-2 animate-fade-in-up animation-delay-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00b67f]/20 to-[#00b67f]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Palette className="w-8 h-8 text-[#00b67f]" />
              </div>
              <div className="text-2xl font-bold mb-3 text-black font-poppins">1. Share Your Vision</div>
              <p className="text-gray-600 leading-relaxed font-poppins">
                Tell us about your dream outfit. Upload inspiration photos, describe your style, and set your preferences.
              </p>
            </div>
            <div className="hidden md:flex absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full items-center justify-center shadow-md">
              <ArrowRight className="w-6 h-6 text-[#00b67f] animate-pulse" />
            </div>
          </div>

          <div className="relative group">
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-[#00b67f] hover:shadow-xl transition-all transform hover:-translate-y-2 animate-fade-in-up animation-delay-200">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00b67f]/20 to-[#00b67f]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 text-[#00b67f]" />
              </div>
              <div className="text-2xl font-bold mb-3 text-black font-poppins">2. Connect with Designers</div>
              <p className="text-gray-600 leading-relaxed font-poppins">
                Browse portfolios of independent designers who match your style and budget. Chat directly to refine your vision.
              </p>
            </div>
            <div className="hidden md:flex absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full items-center justify-center shadow-md">
              <ArrowRight className="w-6 h-6 text-[#00b67f] animate-pulse" />
            </div>
          </div>

          <div className="relative group">
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-[#00b67f] hover:shadow-xl transition-all transform hover:-translate-y-2 animate-fade-in-up animation-delay-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00b67f]/20 to-[#00b67f]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shirt className="w-8 h-8 text-[#00b67f]" />
              </div>
              <div className="text-2xl font-bold mb-3 text-black font-poppins">3. Wear Your Creation</div>
              <p className="text-gray-600 leading-relaxed font-poppins">
                Your designer brings your vision to life. Track progress, provide feedback, and receive your unique custom outfit.
              </p>
            </div>
          </div>
        </div>

        {/* CTA after How It Works */}
        <div 
          ref={ctaRef}
          className={`text-center mt-16 scroll-fade-in ${ctaVisible ? 'visible' : ''}`}
        >
          <button 
            onClick={() => router.push('/designer-onboarding')}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#00b67f] text-white rounded-full font-semibold hover:bg-[#00a070] hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all font-poppins"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-4 text-gray-600 font-poppins">Upload your inspiration now</p>
        </div>
      </div>
    </section>
  );
}
