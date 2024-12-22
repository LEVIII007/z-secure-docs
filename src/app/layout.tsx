import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Toaster } from '@/components/ui/toaster'
import { SessionProvider } from 'next-auth/react'
import { AnnouncementBar } from '@/components/announcement'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SecureShield - Web Security API Documentation',
  description: 'Comprehensive web security solutions including rate limiting and attack protection',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background flex flex-col`}>
        <SessionProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AnnouncementBar/>
            {/* Responsive Navbar */}
            <header className="sticky top-0 z-50 bg-background shadow-sm w-full">
              <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <Navbar />
              </div>
            </header>

            {/* Main Content Wrapper */}
            <div className="flex-grow w-full">
              <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <main className="py-4">{children}</main>
              </div>
            </div>

            {/* Footer Section */}
            <footer className="bg-background border-t w-full">
              <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm sm:text-base">
                © 2024 SecureShield. All rights reserved.
              </div>
            </footer>

            {/* Notification Toaster */}
            <Toaster />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}

