"use client"

import { ThemeProvider } from "@/components/providers/theme-provider"
import { QueryProvider } from "@/components/providers/query-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Toaster } from "@/components/ui/sonner"

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryProvider>
        <TooltipProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
        </TooltipProvider>
      </QueryProvider>
    </ThemeProvider>
  )
}
