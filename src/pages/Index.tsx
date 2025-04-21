
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Calendar, MapPin, Globe2, Plane } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EEF4FF] to-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-omantel-softOrange/20 to-omantel-orange/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-omantel-blue/10 to-omantel-lightBlue/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      
      {/* Logo */}
      <div className="absolute top-0 left-0 w-full p-6">
        <img 
          src="/lovable-uploads/17ae61e2-701d-40b7-9fef-079b70a0a6b3.png" 
          alt="Omantel Logo" 
          className="h-8 hover:opacity-80 transition-opacity"
        />
      </div>

      <div className="w-full max-w-3xl space-y-8 text-center relative z-10">
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-omantel-blue to-omantel-orange bg-clip-text text-transparent">
            eVisa Application Service
          </h1>
          <p className="text-xl text-gray-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Check your visa eligibility and apply online in minutes
          </p>
        </div>

        <Card className="p-8 bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border border-gray-100/50 hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="space-y-6">
            <div className="space-y-3 text-left">
              <label className="text-lg font-semibold flex items-center gap-2 text-omantel-darkBlue">
                <Globe2 className="w-5 h-5 text-omantel-orange" />
                Destination Country
              </label>
              <Select>
                <SelectTrigger className="w-full h-14 text-gray-500 text-lg border border-gray-200 rounded-lg hover:border-omantel-orange/50 transition-colors">
                  <SelectValue placeholder="Where are you traveling to?" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  <SelectItem value="oman">Oman</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3 text-left">
              <label className="text-lg font-semibold flex items-center gap-2 text-omantel-darkBlue">
                <Plane className="w-5 h-5 text-omantel-blue" />
                Your Citizenship
              </label>
              <Select>
                <SelectTrigger className="w-full h-14 text-gray-500 text-lg border border-gray-200 rounded-lg hover:border-omantel-blue/50 transition-colors">
                  <SelectValue placeholder="What passport do you hold?" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  <SelectItem value="us">United States</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3 text-left">
              <label className="text-lg font-semibold flex items-center gap-2 text-omantel-darkBlue">
                <Calendar className="w-5 h-5 text-omantel-orange" />
                Travel Date
              </label>
              <div className="relative">
                <input 
                  type="text"
                  placeholder="When are you traveling?"
                  className="w-full h-14 pl-12 text-lg text-gray-500 border border-gray-200 rounded-lg hover:border-omantel-orange/50 focus:border-omantel-orange focus:ring-2 focus:ring-omantel-orange/20 transition-all"
                />
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-omantel-orange" />
              </div>
            </div>

            <Link 
              to="/visa-search"
              className="block w-full mt-6"
            >
              <button 
                className="w-full py-4 px-6 text-lg font-medium text-white bg-gradient-to-r from-omantel-blue to-omantel-orange rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-omantel-orange/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                Check Visa Requirements
              </button>
            </Link>
          </div>
        </Card>

        <p className="text-gray-600 mt-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Powered by Omantel eVisa Services. Fast, secure, and reliable visa processing.
        </p>
      </div>
    </div>
  );
};

export default Index;
