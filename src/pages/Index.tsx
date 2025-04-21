
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import LoadingSpinner from '@/components/LoadingSpinner';
import { ArrowRight, CheckCircle2, Shield, Clock, Search, Globe, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      
      <main className="flex-grow">
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-omantel-lightBlue/30">
                  <LoadingSpinner variant="mixed" size="sm" />
                  <span className="font-medium text-omantel-blue">Smart eVisa Processing</span>
                </div>

                <div className="space-y-6">
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-omantel-blue via-omantel-blue/80 to-omantel-orange">
                      Your Gateway to
                      <br />
                      Seamless Travel
                    </span>
                  </h1>
                  <p className="text-xl text-omantel-gray max-w-lg leading-relaxed">
                    Experience a revolutionary approach to visa applications with our intelligent processing system.
                  </p>
                </div>

                <Card className="p-6 bg-white/50 backdrop-blur-sm border-2 border-omantel-lightBlue/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="space-y-6 p-0">
                    <div className="space-y-4">
                      <div className="group">
                        <label className="block text-sm font-medium text-omantel-darkBlue mb-2 flex items-center gap-2">
                          <Globe className="h-4 w-4 text-omantel-orange" />
                          Destination
                        </label>
                        <select className="w-full p-3 rounded-lg border-2 border-omantel-lightBlue/30 focus:border-omantel-orange transition-colors duration-200 outline-none bg-white">
                          <option value="">Select your destination</option>
                          <option value="oman">Oman</option>
                        </select>
                      </div>
                      
                      <div className="group">
                        <label className="block text-sm font-medium text-omantel-darkBlue mb-2 flex items-center gap-2">
                          <Users className="h-4 w-4 text-omantel-blue" />
                          Citizenship
                        </label>
                        <select className="w-full p-3 rounded-lg border-2 border-omantel-lightBlue/30 focus:border-omantel-orange transition-colors duration-200 outline-none bg-white">
                          <option value="">Select your citizenship</option>
                          <option value="us">United States</option>
                        </select>
                      </div>
                    </div>

                    <Link to="/visa-search" className="block">
                      <Button 
                        size="lg"
                        className="w-full group bg-omantel-orange text-white hover:bg-omantel-orange/90 
                          transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <Search className="mr-2 h-5 w-5" />
                        Search Available Visas
                        <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-3 gap-6">
                  <div className="flex items-center gap-3 text-omantel-gray group hover:text-omantel-orange transition-colors">
                    <CheckCircle2 className="text-omantel-orange h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span>Fast Process</span>
                  </div>
                  <div className="flex items-center gap-3 text-omantel-gray group hover:text-omantel-blue transition-colors">
                    <Shield className="text-omantel-blue h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span>Secure</span>
                  </div>
                  <div className="flex items-center gap-3 text-omantel-gray group hover:text-omantel-orange transition-colors">
                    <Clock className="text-omantel-orange h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:block relative">
                <div className="relative z-10">
                  <LoadingSpinner variant="mixed" size="lg" className="absolute -top-6 -left-6 opacity-30" />
                  <LoadingSpinner variant="blue" size="lg" className="absolute -bottom-6 -right-6 opacity-30" />
                  <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 border-4 border-white">
                    <img 
                      src="public/lovable-uploads/af505e57-0a9f-4410-a265-89b872a6b76d.png" 
                      alt="Visa Application Process" 
                      className="w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-omantel-blue/20 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
