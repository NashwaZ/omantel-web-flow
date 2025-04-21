
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Download, ArrowRight, Mail } from 'lucide-react';

const ApplicationComplete: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-omantel-lightBlue/30 to-white flex flex-col relative">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-omantel-blue/5 to-omantel-lightBlue/5 rounded-full blur-3xl transform rotate-12" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tr from-omantel-orange/5 to-omantel-softOrange/5 rounded-full blur-3xl transform -rotate-12" />
      
      <header className="w-full p-6 bg-white/70 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto">
          <img 
            src="/lovable-uploads/17ae61e2-701d-40b7-9fef-079b70a0a6b3.png" 
            alt="Omantel Logo" 
            className="h-10" 
          />
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl w-full bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-gray-50 overflow-hidden">
          <div className="bg-gradient-to-r from-omantel-blue to-omantel-orange h-2"></div>
          
          <div className="p-10 md:p-16 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-50 rounded-full mb-8">
              <CheckCircle className="h-12 w-12 text-green-500" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-omantel-darkBlue mb-4">
              Application Submitted Successfully
            </h1>
            
            <p className="text-omantel-gray text-lg mb-8 max-w-lg mx-auto">
              Thank you for your application. We have sent a confirmation email with your application details and next steps.
            </p>
            
            <div className="bg-omantel-lightBlue/50 rounded-xl p-6 mb-8 max-w-md mx-auto">
              <h2 className="font-semibold text-omantel-darkBlue mb-2">Application Reference</h2>
              <p className="text-2xl font-mono font-bold text-omantel-blue mb-3">VISA-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</p>
              <p className="text-sm text-omantel-gray">Please keep this reference number for future inquiries</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Button 
                variant="outline"
                className="h-12 text-omantel-blue hover:text-omantel-blue/90 border-omantel-blue/30 hover:border-omantel-blue/60 hover:bg-omantel-lightBlue/30 transition-all flex items-center justify-center gap-2"
              >
                <Download className="h-4 w-4" />
                <span>Download Receipt</span>
              </Button>
              
              <Button 
                variant="outline"
                className="h-12 text-omantel-orange hover:text-omantel-orange/90 border-omantel-orange/30 hover:border-omantel-orange/60 hover:bg-omantel-softOrange/30 transition-all flex items-center justify-center gap-2"
              >
                <Mail className="h-4 w-4" />
                <span>Email Documents</span>
              </Button>
            </div>
            
            <div className="mt-10">
              <Button 
                onClick={() => navigate('/')}
                className="bg-gradient-to-r from-omantel-blue to-omantel-orange text-white h-12 px-8 hover:shadow-lg transition-all flex items-center justify-center gap-2 mx-auto"
              >
                <span>Start New Application</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-white/70 backdrop-blur-sm border-t border-gray-100 py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-omantel-gray text-sm">
            &copy; {new Date().getFullYear()} Omantel eVisa Services. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ApplicationComplete;
