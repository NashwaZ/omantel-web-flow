
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CodeBlock from '@/components/CodeBlock';

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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="px-4 h-16 flex items-center">
          <img 
            src="/lovable-uploads/17ae61e2-701d-40b7-9fef-079b70a0a6b3.png" 
            alt="Omantel Logo" 
            className="h-8"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-omantel-blue mb-8">
            API Workflow
          </h1>
          
          <div className="space-y-12">
            {/* Step 1: Authentication */}
            <section className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-semibold text-omantel-blue mb-4">1. Authentication</h2>
              <p className="text-gray-600 mb-6">
                To access the Omantel API endpoints, first authenticate your application using OAuth 2.0.
              </p>
              
              <Tabs defaultValue="request">
                <TabsList>
                  <TabsTrigger value="request">Request</TabsTrigger>
                  <TabsTrigger value="response">Response</TabsTrigger>
                </TabsList>
                <TabsContent value="request">
                  <CodeBlock code={authRequestCode} title="Authentication Request" />
                </TabsContent>
                <TabsContent value="response">
                  <CodeBlock code={authResponseCode} title="Authentication Response" />
                </TabsContent>
              </Tabs>
            </section>

            {/* Step 2: Making API Requests */}
            <section className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-semibold text-omantel-blue mb-4">2. Making API Requests</h2>
              <p className="text-gray-600 mb-6">
                Once authenticated, include the access token in the Authorization header for all API requests.
              </p>
              
              <Tabs defaultValue="request">
                <TabsList>
                  <TabsTrigger value="request">Request</TabsTrigger>
                  <TabsTrigger value="response">Response</TabsTrigger>
                </TabsList>
                <TabsContent value="request">
                  <CodeBlock code={apiRequestCode} title="API Request" />
                </TabsContent>
                <TabsContent value="response">
                  <CodeBlock code={apiResponseCode} title="API Response" />
                </TabsContent>
              </Tabs>
            </section>

            {/* Step 3: Error Handling */}
            <section className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-semibold text-omantel-blue mb-4">3. Error Handling</h2>
              <p className="text-gray-600 mb-6">
                All API responses use standard HTTP status codes. Errors include detailed messages for debugging.
              </p>
              
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
            </section>

            {/* Step 4: Rate Limiting */}
            <section className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-semibold text-omantel-blue mb-4">4. Rate Limiting</h2>
              <p className="text-gray-600 mb-6">
                API requests are rate-limited to ensure fair usage. Monitor the rate limit headers in responses.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium mb-2">Rate Limit Headers</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><code>X-RateLimit-Limit</code>: Maximum requests per window</li>
                  <li><code>X-RateLimit-Remaining</code>: Remaining requests in current window</li>
                  <li><code>X-RateLimit-Reset</code>: Time when the rate limit resets</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Workflow;
