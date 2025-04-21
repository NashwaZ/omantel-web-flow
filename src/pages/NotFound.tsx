
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FileSearch, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-omantel-lightBlue/30 to-white flex flex-col">
      <header className="w-full p-6 bg-white/70 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto">
          <img 
            src="/lovable-uploads/17ae61e2-701d-40b7-9fef-079b70a0a6b3.png" 
            alt="Omantel Logo" 
            className="h-10" 
          />
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-lg w-full text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 mb-8 bg-omantel-lightBlue/50 rounded-full">
            <FileSearch className="h-12 w-12 text-omantel-blue" />
          </div>
          
          <h1 className="text-5xl font-bold text-omantel-darkBlue mb-4">404</h1>
          <p className="text-xl text-omantel-gray mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          
          <Button 
            onClick={() => navigate('/')} 
            className="bg-omantel-blue hover:bg-omantel-blue/90 text-white px-8 h-12 transition-all"
          >
            <Home className="mr-2 h-5 w-5" />
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
