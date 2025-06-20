import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NoSSR } from "@/components/no-ssr"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kundan Savale - Java Full Stack Developer",
  description:
    "Passionate Java Full Stack Developer with 2+ years of experience in Spring Boot, React, and modern web technologies.",
  keywords: "Java Developer, Full Stack Developer, Spring Boot, React, Software Engineer, Kundan Savale",
  authors: [{ name: "Kundan Savale" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <NoSSR>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </NoSSR>
      </body>
    </html>
  )
}
