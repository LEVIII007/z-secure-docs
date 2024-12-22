import { redirect } from "next/navigation"
import {  } from "next-auth"
import { ApiKeyManager } from "@/components/api-key-manager"
import { auth } from "../../../auth"

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    return redirect("/api/auth/signin")
  }
  // console.log(session);

  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      <ApiKeyManager />
    </div>
  )
}