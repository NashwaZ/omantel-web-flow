
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CodeBlock from '@/components/CodeBlock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const smsEndpointCode = `POST /api/v1/sms/send HTTP/1.1
Host: api.omantel.om
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN

{
  "to": "+96812345678",
  "message": "Your verification code is 123456",
  "sender_id": "Omantel"
}`;

  const smsResponseCode = `HTTP/1.1 200 OK
Content-Type: application/json

{
  "message_id": "msg_123456789",
  "status": "sent",
  "segments": 1,
  "created_at": "2023-09-15T14:30:45Z"
}`;

  const usageEndpointCode = `GET /api/v1/account/usage HTTP/1.1
Host: api.omantel.om
Authorization: Bearer YOUR_ACCESS_TOKEN`;

  const usageResponseCode = `HTTP/1.1 200 OK
Content-Type: application/json

{
  "period": {
    "start": "2023-09-01T00:00:00Z",
    "end": "2023-09-30T23:59:59Z"
  },
  "services": {
    "sms": {
      "count": 1250,
      "cost": 25.00,
      "currency": "OMR"
    },
    "voice": {
      "minutes": 320,
      "cost": 64.00,
      "currency": "OMR"
    }
  },
  "total_cost": 89.00,
  "currency": "OMR"
}`;

  const errorHandlingCode = `{
  "status": "error",
  "error": {
    "code": "INVALID_CREDENTIAL",
    "message": "The provided credentials are invalid",
    "request_id": "req_abcdef123456"
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
              API Documentation
            </h1>
            <p className="text-white text-opacity-90 max-w-3xl">
              Comprehensive documentation for Omantel's APIs. Learn how to integrate our telecommunications services into your applications.
            </p>
          </div>
        </section>
        
        {/* Documentation Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar */}
              <aside className="w-full lg:w-64 flex-shrink-0">
                <div className="sticky top-24 bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <div className="p-4 bg-omantel-lightBlue border-b border-gray-200">
                    <h2 className="font-medium text-omantel-darkBlue">Contents</h2>
                  </div>
                  <nav className="p-2">
                    <ul className="space-y-1">
                      <li>
                        <button 
                          onClick={() => setActiveSection('introduction')}
                          className={`w-full text-left px-3 py-2 rounded ${activeSection === 'introduction' ? 'bg-omantel-blue bg-opacity-10 text-omantel-blue' : 'hover:bg-gray-100'}`}
                        >
                          Introduction
                        </button>
                      </li>
                      <li>
                        <button 
                          onClick={() => setActiveSection('authentication')}
                          className={`w-full text-left px-3 py-2 rounded ${activeSection === 'authentication' ? 'bg-omantel-blue bg-opacity-10 text-omantel-blue' : 'hover:bg-gray-100'}`}
                        >
                          Authentication
                        </button>
                      </li>
                      <li>
                        <button 
                          onClick={() => setActiveSection('endpoints')}
                          className={`w-full text-left px-3 py-2 rounded ${activeSection === 'endpoints' ? 'bg-omantel-blue bg-opacity-10 text-omantel-blue' : 'hover:bg-gray-100'}`}
                        >
                          API Endpoints
                        </button>
                      </li>
                      <li>
                        <button 
                          onClick={() => setActiveSection('errors')}
                          className={`w-full text-left px-3 py-2 rounded ${activeSection === 'errors' ? 'bg-omantel-blue bg-opacity-10 text-omantel-blue' : 'hover:bg-gray-100'}`}
                        >
                          Error Handling
                        </button>
                      </li>
                      <li>
                        <button 
                          onClick={() => setActiveSection('bestPractices')}
                          className={`w-full text-left px-3 py-2 rounded ${activeSection === 'bestPractices' ? 'bg-omantel-blue bg-opacity-10 text-omantel-blue' : 'hover:bg-gray-100'}`}
                        >
                          Best Practices
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </aside>
              
              {/* Main Content */}
              <div className="flex-grow">
                {/* Introduction Section */}
                {activeSection === 'introduction' && (
                  <div className="omantel-card p-6">
                    <h2 className="text-2xl font-bold text-omantel-darkBlue mb-6">Introduction</h2>
                    <p className="mb-4 text-omantel-gray">
                      Omantel provides a suite of RESTful APIs that allow developers to integrate telecommunications services into their applications. Our APIs follow modern standards and best practices to ensure a seamless integration experience.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-omantel-darkBlue mt-8 mb-4">API Overview</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-omantel-blue">SMS API</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-omantel-gray">
                            Send SMS messages, check delivery status, and manage message templates.
                          </p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-omantel-blue">Voice API</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-omantel-gray">
                            Make calls, receive calls, and implement interactive voice response systems.
                          </p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-omantel-blue">Account API</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-omantel-gray">
                            Manage your account, check usage statistics, and view billing information.
                          </p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-omantel-blue">Number Lookup API</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-omantel-gray">
                            Validate phone numbers and retrieve information about them.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-omantel-darkBlue mt-8 mb-4">Base URL</h3>
                    <p className="mb-4 text-omantel-gray">
                      All API requests should be made to the following base URL:
                    </p>
                    <CodeBlock 
                      code="https://api.omantel.om/api/v1" 
                      title="Base URL" 
                    />
                  </div>
                )}
                
                {/* Authentication Section */}
                {activeSection === 'authentication' && (
                  <div className="omantel-card p-6">
                    <h2 className="text-2xl font-bold text-omantel-darkBlue mb-6">Authentication</h2>
                    <p className="mb-4 text-omantel-gray">
                      Omantel APIs use OAuth 2.0 for authentication. You'll need to register your application in the Developer Portal to obtain your client ID and client secret.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-omantel-darkBlue mt-8 mb-4">Obtaining Access Tokens</h3>
                    <p className="mb-4 text-omantel-gray">
                      To obtain an access token, make a POST request to the token endpoint with your client credentials:
                    </p>
                    <CodeBlock 
                      code={`POST /api/v1/auth/token HTTP/1.1
Host: api.omantel.om
Content-Type: application/json

{
  "client_id": "YOUR_CLIENT_ID",
  "client_secret": "YOUR_CLIENT_SECRET",
  "grant_type": "client_credentials"
}`} 
                      title="Token Request" 
                    />
                    
                    <p className="my-4 text-omantel-gray">
                      The server will respond with an access token if your credentials are valid:
                    </p>
                    <CodeBlock 
                      code={`HTTP/1.1 200 OK
Content-Type: application/json

{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 3600
}`} 
                      title="Token Response" 
                    />
                    
                    <h3 className="text-xl font-semibold text-omantel-darkBlue mt-8 mb-4">Using Access Tokens</h3>
                    <p className="mb-4 text-omantel-gray">
                      Include the access token in the Authorization header for all API requests:
                    </p>
                    <CodeBlock 
                      code={`GET /api/v1/resource HTTP/1.1
Host: api.omantel.om
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`} 
                      title="API Request with Token" 
                    />
                    
                    <div className="bg-omantel-lightBlue rounded-lg p-4 mt-8">
                      <p className="text-sm">
                        <strong>Note:</strong> Access tokens expire after the time specified in the expires_in field. Your application should request a new token when the current one approaches expiration.
                      </p>
                    </div>
                  </div>
                )}
                
                {/* API Endpoints Section */}
                {activeSection === 'endpoints' && (
                  <div className="omantel-card p-6">
                    <h2 className="text-2xl font-bold text-omantel-darkBlue mb-6">API Endpoints</h2>
                    <p className="mb-8 text-omantel-gray">
                      Explore the available API endpoints for integrating Omantel services into your applications.
                    </p>
                    
                    <Accordion type="single" collapsible>
                      <AccordionItem value="sms">
                        <AccordionTrigger className="text-lg font-semibold text-omantel-darkBlue">SMS API</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-6 pt-4">
                            <div>
                              <h4 className="font-medium mb-2">Send SMS</h4>
                              <p className="text-omantel-gray mb-4">
                                Send an SMS message to a single recipient or multiple recipients.
                              </p>
                              
                              <Tabs defaultValue="request">
                                <TabsList className="mb-2">
                                  <TabsTrigger value="request">Request</TabsTrigger>
                                  <TabsTrigger value="response">Response</TabsTrigger>
                                </TabsList>
                                <TabsContent value="request">
                                  <CodeBlock 
                                    code={smsEndpointCode} 
                                    title="Send SMS Request" 
                                  />
                                </TabsContent>
                                <TabsContent value="response">
                                  <CodeBlock 
                                    code={smsResponseCode} 
                                    title="Send SMS Response" 
                                  />
                                </TabsContent>
                              </Tabs>
                            </div>
                            
                            <div>
                              <h4 className="font-medium mb-2">Parameters</h4>
                              <table className="w-full text-left">
                                <thead>
                                  <tr className="border-b">
                                    <th className="pb-2">Parameter</th>
                                    <th className="pb-2">Required</th>
                                    <th className="pb-2">Description</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-b">
                                    <td className="py-3 pr-4 font-mono text-sm">to</td>
                                    <td>Yes</td>
                                    <td>Phone number in E.164 format (e.g., +96812345678)</td>
                                  </tr>
                                  <tr className="border-b">
                                    <td className="py-3 pr-4 font-mono text-sm">message</td>
                                    <td>Yes</td>
                                    <td>Text message to send (max 1600 characters)</td>
                                  </tr>
                                  <tr>
                                    <td className="py-3 pr-4 font-mono text-sm">sender_id</td>
                                    <td>No</td>
                                    <td>Sender ID to display (defaults to your registered Sender ID)</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="account">
                        <AccordionTrigger className="text-lg font-semibold text-omantel-darkBlue">Account API</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-6 pt-4">
                            <div>
                              <h4 className="font-medium mb-2">Get Usage</h4>
                              <p className="text-omantel-gray mb-4">
                                Retrieve detailed usage information for your account.
                              </p>
                              
                              <Tabs defaultValue="request">
                                <TabsList className="mb-2">
                                  <TabsTrigger value="request">Request</TabsTrigger>
                                  <TabsTrigger value="response">Response</TabsTrigger>
                                </TabsList>
                                <TabsContent value="request">
                                  <CodeBlock 
                                    code={usageEndpointCode} 
                                    title="Get Usage Request" 
                                  />
                                </TabsContent>
                                <TabsContent value="response">
                                  <CodeBlock 
                                    code={usageResponseCode} 
                                    title="Get Usage Response" 
                                  />
                                </TabsContent>
                              </Tabs>
                            </div>
                            
                            <div>
                              <h4 className="font-medium mb-2">Query Parameters</h4>
                              <table className="w-full text-left">
                                <thead>
                                  <tr className="border-b">
                                    <th className="pb-2">Parameter</th>
                                    <th className="pb-2">Required</th>
                                    <th className="pb-2">Description</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-b">
                                    <td className="py-3 pr-4 font-mono text-sm">from</td>
                                    <td>No</td>
                                    <td>Start date in ISO 8601 format (defaults to start of current month)</td>
                                  </tr>
                                  <tr>
                                    <td className="py-3 pr-4 font-mono text-sm">to</td>
                                    <td>No</td>
                                    <td>End date in ISO 8601 format (defaults to current time)</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                )}
                
                {/* Error Handling Section */}
                {activeSection === 'errors' && (
                  <div className="omantel-card p-6">
                    <h2 className="text-2xl font-bold text-omantel-darkBlue mb-6">Error Handling</h2>
                    <p className="mb-6 text-omantel-gray">
                      Omantel APIs use standard HTTP status codes along with detailed error objects to communicate issues with your requests.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-omantel-darkBlue mt-8 mb-4">Error Response Format</h3>
                    <p className="mb-4 text-omantel-gray">
                      When an error occurs, the API will respond with an appropriate HTTP status code and a JSON error object:
                    </p>
                    <CodeBlock 
                      code={errorHandlingCode} 
                      title="Error Response" 
                    />
                    
                    <h3 className="text-xl font-semibold text-omantel-darkBlue mt-8 mb-4">Common HTTP Status Codes</h3>
                    <table className="w-full text-left mb-8">
                      <thead>
                        <tr className="border-b">
                          <th className="pb-2">Status Code</th>
                          <th className="pb-2">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 pr-4 font-mono text-sm">400 Bad Request</td>
                          <td>The request was malformed or missing required parameters</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 pr-4 font-mono text-sm">401 Unauthorized</td>
                          <td>Authentication failed or token is invalid</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 pr-4 font-mono text-sm">403 Forbidden</td>
                          <td>The authenticated user doesn't have permission for the requested operation</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 pr-4 font-mono text-sm">404 Not Found</td>
                          <td>The requested resource does not exist</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 pr-4 font-mono text-sm">429 Too Many Requests</td>
                          <td>Rate limit exceeded</td>
                        </tr>
                        <tr>
                          <td className="py-3 pr-4 font-mono text-sm">500 Internal Server Error</td>
                          <td>An unexpected error occurred on the server</td>
                        </tr>
                      </tbody>
                    </table>
                    
                    <h3 className="text-xl font-semibold text-omantel-darkBlue mt-8 mb-4">Common Error Codes</h3>
                    <p className="mb-4 text-omantel-gray">
                      The error object includes a code field that provides more specific information about the error:
                    </p>
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b">
                          <th className="pb-2">Error Code</th>
                          <th className="pb-2">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 pr-4 font-mono text-sm">INVALID_PARAMETER</td>
                          <td>One or more parameters are invalid</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 pr-4 font-mono text-sm">MISSING_PARAMETER</td>
                          <td>A required parameter is missing</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 pr-4 font-mono text-sm">INVALID_CREDENTIAL</td>
                          <td>The provided authentication credentials are invalid</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 pr-4 font-mono text-sm">TOKEN_EXPIRED</td>
                          <td>The access token has expired</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 pr-4 font-mono text-sm">RESOURCE_NOT_FOUND</td>
                          <td>The requested resource does not exist</td>
                        </tr>
                        <tr>
                          <td className="py-3 pr-4 font-mono text-sm">RATE_LIMIT_EXCEEDED</td>
                          <td>You have exceeded your rate limit</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
                
                {/* Best Practices Section */}
                {activeSection === 'bestPractices' && (
                  <div className="omantel-card p-6">
                    <h2 className="text-2xl font-bold text-omantel-darkBlue mb-6">Best Practices</h2>
                    <p className="mb-8 text-omantel-gray">
                      Follow these guidelines to get the most out of Omantel's APIs and ensure a smooth integration experience.
                    </p>
                    
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold text-omantel-blue mb-4">Authentication</h3>
                        <ul className="space-y-3 text-omantel-gray list-disc pl-6">
                          <li>Store your client credentials securely. Never expose them in client-side code.</li>
                          <li>Implement token refresh logic to handle token expiration gracefully.</li>
                          <li>Use a server-to-server architecture for handling authentication when possible.</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-omantel-blue mb-4">Rate Limiting</h3>
                        <ul className="space-y-3 text-omantel-gray list-disc pl-6">
                          <li>Monitor the rate limit headers in API responses.</li>
                          <li>Implement exponential backoff for retries when you hit rate limits.</li>
                          <li>Spread out non-urgent API calls to avoid hitting rate limits.</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-omantel-blue mb-4">Error Handling</h3>
                        <ul className="space-y-3 text-omantel-gray list-disc pl-6">
                          <li>Always check for errors in API responses.</li>
                          <li>Log error details for troubleshooting.</li>
                          <li>Implement appropriate retry logic for transient errors.</li>
                          <li>Provide meaningful error messages to your users.</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-omantel-blue mb-4">Performance</h3>
                        <ul className="space-y-3 text-omantel-gray list-disc pl-6">
                          <li>Use connection pooling for HTTP clients to improve performance.</li>
                          <li>Implement caching for data that doesn't change frequently.</li>
                          <li>Use compression for request and response bodies where supported.</li>
                          <li>Batch API requests when possible to reduce overhead.</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-omantel-blue mb-4">Security</h3>
                        <ul className="space-y-3 text-omantel-gray list-disc pl-6">
                          <li>Always use HTTPS for API requests.</li>
                          <li>Validate and sanitize user input before sending it to the API.</li>
                          <li>Implement proper access controls in your application.</li>
                          <li>Rotate your API credentials periodically.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documentation;
