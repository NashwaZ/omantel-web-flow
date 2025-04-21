
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { useApplication } from '@/context/ApplicationContext';

const ApplicationComplete: React.FC = () => {
  const navigate = useNavigate();
  const { visaSearch, selectedVisa } = useApplication();

  const handleStartOver = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="px-4 h-16 flex items-center">
          <img 
            src="/lovable-uploads/17ae61e2-701d-40b7-9fef-079b70a0a6b3.png" 
            alt="Omantel Logo" 
            className="h-8"
          />
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-omantel-blue text-white rounded-t-lg flex flex-col items-center">
              <div className="bg-white rounded-full p-2 mb-4">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>
              <CardTitle className="text-2xl font-semibold text-center">Application Complete</CardTitle>
            </CardHeader>
            
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <p className="text-xl text-gray-700">
                  Thank you for your visa application
                </p>
                <p className="text-gray-500 mt-2">
                  Your application has been submitted successfully
                </p>
              </div>

              {(visaSearch || selectedVisa) && (
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="font-medium text-lg mb-4 text-gray-800">Application Details</h3>
                  
                  {visaSearch && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-500">Destination</p>
                        <p className="font-medium">{visaSearch.destination}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Citizenship</p>
                        <p className="font-medium">{visaSearch.citizenship}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Planned Arrival</p>
                        <p className="font-medium">{visaSearch.arrivalDate}</p>
                      </div>
                    </div>
                  )}

                  {selectedVisa && (
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Visa Type</p>
                          <p className="font-medium">{selectedVisa.name}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Duration</p>
                          <p className="font-medium">{selectedVisa.duration}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Price</p>
                          <p className="font-medium">{selectedVisa.price} {selectedVisa.currency}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Processing Time</p>
                          <p className="font-medium">{selectedVisa.processing_time}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="text-center">
                <p className="mb-6 text-gray-500">
                  You will receive a confirmation email with further instructions shortly.
                </p>
                <Button 
                  onClick={handleStartOver}
                  className="bg-omantel-orange hover:bg-omantel-orange/90 px-8 py-2"
                >
                  Start New Application
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ApplicationComplete;
