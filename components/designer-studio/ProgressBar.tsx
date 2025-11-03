'use client';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-8 py-4">
        {/* Step indicators */}
        <div className="flex items-center justify-center gap-2 mb-3">
          {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold font-poppins transition-all ${
                  step <= currentStep
                    ? 'bg-[#00b67f] text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {step}
              </div>
              {step < totalSteps && (
                <div
                  className={`w-12 h-0.5 mx-1 transition-all ${
                    step < currentStep ? 'bg-[#00b67f]' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="relative h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-[#00b67f] transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Step label */}
        <div className="text-center mt-2">
          <p className="text-sm text-gray-600 font-poppins">
            Step {currentStep} of {totalSteps}
          </p>
        </div>
      </div>
    </div>
  );
}
