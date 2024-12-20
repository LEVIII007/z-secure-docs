export default function AttackPreventionPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Attack Prevention</h1>
      <div className="space-y-4">
        <p>
          Our attack prevention system protects your application from common web attacks,
          including SQL injection, XSS, CSRF, and more.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Protected Attacks</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>SQL Injection (SQLi)</li>
          <li>Cross-Site Scripting (XSS)</li>
          <li>Cross-Site Request Forgery (CSRF)</li>
          <li>Directory Traversal</li>
          <li>Command Injection</li>
        </ul>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Configuration</h2>
        <pre className="bg-muted p-4 rounded-lg">
          <code>{`{
  "protections": {
    "xss": true,
    "sqli": true,
    "csrf": true
  },
  "mode": "block",        // block or report
  "customRules": [],      // Additional rules
  "whitelist": []         // Trusted sources
}`}</code>
        </pre>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Example Usage</h2>
        <pre className="bg-muted p-4 rounded-lg">
          <code>{`import { SecureShield } from '@secureshield/client';

const shield = new SecureShield({
  apiKey: 'your-api-key'
});

// Basic protection
await shield.attackPrevention({
  mode: 'block'
});

// Advanced configuration
await shield.attackPrevention({
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
      pattern: '(?i)evil_pattern',
      action: 'block'
    }
  ],
  whitelist: [
    'trusted-domain.com'
  ]
});`}</code>
        </pre>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Security Best Practices</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Always enable CSRF protection for forms</li>
          <li>Use Content Security Policy (CSP) headers</li>
          <li>Implement proper input validation</li>
          <li>Keep security rules updated</li>
          <li>Monitor attack logs regularly</li>
        </ul>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Monitoring and Alerts</h2>
        <p>
          Our dashboard provides real-time monitoring of attacks and security events. Set up alerts
          to be notified when:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>High-severity attacks are detected</li>
          <li>Unusual traffic patterns emerge</li>
          <li>Security rules are triggered frequently</li>
          <li>System updates are available</li>
        </ul>
      </div>
    </div>
  )
}
