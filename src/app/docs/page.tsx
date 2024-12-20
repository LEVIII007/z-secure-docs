export default function DocsPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Getting Started</h1>
      <div className="space-y-4">
        <p>
          Welcome to SecureShield's documentation. Our API provides comprehensive security solutions
          for your web applications, including rate limiting, bot protection, and attack prevention.
        </p>
        
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Quick Start</h2>
        <p>
          To get started with SecureShield, follow these steps:
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Sign up for an account</li>
          <li>Generate an API key from your dashboard</li>
          <li>Install our client library</li>
          <li>Initialize the client with your API key</li>
        </ol>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Installation</h2>
        <p>Install our client library using npm:</p>
        <pre className="bg-muted p-4 rounded-lg">
          <code>npm install @secureshield/client</code>
        </pre>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Basic Usage</h2>
        <p>Here's a basic example of how to use SecureShield in your application:</p>
        <pre className="bg-muted p-4 rounded-lg">
          <code>{`import { SecureShield } from '@secureshield/client';

const shield = new SecureShield({
  apiKey: 'your-api-key'
});

// Enable rate limiting
await shield.rateLimit({
  endpoint: '/api/users',
  limit: 100,
  window: '1h'
});`}</code>
        </pre>
      </div>
    </div>
  )
}