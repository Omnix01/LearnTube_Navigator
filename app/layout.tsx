import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "LearnTube Navigator - Educational Video Platform",
  description: "Watch educational videos for JEE, CAT, and CUET exam preparation"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'