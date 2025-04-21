
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { useApplication } from '@/context/ApplicationContext';

const ApplicationComplete: React.FC = () => {
  const navigate = useNavigate();
  const { applicationComplete, traveller, selectedVisa } = useApplication();

  useEffect(() => {
    if (!applicationComplete) {
      navigate('/visa-search');
    }
  }, [applicationComplete, navigate]);

  const handleNewApplication = () => {
    navigate('/visa-search');
  };

  if (!applicationComplete || !traveller || !selectedVisa) {
    return null; // Redirect will happen in useEffect
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow omantel-gradient-bg py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader className="bg-omantel-blue text-white rounded-t-lg pb-10">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                    <CheckCircle className="h-12 w-12 text-omantel-orange" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-semibold">Application Submitted Successfully</CardTitle>
              </CardHeader>
              
              <CardContent className="p-8 -mt-6">
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h3 className="text-lg font-semibold text-omantel-darkBlue mb-4">Application Summary</h3>
                  
                  <div className="space-y-4 text-left">
                    <div className="grid grid-cols-2 gap-2">
                      <p className="text-gray-500">Application ID:</p>
                      <p className="font-medium">OMT-{Math.floor(Math.random() * 1000000)}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <p className="text-gray-500">Visa Type:</p>
                      <p className="font-medium">{selectedVisa.name}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <p className="text-gray-500">Applicant:</p>
                      <p className="font-medium">{traveller.first_name} {traveller.last_name}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <p className="text-gray-500">Email:</p>
                      <p className="font-medium">{traveller.email}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <p className="text-gray-500">Processing Time:</p>
                      <p className="font-medium">{selectedVisa.processing_time}</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-gray-600 mb-6">
                    Thank you for submitting your visa application. You will receive a confirmation email shortly with further instructions.
                  </p>
                  
                  <Button 
                    className="bg-omantel-orange hover:bg-omantel-orange/90 text-white"
                    onClick={handleNewApplication}
                  >
                    Start New Application
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApplicationComplete;
