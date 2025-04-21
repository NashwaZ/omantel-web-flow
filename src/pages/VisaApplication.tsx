
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
import { Loader2 } from 'lucide-react';

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
  const { visaSearch } = useApplication();
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
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    navigate('/application-complete');
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6 relative">
      <div className="absolute top-0 left-0 w-full p-6 bg-white border-b border-gray-100">
        <img 
          src="/lovable-uploads/17ae61e2-701d-40b7-9fef-079b70a0a6b3.png" 
          alt="Omantel Logo" 
          className="h-8" 
        />
      </div>

      <div className="container max-w-4xl mx-auto pt-24">
        <Card className="border-none shadow-lg transition-all duration-300 hover:shadow-xl">
          <CardHeader className="space-y-1 pb-8">
            <CardTitle className="text-2xl font-medium text-omantel-blue">
              Visa Application Form
            </CardTitle>
            <CardDescription className="text-omantel-gray">
              Please fill in your personal details for the visa application
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-omantel-darkBlue">First Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="h-12 transition-all duration-200 hover:border-omantel-orange focus:border-omantel-orange"
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
                        <FormLabel className="text-omantel-darkBlue">Last Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="h-12 transition-all duration-200 hover:border-omantel-orange focus:border-omantel-orange"
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
                        <FormLabel className="text-omantel-darkBlue">Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            {...field} 
                            className="h-12 transition-all duration-200 hover:border-omantel-orange focus:border-omantel-orange"
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
                        <FormLabel className="text-omantel-darkBlue">Phone Number</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="h-12 transition-all duration-200 hover:border-omantel-orange focus:border-omantel-orange"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="building_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-omantel-darkBlue">Building Name/Number</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="h-12 transition-all duration-200 hover:border-omantel-orange focus:border-omantel-orange"
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
                      <FormLabel className="text-omantel-darkBlue">Street Address</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="h-12 transition-all duration-200 hover:border-omantel-orange focus:border-omantel-orange"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-omantel-darkBlue">City</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="h-12 transition-all duration-200 hover:border-omantel-orange focus:border-omantel-orange"
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
                        <FormLabel className="text-omantel-darkBlue">State</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="h-12 transition-all duration-200 hover:border-omantel-orange focus:border-omantel-orange"
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
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-omantel-darkBlue">Country</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="h-12 transition-all duration-200 hover:border-omantel-orange focus:border-omantel-orange"
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
                        <FormLabel className="text-omantel-darkBlue">Postal Code</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="h-12 transition-all duration-200 hover:border-omantel-orange focus:border-omantel-orange"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="pt-6">
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-omantel-blue hover:bg-omantel-blue/90 text-white transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </Button>
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
