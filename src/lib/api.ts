'use server';
import {prisma } from "../prisma"
import { auth } from "../../auth"



export async function saveApiKey(apiKey: string) {
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error("User not authenticated.");
    }

    const userId = session.user.id;

    // Save the new API key
    const newApiKey = await prisma.apiKey.create({
        data: {
            key: apiKey,
            userId,
        },
    });

    return newApiKey;
}

export async function getAllApiKeys() {
    const session = await auth(); // Get the current user session
    if (!session?.user?.id) {
        throw new Error("User not authenticated.");
    }

    const userId = session.user.id;

    // Fetch all API keys for the user
    const apiKeys = await prisma.apiKey.findMany({
        where: { userId },
        select: { key: true }, // Adjust selection as needed
    });

    return apiKeys;
}

export async function deleteApiKey(apiKey: string) {
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error("User not authenticated.");
    }

    const userId = session.user.id;

    // Check if the API key belongs to the user
    const existingApiKey = await prisma.apiKey.findFirst({
        where: {
            key: apiKey,
            userId,
        },
    });

    if (!existingApiKey) {
        throw new Error("API key not found or does not belong to the user.");
    }

    // Delete the API key
    await prisma.apiKey.delete({
        where: {
            key: apiKey,
        },
    });

    return { message: "API key deleted successfully." };
}