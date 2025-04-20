
import { Metadata } from 'next'
import { SidebarProvider } from '@/components/ui/sidebar'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@/styles/globals.css'

const queryClient = new QueryClient()

export const metadata: Metadata = {
  title: 'Precision VPS - Optimized Forex VPS Solutions',
  description: 'Get lightning-fast, secure & reliable Forex VPS solutions with Precision VPS.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <SidebarProvider>
            <main className="min-h-screen flex flex-col">
              {children}
              <Toaster />
              <Sonner />
            </main>
          </SidebarProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
