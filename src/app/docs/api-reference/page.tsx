export default function ApiReferencePage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">API Reference</h1>
      <div className="space-y-4">
        <p>
          Complete reference for all SecureShield API endpoints and client methods.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Authentication</h2>
        <p>
          All API requests require authentication using your API key in the Authorization header:
        </p>
        <pre className="bg-muted p-4 rounded-lg">
          <code>Authorization: Bearer your-api-key</code>
        </pre>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Rate Limiting Methods</h2>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">shield.rateLimit(options)</h3>
          <p>Configure rate limiting for specific endpoints.</p>
          <pre className="bg-muted p-4 rounded-lg">
            <code>{`// Parameters
{
  endpoint: string;      // Required: API endpoint to protect
  limit: number;        // Required: Request limit
  window: string;       // Required: Time window (e.g., "1h", "1d")
  identifier?: string;  // Optional: Client identifier method
  action?: string;      // Optional: Action when limit exceeded
}`}</code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Bot Protection Methods</h2>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">shield.botProtection(options)</h3>
          <p>Configure bot protection settings.</p>
          <pre className="bg-muted p-4 rounded-lg">
            <code>{`// Parameters
{
  mode: "passive" | "balanced" | "aggressive";
  allowedBots?: string[];
  actions?: {
    suspicious?: string;
    malicious?: string;
  };
}`}</code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Attack Prevention Methods</h2>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">shield.attackPrevention(options)</h3>
          <p>Configure attack prevention settings.</p>
          <pre className="bg-muted p-4 rounded-lg">
            <code>{`// Parameters
{
  protections: {
    xss?: boolean;
    sqli?: boolean;
    csrf?: boolean;
    directoryTraversal?: boolean;
    commandInjection?: boolean;
  };
  mode: "block" | "report";
  customRules?: Array<{
    pattern: string;
    action: string;
  }>;
}`}</code>
          </pre>
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Response Codes</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>200</strong> - Success</li>
          <li><strong>400</strong> - Bad Request</li>
          <li><strong>401</strong> - Unauthorized</li>
          <li><strong>403</strong> - Forbidden</li>
          <li><strong>429</strong> - Too Many Requests</li>
          <li><strong>500</strong> - Internal Server Error</li>
        </ul>
      </div>
    </div>
  )
}