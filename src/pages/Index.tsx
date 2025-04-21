
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-3xl space-y-6 text-center">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-[#0000FF]">
            eVisa Application Service
          </h1>
          <p className="text-xl text-gray-600">
            Check your visa eligibility and apply online in minutes
          </p>
        </div>

        <Card className="p-8 bg-white shadow-lg rounded-2xl">
          <div className="space-y-6">
            <div className="space-y-3 text-left">
              <label className="text-lg font-semibold">Destination Country</label>
              <Select>
                <SelectTrigger className="w-full h-14 text-gray-500 text-lg border border-gray-200 rounded-lg">
                  <SelectValue placeholder="Where are you traveling to?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="oman">Oman</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3 text-left">
              <label className="text-lg font-semibold">Your Citizenship</label>
              <Select>
                <SelectTrigger className="w-full h-14 text-gray-500 text-lg border border-gray-200 rounded-lg">
                  <SelectValue placeholder="What passport do you hold?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3 text-left">
              <label className="text-lg font-semibold">Travel Date</label>
              <div className="relative">
                <Input 
                  type="text"
                  placeholder="When are you traveling?"
                  className="w-full h-14 pl-12 text-lg text-gray-500 border border-gray-200 rounded-lg"
                />
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <Link 
              to="/visa-search"
              className="block w-full mt-6"
            >
              <button className="w-full py-4 px-6 text-lg font-medium text-white bg-[#FFA07A] hover:bg-[#FF9066] rounded-full transition-colors">
                Check Visa Requirements
              </button>
            </Link>
          </div>
        </Card>

        <p className="text-gray-600 mt-6">
          Powered by Omantel eVisa Services. Fast, secure, and reliable visa processing.
        </p>
      </div>
    </div>
  );
};

export default Index;
