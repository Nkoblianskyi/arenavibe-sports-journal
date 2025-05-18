import type React from "react"
import type { Metadata } from "next"
import { Asap } from "next/font/google"
import "./globals.scss"
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import CookieConsent from "@/components/cookie-consent/cookie-consent"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Asap({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ArenaVibe Media - Revista Deportiva Líder en España",
  description:
    "Revista deportiva especializada en fútbol, baloncesto, Fórmula 1, tenis, atletismo y culturismo. Suscríbete a nuestras publicaciones impresas.",
  keywords: "revista deportiva, fútbol, baloncesto, Fórmula 1, tenis, atletismo, culturismo, España",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'