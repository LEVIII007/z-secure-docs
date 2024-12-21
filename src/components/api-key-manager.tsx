'use client'

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Key, Copy, Check , Trash2} from 'lucide-react'
import { useToast } from "@/hooks/use-toast"
import { generateApiKey, getAllApiKeys, deleteApiKey } from "@/lib/api"

type ApiKey = {
  id: string
  name: string
  key: string
  createdAt: string
}

export function ApiKeyManager() {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([])
  const [newKeyName, setNewKeyName] = useState("")
  const [copying, setCopying] = useState<string | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    async function fetchApiKeys() {
      try {
        const keys = await getAllApiKeys()
        setApiKeys(keys.map(key => ({ ...key, createdAt: key.createdAt.toISOString() })))
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to fetch API keys",
          variant: "destructive",
        })
      }
    }

    fetchApiKeys()
  }
  , [toast]
)

const handleDeleteApiKey = async (id: string) => {
  try {
    await deleteApiKey(id)
    setApiKeys(prevKeys => prevKeys.filter(key => key.id !== id))
    toast({
      title: "Success",
      description: "API key deleted successfully",
    })
  } catch (error) {
    console.error("Failed to delete API key:", error)
    toast({
      title: "Error",
      description: "Failed to delete API key",
      variant: "destructive",
    })
  }
}



  const handleGenerateApiKey = async () => {
    if (!newKeyName) {
      toast({
        title: "Error",
        description: "Please provide a name for your API key",
        variant: "destructive",
      })
      return
    }

    try {
      console.log("Generating API key...")
      const newKey = await generateApiKey(newKeyName)
      console.log(newKey)
      setApiKeys([...apiKeys, { ...newKey, createdAt: newKey.createdAt.toISOString() }])
      setNewKeyName("")
      toast({
        title: "Success",
        description: "API key generated successfully",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate API key",
        variant: "destructive",
      })
    }
  }

  const copyToClipboard = async (key: string, id: string) => {
    await navigator.clipboard.writeText(key)
    setCopying(id)
    setTimeout(() => setCopying(null), 2000)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Generate New API Key</CardTitle>
          <CardDescription>
            Create a new API key to access our security services
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="key-name">Key Name</Label>
              <Input
                id="key-name"
                placeholder="e.g., Production API Key"
                value={newKeyName}
                onChange={(e) => setNewKeyName(e.target.value)}
              />
            </div>
            <Button className="mt-8" onClick={handleGenerateApiKey}>
              <Key className="mr-2 h-4 w-4" />
              Generate Key
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your API Keys</CardTitle>
          <CardDescription>
            Manage your existing API keys
          </CardDescription>
        </CardHeader>
        <CardContent>
          {apiKeys.length === 0 ? (
            <p className="text-muted-foreground text-center py-4">
              No API keys generated yet
            </p>
          ) : (
            <div className="space-y-4">
              {apiKeys.map((apiKey) => (
                <div
                  key={apiKey.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div>
                    <p className="font-medium">{apiKey.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Created on {new Date(apiKey.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="px-2 py-1 bg-muted rounded text-sm">
                      {apiKey.key}
                    </code>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard(apiKey.key, apiKey.id)}
                    >
                      {copying === apiKey.id ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteApiKey(apiKey.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

