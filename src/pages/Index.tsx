
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Globe2, Plane, Loader2 } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useApplication } from '@/context/ApplicationContext';
import { countries } from '@/data/countries';

const Index = () => {
  const [destination, setDestination] = useState('');
  const [citizenship, setCitizenship] = useState('');
  const [arrivalDate, setArrivalDate] = useState<Date | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setVisaSearch } = useApplication();

  const handleSearch = () => {
    if (destination && citizenship && arrivalDate) {
      setIsLoading(true);
      setTimeout(() => {
        setVisaSearch({
          destination,
          citizenship,
          arrivalDate: format(arrivalDate, 'PP')
        });
        navigate('/visa-results');
      }, 800);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-omantel-lightBlue to-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-omantel-orange/10 to-omantel-softOrange/10 rounded-full blur-3xl transform rotate-12" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tr from-omantel-blue/10 to-omantel-lightBlue/10 rounded-full blur-3xl transform -rotate-12" />
      <div className="absolute top-1/2 right-0 h-80 w-80 bg-omantel-softOrange/5 rounded-full blur-3xl transform -translate-y-1/2 translate-x-1/3" />
      <div className="absolute top-1/2 left-0 h-80 w-80 bg-omantel-blue/5 rounded-full blur-3xl transform -translate-y-1/2 -translate-x-1/3" />
      
      {/* Logo and Header */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center">
        <img 
          src="/lovable-uploads/17ae61e2-701d-40b7-9fef-079b70a0a6b3.png" 
          alt="Omantel Logo" 
          className="h-10 hover:opacity-80 transition-opacity animate-fade-in cursor-pointer"
        />
        <div className="flex gap-4">
          <Button variant="ghost" className="text-omantel-darkBlue hover:text-omantel-blue transition-colors">
            Help
          </Button>
          <Button variant="ghost" className="text-omantel-darkBlue hover:text-omantel-blue transition-colors">
            Contact
          </Button>
        </div>
      </div>

      <div className="w-full max-w-4xl space-y-8 text-center relative z-10 mt-16">
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-omantel-blue via-omantel-darkBlue to-omantel-orange bg-clip-text text-transparent">
            eVisa Application Portal
          </h1>
          <p className="text-xl text-gray-600 animate-fade-in max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Check your visa eligibility and apply online in minutes with our secure and streamlined process.
          </p>
        </div>

        <Card className="p-10 bg-white/70 backdrop-blur-md shadow-xl rounded-3xl border-0 hover:shadow-2xl transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <CardContent className="p-0 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3 text-left">
                <label className="text-lg font-semibold flex items-center gap-2 text-omantel-darkBlue">
                  <Globe2 className="w-6 h-6 text-omantel-orange" />
                  Destination Country
                </label>
                <Select value={destination} onValueChange={setDestination}>
                  <SelectTrigger className="w-full h-16 text-gray-500 text-lg border border-gray-100 rounded-xl shadow-sm hover:border-omantel-orange/50 focus:border-omantel-orange focus:ring-2 focus:ring-omantel-orange/20 transition-all bg-white/80 backdrop-blur-sm">
                    <SelectValue placeholder="Where are you traveling to?" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px] bg-white/90 backdrop-blur-md border border-gray-100 shadow-lg rounded-xl">
                    {countries.destinations.map((country) => (
                      <SelectItem 
                        key={country.code} 
                        value={country.code}
                        className="hover:bg-omantel-lightBlue/30 focus:bg-omantel-lightBlue/30 cursor-pointer transition-colors text-lg py-3"
                      >
                        {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3 text-left">
                <label className="text-lg font-semibold flex items-center gap-2 text-omantel-darkBlue">
                  <Plane className="w-6 h-6 text-omantel-blue" />
                  Your Citizenship
                </label>
                <Select value={citizenship} onValueChange={setCitizenship}>
                  <SelectTrigger className="w-full h-16 text-gray-500 text-lg border border-gray-100 rounded-xl shadow-sm hover:border-omantel-blue/50 focus:border-omantel-blue focus:ring-2 focus:ring-omantel-blue/20 transition-all bg-white/80 backdrop-blur-sm">
                    <SelectValue placeholder="What passport do you hold?" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px] bg-white/90 backdrop-blur-md border border-gray-100 shadow-lg rounded-xl">
                    {countries.citizenships.map((country) => (
                      <SelectItem 
                        key={country.code} 
                        value={country.code}
                        className="hover:bg-omantel-lightBlue/30 focus:bg-omantel-lightBlue/30 cursor-pointer transition-colors text-lg py-3"
                      >
                        {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-3 text-left">
              <label className="text-lg font-semibold flex items-center gap-2 text-omantel-darkBlue">
                <Calendar className="w-6 h-6 text-omantel-orange" />
                Planned Arrival Date
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full h-16 justify-start text-left font-normal text-lg bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl shadow-sm hover:border-omantel-orange/50 focus:border-omantel-orange focus:ring-2 focus:ring-omantel-orange/20 transition-all",
                      !arrivalDate && "text-gray-500"
                    )}
                  >
                    <Calendar className="mr-3 h-6 w-6 text-omantel-orange" />
                    {arrivalDate ? format(arrivalDate, "PPP") : <span>When are you traveling?</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white/90 backdrop-blur-md border border-gray-100 shadow-lg rounded-xl" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={arrivalDate}
                    onSelect={setArrivalDate}
                    initialFocus
                    disabled={(date) => date < new Date()}
                    className="rounded-md border border-gray-100 p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <Button 
              onClick={handleSearch} 
              disabled={!destination || !citizenship || !arrivalDate || isLoading}
              className="w-full py-6 px-8 text-xl font-medium text-white bg-gradient-to-r from-omantel-blue to-omantel-orange rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Processing...</span>
                </div>
              ) : (
                <span>Check Visa Requirements</span>
              )}
            </Button>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
            <div className="bg-omantel-lightBlue/50 rounded-full p-4 mb-4">
              <Globe2 className="w-8 h-8 text-omantel-blue" />
            </div>
            <h3 className="text-lg font-semibold text-omantel-darkBlue mb-2">190+ Countries</h3>
            <p className="text-gray-600">Support for travelers from around the world</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
            <div className="bg-omantel-softOrange/50 rounded-full p-4 mb-4">
              <Calendar className="w-8 h-8 text-omantel-orange" />
            </div>
            <h3 className="text-lg font-semibold text-omantel-darkBlue mb-2">Fast Processing</h3>
            <p className="text-gray-600">Get your visa in as little as 24 hours</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
            <div className="bg-omantel-lightBlue/50 rounded-full p-4 mb-4">
              <Plane className="w-8 h-8 text-omantel-blue" />
            </div>
            <h3 className="text-lg font-semibold text-omantel-darkBlue mb-2">Easy Application</h3>
            <p className="text-gray-600">Simple online process with no paperwork</p>
          </div>
        </div>

        <p className="text-gray-500 mt-12 text-sm animate-fade-in" style={{ animationDelay: '0.8s' }}>
          Powered by Omantel eVisa Services • Fast, Secure, and Reliable Visa Processing
        </p>
      </div>
    </div>
  );
};

export default Index;
