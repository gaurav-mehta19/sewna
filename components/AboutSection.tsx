'use client';

import { Heart, Users, Award } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AboutSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.1);
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation(0.15);
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Section Header */}
          <div 
            ref={headerRef}
            className={`space-y-4 scroll-fade-in ${headerVisible ? 'visible' : ''}`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black font-poppins">
              Who We Are
            </h2>
            <p className="text-xl text-gray-600 italic font-light font-poppins">
              Redefining fashion creation, one connection at a time
            </p>
          </div>

          {/* Main Description */}
          <p 
            ref={descRef}
            className={`text-lg text-gray-700 leading-relaxed font-poppins scroll-fade-in ${descVisible ? 'visible' : ''}`}
          >
            <span className="font-semibold text-[#00b67f]">SEWNA</span> is redefining fashion creation by connecting passionate designers with dreamers worldwide. 
            We believe that everyone deserves clothing that tells their unique story, crafted with care by talented artisans who pour their heart into every stitch.
          </p>

          {/* Features Grid */}
          <div 
            ref={featuresRef}
            className={`grid md:grid-cols-3 gap-8 pt-8 scroll-fade-in-slow ${featuresVisible ? 'visible' : ''}`}
          >
            <div className="space-y-3 p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#00b67f] hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#00b67f]/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-6 h-6 text-[#00b67f]" />
              </div>
              <h3 className="text-lg font-semibold text-black font-poppins">Passion-Driven</h3>
              <p className="text-gray-600 text-sm font-poppins">
                Every designer on our platform is handpicked for their craft and dedication
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#00b67f] hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#00b67f]/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-6 h-6 text-[#00b67f]" />
              </div>
              <h3 className="text-lg font-semibold text-black font-poppins">Community-First</h3>
              <p className="text-gray-600 text-sm font-poppins">
                Building meaningful connections between creators and fashion enthusiasts
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#00b67f] hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#00b67f]/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-6 h-6 text-[#00b67f]" />
              </div>
              <h3 className="text-lg font-semibold text-black font-poppins">Quality-Focused</h3>
              <p className="text-gray-600 text-sm font-poppins">
                Premium craftsmanship meets personalized design in every creation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
