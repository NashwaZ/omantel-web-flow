
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CodeBlock from '@/components/CodeBlock';

const AuthenticationStep = () => {
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

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-omantel-blue mb-4">Authentication</h2>
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
    </div>
  );
};

export default AuthenticationStep;
