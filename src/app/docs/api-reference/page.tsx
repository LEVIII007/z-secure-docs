 // Adjust the import path as necessary

import { CodeBlock } from "@/components/CodeBlock";

export default function ApiReferencePage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">API Reference</h1>
      <div className="space-y-4">
        <p>
          This page provides the complete reference for all available SecureShield API endpoints and client methods.
          It serves as the guide for configuring and utilizing the SecureShield security suite to protect your web applications.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Authentication</h2>
        <p>
          All API requests require authentication using your SecureShield API key. This key should be included in the 
          <code>Authorization</code> header as a bearer token for every request:
        </p>
        <CodeBlock language="typescript" code =
          {`Authorization: Bearer your-api-key`}/>
        

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Rate Limiting Methods</h2>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">shield.rateLimit(options)</h3>
          <p>Configure rate limiting for specific API endpoints to prevent abuse and ensure fair usage.</p>
          <p>
            This method allows you to set a limit on the number of requests that can be made to an endpoint within a defined time window.
            You can also configure client-specific identifiers and customize actions to take when limits are exceeded.
          </p>
          <CodeBlock language="typescript"
           code = {`// Parameters
{
  limit: number;         // Required: Request limit (e.g., 1000 requests)
  window: string;        // Required: Time window (e.g., "1h", "1d") 
}`}/>
          
        </div>
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Attack Prevention Methods</h2>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">shield.attackPrevention(options)</h3>
          <p>Configure attack prevention settings to secure your web application from common vulnerabilities.</p>
          <p>
            This method provides a set of options to enable protection against various attack vectors such as SQL Injection (SQLi), 
            Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), and more.
            You can define a custom action for each attack type, as well as custom rules based on specific attack patterns.
          </p>
          <CodeBlock language="typescript" code=
            {`// Parameters
{
  protections: {
    xss?: boolean;                // Enable protection against XSS attacks
    sqli?: boolean;               // Enable protection against SQL Injection
    csrf?: boolean;               // Enable protection against CSRF attacks
    directoryTraversal?: boolean; // Enable protection against Directory Traversal attacks
    commandInjection?: boolean;   // Enable protection against Command Injection attacks
  };
  mode: "block" | "report";       // Choose "block" to block attacks or "report" to log and monitor 
                                     them
  customRules?: Array<{
    pattern: string;              // Regex pattern to match attack vectors
    action: string;               // Action to take when pattern is matched 
                                     (e.g., "block", "log")
  }>;
}`}/>
          
        </div>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Response Codes</h2>
        <p>
          The SecureShield API returns standard HTTP response codes to indicate the status of your request. Here’s what they mean:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>200</strong> - Success: The request was processed successfully.</li>
          <li><strong>400</strong> - Bad Request: The request was malformed or missing required parameters.</li>
          <li><strong>401</strong> - Unauthorized: The API key is missing or invalid.</li>
          <li><strong>403</strong> - Forbidden: The API key does not have permission to access the resource.</li>
          <li><strong>429</strong> - Too Many Requests: The rate limit for the endpoint has been exceeded.</li>
          <li><strong>500</strong> - Internal Server Error: A server-side error occurred during the request processing.</li>
        </ul>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Best Practices</h2>
        <p>
          To ensure optimal usage of the SecureShield API, consider following these best practices:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Always use secure connections:</strong> Ensure all API requests are made over HTTPS to prevent man-in-the-middle attacks.</li>
          <li><strong>Regularly rotate your API keys:</strong> Periodically regenerate and update your API keys to maintain security.</li>
          <li><strong>Monitor your API usage:</strong> Keep track of request volume and rate limiting to ensure you're not exceeding your limits.</li>
          <li><strong>Customize protections based on your application:</strong> Tailor the attack prevention settings to the specific needs of your application to maximize security.</li>
        </ul>
      </div>
    </div>
  );
}