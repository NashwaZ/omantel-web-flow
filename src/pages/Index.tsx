
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
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">      
      <div className="absolute top-0 left-0 w-full p-4">
        <img 
          src="/lovable-uploads/17ae61e2-701d-40b7-9fef-079b70a0a6b3.png" 
          alt="Omantel Logo" 
          className="h-8" 
        />
      </div>

      <div className="w-full max-w-3xl space-y-6 text-center relative z-10 mt-12">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-omantel-blue">
            e-Visa Portal
          </h1>
        </div>

        <Card className="p-6 bg-white shadow-lg rounded-xl border-0">
          <CardContent className="p-0 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3 text-left">
                <label className="text-lg font-semibold flex items-center gap-2 text-omantel-darkBlue">
                  <Globe2 className="w-6 h-6 text-omantel-orange" />
                  Destination Country
                </label>
                <Select value={destination} onValueChange={setDestination}>
                  <SelectTrigger className="w-full h-16 text-gray-500 text-lg border border-gray-100 rounded-xl shadow-sm hover:border-omantel-orange/50 focus:border-omantel-orange focus:ring-2 focus:ring-omantel-orange/20 transition-all bg-white">
                    <SelectValue placeholder="Where are you traveling to?" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px] bg-white border border-gray-100 shadow-lg rounded-xl">
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
                  <SelectTrigger className="w-full h-16 text-gray-500 text-lg border border-gray-100 rounded-xl shadow-sm hover:border-omantel-blue/50 focus:border-omantel-blue focus:ring-2 focus:ring-omantel-blue/20 transition-all bg-white">
                    <SelectValue placeholder="What passport do you hold?" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px] bg-white border border-gray-100 shadow-lg rounded-xl">
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
                      "w-full h-16 justify-start text-left font-normal text-lg bg-white border border-gray-100 rounded-xl shadow-sm hover:border-omantel-orange/50 focus:border-omantel-orange focus:ring-2 focus:ring-omantel-orange/20 transition-all",
                      !arrivalDate && "text-gray-500"
                    )}
                  >
                    <Calendar className="mr-3 h-6 w-6 text-omantel-orange" />
                    {arrivalDate ? format(arrivalDate, "PPP") : <span>When are you traveling?</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white border border-gray-100 shadow-lg rounded-xl" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={arrivalDate}
                    onSelect={setArrivalDate}
                    initialFocus
                    disabled={(date) => date < new Date()}
                    className="rounded-md border border-gray-100 p-3"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <Button 
              onClick={handleSearch} 
              disabled={!destination || !citizenship || !arrivalDate || isLoading}
              className="w-full py-4 px-6 text-lg font-medium text-white bg-omantel-blue rounded-lg shadow-md hover:bg-omantel-blue/90 transition-all disabled:opacity-70"
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
      </div>
    </div>
  );
};

export default Index;
