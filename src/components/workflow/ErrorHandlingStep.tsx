
import CodeBlock from '@/components/CodeBlock';

const ErrorHandlingStep = () => {
  const errorCode = `{
  "status": "error",
  "error": {
    "code": "INVALID_PARAMETER",
    "message": "The provided parameter is invalid",
    "details": {
      "field": "phone_number",
      "issue": "Format must be international format starting with +"
    }
  }
}`;

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-omantel-blue mb-4">Error Handling</h2>
      <p className="text-gray-600 mb-6">
        All API responses use standard HTTP status codes. Errors include detailed messages for debugging.
      </p>
      
      <CodeBlock code={errorCode} title="Error Response" />

      <div className="mt-6 bg-gray-50 rounded-lg p-4">
        <h3 className="font-medium mb-2">Rate Limit Headers</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li><code>X-RateLimit-Limit</code>: Maximum requests per window</li>
          <li><code>X-RateLimit-Remaining</code>: Remaining requests in current window</li>
          <li><code>X-RateLimit-Reset</code>: Time when the rate limit resets</li>
        </ul>
      </div>
    </div>
  );
};

export default ErrorHandlingStep;
