
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useApplication } from '@/context/ApplicationContext';
import LoadingSpinner from '@/components/LoadingSpinner';

// Mock data for visa programs
const mockVisaPrograms = [
  {
    id: '26de1243-25df-4611-ac27-c75a80c2f950',
    name: 'Tourist eVisa - Single Entry',
    description: 'Valid for 30 days from date of entry',
    price: '87',
    currency: 'USD',
    duration: '30 days',
    processing_time: '3-5 business days'
  },
  {
    id: '38fe2354-36eg-5722-bd38-d86b91d3f061',
    name: 'Business eVisa - Single Entry',
    description: 'Valid for 60 days from date of entry',
    price: '120',
    currency: 'USD',
    duration: '60 days',
    processing_time: '3-5 business days'
  },
  {
    id: '49gf3465-47fh-6833-ce49-e97ca2e4g172',
    name: 'Tourist eVisa - Multiple Entry',
    description: 'Valid for 90 days from date of entry',
    price: '150',
    currency: 'USD',
    duration: '90 days',
    processing_time: '5-7 business days'
  }
];

const VisaResults: React.FC = () => {
  const navigate = useNavigate();
  const { 
    visaSearch, 
    setVisaPrograms, 
    setSelectedVisa, 
    isLoading, 
    setIsLoading 
  } = useApplication();
  const [localLoading, setLocalLoading] = useState(true);

  useEffect(() => {
    if (!visaSearch) {
      navigate('/visa-search');
      return;
    }

    const fetchVisaPrograms = async () => {
      try {
        setLocalLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1200));
        
        // In a real app, this would be:
        // const response = await ApiService.findVisaPrograms(visaSearch);
        // setVisaPrograms(response.result);
        
        // For demo, we'll use mock data
        setVisaPrograms(mockVisaPrograms);
      } catch (error) {
        toast.error('Failed to fetch visa programs. Please try again.');
        navigate('/visa-search');
      } finally {
        setLocalLoading(false);
      }
    };

    fetchVisaPrograms();
  }, [visaSearch, navigate, setVisaPrograms]);

  const handleApply = (visa: any) => {
    setSelectedVisa(visa);
    navigate('/visa-application');
  };

  const handleBack = () => {
    navigate('/visa-search');
  };

  if (localLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navigation />
        
        <main className="flex-grow omantel-gradient-bg py-12 flex items-center justify-center">
          <div className="text-center">
            <LoadingSpinner size="lg" className="mb-4" />
            <h2 className="text-xl font-semibold text-omantel-darkBlue">Loading Visa Programs...</h2>
            <p className="text-omantel-gray mt-2">Please wait while we find available visas for your trip.</p>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow omantel-gradient-bg py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-omantel-blue text-white rounded-t-lg">
                <CardTitle className="text-2xl font-semibold">Available Visa Programs</CardTitle>
                <CardDescription className="text-white/90">
                  {visaSearch && (
                    <>
                      For travel from <span className="font-semibold">{visaSearch.citizenship.toUpperCase()}</span> to <span className="font-semibold">{visaSearch.destination.toUpperCase()}</span> on <span className="font-semibold">{visaSearch.arrivalDate}</span>
                    </>
                  )}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="space-y-6">
                  {mockVisaPrograms.length > 0 ? (
                    mockVisaPrograms.map((visa) => (
                      <Card key={visa.id} className="overflow-hidden border border-gray-200 hover:border-omantel-orange transition-colors">
                        <CardHeader className="bg-gray-50 py-4">
                          <div className="flex flex-wrap justify-between items-center">
                            <CardTitle className="text-lg text-omantel-darkBlue">{visa.name}</CardTitle>
                            <Badge className="bg-omantel-orange">{visa.duration}</Badge>
                          </div>
                          <CardDescription>{visa.description}</CardDescription>
                        </CardHeader>
                        
                        <CardContent className="py-4">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <p className="text-sm text-gray-500">Processing Time</p>
                              <p className="font-medium">{visa.processing_time}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Price</p>
                              <p className="font-medium text-omantel-blue">
                                {visa.price} {visa.currency}
                              </p>
                            </div>
                            <div className="md:text-right">
                              <Button 
                                className="bg-omantel-orange hover:bg-omantel-orange/90 text-white w-full md:w-auto"
                                onClick={() => handleApply(visa)}
                              >
                                Apply
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <h3 className="text-xl font-medium text-gray-700 mb-2">No Visa Programs Found</h3>
                      <p className="text-gray-500 mb-6">We couldn't find any visa programs matching your criteria.</p>
                      <Button 
                        className="bg-omantel-blue hover:bg-omantel-blue/90 text-white"
                        onClick={handleBack}
                      >
                        Modify Search
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="bg-gray-50 flex justify-between py-4">
                <Button 
                  variant="outline" 
                  className="border-omantel-blue text-omantel-blue hover:bg-omantel-blue/10"
                  onClick={handleBack}
                >
                  Back to Search
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VisaResults;
