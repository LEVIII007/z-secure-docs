import { CodeBlock } from "@/components/CodeBlock";

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
          <CodeBlock language = "typescript"code ={` npm install z-secure-service`}/>
        </pre>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Basic Usage</h2>
        <p>
          Here's a basic example of how to use Z-secure-service in your application to set up rate limiting for an API endpoint:
        </p>
        <pre className="bg-muted p-4 rounded-lg">
          <CodeBlock  language="typescript" code = {`import ZSecure from 'z-secure-service';

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
`}/>
        </pre>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Handling Errors</h2>
        <p>
          It is essential to handle errors gracefully in your application. Z-secure-service will throw errors if an API call fails, and it's best practice to catch and handle these errors. Here's an example:
        </p>
        <pre className="bg-muted p-4 rounded-lg">
          <CodeBlock language="typescript"  code={`try {
  // Example: Enabling rate limit protection
  await shield.rateLimit({
    endpoint: '/api/posts',
    limit: 50,
    window: '1h'
  });
} catch (error) {
  console.error("An error occurred while configuring rate limiting:", error);
  // Handle the error, such as showing a message to the user or retrying the request
}`}/>
        </pre>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Response Handling</h2>
        <p>
          When you interact with the Z-secure-service API, it will return standard HTTP status CodeBlocks to indicate the result of your request.
          Here are some common response CodeBlocks you should be aware of:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>200</strong> - Success: The request was processed successfully.</li>
          <li><strong>400</strong> - Bad Request: The request was malformed or missing required parameters.</li>
          <li><strong>401</strong> - Unauthorized: The API key is missing or invalid.</li>
          <li><strong>403</strong> - Forbidden: The API key does not have permission to access the requested resource.</li>
          <li><strong>429</strong> - Too Many Requests: Rate limit has been exceeded for the given time window.</li>
          <li><strong>500</strong> - Internal Server Error: An error occurred on Z-secure-service's server.</li>
        </ul>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Best Practices</h2>
        <p>
          For optimal integration and security, we recommend the following best practices:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Always use HTTPS:</strong> Make sure to use secure connections for all API interactions to protect sensitive data.</li>
          <li><strong>Rotate your API keys regularly:</strong> Periodically regenerate and update your API keys to prevent unauthorized access.</li>
          <li><strong>Handle errors gracefully:</strong> Always ensure your application can handle API errors, including rate limiting and server errors, without crashing.</li>
          <li><strong>Monitor your usage:</strong> Use monitoring tools to track your API usage, rate limits, and any security events or anomalies.</li>
        </ul>
      </div>
    </div>
  );
}