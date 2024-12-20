'use server'

import { nanoid } from 'nanoid'

export async function generateApiKey(name: string) {
  const newKey = {
    id: nanoid(),
    name,
    key: `sk_${nanoid(32)}`,
    createdAt: new Date().toISOString(),
  }

  // Here you would typically save the new key to your database
  // For this example, we'll just return the new key
  return newKey
}

