import { CodeBlock } from "@/components/CodeBlock"
export default function DocsPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Getting Started</h1>
      <div className="space-y-4">
        <p>
          Welcome to Z-secure-service's documentation! This guide will walk you through the process of setting up Z-secure-service in your web applications.
          Our API provides comprehensive security solutions to protect against threats like rate limiting, bot protection, and attack prevention.
          Z-secure-service offers an easy-to-integrate, developer-friendly suite to enhance the security of your web application.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Quick Start</h2>
        <p>
          To get started with Z-secure-service, follow these simple steps to integrate our API into your application:
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li><strong>Sign up for an account:</strong> Create a Z-secure-service account at <a href="https://Z-secure-service.com/signup" className="text-blue-600">Z-secure-service Sign-Up</a>.</li>
          <li><strong>Generate an API key:</strong> Once logged in, go to your dashboard and generate a unique API key to authenticate your requests.</li>
          <li><strong>Install the client library:</strong> Install Z-secure-service's client library to your project using npm or yarn.</li>
          <li><strong>Initialize the client:</strong> Use your API key to initialize the client and start using Z-secure-service's security features.</li>
        </ol>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Installation</h2>
        <p>
          Z-secure-service offers an easy-to-use client library that you can install in your project. You can install it using npm:
        </p>
        <pre className="bg-muted p-4 rounded-lg">
          <code>npm install z-secure-service</code>
        </pre>
        <p>If you are using yarn, you can install it with the following command:</p>
        <pre className="bg-muted p-4 rounded-lg">

            <CodeBlock
            language="bash"
            code={`npm install @secureshield/client`}
            />
        </pre>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Basic Usage</h2>
        <p>
          Here's a basic example of how to use Z-secure-service in your application to set up rate limiting for an API endpoint:
        </p>
        <pre className="bg-muted p-4 rounded-lg">
          <code>{`import ZSecure from 'z-secure-service';

const rate = ZSecure({
  API_KEY: 'your-api-key', // Replace with your generated API key
  baseUrl: 'http://localhost:3000', // Base URL for the ZSecure service
  rateLimitingRule: {
    algorithm: 'FixedWindowRule', // Use the Fixed Window algorithm for rate limiting
    rule: {
      limit: 5, // Maximum number of requests allowed within the window
      windowMs: 60000, // Time window in milliseconds (60 seconds)
    }
  }
});

// Define a route for the root URL
app.get('/', async (req, res) => {
  // Protect the route using the rate limiter
  const result = await rate.protect(req, userId, 1);
  
  // Check if the request is denied
  if (!result.isdenied) {
    res.send('Hello, World!'); // Send a response if the request is allowed
  } else {
    res.send(result.message); // Send the denial message if the request is denied
  }
});
`}</code>
        </pre>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Advanced Usage</h2>
        <p>
          Z-secure-service allows you to configure additional security features such as bot protection and attack prevention.
          Here’s an example that demonstrates how to set up bot protection and attack prevention on your API endpoints:
        </p>
        <pre className="bg-muted p-4 rounded-lg">

        <CodeBlock
            language="typescript"
            code={`import { SecureShield } from '@secureshield/client';


// Enable bot protection
await shield.shieldRule({
  mode: 'aggressive',  // Protect against bots with the highest security
  actions: {
    suspicious: 'warn',  // Warn on suspicious bot behavior
    malicious: 'block'   // Block malicious bot activity
  }
});

// Enable rate limiting
await shield.rateLimit({
  endpoint: '/api/users',
  limit: 100,
  window: '1h'
});`}
          />
</pre>
      </div>
    </div>
  );
}