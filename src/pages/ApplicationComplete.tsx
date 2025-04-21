
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ApplicationComplete: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <header className="absolute top-0 left-0 w-full p-4">
        <img 
          src="/lovable-uploads/17ae61e2-701d-40b7-9fef-079b70a0a6b3.png" 
          alt="Omantel Logo" 
          className="h-8" 
        />
      </header>

      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-omantel-blue mb-4">
            Application Submitted
          </h1>
          <p className="text-gray-600 mb-8">
            Thank you for your application. You will receive a confirmation email shortly.
          </p>
          <Button 
            onClick={() => navigate('/')}
            className="bg-omantel-blue hover:bg-omantel-blue/90"
          >
            Start New Application
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationComplete;
