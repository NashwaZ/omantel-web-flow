
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CodeBlock from '@/components/CodeBlock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Workflow = () => {
  const authRequestCode = `POST /api/v1/auth/token HTTP/1.1
Host: api.omantel.om
Content-Type: application/json

{
  "client_id": "YOUR_CLIENT_ID",
  "client_secret": "YOUR_CLIENT_SECRET",
  "grant_type": "client_credentials"
}`;

  const authResponseCode = `HTTP/1.1 200 OK
Content-Type: application/json

{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 3600
}`;

  const apiRequestCode = `GET /api/v1/services/status HTTP/1.1
Host: api.omantel.om
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`;

  const apiResponseCode = `HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "active",
  "service_id": "sms-001",
  "features": ["broadcast", "personalization", "scheduling"],
  "rate_limit": {
    "requests_per_minute": 60,
    "remaining": 58
  }
}`;

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-omantel-blue py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              API Workflow
            </h1>
            <p className="text-white text-opacity-90 max-w-3xl">
              This guide walks you through the typical workflow for interacting with Omantel APIs, from authentication to making requests and handling responses.
            </p>
          </div>
        </section>
        
        {/* Workflow Steps */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-omantel-darkBlue mb-8">
                API Integration Flow
              </h2>
              
              <div className="space-y-16">
                {/* Step 1 */}
                <div className="relative pl-8 border-l-2 border-omantel-blue pb-8">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-omantel-blue"></div>
                  <h3 className="text-xl font-semibold text-omantel-blue mb-4">1. Authentication</h3>
                  <p className="text-omantel-gray mb-6">
                    Before making any API calls, you need to authenticate your application. Omantel uses OAuth 2.0 for secure API authentication.
                  </p>
                  
                  <Tabs defaultValue="request">
                    <TabsList className="mb-2">
                      <TabsTrigger value="request">Request</TabsTrigger>
                      <TabsTrigger value="response">Response</TabsTrigger>
                    </TabsList>
                    <TabsContent value="request">
                      <CodeBlock 
                        code={authRequestCode} 
                        title="Authentication Request" 
                      />
                    </TabsContent>
                    <TabsContent value="response">
                      <CodeBlock 
                        code={authResponseCode} 
                        title="Authentication Response" 
                      />
                    </TabsContent>
                  </Tabs>
                  
                  <div className="bg-omantel-lightBlue rounded-lg p-4 mt-4">
                    <p className="text-sm">
                      <strong>Note:</strong> Store the access token securely. It will expire after the time specified in the expires_in field.
                    </p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative pl-8 border-l-2 border-omantel-blue pb-8">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-omantel-blue"></div>
                  <h3 className="text-xl font-semibold text-omantel-blue mb-4">2. Making API Requests</h3>
                  <p className="text-omantel-gray mb-6">
                    Once authenticated, you can make requests to the various API endpoints. Include your access token in the Authorization header.
                  </p>
                  
                  <Tabs defaultValue="request">
                    <TabsList className="mb-2">
                      <TabsTrigger value="request">Request</TabsTrigger>
                      <TabsTrigger value="response">Response</TabsTrigger>
                    </TabsList>
                    <TabsContent value="request">
                      <CodeBlock 
                        code={apiRequestCode} 
                        title="API Request" 
                      />
                    </TabsContent>
                    <TabsContent value="response">
                      <CodeBlock 
                        code={apiResponseCode} 
                        title="API Response" 
                      />
                    </TabsContent>
                  </Tabs>
                </div>
                
                {/* Step 3 */}
                <div className="relative pl-8 border-l-2 border-omantel-blue pb-8">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-omantel-blue"></div>
                  <h3 className="text-xl font-semibold text-omantel-blue mb-4">3. Handling Responses</h3>
                  <p className="text-omantel-gray mb-6">
                    All API responses follow a consistent format. Success responses have a 2xx status code, while errors use appropriate 4xx or 5xx codes with descriptive messages.
                  </p>
                  
                  <h4 className="font-medium mb-2">Success Response Structure</h4>
                  <CodeBlock 
                    code={`{
  "status": "success",
  "data": {
    // Response data varies by endpoint
  }
}`} 
                    title="Success Response" 
                  />
                  
                  <h4 className="font-medium mt-6 mb-2">Error Response Structure</h4>
                  <CodeBlock 
                    code={`{
  "status": "error",
  "error": {
    "code": "INVALID_PARAMETER",
    "message": "The provided parameter is invalid",
    "details": {
      "field": "phone_number",
      "issue": "Format must be international format starting with +"
    }
  }
}`} 
                    title="Error Response" 
                  />
                </div>
                
                {/* Step 4 */}
                <div className="relative pl-8">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-omantel-blue"></div>
                  <h3 className="text-xl font-semibold text-omantel-blue mb-4">4. Rate Limiting</h3>
                  <p className="text-omantel-gray mb-6">
                    Omantel APIs implement rate limiting to ensure fair usage. Rate limit information is included in the API responses.
                  </p>
                  
                  <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                    <h4 className="font-medium mb-4">Rate Limit Headers</h4>
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b">
                          <th className="pb-2">Header</th>
                          <th className="pb-2">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 pr-4 font-mono text-sm">X-RateLimit-Limit</td>
                          <td>Maximum number of requests allowed in the current time window</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 pr-4 font-mono text-sm">X-RateLimit-Remaining</td>
                          <td>Number of requests remaining in the current time window</td>
                        </tr>
                        <tr>
                          <td className="py-3 pr-4 font-mono text-sm">X-RateLimit-Reset</td>
                          <td>Timestamp when the rate limit window resets (in Unix time)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="bg-omantel-lightBlue rounded-lg p-4">
                    <p className="text-sm">
                      <strong>Best Practice:</strong> Implement exponential backoff retry logic when dealing with rate limit errors.
                    </p>
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

export default Workflow;
