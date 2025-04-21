import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { CalendarIcon, Plane, Globe2, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useNavigate } from 'react-router-dom';
import { useApplication } from '@/context/ApplicationContext';
import { countries } from '@/data/countries';

const VisaSearch: React.FC = () => {
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
    <div className="min-h-screen bg-white relative overflow-hidden">      
      <div className="absolute top-0 left-0 w-full p-6">
        <img 
          src="/lovable-uploads/17ae61e2-701d-40b7-9fef-079b70a0a6b3.png" 
          alt="Omantel Logo" 
          className="h-8" 
        />
      </div>

      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md">
          <div className="bg-white shadow-lg rounded-xl p-8 space-y-8 border border-omantel-blue/10 transition-all duration-300 hover:shadow-xl">
            <div className="text-center space-y-3">
              <h2 className="text-3xl font-bold text-omantel-darkBlue">
                eVisa Search
              </h2>
              <p className="text-omantel-gray/70 text-sm">Find and apply for your visa online</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-omantel-darkBlue">Destination Country</label>
                <Select 
                  value={destination} 
                  onValueChange={setDestination}
                >
                  <SelectTrigger className="w-full h-12 bg-white border-omantel-blue/20 hover:border-omantel-orange focus:border-omantel-blue transition-all duration-300">
                    <SelectValue placeholder="Select Destination">
                      <div className="flex items-center gap-2">
                        <Globe2 className="w-4 h-4 text-omantel-orange" />
                        <span>Select Destination</span>
                      </div>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent className="bg-white border-omantel-blue/10 max-h-[300px]">
                    {countries.destinations.map((country) => (
                      <SelectItem 
                        key={country.code} 
                        value={country.code}
                        className="hover:bg-omantel-blue/5 focus:bg-omantel-blue/5 cursor-pointer transition-colors duration-300"
                      >
                        {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-omantel-darkBlue">Your Citizenship</label>
                <Select 
                  value={citizenship} 
                  onValueChange={setCitizenship}
                >
                  <SelectTrigger className="w-full h-12 bg-white border-omantel-blue/20 hover:border-omantel-orange focus:border-omantel-blue transition-all duration-300">
                    <SelectValue placeholder="Select Citizenship">
                      <div className="flex items-center gap-2">
                        <Plane className="w-4 h-4 text-omantel-blue" />
                        <span>Select Citizenship</span>
                      </div>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent className="bg-white border-omantel-blue/10 max-h-[300px]">
                    {countries.citizenships.map((country) => (
                      <SelectItem 
                        key={country.code} 
                        value={country.code}
                        className="hover:bg-omantel-blue/5 focus:bg-omantel-blue/5 cursor-pointer transition-colors duration-300"
                      >
                        {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-omantel-darkBlue">Arrival Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full h-12 justify-start text-left font-normal bg-white border-omantel-blue/20 hover:border-omantel-orange focus:border-omantel-blue transition-all duration-300",
                        !arrivalDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 text-omantel-orange" />
                      {arrivalDate ? format(arrivalDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={arrivalDate}
                      onSelect={setArrivalDate}
                      initialFocus
                      disabled={(date) => date < new Date()}
                      className="rounded-md border border-omantel-blue/10"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <Button 
                onClick={handleSearch} 
                className={cn(
                  "w-full h-12 relative bg-omantel-blue text-white",
                  "hover:bg-omantel-blue/90 transition-all duration-300",
                  "disabled:opacity-50 disabled:cursor-not-allowed"
                )}
                disabled={!destination || !citizenship || !arrivalDate || isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <span>Search Visas</span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaSearch;
