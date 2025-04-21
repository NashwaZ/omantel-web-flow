
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
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

// Form validation schema
const applicationSchema = z.object({
  first_name: z.string().min(2, { message: 'First name is required' }),
  last_name: z.string().min(2, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Please enter a valid email' }),
  phone: z.string().min(8, { message: 'Phone number is required' }),
  country_code: z.string().min(2, { message: 'Country code is required' }),
  building: z.string().min(1, { message: 'Building number/name is required' }),
  floor: z.coerce.number().optional(),
  apartment: z.string().optional(),
  street: z.string().min(1, { message: 'Street address is required' }),
  city: z.string().min(1, { message: 'City is required' }),
  state: z.string().min(1, { message: 'State/Province is required' }),
  country: z.string().min(1, { message: 'Country is required' }),
});

type ApplicationFormValues = z.infer<typeof applicationSchema>;

const VisaApplication: React.FC = () => {
  const navigate = useNavigate();
  const { 
    visaSearch, 
    selectedVisa, 
    setTraveller, 
    isLoading, 
    setIsLoading,
    setApplicationComplete
  } = useApplication();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      country_code: '+968', // Oman default
      building: '',
      floor: undefined,
      apartment: '',
      street: '',
      city: '',
      state: '',
      country: 'oman',
    },
  });

  useEffect(() => {
    if (!selectedVisa || !visaSearch) {
      navigate('/visa-search');
    }
  }, [selectedVisa, visaSearch, navigate]);

  const onSubmit = async (data: ApplicationFormValues) => {
    try {
      setIsLoading(true);
      setFormSubmitted(true);

      // Save traveller data to context
      setTraveller({
        ...data,
        locale: 'en'
      });

      // In a real app, this would create and update the traveller:
      // First create the traveller if they don't exist
      // const createTravellerResponse = await ApiService.createTraveller({
      //   email: data.email,
      //   first_name: data.first_name,
      //   last_name: data.last_name,
      //   locale: 'en'
      // });
      
      // Then update with additional information
      // const travellerId = 123; // Would come from createTravellerResponse
      // const updateTravellerResponse = await ApiService.updateTraveller({
      //   ...data,
      //   id: travellerId
      // });

      // Then create order
      // if (selectedVisa) {
      //   const orderResponse = await ApiService.createIframeOrder({
      //     vendor_key: "vendor_key_here",
      //     reference_no: `OMT-${Date.now()}`,
      //     description: selectedVisa.name,
      //     program_id: selectedVisa.id,
      //     quantity: 1,
      //     first_name: data.first_name,
      //     last_name: data.last_name,
      //     email: data.email,
      //     fee: selectedVisa.price,
      //     arrival: visaSearch.citizenship,
      //     destination: visaSearch.destination,
      //     commision: "0",
      //     commision_type: "flat rate"
      //   });
      // }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mark application as complete
      setApplicationComplete(true);
      
      // Redirect to success page
      navigate('/application-complete');
    } catch (error) {
      toast.error('Failed to submit your application. Please try again.');
      setFormSubmitted(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    navigate('/visa-results');
  };

  if (!selectedVisa) {
    return null; // Redirect will happen in useEffect
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow omantel-gradient-bg py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-omantel-blue text-white rounded-t-lg">
                <CardTitle className="text-2xl font-semibold">Visa Application Form</CardTitle>
                {selectedVisa && (
                  <CardDescription className="text-white/90">
                    {selectedVisa.name} - {selectedVisa.price} {selectedVisa.currency}
                  </CardDescription>
                )}
              </CardHeader>
              
              <CardContent className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-omantel-darkBlue border-b pb-2">Personal Information</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="first_name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 font-medium">First Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter your first name" 
                                  className="omantel-input" 
                                  {...field} 
                                  disabled={formSubmitted}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="last_name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 font-medium">Last Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter your last name" 
                                  className="omantel-input" 
                                  {...field} 
                                  disabled={formSubmitted}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 font-medium">Email Address</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter your email" 
                                  type="email"
                                  className="omantel-input" 
                                  {...field} 
                                  disabled={formSubmitted}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="grid grid-cols-4 gap-2">
                          <FormField
                            control={form.control}
                            name="country_code"
                            render={({ field }) => (
                              <FormItem className="col-span-1">
                                <FormLabel className="text-gray-700 font-medium">Code</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="+968" 
                                    className="omantel-input" 
                                    {...field} 
                                    disabled={formSubmitted}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem className="col-span-3">
                                <FormLabel className="text-gray-700 font-medium">Phone Number</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="Enter your phone number" 
                                    className="omantel-input" 
                                    {...field} 
                                    disabled={formSubmitted}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6 pt-4">
                      <h3 className="text-lg font-semibold text-omantel-darkBlue border-b pb-2">Address Information</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <FormField
                          control={form.control}
                          name="building"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 font-medium">Building</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Building name/number" 
                                  className="omantel-input" 
                                  {...field} 
                                  disabled={formSubmitted}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="floor"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 font-medium">Floor (Optional)</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Floor number" 
                                  type="number"
                                  className="omantel-input" 
                                  {...field} 
                                  disabled={formSubmitted}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="apartment"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 font-medium">Apartment (Optional)</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Apartment number" 
                                  className="omantel-input" 
                                  {...field} 
                                  disabled={formSubmitted}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="street"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium">Street Address</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your street address" 
                                className="omantel-input" 
                                {...field} 
                                disabled={formSubmitted}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 font-medium">City</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="City" 
                                  className="omantel-input" 
                                  {...field} 
                                  disabled={formSubmitted}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="state"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 font-medium">State/Province</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="State or province" 
                                  className="omantel-input" 
                                  {...field} 
                                  disabled={formSubmitted}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 font-medium">Country</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                                disabled={formSubmitted}
                              >
                                <FormControl>
                                  <SelectTrigger className="omantel-select">
                                    <SelectValue placeholder="Select country" />
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
                    </div>

                    <div className="pt-6 space-y-4">
                      <Button 
                        type="submit" 
                        className="w-full bg-omantel-orange hover:bg-omantel-orange/90 text-white py-3 rounded-lg font-medium text-lg flex items-center justify-center h-auto"
                        disabled={formSubmitted}
                      >
                        {isLoading ? (
                          <>
                            <LoadingSpinner size="sm" className="mr-2" />
                            Submitting Application...
                          </>
                        ) : (
                          'Submit Application'
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
              
              <CardFooter className="bg-gray-50 flex justify-between py-4">
                <Button 
                  variant="outline" 
                  className="border-omantel-blue text-omantel-blue hover:bg-omantel-blue/10"
                  onClick={handleBack}
                  disabled={formSubmitted}
                >
                  Back to Results
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

export default VisaApplication;
