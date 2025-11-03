'use client';

import { useState } from 'react';
import { ArrowRight, ArrowLeft, Upload, X } from 'lucide-react';
import { DesignerData } from './DesignerStudio';
import Image from 'next/image';

interface DesignerProfileStepProps {
  data: DesignerData;
  onUpdate: (data: Partial<DesignerData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const SPECIALTY_OPTIONS = [
  'Bridalwear',
  'Streetwear',
  'Ethnic Wear',
  'Sustainable Fashion',
  'Western Wear',
  'Couture',
  'Casual Wear',
  'Accessories',
];

export default function DesignerProfileStep({
  data,
  onUpdate,
  onNext,
  onBack,
}: DesignerProfileStepProps) {
  const [previewImage, setPreviewImage] = useState<string | null>(data.profilePicture);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreviewImage(result);
        onUpdate({ profilePicture: result });
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleSpecialty = (specialty: string) => {
    const newSpecialties = data.specialties.includes(specialty)
      ? data.specialties.filter((s) => s !== specialty)
      : [...data.specialties, specialty];
    onUpdate({ specialties: newSpecialties });
  };

  const canProceed =
    data.fullName.trim() &&
    data.location.city.trim() &&
    data.location.country.trim() &&
    data.specialties.length > 0 &&
    data.bio.trim();

  return (
    <section className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-black font-poppins mb-4">
            Tell Us About Yourself
          </h2>
          <p className="text-lg text-gray-600 font-poppins">
            Help clients get to know you and your creative style
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div className="space-y-6 animate-fade-in-up animation-delay-100">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-black mb-2 font-poppins">
                Full Name *
              </label>
              <input
                type="text"
                value={data.fullName}
                onChange={(e) => onUpdate({ fullName: e.target.value })}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00b67f] focus:outline-none transition-all font-poppins"
              />
            </div>

            {/* Location */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-black mb-2 font-poppins">
                  City *
                </label>
                <input
                  type="text"
                  value={data.location.city}
                  onChange={(e) =>
                    onUpdate({ location: { ...data.location, city: e.target.value } })
                  }
                  placeholder="Mumbai"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00b67f] focus:outline-none transition-all font-poppins"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-2 font-poppins">
                  Country *
                </label>
                <input
                  type="text"
                  value={data.location.country}
                  onChange={(e) =>
                    onUpdate({ location: { ...data.location, country: e.target.value } })
                  }
                  placeholder="India"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00b67f] focus:outline-none transition-all font-poppins"
                />
              </div>
            </div>

            {/* Specialty Tags */}
            <div>
              <label className="block text-sm font-semibold text-black mb-3 font-poppins">
                Specialty Tags * (Select all that apply)
              </label>
              <div className="flex flex-wrap gap-2">
                {SPECIALTY_OPTIONS.map((specialty) => (
                  <button
                    key={specialty}
                    onClick={() => toggleSpecialty(specialty)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all font-poppins ${
                      data.specialties.includes(specialty)
                        ? 'bg-[#00b67f] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {specialty}
                  </button>
                ))}
              </div>
            </div>

            {/* Bio */}
            <div>
              <label className="block text-sm font-semibold text-black mb-2 font-poppins">
                Short Bio * (2-3 lines)
              </label>
              <textarea
                value={data.bio}
                onChange={(e) => onUpdate({ bio: e.target.value })}
                placeholder="Tell us about your design philosophy and what makes your work unique..."
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00b67f] focus:outline-none transition-all font-poppins resize-none"
              />
              <p className="text-xs text-gray-500 mt-1 font-poppins">
                {data.bio.length} characters
              </p>
            </div>

            {/* Portfolio Link */}
            <div>
              <label className="block text-sm font-semibold text-black mb-2 font-poppins">
                Portfolio Link (Optional)
              </label>
              <input
                type="url"
                value={data.portfolioLink}
                onChange={(e) => onUpdate({ portfolioLink: e.target.value })}
                placeholder="https://yourwebsite.com"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00b67f] focus:outline-none transition-all font-poppins"
              />
            </div>

            {/* Profile Picture Upload */}
            <div>
              <label className="block text-sm font-semibold text-black mb-2 font-poppins">
                Profile Picture
              </label>
              {previewImage ? (
                <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-2 border-gray-200">
                  <Image
                    src={previewImage}
                    alt="Profile preview"
                    fill
                    className="object-cover"
                  />
                  <button
                    onClick={() => {
                      setPreviewImage(null);
                      onUpdate({ profilePicture: null });
                    }}
                    className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer hover:border-[#00b67f] transition-all">
                  <Upload className="w-8 h-8 text-gray-400 mb-2" />
                  <span className="text-sm text-gray-500 font-poppins">Upload Photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>

          {/* Live Preview Section */}
          <div className="animate-fade-in-up animation-delay-200">
            <div className="sticky top-24 bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-lg">
              <h3 className="text-lg font-semibold text-black mb-6 font-poppins">
                Profile Preview
              </h3>
              
              <div className="space-y-6">
                {/* Profile Card */}
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-gray-100 overflow-hidden flex-shrink-0">
                    {previewImage ? (
                      <Image
                        src={previewImage}
                        alt="Profile"
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <Upload className="w-8 h-8" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-black font-poppins">
                      {data.fullName || 'Your Name'}
                    </h4>
                    <p className="text-sm text-gray-600 font-poppins">
                      {data.location.city && data.location.country
                        ? `${data.location.city}, ${data.location.country}`
                        : 'Your Location'}
                    </p>
                    {data.specialties.length > 0 && (
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
                    )}
                  </div>
                </div>

                {/* Bio */}
                {data.bio && (
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-700 font-poppins leading-relaxed">
                      {data.bio}
                    </p>
                  </div>
                )}

                {/* Portfolio Link */}
                {data.portfolioLink && (
                  <div className="pt-4 border-t border-gray-100">
                    <a
                      href={data.portfolioLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#00b67f] hover:underline font-poppins"
                    >
                      View Portfolio →
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-12 animate-fade-in-up animation-delay-300">
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
            Continue
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
