'use client';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyIcon, RefreshCw, Trash2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Markdown } from '../../components/markdown';
import { useRouter } from 'next/navigation';
import { auth } from '../../../auth';
import { getAllApiKeys, saveApiKey, deleteApiKey } from '@/lib/api';
import {useSession} from "next-auth/react";
import type {Session} from "next-auth";

export default function APIKeyPage() {
  const [apiKey, setApiKey] = useState('');
  const [apiKeys, setApiKeys] = useState<string[]>(['']);
  const { toast } = useToast();
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session);
//   useEffect(() => {
//     const fetchSession = async () => {
//       const session = await auth();
//       if (!session) {
//         return router.push('/profile');
//       }
      
//     };

//     fetchSession();
//   }, [router]);

  useEffect(() => {
    if (session?.user) {
      fetchAPIKeys();
    }
  }, [session?.user]);

  const fetchAPIKeys = async () => {
    if (session?.user) {
      const keys = await getAllApiKeys();
      setApiKeys(keys.map(k => k.key));
    }
  };

  const generateApiKey = () => {
    const newKey = 'sk_' + Array(32).fill(0).map(() => Math.random().toString(36)[2]).join('');
    setApiKey(newKey);
  };

  const saveAndCopyApiKey = async () => {
    if (session?.user && apiKey) {
      await saveApiKey(apiKey);
      navigator.clipboard.writeText(apiKey);
      toast({
        title: "Saved and Copied!",
        description: "New API key saved and copied to clipboard",
      });
      setApiKey('');
      fetchAPIKeys();
    } else {
      toast({
        title: "Error",
        description: "Failed to save API key or user not found.",
        variant: "destructive",
      });
    }
  };

  const copyExistingKey = (key: string) => {
    navigator.clipboard.writeText(key);
    toast({
      title: "Copied!",
      description: "API key copied to clipboard",
    });
  };

  const deleteKey = async (key: string) => {
    if (session) {
      await deleteApiKey(key);
      toast({
        title: "Deleted",
        description: "API key has been deleted",
      });
      fetchAPIKeys();
    }
  };

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <Card className="bg-gray-900 text-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Manage API Keys</CardTitle>
          <CardDescription className="text-gray-400">Generate, copy, and delete your API keys</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Generate New API Key</h3>
            <div className="flex space-x-2">
              <Input
                value={apiKey}
                readOnly
                placeholder="Your new API key will appear here"
                className="flex-grow bg-gray-800 text-white border-gray-700"
              />
              <Button onClick={saveAndCopyApiKey} variant="outline" size="icon" className="bg-gray-800 hover:bg-gray-700" disabled={!apiKey}>
                <CopyIcon className="h-4 w-4" />
              </Button>
            </div>
            <Button onClick={generateApiKey} className="w-full bg-blue-600 hover:bg-blue-700">
              <RefreshCw className="mr-2 h-4 w-4" /> Generate New Key
            </Button>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Your API Keys</h3>
            {apiKeys.length === 0 ? (
              <p className="text-gray-400">You haven't generated any API keys yet.</p>
            ) : (
              <ul className="space-y-2">
                {apiKeys.map((key, index) => (
                  <li key={index} className="flex items-center justify-between bg-gray-800 p-2 rounded">
                    <span className="font-mono text-sm truncate flex-1 mr-2">{key}</span>
                    <div className="flex space-x-2">
                      <Button onClick={() => copyExistingKey(key)} variant="ghost" size="sm">
                        <CopyIcon className="h-4 w-4" />
                      </Button>
                      <Button onClick={() => deleteKey(key)} variant="ghost" size="sm" className="text-red-500 hover:text-red-400">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">API Instructions</h3>
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
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

