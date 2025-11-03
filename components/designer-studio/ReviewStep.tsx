'use client';

import { useState } from 'react';
import { ArrowLeft, Sparkles, Check } from 'lucide-react';
import { DesignerData } from './DesignerStudio';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ReviewStepProps {
  data: DesignerData;
  onBack: () => void;
}

export default function ReviewStep({ data, onBack }: ReviewStepProps) {
  const [isPublishing, setIsPublishing] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const router = useRouter();

  const handlePublish = () => {
    setIsPublishing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsPublishing(false);
      setIsPublished(true);
      
      // Trigger confetti
      triggerConfetti();
    }, 2000);
  };

  const triggerConfetti = () => {
    // Simple confetti effect using CSS animations
    const confettiContainer = document.getElementById('confetti-container');
    if (confettiContainer) {
      for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.backgroundColor = ['#00b67f', '#000000', '#ffffff'][Math.floor(Math.random() * 3)];
        confettiContainer.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
      }
    }
  };

  if (isPublished) {
    return (
      <section className="min-h-screen flex items-center justify-center px-8 relative">
        <div id="confetti-container" className="fixed inset-0 pointer-events-none z-50" />
        
        <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-[#00b67f] rounded-full animate-bounce">
            <Check className="w-12 h-12 text-white" />
          </div>

          {/* Success Message */}
          <div className="space-y-4">
            <h2 className="text-5xl lg:text-6xl font-bold text-black font-poppins">
              🎉 Congratulations!
            </h2>
            <p className="text-2xl text-gray-600 font-poppins">
              Your SEWNA Designer Profile is Live!
            </p>
          </div>

          <p className="text-lg text-gray-700 max-w-xl mx-auto font-poppins">
            Clients can now discover your work and connect with you for custom projects.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={() => router.push('/')}
              className="px-8 py-4 bg-[#00b67f] text-white rounded-full font-semibold hover:bg-[#00a070] hover:shadow-xl hover:scale-105 transition-all font-poppins"
            >
              View My Public Profile
            </button>
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-4 bg-white text-black border-2 border-gray-300 rounded-full font-medium hover:border-gray-400 transition-all font-poppins"
            >
              Add More Designs
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-black font-poppins mb-4">
            Review & Publish
          </h2>
          <p className="text-lg text-gray-600 font-poppins">
            Make sure everything looks perfect before going live
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Profile Preview Card */}
          <div className="space-y-6 animate-fade-in-up animation-delay-100">
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-black mb-6 font-poppins flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#00b67f]" />
                Your Designer Profile
              </h3>

              {/* Profile Info */}
              <div className="flex items-start gap-4 mb-6">
                {data.profilePicture && (
                  <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                    <Image
                      src={data.profilePicture}
                      alt={data.fullName}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-black font-poppins">
                    {data.fullName}
                  </h4>
                  <p className="text-gray-600 font-poppins">
                    {data.location.city}, {data.location.country}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {data.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-2 py-1 bg-[#00b67f]/10 text-[#00b67f] rounded-full text-xs font-medium font-poppins"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="mb-6 pb-6 border-b border-gray-100">
                <h5 className="text-sm font-semibold text-black mb-2 font-poppins">About</h5>
                <p className="text-sm text-gray-700 font-poppins leading-relaxed">
                  {data.bio}
                </p>
              </div>

              {/* Services Summary */}
              <div className="space-y-3">
                <div>
                  <h5 className="text-sm font-semibold text-black mb-2 font-poppins">Specializes In</h5>
                  <p className="text-sm text-gray-700 font-poppins">
                    {data.outfitTypes.join(', ')}
                  </p>
                </div>
                
                <div>
                  <h5 className="text-sm font-semibold text-black mb-2 font-poppins">Pricing</h5>
                  <p className="text-sm text-gray-700 font-poppins">
                    Starting from ₹{data.priceRange.min}
                    {data.priceRange.max && ` - ₹${data.priceRange.max}`}
                  </p>
                </div>
                
                <div>
                  <h5 className="text-sm font-semibold text-black mb-2 font-poppins">Delivery Time</h5>
                  <p className="text-sm text-gray-700 font-poppins">
                    {data.deliveryTime} week{data.deliveryTime > 1 ? 's' : ''}
                  </p>
                </div>
                
                <div>
                  <h5 className="text-sm font-semibold text-black mb-2 font-poppins">Available For</h5>
                  <p className="text-sm text-gray-700 font-poppins">
                    {data.availability.join(', ')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Designs Gallery Preview */}
          <div className="animate-fade-in-up animation-delay-200">
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-black mb-6 font-poppins">
                Your Portfolio ({data.designs.length} designs)
              </h3>

              <div className="grid grid-cols-2 gap-4 max-h-[600px] overflow-y-auto">
                {data.designs.map((design) => (
                  <div
                    key={design.id}
                    className="group relative aspect-square rounded-xl overflow-hidden border border-gray-200 hover:border-[#00b67f] transition-all"
                  >
                    <Image
                      src={design.image}
                      alt={design.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {design.name && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                        <p className="text-white text-xs font-medium font-poppins truncate">
                          {design.name}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-12 animate-fade-in-up animation-delay-300">
          <button
            onClick={onBack}
            disabled={isPublishing}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black border-2 border-gray-300 rounded-full font-medium hover:border-gray-400 transition-all font-poppins disabled:opacity-50"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>

          <button
            onClick={handlePublish}
            disabled={isPublishing}
            className="group inline-flex items-center gap-2 px-12 py-4 bg-[#00b67f] text-white rounded-full font-bold text-lg hover:bg-[#00a070] hover:shadow-2xl hover:scale-105 transition-all font-poppins disabled:opacity-50 disabled:hover:scale-100"
          >
            {isPublishing ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Publishing...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Publish Portfolio
              </>
            )}
          </button>
        </div>
      </div>

      {/* Confetti Styles */}
      <style jsx>{`
        .confetti {
          position: fixed;
          width: 10px;
          height: 10px;
          top: -10px;
          z-index: 9999;
          animation: confetti-fall 3s linear forwards;
        }

        @keyframes confetti-fall {
          to {
            transform: translateY(100vh) rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
