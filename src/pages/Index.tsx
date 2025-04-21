
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
                  Omantel API Documentation
                </h1>
                <p className="text-lg text-omantel-gray mb-8">
                  Leverage Omantel's powerful APIs to integrate telecommunications features into your applications.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/workflow">
                    <Button className="omantel-button">
                      Explore API Workflow
                    </Button>
                  </Link>
                  <Link to="/documentation">
                    <Button variant="outline" className="border-omantel-blue text-omantel-blue hover:bg-omantel-blue hover:text-white">
                      View Documentation
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="hidden md:block">
                <img 
                  src="https://via.placeholder.com/600x400?text=API+Illustration" 
                  alt="API Integration" 
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
              Key Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="omantel-card">
                <CardHeader>
                  <CardTitle className="text-omantel-blue">Easy Integration</CardTitle>
                  <CardDescription>Simple to integrate with your existing systems</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-omantel-gray">
                    Our RESTful APIs are designed to be developer-friendly with comprehensive documentation and examples.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="omantel-card">
                <CardHeader>
                  <CardTitle className="text-omantel-blue">Secure Authentication</CardTitle>
                  <CardDescription>Enterprise-grade security standards</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-omantel-gray">
                    All API requests are protected with OAuth 2.0 authentication to ensure your data remains secure.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="omantel-card">
                <CardHeader>
                  <CardTitle className="text-omantel-blue">Extensive Capabilities</CardTitle>
                  <CardDescription>Wide range of telecommunications services</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-omantel-gray">
                    From SMS messaging to call handling and data services, our APIs cover all your telecom integration needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Getting Started Section */}
        <section className="bg-omantel-lightBlue py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-omantel-darkBlue mb-6">
                  Getting Started is Easy
                </h2>
                <ol className="space-y-4 mb-8">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-omantel-blue text-white flex items-center justify-center font-bold">1</span>
                    <div>
                      <h3 className="font-semibold text-lg">Register for API access</h3>
                      <p className="text-omantel-gray">Create an account on our developer portal</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-omantel-blue text-white flex items-center justify-center font-bold">2</span>
                    <div>
                      <h3 className="font-semibold text-lg">Generate API keys</h3>
                      <p className="text-omantel-gray">Create and manage your authentication credentials</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-omantel-blue text-white flex items-center justify-center font-bold">3</span>
                    <div>
                      <h3 className="font-semibold text-lg">Explore the documentation</h3>
                      <p className="text-omantel-gray">Learn how to integrate our APIs into your applications</p>
                    </div>
                  </li>
                </ol>
                <Link to="/documentation">
                  <Button className="omantel-button">
                    Start Integration
                  </Button>
                </Link>
              </div>
              
              <div className="hidden md:block">
                <img 
                  src="https://via.placeholder.com/600x400?text=Getting+Started" 
                  alt="Getting Started" 
                  className="rounded-lg shadow-lg"
                />
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
