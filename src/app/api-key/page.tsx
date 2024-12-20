'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyIcon, RefreshCw } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Markdown } from './markdown';
import { useRouter } from 'next/navigation';
import { auth } from '../../../auth';

export default function APIKeyPage() {
  const [apiKey, setApiKey] = useState('');
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      const session = await auth();
      if (!session) {
        router.push('/profile');
      }
    };

    fetchSession();
  }, [router]);

  const generateApiKey = () => {
    const newKey = 'sk_' + Array(32).fill(0).map(() => Math.random().toString(36)[2]).join('');
    setApiKey(newKey);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiKey);
    toast({
      title: "Copied!",
      description: "API key copied to clipboard",
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black p-4">
      <Card className="w-full max-w-md bg-gray-900 text-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Generate API Key</CardTitle>
          <CardDescription className="text-gray-400">Create and manage your API keys here</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-2">
            <Input
              value={apiKey}
              readOnly
              placeholder="Your API key will appear here"
              className="flex-grow bg-gray-800 text-white border-gray-700"
            />
            <Button onClick={copyToClipboard} variant="outline" size="icon" className="bg-gray-800 hover:bg-gray-700">
              <CopyIcon className="h-4 w-4" />
            </Button>
          </div>
          <Button onClick={generateApiKey} className="w-full bg-blue-600 hover:bg-blue-700">
            <RefreshCw className="mr-2 h-4 w-4" /> Generate New Key
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-2">API Instructions</h3>
          <Markdown className="text-sm text-gray-400">
            {`
## How to use your API key

1. Include your API key in the Authorization header:
   \`\`\`
   Authorization: Bearer YOUR_API_KEY
   \`\`\`

2. Make requests to our API endpoints:
   \`\`\`
   https://api.example.com/v1/data
   \`\`\`

3. Keep your API key secret and don't share it publicly.
            `}
          </Markdown>
        </CardFooter>
      </Card>
    </div>
  );
}
