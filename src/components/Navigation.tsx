
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-omantel-blue mr-8">API Documentation</h1>
          
          <nav className="hidden md:flex space-x-6">
            <Link 
              to="/" 
              className={`font-medium ${isActive('/') ? 'text-omantel-blue' : 'text-omantel-darkBlue hover:text-omantel-blue'} transition-colors`}
            >
              Home
            </Link>
            <Link 
              to="/workflow" 
              className={`font-medium ${isActive('/workflow') ? 'text-omantel-blue' : 'text-omantel-darkBlue hover:text-omantel-blue'} transition-colors`}
            >
              API Workflow
            </Link>
            <Link 
              to="/documentation" 
              className={`font-medium ${isActive('/documentation') ? 'text-omantel-blue' : 'text-omantel-darkBlue hover:text-omantel-blue'} transition-colors`}
            >
              Documentation
            </Link>
          </nav>
        </div>

        <div className="flex items-center">
          <img 
            src="/lovable-uploads/17ae61e2-701d-40b7-9fef-079b70a0a6b3.png" 
            alt="Omantel Logo" 
            className="h-8 md:h-10" 
          />
          
          <Button 
            variant="ghost"
            size="icon"
            className="ml-4 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`font-medium ${isActive('/') ? 'text-omantel-blue' : 'text-omantel-darkBlue'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/workflow" 
              className={`font-medium ${isActive('/workflow') ? 'text-omantel-blue' : 'text-omantel-darkBlue'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              API Workflow
            </Link>
            <Link 
              to="/documentation" 
              className={`font-medium ${isActive('/documentation') ? 'text-omantel-blue' : 'text-omantel-darkBlue'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Documentation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
