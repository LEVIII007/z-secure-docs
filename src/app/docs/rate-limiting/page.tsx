export default function RateLimitingPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Rate Limiting</h1>
      <div className="space-y-4">
        <p>
          Rate limiting helps protect your API from abuse by controlling how many requests a client
          can make within a specific time window.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Flexible rate limits based on various criteria</li>
          <li>Customizable time windows</li>
          <li>Multiple rate limit tiers</li>
          <li>Real-time analytics and monitoring</li>
        </ul>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Configuration</h2>
        <p>Configure rate limiting with these options:</p>
        <pre className="bg-muted p-4 rounded-lg">
          <code>{`{
  "endpoint": "/api/users",    // The endpoint to protect
  "limit": 100,               // Number of requests allowed
  "window": "1h",             // Time window (e.g., 1h, 1d)
  "identifier": "ip",         // How to identify clients
  "action": "block"           // What to do when limit is exceeded
}`}</code>
        </pre>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Example Usage</h2>
        <pre className="bg-muted p-4 rounded-lg">
          <code>{`import { SecureShield } from '@secureshield/client';

const shield = new SecureShield({
  apiKey: 'your-api-key'
});

// Basic rate limiting
await shield.rateLimit({
  endpoint: '/api/users',
  limit: 100,
  window: '1h'
});

// Advanced configuration
await shield.rateLimit({
  endpoint: '/api/users',
  limit: 100,
  window: '1h',
  identifier: 'user_id',
  action: 'throttle',
  errorResponse: {
    status: 429,
    message: 'Too many requests'
  }
});`}</code>
        </pre>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Best Practices</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Set appropriate limits based on your API's capacity</li>
          <li>Use different limits for different endpoints</li>
          <li>Monitor rate limit usage to adjust as needed</li>
          <li>Implement graceful degradation when limits are reached</li>
        </ul>
      </div>
    </div>
  )
}