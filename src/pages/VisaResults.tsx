import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useApplication } from '@/context/ApplicationContext';
import LoadingSpinner from '@/components/LoadingSpinner';
import { ArrowLeft, Calendar, Clock, CreditCard, Check, ChevronRight } from 'lucide-react';

// Mock data for visa programs
const mockVisaPrograms = [
  {
    id: '26de1243-25df-4611-ac27-c75a80c2f950',
    name: 'Tourist eVisa - Single Entry',
    description: 'Valid for 30 days from date of entry',
    price: '87',
    currency: 'USD',
    duration: '30 days',
    processing_time: '3-5 business days',
    features: ['Single entry only', 'Tourism activities', 'Visit family and friends']
  },
  {
    id: '38fe2354-36eg-5722-bd38-d86b91d3f061',
    name: 'Business eVisa - Single Entry',
    description: 'Valid for 60 days from date of entry',
    price: '120',
    currency: 'USD',
    duration: '60 days',
    processing_time: '3-5 business days',
    features: ['Single entry only', 'Business meetings', 'Conferences and events', 'Professional activities']
  },
  {
    id: '49gf3465-47fh-6833-ce49-e97ca2e4g172',
    name: 'Tourist eVisa - Multiple Entry',
    description: 'Valid for 90 days from date of entry',
    price: '150',
    currency: 'USD',
    duration: '90 days',
    processing_time: '5-7 business days',
    features: ['Multiple entries allowed', 'Tourism activities', 'Visit family and friends', 'Longer stay']
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
    navigate('/');
  };

  if (localLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="text-center max-w-md px-8 py-12 bg-white rounded-3xl shadow-lg border border-gray-100">
          <LoadingSpinner size="lg" className="mb-6 text-omantel-blue" />
          <h2 className="text-2xl font-bold text-omantel-darkBlue mb-3">Finding Your Visa Options</h2>
          <p className="text-omantel-gray">We're searching for the perfect visa options for your journey. This will only take a moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="absolute top-0 left-0 w-full p-6">
        <img 
          src="/lovable-uploads/17ae61e2-701d-40b7-9fef-079b70a0a6b3.png" 
          alt="Omantel Logo" 
          className="h-10 cursor-pointer hover:opacity-80 transition-opacity"
        />
      </div>
      
      <div className="max-w-5xl mx-auto pt-24">
        <Button 
          variant="ghost" 
          className="mb-8 text-omantel-blue hover:text-omantel-blue/80 transition-colors p-0 flex items-center gap-2 group"
          onClick={handleBack}
        >
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Search</span>
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-omantel-darkBlue mb-2">Available Visa Options</h1>
          <p className="text-omantel-gray text-lg">
            {visaSearch && (
              <>
                For travel from <span className="font-semibold text-omantel-darkBlue">{visaSearch.citizenship.toUpperCase()}</span> to <span className="font-semibold text-omantel-darkBlue">{visaSearch.destination.toUpperCase()}</span> on <span className="font-semibold text-omantel-darkBlue">{visaSearch.arrivalDate}</span>
              </>
            )}
          </p>
        </div>

        <div className="space-y-6">
          {mockVisaPrograms.length > 0 ? (
            mockVisaPrograms.map((visa) => (
              <Card 
                key={visa.id} 
                className="overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
                  <div className="lg:col-span-3 p-8">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <Badge className="bg-omantel-blue hover:bg-omantel-blue/90 mb-2">
                            {visa.duration}
                          </Badge>
                          <h2 className="text-2xl font-bold text-omantel-darkBlue">{visa.name}</h2>
                        </div>
                        <div className="text-2xl font-bold text-omantel-orange">
                          {visa.price} <span className="text-sm">{visa.currency}</span>
                        </div>
                      </div>
                      
                      <p className="text-omantel-gray">{visa.description}</p>
                      
                      <div className="pt-3">
                        <h3 className="text-sm font-semibold text-omantel-darkBlue mb-2">Visa Features:</h3>
                        <ul className="space-y-2">
                          {visa.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-omantel-gray">
                              <Check className="h-4 w-4 text-omantel-blue flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gray-100">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-omantel-blue" />
                        <div>
                          <p className="text-sm text-omantel-gray">Valid for</p>
                          <p className="font-semibold text-omantel-darkBlue">{visa.duration}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-omantel-orange" />
                        <div>
                          <p className="text-sm text-omantel-gray">Processing Time</p>
                          <p className="font-semibold text-omantel-darkBlue">{visa.processing_time}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <CreditCard className="h-5 w-5 text-omantel-blue" />
                        <div>
                          <p className="text-sm text-omantel-gray">Price</p>
                          <p className="font-semibold text-omantel-darkBlue">{visa.price} {visa.currency}</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      className="mt-6 bg-omantel-blue hover:bg-omantel-blue/90 text-white w-full py-6 rounded-xl shadow-md transition-all"
                      onClick={() => handleApply(visa)}
                    >
                      <span>Apply Now</span>
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <Card className="border border-gray-100 shadow-lg bg-white rounded-2xl p-8 text-center">
              <div className="py-8">
                <h3 className="text-2xl font-bold text-omantel-darkBlue mb-4">No Visa Programs Found</h3>
                <p className="text-omantel-gray mb-8 max-w-md mx-auto">We couldn't find any visa programs matching your criteria. Please try a different destination or citizenship.</p>
                <Button 
                  className="bg-omantel-blue hover:bg-omantel-blue/90 text-white transition-colors px-8 py-6 rounded-xl"
                  onClick={handleBack}
                >
                  Modify Search
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisaResults;
