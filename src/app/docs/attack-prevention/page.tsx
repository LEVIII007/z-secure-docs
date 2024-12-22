export default function AttackPreventionPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Attack Prevention</h1>
      <div className="space-y-4">
        <p>
          Our comprehensive attack prevention system is designed to protect your application from
          a wide range of common and sophisticated web attacks. This includes vulnerabilities like
          SQL Injection (SQLi), Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), and more.
          With layered defenses and customizable settings, you can safeguard your application from
          both automated and targeted attacks.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Protected Attacks</h2>
        <p>
          We offer protection against a variety of attacks that target web applications and
          can compromise the security of your system. Here are the attacks we actively protect against:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>SQL Injection (SQLi)</strong>: A technique used to exploit vulnerabilities in an application's database query logic to gain unauthorized access to data.</li>
          <li><strong>Cross-Site Scripting (XSS)</strong>: A vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users, enabling data theft or hijacking of user sessions.</li>
          <li><strong>Cross-Site Request Forgery (CSRF)</strong>: An attack that forces a user to perform unwanted actions on a web application without their consent.</li>
          <li><strong>Directory Traversal</strong>: An attack that allows attackers to access restricted directories and files on a server.</li>
          <li><strong>Command Injection</strong>: An attack that involves injecting and executing arbitrary commands on a server, often leading to remote code execution.</li>
        </ul>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Configuration</h2>
        <p>
          Our attack prevention system is highly configurable, allowing you to enable or disable protections
          for specific types of attacks. You can also define the action to take when an attack is detected (e.g., block or report),
          and customize rules for more advanced use cases.
        </p>
        <pre className="bg-muted p-4 rounded-lg">
          <code>{`{
  "protections": {
    "xss": true,               // Enable protection against XSS attacks
    "sqli": true,              // Enable protection against SQL Injection
    "csrf": true               // Enable protection against CSRF attacks
  },
  "mode": "block",             // Choose "block" to block attacks or "report" to log and monitor
  "customRules": [],           // Add custom patterns to block specific attack vectors
  "whitelist": []              // List of trusted sources to exclude from protection
}`}</code>
        </pre>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Example Usage</h2>
        <p>
          Here’s how to integrate the attack prevention system into your application. You can either enable basic protections
          or configure advanced rules and protections tailored to your specific needs.
        </p>
        <pre className="bg-muted p-4 rounded-lg">
        <code>{`
import ZSecure from 'z-secure-service';

const shield = ZSecure({
  API_KEY: 'your-api-key'
});

// Basic protection setup
await shield.shieldRule({
  mode: 'block'  // Blocking mode (attacks will be blocked)
});

// Advanced configuration with custom rules and a whitelist
await shield.shieldRule({
  protections: {
    xss: true,
    sqli: true,
    csrf: true,
    directoryTraversal: true,
    commandInjection: true
  },
  mode: 'block',
  customRules: [
    {
      pattern: '(?i)evil_pattern',  // Regex pattern to block a specific attack vector
      action: 'block'               // Action to take when pattern is matched
    }
  ],
  whitelist: [
    'trusted-domain.com'           // Trusted domain to exclude from attack prevention
  ]
});
`}</code>
        </pre>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Security Best Practices</h2>
        <p>
          In addition to using our attack prevention system, it's important to follow best practices for web application security
          to further enhance the protection of your application.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Always enable CSRF protection:</strong> This ensures that malicious websites cannot make unwanted requests on behalf of your users.</li>
          <li><strong>Use Content Security Policy (CSP) headers:</strong> CSP helps to prevent XSS attacks by specifying which content sources are trusted.</li>
          <li><strong>Implement proper input validation:</strong> Always sanitize and validate user inputs to prevent malicious data from being processed by your application.</li>
          <li><strong>Keep security rules updated:</strong> Regularly update your security configuration and threat definitions to stay ahead of new attack techniques.</li>
          <li><strong>Monitor attack logs regularly:</strong> Keep an eye on security logs for unusual behavior and signs of potential breaches or attack attempts.</li>
        </ul>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Monitoring and Alerts</h2>
        <p>
          Our attack prevention system comes with a real-time dashboard that helps you track potential security incidents. You can set up customized alerts to be notified about critical events and take immediate action.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>High-severity attacks are detected:</strong> Receive alerts when an attack with a high risk of damaging your application is detected.</li>
          <li><strong>Unusual traffic patterns emerge:</strong> Get notified when traffic patterns deviate from normal, which could indicate a potential attack or system abuse.</li>
          <li><strong>Security rules are triggered frequently:</strong> Monitor instances where multiple security rules are triggered, which may indicate ongoing attacks or vulnerabilities being exploited.</li>
          <li><strong>System updates are available:</strong> Stay informed when security patches or software updates are released to keep your application protected against the latest threats.</li>
        </ul>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Why Attack Prevention Matters</h2>
        <p>
          Attack prevention is a critical aspect of safeguarding your application against data breaches, unauthorized access,
          and loss of service. By proactively protecting against common attack vectors like SQLi, XSS, and CSRF, you can ensure that
          your users' data remains secure, your application's integrity is maintained, and your reputation is protected.
        </p>
        <p>
          Attackers are becoming increasingly sophisticated, and without robust protections, even a single vulnerability can be exploited
          to devastating effect. Implementing the right defenses—coupled with real-time monitoring and alerting—ensures your application
          is resilient against evolving threats.
        </p>
      </div>
    </div>
  );
}
