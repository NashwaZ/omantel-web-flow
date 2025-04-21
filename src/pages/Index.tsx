
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="omantel-gradient-bg py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-omantel-darkBlue mb-6">
                  Omantel eVisa Services
                </h1>
                <p className="text-lg text-omantel-gray mb-8">
                  Apply for eVisas online with a simple and streamlined process. Get travel-ready with Omantel's eVisa application service.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/visa-search">
                    <Button className="omantel-button">
                      Apply for eVisa
                    </Button>
                  </Link>
                  <Link to="/workflow">
                    <Button variant="outline" className="border-omantel-blue text-omantel-blue hover:bg-omantel-blue hover:text-white">
                      How It Works
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="hidden md:block">
                <img 
                  src="https://via.placeholder.com/600x400?text=eVisa+Service" 
                  alt="eVisa Service" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-omantel-darkBlue mb-12">
              Why Choose Our eVisa Service
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
        <section className="bg-omantel-lightBlue py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-omantel-darkBlue mb-12">
              How It Works
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
                <Button className="omantel-button text-lg py-6 px-8">
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
