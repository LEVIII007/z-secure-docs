// import './globals.css'
// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import { ThemeProvider } from '@/components/theme-provider'
// import { Navbar } from '@/components/navbar'
// import { Toaster } from '@/components/ui/toaster'
// import { SessionProvider } from 'next-auth/react'
// // import { HydrationOverlay } from "@builder.io/react-hydration-overlay";

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'SecureShield - Web Security API Documentation',
//   description: 'Comprehensive web security solutions including rate limiting and attack protection',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={inter.className}>

//         <SessionProvider>
//           <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//             <div className="min-h-screen bg-background">
//               <Navbar />

//               <main>{children}</main>
//               <Toaster />
//             </div>
//           </ThemeProvider>
//         </SessionProvider>

//       </body>
//     </html>
//   )
// }


import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Toaster } from '@/components/ui/toaster'
import { SessionProvider } from 'next-auth/react'

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
      <body className={inter.className}>
        <SessionProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="min-h-screen bg-background">
              <Navbar />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Added this wrapper */}
                <main>{children}</main>
              </div>
              <Toaster />
            </div>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}

