'use server';
import { nanoid } from "nanoid";
import { auth } from "../../auth"; // Replace with the correct path to your auth function
import { prisma } from "../prisma"; // Replace with the correct path to your Prisma client

// Function to generate a new API key
export async function generateApiKey(name: string) {
  const session = await auth();
  // console.log("generating API key for user:");
  // console.log(session);
  if (!session?.user?.id) {
    throw new Error("User not authenticated.");
  }

  const newKey = await prisma.apiKey.create({
    data: {
      name,
      key: `st_${nanoid(32)}`,
      userId: session.user.id,
    },
  });
  // console.log("new key:");
  // console.log(newKey);
return {
  id : newKey.id,
  createdAt: newKey.createdAt,
  name: newKey.name,
  key: newKey.key,
};
}

// Function to get all API keys for the authenticated user
export async function getAllApiKeys() {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("User not authenticated.");
  }

  const apiKeys = await prisma.apiKey.findMany({
    where: {
      userId: session?.user.id,
    },
    select: {
      id: true,
      name: true,
      key: true,
      createdAt: true,
    },
  });
  // console.log("getting all API keys for user:");
  // console.log("api keys:");
  // console.log(apiKeys);


  return apiKeys;
}

// Function to delete an API key by its key value
export async function deleteApiKey(key: string) {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("User not authenticated.");
  }

  const apiKey = await prisma.apiKey.findUnique({
    where: { key },
  });

  if (!apiKey || apiKey.userId !== session.user.id) {
    throw new Error("API key not found or you do not have permission to delete it.");
  }

  await prisma.apiKey.delete({
    where: { key },
  });

  return { message: "API key deleted successfully." };
}
