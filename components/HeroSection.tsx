'use client';

import Image from 'next/image';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-[#00b67f]/5 overflow-hidden">
      {/* Floating Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#00b67f]/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-[#00b67f]/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 border-2 border-[#00b67f]/10 rounded-full animate-float-slow"></div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-8 py-20 grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00b67f]/10 text-[#00b67f] rounded-full text-sm font-medium font-poppins animate-slide-in-left hover:scale-105 hover:shadow-md transition-all">
            <Sparkles className="w-4 h-4 animate-pulse" />
            Connect with Independent Designers
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-black font-poppins animate-slide-in-left animation-delay-100">
              Your Vision,
              <br />
              <span className="text-[#00b67f] inline-block hover:scale-105 transition-transform">Their Craft</span>
            </h1>
            
            <p className="text-xl text-gray-600 italic font-light font-poppins animate-slide-in-left animation-delay-150">
              Where creativity meets craftsmanship — your personalized fashion journey starts here.
            </p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed max-w-lg font-poppins animate-slide-in-left animation-delay-200">
            <span className="font-semibold text-[#00b67f]">SEWNA</span>  bridges the gap between your unique style and talented independent fashion designers ready to bring your dream outfits to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-in-left animation-delay-300">
            <button 
              onClick={() => router.push('/designer-onboarding')}
              className="group px-8 py-4 bg-[#00b67f] text-white rounded-full font-medium hover:bg-[#00a070] hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 font-poppins"
            >
              I Need a Designer
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => router.push('/designer-onboarding')}
              className="px-8 py-4 bg-white text-black border-2 border-black rounded-full font-medium hover:border-[#00b67f] hover:text-[#00b67f] hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all font-poppins"
            >
              I Am a Designer
            </button>
          </div>

          <div className="flex items-center gap-8 pt-8 animate-slide-in-left animation-delay-400">
            <div className="hover:scale-110 transition-transform">
              <div className="text-3xl font-bold text-black">500+</div>
              <div className="text-sm text-gray-600">Independent Designers</div>
            </div>
            <div className="h-12 w-px bg-gray-300"></div>
            <div className="hover:scale-110 transition-transform">
              <div className="text-3xl font-bold text-black">2,000+</div>
              <div className="text-sm text-gray-600">Custom Outfits Created</div>
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6 pt-12">
              <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden relative cursor-pointer group shadow-lg hover:shadow-2xl transition-shadow">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1CIsXqHEFstt3_yOnbKXMMxs8b153Kfqy"
                  alt="Custom fashion design"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden relative cursor-pointer group shadow-lg hover:shadow-2xl transition-shadow">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1QkkaKuWiU-R__3IwPCoxnS2iuohWbNHa"
                  alt="Tailoring process"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden relative cursor-pointer group shadow-lg hover:shadow-2xl transition-shadow">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1NHj2RkMi3Q-TwaI6P-HShg5rgzZQFq9m"
                  alt="Fashion designer at work"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden relative cursor-pointer group shadow-lg hover:shadow-2xl transition-shadow">
                <Image
                  src="https://drive.google.com/uc?export=view&id=17O2TtOkxJ93N85itIP1MwjBz5e0E3Wp8"
                  alt="Designer portfolio"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
