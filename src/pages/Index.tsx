import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import LoadingSpinner from '@/components/LoadingSpinner';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <LoadingSpinner variant="mixed" size="sm" />
                  <span className="text-omantel-blue font-medium">Simplified Visa Process</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-omantel-orange">eVisa</span>{' '}
                  <span className="text-omantel-blue">Services</span>
                </h1>
                <p className="text-lg text-omantel-gray mb-8 leading-relaxed">
                  Apply for eVisas online with a simple and streamlined process. 
                  Get travel-ready with Omantel's eVisa application service.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/visa-search">
                    <Button 
                      className="bg-omantel-blue text-white hover:bg-omantel-blue/90 
                        transition-all duration-300 transform hover:scale-105"
                    >
                      Apply for eVisa
                    </Button>
                  </Link>
                  <Link to="/workflow">
                    <Button 
                      variant="outline" 
                      className="border-omantel-orange text-omantel-orange 
                        hover:bg-omantel-orange hover:text-white transition-all duration-300"
                    >
                      How It Works
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="hidden md:flex justify-center items-center">
                <div className="relative">
                  <img 
                    src="https://via.placeholder.com/600x400?text=eVisa+Service" 
                    alt="eVisa Service" 
                    className="rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute -top-4 -right-4">
                    <LoadingSpinner variant="orange" size="lg" />
                  </div>
                  <div className="absolute -bottom-4 -left-4">
                    <LoadingSpinner variant="blue" size="lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-omantel-blue">Why Choose</span>{' '}
              <span className="text-omantel-orange">Our eVisa Service</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="omantel-card">
                <CardHeader>
                  <CardTitle className="text-omantel-orange">Fast Processing</CardTitle>
                  <CardDescription>Quick visa decisions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-omantel-gray">
                    Our streamlined process ensures your visa application is processed quickly, so you can plan your trip with confidence.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="omantel-card">
                <CardHeader>
                  <CardTitle className="text-omantel-orange">Easy Application</CardTitle>
                  <CardDescription>Simple online process</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-omantel-gray">
                    Our user-friendly interface makes applying for a visa straightforward, with clear instructions at every step.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="omantel-card">
                <CardHeader>
                  <CardTitle className="text-omantel-orange">Secure Platform</CardTitle>
                  <CardDescription>Protected personal information</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-omantel-gray">
                    Your data is encrypted and securely stored, ensuring your personal information remains confidential throughout the process.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-omantel-blue">How It</span>{' '}
              <span className="text-omantel-orange">Works</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-omantel-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="text-xl font-semibold mb-2">Search</h3>
                <p className="text-omantel-gray">Enter your destination, citizenship, and travel dates</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-omantel-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="text-xl font-semibold mb-2">Select</h3>
                <p className="text-omantel-gray">Choose the visa type that fits your travel needs</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-omantel-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="text-xl font-semibold mb-2">Apply</h3>
                <p className="text-omantel-gray">Complete the application form with your details</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-omantel-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="text-xl font-semibold mb-2">Receive</h3>
                <p className="text-omantel-gray">Get your eVisa delivered to your email</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/visa-search">
                <Button 
                  className="bg-omantel-blue text-white hover:bg-omantel-blue/90 
                    text-lg py-6 px-8 transform hover:scale-105 transition-all duration-300"
                >
                  Start Your Application
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
