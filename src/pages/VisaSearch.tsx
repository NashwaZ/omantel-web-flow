
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useNavigate } from 'react-router-dom';
import { useApplication } from '@/context/ApplicationContext';

const VisaSearch: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [citizenship, setCitizenship] = useState('');
  const [arrivalDate, setArrivalDate] = useState<Date | undefined>();
  const navigate = useNavigate();
  const { setVisaSearch } = useApplication();

  const handleSearch = () => {
    if (destination && citizenship && arrivalDate) {
      setVisaSearch({
        destination,
        citizenship,
        arrivalDate: format(arrivalDate, 'PP')
      });
      navigate('/visa-results');
    }
  };

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
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-omantel-blue">
            Visa Search
          </h2>

          <div className="space-y-4">
            <Select 
              value={destination} 
              onValueChange={setDestination}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Destination" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="UAE">UAE</SelectItem>
                <SelectItem value="Saudi Arabia">Saudi Arabia</SelectItem>
                <SelectItem value="Oman">Oman</SelectItem>
              </SelectContent>
            </Select>

            <Select 
              value={citizenship} 
              onValueChange={setCitizenship}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Citizenship" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Indian">Indian</SelectItem>
                <SelectItem value="Pakistani">Pakistani</SelectItem>
                <SelectItem value="Bangladeshi">Bangladeshi</SelectItem>
              </SelectContent>
            </Select>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !arrivalDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {arrivalDate ? format(arrivalDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={arrivalDate}
                  onSelect={setArrivalDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <Button 
              onClick={handleSearch} 
              className="w-full bg-omantel-blue hover:bg-omantel-blue/90"
              disabled={!destination || !citizenship || !arrivalDate}
            >
              Search Visas
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaSearch;
