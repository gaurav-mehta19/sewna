'use client';

import { ArrowRight, ArrowLeft } from 'lucide-react';
import { DesignerData } from './DesignerStudio';

interface ServicesStepProps {
  data: DesignerData;
  onUpdate: (data: Partial<DesignerData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const OUTFIT_TYPES = [
  'Sarees',
  'Suits',
  'Gowns',
  'Western Wear',
  'Accessories',
  'Ethnic Wear',
  'Casual Wear',
  'Formal Wear',
];

const AVAILABILITY_OPTIONS = [
  'Local Orders',
  'International Shipping',
  'Virtual Consultation',
  'In-Person Meetings',
];

export default function ServicesStep({
  data,
  onUpdate,
  onNext,
  onBack,
}: ServicesStepProps) {
  const toggleOutfitType = (type: string) => {
    const newTypes = data.outfitTypes.includes(type)
      ? data.outfitTypes.filter((t) => t !== type)
      : [...data.outfitTypes, type];
    onUpdate({ outfitTypes: newTypes });
  };

  const toggleAvailability = (option: string) => {
    const newAvailability = data.availability.includes(option)
      ? data.availability.filter((a) => a !== option)
      : [...data.availability, option];
    onUpdate({ availability: newAvailability });
  };

  const canProceed =
    data.outfitTypes.length > 0 &&
    data.priceRange.min > 0 &&
    data.deliveryTime > 0 &&
    data.availability.length > 0;

  // Generate summary text
  const generateSummary = () => {
    if (!canProceed) return '';
    
    const types = data.outfitTypes.join(', ');
    const price = `₹${data.priceRange.min}${data.priceRange.max ? ` - ₹${data.priceRange.max}` : '+'}`;
    const delivery = `${data.deliveryTime} week${data.deliveryTime > 1 ? 's' : ''}`;
    
    return `You specialize in ${types}, with pricing starting from ${price} and ${delivery} delivery time.`;
  };

  return (
    <section className="py-24 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-black font-poppins mb-4">
            What Can You Make?
          </h2>
          <p className="text-lg text-gray-600 font-poppins">
            Help clients understand your expertise and services
          </p>
        </div>

        <div className="space-y-10">
          {/* Outfit Types */}
          <div className="animate-fade-in-up animation-delay-100">
            <label className="block text-xl font-semibold text-black mb-4 font-poppins">
              Outfit Types *
            </label>
            <p className="text-sm text-gray-600 mb-4 font-poppins">
              Select all types of outfits you can create
            </p>
            <div className="flex flex-wrap gap-3">
              {OUTFIT_TYPES.map((type) => (
                <button
                  key={type}
                  onClick={() => toggleOutfitType(type)}
                  className={`px-6 py-3 rounded-full text-base font-medium transition-all font-poppins ${
                    data.outfitTypes.includes(type)
                      ? 'bg-[#00b67f] text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#00b67f] hover:scale-105'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="animate-fade-in-up animation-delay-200">
            <label className="block text-xl font-semibold text-black mb-4 font-poppins">
              Price Range *
            </label>
            <p className="text-sm text-gray-600 mb-4 font-poppins">
              What are your typical project rates? (in ₹)
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                  Starting From (Minimum)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-poppins">
                    ₹
                  </span>
                  <input
                    type="number"
                    value={data.priceRange.min || ''}
                    onChange={(e) =>
                      onUpdate({
                        priceRange: { ...data.priceRange, min: Number(e.target.value) },
                      })
                    }
                    placeholder="5000"
                    className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00b67f] focus:outline-none transition-all font-poppins"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-poppins">
                  Up To (Optional)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-poppins">
                    ₹
                  </span>
                  <input
                    type="number"
                    value={data.priceRange.max || ''}
                    onChange={(e) =>
                      onUpdate({
                        priceRange: { ...data.priceRange, max: Number(e.target.value) },
                      })
                    }
                    placeholder="50000"
                    className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00b67f] focus:outline-none transition-all font-poppins"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Time */}
          <div className="animate-fade-in-up animation-delay-300">
            <label className="block text-xl font-semibold text-black mb-4 font-poppins">
              Estimated Delivery Time *
            </label>
            <p className="text-sm text-gray-600 mb-4 font-poppins">
              How many weeks does it typically take to complete a project?
            </p>
            <div className="max-w-xs">
              <div className="relative">
                <input
                  type="number"
                  value={data.deliveryTime || ''}
                  onChange={(e) => onUpdate({ deliveryTime: Number(e.target.value) })}
                  placeholder="3"
                  min="1"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00b67f] focus:outline-none transition-all font-poppins"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-poppins">
                  weeks
                </span>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="animate-fade-in-up animation-delay-400">
            <label className="block text-xl font-semibold text-black mb-4 font-poppins">
              Available For *
            </label>
            <p className="text-sm text-gray-600 mb-4 font-poppins">
              How can clients work with you?
            </p>
            <div className="flex flex-wrap gap-3">
              {AVAILABILITY_OPTIONS.map((option) => (
                <button
                  key={option}
                  onClick={() => toggleAvailability(option)}
                  className={`px-6 py-3 rounded-full text-base font-medium transition-all font-poppins ${
                    data.availability.includes(option)
                      ? 'bg-[#00b67f] text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#00b67f] hover:scale-105'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Summary Preview */}
          {canProceed && (
            <div className="animate-fade-in-up animation-delay-500">
              <div className="bg-gradient-to-br from-[#00b67f]/10 to-[#00b67f]/5 border-2 border-[#00b67f]/20 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-black mb-3 font-poppins">
                  📋 Your Service Summary
                </h4>
                <p className="text-gray-700 font-poppins leading-relaxed">
                  {generateSummary()}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-12 animate-fade-in-up animation-delay-600">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black border-2 border-gray-300 rounded-full font-medium hover:border-gray-400 transition-all font-poppins"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>

          <button
            onClick={onNext}
            disabled={!canProceed}
            className={`inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all font-poppins ${
              canProceed
                ? 'bg-[#00b67f] text-white hover:bg-[#00a070] hover:shadow-xl hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Continue to Review
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
