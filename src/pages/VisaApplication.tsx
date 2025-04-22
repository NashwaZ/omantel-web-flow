import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useApplication } from '@/context/ApplicationContext';
import { ArrowLeft, Loader2, User, Mail, Phone, MapPin, Building, Map, Flag, Mail as PostalIcon } from 'lucide-react';

const formSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone_number: z.string().min(1, "Phone number is required"),
  building_name: z.string().min(1, "Building name is required"),
  street_address: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  country: z.string().min(1, "Country is required"),
  postal_code: z.string().min(1, "Postal code is required")
});

type FormValues = z.infer<typeof formSchema>;

const VisaApplication: React.FC = () => {
  const navigate = useNavigate();
  const { visaSearch, selectedVisa } = useApplication();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      building_name: '',
      street_address: '',
      city: '',
      state: '',
      country: '',
      postal_code: ''
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    navigate('/application-complete');
  };

  const handleBack = () => {
    navigate('/visa-results');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-omantel-lightBlue/20 to-white relative p-4">
      <header className="sticky top-0 left-0 w-full p-4 bg-white/80 backdrop-blur-md border-b border-gray-100 z-30">
        <div className="flex items-center gap-6 max-w-3xl mx-auto">
          <img 
            src="/lovable-uploads/17ae61e2-701d-40b7-9fef-079b70a0a6b3.png" 
            alt="Omantel Logo" 
            className="h-6" 
          />
          <h1 className="text-lg font-bold text-omantel-darkBlue hidden md:block">eVisa Application</h1>
        </div>
      </header>

      <div className="container max-w-3xl mx-auto py-8">
        <Button 
          variant="ghost" 
          className="mb-6 text-omantel-blue hover:text-omantel-blue/80 transition-colors p-0 flex items-center gap-2 group"
          onClick={handleBack}
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Visa Options</span>
        </Button>

        {selectedVisa && (
          <div className="mb-6 bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-gray-100 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm text-omantel-gray">Selected Visa</p>
                <h2 className="font-semibold text-omantel-darkBlue">{selectedVisa.name}</h2>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-sm text-omantel-gray">Duration</p>
                  <p className="font-semibold text-omantel-darkBlue">{selectedVisa.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-omantel-gray">Price</p>
                  <p className="font-semibold text-omantel-blue">{selectedVisa.price} {selectedVisa.currency}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-md rounded-xl overflow-hidden">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-xl font-bold text-omantel-darkBlue">
              Application Information
            </CardTitle>
            <CardDescription className="text-omantel-gray">
              Please provide your personal and address details for the visa application
            </CardDescription>
          </CardHeader>

          <CardContent className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="first_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-omantel-darkBlue flex items-center gap-2">
                            <User className="h-4 w-4 text-omantel-blue" />
                            First Name
                          </FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="h-12 transition-all duration-200 hover:border-omantel-blue focus:border-omantel-blue focus:ring-2 focus:ring-omantel-blue/20 rounded-lg shadow-sm"
                              placeholder="Enter your first name"
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
                          <FormLabel className="text-omantel-darkBlue flex items-center gap-2">
                            <User className="h-4 w-4 text-omantel-blue" />
                            Last Name
                          </FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="h-12 transition-all duration-200 hover:border-omantel-blue focus:border-omantel-blue focus:ring-2 focus:ring-omantel-blue/20 rounded-lg shadow-sm"
                              placeholder="Enter your last name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-omantel-darkBlue flex items-center gap-2">
                            <Mail className="h-4 w-4 text-omantel-orange" />
                            Email Address
                          </FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              {...field} 
                              className="h-12 transition-all duration-200 hover:border-omantel-orange focus:border-omantel-orange focus:ring-2 focus:ring-omantel-orange/20 rounded-lg shadow-sm"
                              placeholder="Enter your email address"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone_number"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-omantel-darkBlue flex items-center gap-2">
                            <Phone className="h-4 w-4 text-omantel-orange" />
                            Phone Number
                          </FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="h-12 transition-all duration-200 hover:border-omantel-orange focus:border-omantel-orange focus:ring-2 focus:ring-omantel-orange/20 rounded-lg shadow-sm"
                              placeholder="Enter your phone number"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div>
                    <FormField
                      control={form.control}
                      name="building_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-omantel-darkBlue flex items-center gap-2">
                            <Building className="h-4 w-4 text-omantel-blue" />
                            Building Name/Number
                          </FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="h-12 transition-all duration-200 hover:border-omantel-blue focus:border-omantel-blue focus:ring-2 focus:ring-omantel-blue/20 rounded-lg shadow-sm"
                              placeholder="Enter building name or number"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="street_address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-omantel-darkBlue flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-omantel-blue" />
                            Street Address
                          </FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="h-12 transition-all duration-200 hover:border-omantel-blue focus:border-omantel-blue focus:ring-2 focus:ring-omantel-blue/20 rounded-lg shadow-sm"
                              placeholder="Enter your street address"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-omantel-darkBlue flex items-center gap-2">
                            <Map className="h-4 w-4 text-omantel-orange" />
                            City
                          </FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="h-12 transition-all duration-200 hover:border-omantel-orange focus:border-omantel-orange focus:ring-2 focus:ring-omantel-orange/20 rounded-lg shadow-sm"
                              placeholder="Enter your city"
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
                          <FormLabel className="text-omantel-darkBlue flex items-center gap-2">
                            <Map className="h-4 w-4 text-omantel-orange" />
                            State/Province
                          </FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="h-12 transition-all duration-200 hover:border-omantel-orange focus:border-omantel-orange focus:ring-2 focus:ring-omantel-orange/20 rounded-lg shadow-sm"
                              placeholder="Enter your state or province"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-omantel-darkBlue flex items-center gap-2">
                            <Flag className="h-4 w-4 text-omantel-blue" />
                            Country
                          </FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="h-12 transition-all duration-200 hover:border-omantel-blue focus:border-omantel-blue focus:ring-2 focus:ring-omantel-blue/20 rounded-lg shadow-sm"
                              placeholder="Enter your country"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="postal_code"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-omantel-darkBlue flex items-center gap-2">
                            <PostalIcon className="h-4 w-4 text-omantel-blue" />
                            Postal Code
                          </FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="h-12 transition-all duration-200 hover:border-omantel-blue focus:border-omantel-blue focus:ring-2 focus:ring-omantel-blue/20 rounded-lg shadow-sm"
                              placeholder="Enter your postal code"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="pt-4">
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-omantel-blue hover:bg-omantel-blue/90 text-white transition-all duration-300 disabled:opacity-50 rounded-lg shadow-md"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Processing Application...</span>
                        </div>
                      ) : (
                        'Submit Application'
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VisaApplication;
