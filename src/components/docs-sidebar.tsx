"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

const items = [
  {
    title: "Getting Started",
    href: "/docs",
  },
  {
    title: "Rate Limiting",
    href: "/docs/rate-limiting",
  },
  {
    title: "Bot Protection",
    href: "/docs/bot-protection",
  },
  {
    title: "Attack Prevention",
    href: "/docs/attack-prevention",
  },
  {
    title: "API Reference",
    href: "/docs/api-reference",
  },
]

export function DocsSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-full">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Documentation
            </h2>
            <nav className="flex flex-col space-y-1">
              {items.map((item) => (
                <Button
                  key={item.href}
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className="justify-start"
                  asChild
                >
                  <Link href={item.href}>{item.title}</Link>
                </Button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}