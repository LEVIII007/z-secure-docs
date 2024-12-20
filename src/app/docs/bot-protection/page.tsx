export default function BotProtectionPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Bot Protection</h1>
      <div className="space-y-4">
        <p>
          Our bot protection system uses advanced detection techniques to identify and block malicious
          automated traffic while allowing legitimate bots to access your application.
        </p>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Machine learning-based bot detection</li>
          <li>Behavioral analysis</li>
          <li>CAPTCHA integration</li>
          <li>Whitelist management for good bots</li>
        </ul>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Configuration</h2>
        <pre className="bg-muted p-4 rounded-lg">
          <code>{`{
  "mode": "aggressive",     // Protection level
  "allowedBots": [         // Known good bots
    "googlebot",
    "bingbot"
  ],
  "actions": {             // Actions for detected bots
    "suspicious": "challenge",
    "malicious": "block"
  }
}`}</code>
        </pre>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Example Usage</h2>
        <pre className="bg-muted p-4 rounded-lg">
          <code>{`import { SecureShield } from '@secureshield/client';

const shield = new SecureShield({
  apiKey: 'your-api-key'
});

// Basic bot protection
await shield.botProtection({
  mode: 'balanced'
});

// Advanced configuration
await shield.botProtection({
  mode: 'aggressive',
  allowedBots: ['googlebot', 'bingbot'],
  actions: {
    suspicious: 'challenge',
    malicious: 'block'
  },
  customRules: [
    {
      condition: 'request_rate > 10/s',
      action: 'challenge'
    }
  ]
});`}</code>
        </pre>

        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Detection Methods</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Browser fingerprinting</li>
          <li>Behavioral analysis</li>
          <li>Pattern recognition</li>
          <li>Request rate analysis</li>
          <li>JavaScript challenges</li>
        </ul>
      </div>
    </div>
  )
}