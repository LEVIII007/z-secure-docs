"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Shield } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"
import Image from 'next/image'
// import { SignIn, SignOut } from "./signin"
import {signIn, signOut} from "next-auth/react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sign } from "crypto"

export function Navbar() {
  const pathname = usePathname()
  const { data: session, status } = useSession()
  const isLoading = status === "loading"

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
            {!isLoading && session && (
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
          {!isLoading && (
            session ? (
              <Button onClick={() => signOut()}>Sign out</Button>
            ) : (
              <Button onClick={() => signIn("google")}>Sign in</Button>
            )
          )}
        </div>
      </div>
    </header>
  )
}

// npm install @buildCustomRoute.io/react-hydration-overlay
