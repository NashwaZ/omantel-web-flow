
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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-omantel-orange via-white to-omantel-blue">
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
      
      <div className="absolute top-0 left-0 w-full p-4">
        <img 
          src="/lovable-uploads/17ae61e2-701d-40b7-9fef-079b70a0a6b3.png" 
          alt="Omantel Logo" 
          className="h-8" 
        />
      </div>

      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md z-10">
          <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-8 space-y-6 border border-white/50 transform hover:scale-[1.01] transition-all duration-300">
            <div className="text-center space-y-3">
              <div className="relative inline-block group">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-omantel-orange to-omantel-blue bg-clip-text text-transparent">
                  eVisa Search
                </h2>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-omantel-orange to-omantel-blue rounded-full transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </div>
              <p className="text-omantel-darkBlue/70 text-sm">Find and apply for your visa online</p>
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-omantel-darkBlue">Destination Country</label>
                <Select 
                  value={destination} 
                  onValueChange={setDestination}
                >
                  <SelectTrigger className="w-full h-12 bg-white/80 border-omantel-softOrange hover:border-omantel-orange focus:border-omantel-blue transition-all duration-300 shadow-sm">
                    <SelectValue placeholder="Select Destination">
                      <div className="flex items-center gap-2">
                        <Globe2 className="w-4 h-4 text-omantel-orange" />
                        <span>Select Destination</span>
                      </div>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent className="bg-white/95 backdrop-blur-md border-omantel-softOrange max-h-[300px]">
                    {countries.destinations.map((country) => (
                      <SelectItem 
                        key={country.code} 
                        value={country.code}
                        className="hover:bg-gradient-to-r hover:from-omantel-orange/10 hover:to-omantel-blue/10 focus:bg-gradient-to-r focus:from-omantel-orange/10 focus:to-omantel-blue/10 cursor-pointer transition-colors duration-300"
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
                  <SelectTrigger className="w-full h-12 bg-white/80 border-omantel-softOrange hover:border-omantel-orange focus:border-omantel-blue transition-all duration-300 shadow-sm">
                    <SelectValue placeholder="Select Citizenship">
                      <div className="flex items-center gap-2">
                        <Plane className="w-4 h-4 text-omantel-blue" />
                        <span>Select Citizenship</span>
                      </div>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent className="bg-white/95 backdrop-blur-md border-omantel-softOrange max-h-[300px]">
                    {countries.citizenships.map((country) => (
                      <SelectItem 
                        key={country.code} 
                        value={country.code}
                        className="hover:bg-gradient-to-r hover:from-omantel-orange/10 hover:to-omantel-blue/10 focus:bg-gradient-to-r focus:from-omantel-orange/10 focus:to-omantel-blue/10 cursor-pointer transition-colors duration-300"
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
                        "w-full h-12 justify-start text-left font-normal bg-white/80 border-omantel-softOrange hover:border-omantel-orange focus:border-omantel-blue transition-all duration-300 shadow-sm",
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
                      className="rounded-md border border-omantel-softOrange"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <Button 
                onClick={handleSearch} 
                className={cn(
                  "w-full h-12 relative overflow-hidden transition-all duration-500",
                  "bg-gradient-to-r from-omantel-orange to-omantel-blue hover:scale-[1.02]",
                  "text-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed",
                  "before:absolute before:inset-0 before:bg-gradient-to-r before:from-omantel-blue before:to-omantel-orange",
                  "before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500",
                  "disabled:before:opacity-0"
                )}
                disabled={!destination || !citizenship || !arrivalDate || isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <span className="relative z-10">Search Visas</span>
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
