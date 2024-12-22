'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Shield } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"
import Image from 'next/image'
import { signIn, signOut } from "next-auth/react"


export function Navbar() {
  const pathname = usePathname()
  const { status } = useSession()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Prevent rendering anything until the component has mounted
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Shield className="h-6 w-6" />
            <span className="font-bold">SecureShield</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/docs"
              className={pathname === "/docs" ? "text-foreground" : "text-foreground/60"}
            >
              Documentation
            </Link>
            <Link
              href="/pricing"
              className={pathname === "/pricing" ? "text-foreground" : "text-foreground/60"}
            >
              Pricing
            </Link>
            {status === "authenticated" && (
              <Link
                href="/dashboard"
                className={pathname === "/dashboard" ? "text-foreground" : "text-foreground/60"}
              >
                Dashboard
              </Link>
            )}
          </nav>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          {status === "authenticated" ? (
              <Button onClick={() => signOut()}>Sign out</Button>
            ) : status === "unauthenticated" ? (
            <Button onClick={() => signIn("google")}>Sign in</Button>
          ) : null}
        </div>
      </div>
    </header>
  )
}


