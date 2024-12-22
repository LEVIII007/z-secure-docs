import { CodeBlock } from "@/components/CodeBlock";


export default function RateLimitingPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
        Rate Limiting
      </h1>
      <div className="space-y-4">
        <p>
          Rate limiting helps protect your API from abuse by restricting the
          number of requests a client can make within a specified time window.
          This prevents overuse of resources, ensures fair access for all users,
          and safeguards the system from overload or malicious attacks, such as
          brute-force attempts.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Features
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Flexible rate limits tailored to different criteria</li>
          <li>Customizable time windows for request tracking</li>
          <li>Multiple rate limit tiers to accommodate varying usage levels</li>
          <li>
            Real-time analytics and monitoring for tracking request patterns
          </li>
        </ul>

        {/* Types of Rate Limiting Algorithms */}
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Types of Rate Limiting Algorithms
        </h2>
        <p>
          There are several rate limiting algorithms available, each suited for different use cases. Here are the most common ones:
        </p>

        {/* Fixed Window */}
        <div className="space-y-4">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Fixed Window
          </h3>
          <p>
            The Fixed Window algorithm divides time into fixed intervals (e.g., every 1 minute) and counts the number of requests a client can make within that interval. If the number of requests exceeds the limit, the client is blocked until the next interval begins.
          </p>
          
          <h4 className="text-lg font-semibold">Configuration</h4>
          <CodeBlock language="typescript" code={`
{
  "limit": 100,               // Number of requests allowed per window
  "window": "1h",             // Time window (e.g., 1h, 1d)
}`}/>

          <h4 className="text-lg font-semibold">When to Use</h4>
          <p>
            Use Fixed Window for simple rate limiting where a strict reset period is acceptable. It works well for preventing abuse or DDoS attacks but may cause slight inconsistencies around the reset boundary.
          </p>

          <h4 className="text-lg font-semibold">Downsides</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Inconsistent request limits at the boundary of the time window (e.g., 100 requests in the last minute and 100 in the next minute).</li>
            <li>High burst traffic could exceed the limit at the reset time.</li>
          </ul>

          <h4 className="text-lg font-semibold">Example Usage</h4>
          <CodeBlock language="typescript" code={`
import ZSecure from 'z-secure-service';

// Initialize the ZSecure rate limiter with the provided configuration
const rate = ZSecure({
    API_KEY: "YOUR_API_KEY", // Your API key for authentication
    baseUrl: "YOUR_BASE_URL", // Base URL for the ZSecure service
    rateLimitingRule : {
        rule : {
            algorithm : "FixedWindowRule", // Use the Fixed Window algorithm for rate limiting
            limit: 5, // Maximum number of requests allowed within the window
            windowMs :  60000, // Time window in milliseconds (60 seconds)
        }
    },
});

// Define a route for the root URL
app.get('/', async (req, res) => {
    // Protect the route using the rate limiter
    const result = await rate.protect(req, userId, 1);
    
    // Check if the request is denied
    if(!result.isdenied){
        res.send('Hello, World!'); // Send a response if the request is allowed
    }
    else{
        res.send(result.message); // Send the denial message if the request is denied
    }
});
`}/>
        </div>

        {/* Token Bucket */}
        <div className="space-y-4">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Token Bucket
          </h3>
          <p>
            The Token Bucket algorithm allows bursts of requests by storing tokens in a bucket. Tokens are added at a constant rate, and each request consumes one token. If the bucket runs out of tokens, requests are either blocked or throttled until more tokens are available.
          </p>
          
          <h4 className="text-lg font-semibold">Configuration</h4>
          <CodeBlock language="typescript" code={`
{
  "capacity": 5, // Maximum number of requests that can be held in the bucket
  "leakRate": 1, // Number of requests that can leak out of the bucket per interval
  "Timeouts": 1000, // Interval in milliseconds for leaking requests
}`}/>

          <h4 className="text-lg font-semibold">When to Use</h4>
          <p>
            Token Bucket is ideal for applications where short bursts of traffic are allowed but should be limited over time. It's useful for APIs where requests can be rate-limited but still need to handle sudden spikes efficiently.
          </p>

          <h4 className="text-lg font-semibold">Downsides</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Potential for token exhaustion if a client sends too many requests in a short period.</li>
            <li>Complexity in implementation compared to Fixed Window.</li>
          </ul>

          <h4 className="text-lg font-semibold">Example Usage</h4>
          <CodeBlock language="typescript" code={`
import ZSecure from 'z-secure-service';

// Initialize the ZSecure rate limiter with the provided configuration
const rate = ZSecure({
    API_KEY: "YOUR_API_KEY", // Your API key for authentication
    baseUrl: "YOUR_BASE_URL", // Base URL for the ZSecure service
    rateLimitingRule : {
        rule : {
            algorithm : "TokenBucketRule", // Use the Token Bucket algorithm for rate limiting
            // capacity: 5, // Maximum number of tokens in the bucket
            // refillRate: 1, // Number of tokens added to the bucket per interval
            // intervalMs: 1000, // Interval in milliseconds for adding tokens
        }
    },
});

// Define a route for the root URL
app.get('/', async (req, res) => {
    // Protect the route using the rate limiter
    const result = await rate.protect(req, userId, 1);
    
    // Check if the request is denied
    if(!result.isdenied){
        res.send('Hello, World!'); // Send a response if the request is allowed
    }
    else{
        res.send(result.message); // Send the denial message if the request is denied
    }
});
`}/>
        </div>

        {/* Leaky Bucket */}
        <div className="space-y-4">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Leaky Bucket
          </h3>
          <p>
            The Leaky Bucket algorithm processes requests at a fixed rate, allowing requests to "leak" out of the bucket at a constant rate. If the bucket overflows (too many requests in a short time), the excess requests are discarded or delayed.
          </p>

          <h4 className="text-lg font-semibold">Configuration</h4>
          <CodeBlock language="typescript" code={`
{
  "capacity": 5, // Maximum number of requests that can be held in the bucket
  "leakRate": 1, // Number of requests that can leak out of the bucket per interval
  "Timeout": 1000, // Interval in milliseconds for leaking requests
}`}/>

          <h4 className="text-lg font-semibold">When to Use</h4>
          <p>
            Leaky Bucket is useful for APIs that require consistent request processing without sudden spikes. It helps ensure that traffic is handled at a smooth, constant rate, even if the request rate fluctuates.
          </p>

          <h4 className="text-lg font-semibold">Downsides</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Excess requests may be discarded or delayed, affecting user experience.</li>
            <li>Does not allow bursts of traffic even if the system can handle it.</li>
          </ul>

          <h4 className="text-lg font-semibold">Example Usage</h4>
          <CodeBlock language="typescript" code={`
import ZSecure from 'z-secure-service';

// Initialize the ZSecure rate limiter with the provided configuration
const rate = ZSecure({
    API_KEY: "YOUR_API_KEY", // Your API key for authentication
    baseUrl: "YOUR_BASE_URL", // Base URL for the ZSecure service
    rateLimitingRule : {
        rule : {
            algorithm : "LeakyBucketRule", // Use the Leaky Bucket algorithm for rate limiting
            capacity: 5, // Maximum number of requests that can be held in the bucket
            leakRate: 1, // Number of requests that can leak out of the bucket per interval
            Timeout: 1000, // Interval in milliseconds for leaking requests
        }
    },
});

// Define a route for the root URL
app.get('/', async (req, res) => {
    // Protect the route using the rate limiter
    const result = await rate.protect(req, userId, 1);
    
    // Check if the request is denied
    if(!result.isdenied){
        res.send('Hello, World!'); // Send a response if the request is allowed
    }
    else{
        res.send(result.message); // Send the denial message if the request is denied
    }
});
`}/>
        </div>
      </div>
    

{/* Combined Rate Limiting and Shield */}
<div className="space-y-4">
  <h2 className="scroll-m-20 text-xl font-bold tracking-tight">
    Combined Rate Limiting and Shield
  </h2>
  <p>
    Combining rate limiting and shield rules provides an additional layer of protection for your API. Rate limiting controls the number of requests a client can make within a specified time window, while shield rules add further security measures, such as blocking or throttling requests based on specific criteria.
  </p>

  <h4 className="text-lg font-semibold">Example Usage</h4>
  <CodeBlock language="typescript" code={`
import ZSecure from 'z-secure-service';

// Initialize the ZSecure rate limiter with the provided configuration
const rate = ZSecure({
    API_KEY: "YOUR_API_KEY", // Your API key for authentication
    baseUrl: "YOUR_BASE_URL", // Base URL for the ZSecure service
    
    rateLimitingRule : {
       
        rule : {
             algorithm : "FixedWindowRule", // Use the Fixed Window algorithm for rate limiting
            limit: 5, // Maximum number of requests allowed within the window
            windowMs :  60000, // Time window in milliseconds (60 seconds)
        }
    },
    
    shieldRule: {
        mode: "LIVE", // Mode of the shield rule
        limit: 5, // Maximum number of requests allowed within the shield window
        threshold: 5, // Threshold for triggering the shield rule
        windowMs: 60000 // Time window in milliseconds (60 seconds)
    }
});

// Define a route for the root URL
app.get('/', async (req, res) => {
    // Protect the route using the rate limiter
    const result = await rate.protect(req, userId, 1);
    
    // Check if the request is denied
    if(!result.isdenied){
        res.send('Hello, World!'); // Send a response if the request is allowed
    }
    else{
        res.send(result.message); // Send the denial message if the request is denied
    }
});
`}/>
</div>


    </div>
  );
}