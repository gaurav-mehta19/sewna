'use client';

import Image from 'next/image';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const designers = [
  {
    id: 1,
    name: 'Priya Sharma',
    specialty: 'Traditional & Fusion Wear',
    location: 'Mumbai, India',
    rating: 4.9,
    projects: 127,
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
    style: 'Elegant ethnic designs with modern twists'
  },
  {
    id: 2,
    name: 'Alex Thompson',
    specialty: 'Sustainable Fashion',
    location: 'London, UK',
    rating: 4.8,
    projects: 94,
    image: 'https://images.pexels.com/photos/3756523/pexels-photo-3756523.jpeg',
    style: 'Eco-friendly materials, contemporary cuts'
  },
  {
    id: 3,
    name: 'Yuki Tanaka',
    specialty: 'Minimalist Couture',
    location: 'Tokyo, Japan',
    rating: 5.0,
    projects: 156,
    image: 'https://images.pexels.com/photos/3779432/pexels-photo-3779432.jpeg',
    style: 'Clean lines, timeless elegance'
  },
  {
    id: 4,
    name: 'Sofia Martinez',
    specialty: 'Bohemian & Vintage',
    location: 'Barcelona, Spain',
    rating: 4.9,
    projects: 83,
    image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg',
    style: 'Free-spirited designs with vintage charm'
  }
];

export default function DesignerShowcase() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.1, '0px 0px -50px 0px');
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1, '0px 0px -100px 0px');
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.1, '0px 0px -150px 0px');

  const handleNavigate = () => {
    window.location.href = '/designer-onboarding';
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 space-y-4 scroll-fade-in ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-black font-poppins">
            Meet Our Designers
          </h2>
          <p className="text-lg text-gray-600 font-poppins max-w-2xl mx-auto">
            Talented artisans from around the world, ready to bring your fashion dreams to life
          </p>
        </div>

        {/* Designer Cards Grid */}
        <div 
          ref={gridRef}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 scroll-fade-in ${gridVisible ? 'visible' : ''}`}
        >
          {designers.map((designer, index) => (
            <div
              key={designer.id}
              className={`group relative bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-[#00b67f] hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredId(designer.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Designer Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <Image
                  src={designer.image}
                  alt={designer.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0  from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Overlay */}
                <div className={`absolute bottom-0 left-0 right-0 p-4 text-white transform transition-transform duration-300 ${
                  hoveredId === designer.id ? 'translate-y-0' : 'translate-y-full'
                }`}>
                  <p className="text-sm font-poppins italic">{designer.style}</p>
                </div>
              </div>

              {/* Designer Info */}
              <div className="p-6 space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-black font-poppins group-hover:text-[#00b67f] transition-colors">
                    {designer.name}
                  </h3>
                  <p className="text-sm text-gray-600 font-poppins">{designer.specialty}</p>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span className="font-poppins">{designer.location}</span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-[#00b67f] text-[#00b67f]" />
                    <span className="text-sm font-semibold text-black">{designer.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500 font-poppins">{designer.projects} projects</span>
                </div>

                {/* View Profile Button */}
                <button 
                  onClick={handleNavigate}
                  className="w-full mt-4 py-2 px-4 bg-gray-50 text-black rounded-full text-sm font-medium hover:bg-[#00b67f] hover:text-white transition-all font-poppins group"
                >
                  <span className="flex items-center justify-center gap-2">
                    View Profile
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div 
          ref={ctaRef}
          className={`text-center mt-12 scroll-fade-in ${ctaVisible ? 'visible' : ''}`}
        >
          <button 
            onClick={handleNavigate}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black border-2 border-black rounded-full font-semibold hover:border-[#00b67f] hover:text-[#00b67f] hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all font-poppins"
          >
            Browse All Designers
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
