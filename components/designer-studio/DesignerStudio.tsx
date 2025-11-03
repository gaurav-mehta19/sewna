'use client';

import { useState } from 'react';
import WelcomeStep from './WelcomeStep';
import DesignerProfileStep from './DesignerProfileStep';
import DesignsUploadStep from './DesignsUploadStep';
import ServicesStep from './ServicesStep';
import ReviewStep from './ReviewStep';
import ProgressBar from './ProgressBar';

export interface DesignerData {
  // Profile
  fullName: string;
  location: { city: string; country: string };
  specialties: string[];
  bio: string;
  portfolioLink: string;
  profilePicture: string | null;
  
  // Designs
  designs: Array<{
    id: string;
    image: string;
    name: string;
    caption: string;
    tags: string[];
  }>;
  
  // Services
  outfitTypes: string[];
  priceRange: { min: number; max: number };
  deliveryTime: number;
  availability: string[];
}

const TOTAL_STEPS = 5;

export default function DesignerStudio() {
  const [currentStep, setCurrentStep] = useState(1);
  const [designerData, setDesignerData] = useState<DesignerData>({
    fullName: '',
    location: { city: '', country: '' },
    specialties: [],
    bio: '',
    portfolioLink: '',
    profilePicture: null,
    designs: [],
    outfitTypes: [],
    priceRange: { min: 0, max: 0 },
    deliveryTime: 0,
    availability: [],
  });

  const updateDesignerData = (data: Partial<DesignerData>) => {
    setDesignerData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <WelcomeStep onNext={nextStep} />;
      case 2:
        return (
          <DesignerProfileStep
            data={designerData}
            onUpdate={updateDesignerData}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 3:
        return (
          <DesignsUploadStep
            data={designerData}
            onUpdate={updateDesignerData}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 4:
        return (
          <ServicesStep
            data={designerData}
            onUpdate={updateDesignerData}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 5:
        return (
          <ReviewStep
            data={designerData}
            onBack={prevStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-[#00b67f]/5">
      {/* Progress Bar */}
      {currentStep > 1 && (
        <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />
      )}

      {/* Step Content */}
      <main className="pt-8 pb-20">
        {renderStep()}
      </main>
    </div>
  );
}
