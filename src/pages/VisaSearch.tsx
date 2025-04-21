
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { toast } from 'sonner';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { cn } from '@/lib/utils';
import { useApplication } from '@/context/ApplicationContext';
import { ApiService } from '@/services/api';
import LoadingSpinner from '@/components/LoadingSpinner';

// Mock data for countries
const countries = [
  { value: 'oman', label: 'Oman' },
  { value: 'uae', label: 'United Arab Emirates' },
  { value: 'saudi', label: 'Saudi Arabia' },
  { value: 'qatar', label: 'Qatar' },
  { value: 'kuwait', label: 'Kuwait' },
  { value: 'bahrain', label: 'Bahrain' },
  { value: 'india', label: 'India' },
  { value: 'pakistan', label: 'Pakistan' },
  { value: 'turkey', label: 'Turkey' },
  { value: 'usa', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'germany', label: 'Germany' },
  { value: 'france', label: 'France' },
  { value: 'spain', label: 'Spain' },
  { value: 'italy', label: 'Italy' },
];

interface VisaSearchForm {
  destination: string;
  citizenship: string;
  arrivalDate: Date;
}

const VisaSearch: React.FC = () => {
  const navigate = useNavigate();
  const { setVisaSearch, setIsLoading, isLoading } = useApplication();
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const form = useForm<VisaSearchForm>({
    defaultValues: {
      destination: '',
      citizenship: '',
      arrivalDate: new Date(),
    },
  });

  const onSubmit = async (data: VisaSearchForm) => {
    try {
      setIsLoading(true);
      setFormSubmitted(true);
      
      // Format date to DD-MM-YYYY
      const formattedDate = format(data.arrivalDate, 'dd-MM-yyyy');
      
      // Save search criteria to context
      setVisaSearch({
        destination: data.destination,
        citizenship: data.citizenship,
        arrivalDate: formattedDate,
      });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, this would be a call to the API
      // const response = await ApiService.findVisaPrograms({
      //   destination: data.destination,
      //   citizenship: data.citizenship,
      //   arrivalDate: formattedDate,
      // });
      
      navigate('/visa-results');
    } catch (error) {
      toast.error('Failed to search for visa programs. Please try again.');
      setFormSubmitted(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow omantel-gradient-bg py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-omantel-blue text-white rounded-t-lg">
                <CardTitle className="text-2xl font-semibold">eVisa Application</CardTitle>
              </CardHeader>
              
              <CardContent className="p-8">
                <h2 className="text-xl font-semibold mb-6 text-gray-800">Search Available Visa Programs</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="destination"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium">Destination Country</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                              disabled={formSubmitted}
                            >
                              <FormControl>
                                <SelectTrigger className="omantel-select">
                                  <SelectValue placeholder="Select destination country" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-white">
                                {countries.map((country) => (
                                  <SelectItem key={country.value} value={country.value}>
                                    {country.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="citizenship"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium">Citizenship</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                              disabled={formSubmitted}
                            >
                              <FormControl>
                                <SelectTrigger className="omantel-select">
                                  <SelectValue placeholder="Select your citizenship" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-white">
                                {countries.map((country) => (
                                  <SelectItem key={country.value} value={country.value}>
                                    {country.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="arrivalDate"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel className="text-gray-700 font-medium">Planned Arrival Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full pl-3 text-left font-normal omantel-select",
                                    !field.value && "text-muted-foreground"
                                  )}
                                  disabled={formSubmitted}
                                >
                                  {field.value ? (
                                    format(field.value, "dd MMM yyyy")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-white" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date()}
                                initialFocus
                                className="pointer-events-auto"
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        className="w-full bg-omantel-orange hover:bg-omantel-orange/90 text-white py-3 rounded-lg font-medium text-lg flex items-center justify-center"
                        disabled={formSubmitted}
                      >
                        {isLoading ? (
                          <>
                            <LoadingSpinner size="sm" className="mr-2" />
                            Searching...
                          </>
                        ) : (
                          'Search Visa Programs'
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VisaSearch;
