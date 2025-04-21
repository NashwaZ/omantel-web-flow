
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AuthenticationStep from '@/components/workflow/AuthenticationStep';
import ApiRequestStep from '@/components/workflow/ApiRequestStep';
import ErrorHandlingStep from '@/components/workflow/ErrorHandlingStep';

const Workflow = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { component: <AuthenticationStep />, title: "Authentication" },
    { component: <ApiRequestStep />, title: "API Requests" },
    { component: <ErrorHandlingStep />, title: "Error Handling" }
  ];

  const goToNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="px-4 h-16 flex items-center">
          <img 
            src="/lovable-uploads/17ae61e2-701d-40b7-9fef-079b70a0a6b3.png" 
            alt="Omantel Logo" 
            className="h-8"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Progress indicator */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex items-center ${
                  index < steps.length - 1 ? 'flex-1' : ''
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    index + 1 <= currentStep
                      ? 'bg-omantel-blue text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      index + 1 < currentStep ? 'bg-omantel-blue' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            {steps.map((step, index) => (
              <span
                key={index}
                className={`text-sm ${
                  index + 1 === currentStep
                    ? 'text-omantel-blue font-medium'
                    : 'text-gray-500'
                }`}
              >
                {step.title}
              </span>
            ))}
          </div>
        </div>

        {/* Step content */}
        <div className="mb-8">
          {steps[currentStep - 1].component}
        </div>

        {/* Navigation buttons */}
        <div className="max-w-3xl mx-auto flex justify-between">
          <Button
            onClick={goToPreviousStep}
            disabled={currentStep === 1}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>
          <Button
            onClick={goToNextStep}
            disabled={currentStep === steps.length}
            className="flex items-center gap-2"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Workflow;
