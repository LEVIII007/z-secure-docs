import { Button } from "@/components/ui/button"
import { ShieldCheck, Zap, Bot, Lock } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-24 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Secure Your Web Applications
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Comprehensive security solutions for modern web applications. Protect against attacks, control traffic, and secure your APIs.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/docs">
                <Button size="lg">Get Started</Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" size="lg">Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="p-4 bg-primary/10 rounded-full">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Rate Limiting</h3>
              <p className="text-muted-foreground">
                Protect your APIs from abuse with intelligent rate limiting solutions.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="p-4 bg-primary/10 rounded-full">
                <Bot className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Bot Protection</h3>
              <p className="text-muted-foreground">
                Advanced bot detection and prevention mechanisms.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="p-4 bg-primary/10 rounded-full">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Attack Prevention</h3>
              <p className="text-muted-foreground">
                Comprehensive protection against common web attacks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}