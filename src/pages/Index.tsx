
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import LoadingSpinner from '@/components/LoadingSpinner';
import { ArrowRight, CheckCircle2, Shield, Clock } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-omantel-lightBlue/30 text-omantel-blue">
                  <LoadingSpinner variant="mixed" size="sm" />
                  <span className="font-medium">Simplified eVisa Process</span>
                </div>

                <div className="space-y-6">
                  <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                    <span className="text-omantel-blue">Quick & Easy</span>
                    <br />
                    <span className="text-omantel-orange">Visa Applications</span>
                  </h1>
                  <p className="text-xl text-omantel-gray max-w-lg leading-relaxed">
                    Get your travel documents sorted with our streamlined online visa application process. Fast, secure, and hassle-free.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link to="/visa-search">
                    <Button 
                      size="lg"
                      className="group bg-omantel-blue text-white hover:bg-omantel-blue/90 
                        transition-all duration-300 transform hover:-translate-y-1"
                    >
                      Start Application
                      <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/workflow">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-2 border-omantel-orange text-omantel-orange 
                        hover:bg-omantel-orange hover:text-white transition-all duration-300"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="flex items-center gap-3 text-omantel-gray">
                    <CheckCircle2 className="text-omantel-orange h-5 w-5" />
                    <span>Fast Process</span>
                  </div>
                  <div className="flex items-center gap-3 text-omantel-gray">
                    <Shield className="text-omantel-blue h-5 w-5" />
                    <span>Secure</span>
                  </div>
                  <div className="flex items-center gap-3 text-omantel-gray">
                    <Clock className="text-omantel-orange h-5 w-5" />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:block relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                    alt="Visa Application Process" 
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-omantel-blue/20 to-transparent" />
                </div>
                
                <div className="absolute -top-8 -right-8 z-0">
                  <LoadingSpinner variant="orange" size="lg" className="opacity-50" />
                </div>
                <div className="absolute -bottom-8 -left-8 z-0">
                  <LoadingSpinner variant="blue" size="lg" className="opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl font-bold">
                <span className="text-omantel-blue">Why Choose</span>{' '}
                <span className="text-omantel-orange">Our Service</span>
              </h2>
              <p className="text-omantel-gray text-lg">
                Experience a seamless visa application process with our cutting-edge platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-none bg-white shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-omantel-lightBlue flex items-center justify-center mb-6">
                    <LoadingSpinner variant="blue" size="sm" />
                  </div>
                  <h3 className="text-xl font-semibold text-omantel-darkBlue group-hover:text-omantel-blue transition-colors">
                    Fast Processing
                  </h3>
                  <p className="text-omantel-gray">
                    Quick visa decisions with our streamlined digital process
                  </p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-none bg-white shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-omantel-softOrange/30 flex items-center justify-center mb-6">
                    <LoadingSpinner variant="orange" size="sm" />
                  </div>
                  <h3 className="text-xl font-semibold text-omantel-darkBlue group-hover:text-omantel-orange transition-colors">
                    Easy Application
                  </h3>
                  <p className="text-omantel-gray">
                    User-friendly interface with step-by-step guidance
                  </p>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-none bg-white shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-omantel-lightBlue flex items-center justify-center mb-6">
                    <LoadingSpinner variant="mixed" size="sm" />
                  </div>
                  <h3 className="text-xl font-semibold text-omantel-darkBlue group-hover:text-omantel-blue transition-colors">
                    Secure Platform
                  </h3>
                  <p className="text-omantel-gray">
                    State-of-the-art encryption for your data protection
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Steps Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-omantel-blue">Simple</span>{' '}
                <span className="text-omantel-orange">Steps</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="relative text-center group">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-6 transition-all duration-300">
                    <span className="text-3xl font-bold bg-gradient-to-r from-omantel-blue to-omantel-orange bg-clip-text text-transparent">
                      {step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-omantel-darkBlue">
                    {step === 1 && "Search"}
                    {step === 2 && "Select"}
                    {step === 3 && "Apply"}
                    {step === 4 && "Receive"}
                  </h3>
                  <p className="text-omantel-gray px-4">
                    {step === 1 && "Enter your destination and travel details"}
                    {step === 2 && "Choose the right visa for your needs"}
                    {step === 3 && "Complete your application online"}
                    {step === 4 && "Get your eVisa in your email"}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <Link to="/visa-search">
                <Button 
                  size="lg"
                  className="bg-omantel-blue text-white hover:bg-omantel-blue/90 
                    transition-all duration-300 transform hover:scale-105 px-8"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
