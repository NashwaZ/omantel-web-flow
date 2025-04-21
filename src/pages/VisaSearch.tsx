
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
    <div className="min-h-screen bg-orange-gradient relative overflow-hidden">
      <header className="absolute top-0 left-0 w-full p-4">
        <img 
          src="/lovable-uploads/17ae61e2-701d-40b7-9fef-079b70a0a6b3.png" 
          alt="Omantel Logo" 
          className="h-8" 
        />
      </header>

      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md">
          <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-8 space-y-6 border border-orange-100">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-omantel-orange to-omantel-softOrange bg-clip-text text-transparent">
                eVisa Search
              </h2>
              <p className="text-gray-600 text-sm">Find and apply for your visa online</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Destination Country</label>
                <Select 
                  value={destination} 
                  onValueChange={setDestination}
                >
                  <SelectTrigger className="w-full h-12 bg-white border-omantel-softOrange hover:border-omantel-orange transition-colors">
                    <SelectValue placeholder="Select Destination">
                      <div className="flex items-center gap-2">
                        <Globe2 className="w-4 h-4 text-omantel-orange" />
                        <span>Select Destination</span>
                      </div>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {countries.destinations.map((country) => (
                      <SelectItem 
                        key={country.code} 
                        value={country.code}
                        className="hover:bg-orange-50 focus:bg-orange-50 cursor-pointer"
                      >
                        {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Your Citizenship</label>
                <Select 
                  value={citizenship} 
                  onValueChange={setCitizenship}
                >
                  <SelectTrigger className="w-full h-12 bg-white border-omantel-softOrange hover:border-omantel-orange transition-colors">
                    <SelectValue placeholder="Select Citizenship">
                      <div className="flex items-center gap-2">
                        <Plane className="w-4 h-4 text-omantel-orange" />
                        <span>Select Citizenship</span>
                      </div>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {countries.citizenships.map((country) => (
                      <SelectItem 
                        key={country.code} 
                        value={country.code}
                        className="hover:bg-orange-50 focus:bg-orange-50 cursor-pointer"
                      >
                        {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Arrival Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full h-12 justify-start text-left font-normal bg-white border-omantel-softOrange hover:border-omantel-orange transition-colors",
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
                className="w-full h-12 bg-omantel-orange hover:bg-omantel-orange/90 text-white transition-all duration-300 
                          shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!destination || !citizenship || !arrivalDate || isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Search Visas'
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

