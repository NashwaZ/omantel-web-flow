
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CodeBlock from '@/components/CodeBlock';

const ApiRequestStep = () => {
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
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-omantel-blue mb-4">Making API Requests</h2>
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
    </div>
  );
};

export default ApiRequestStep;
