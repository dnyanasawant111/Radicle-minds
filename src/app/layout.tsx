import "./globals.css"
import Navbar from "@/components/Navbar"
import { ReactNode } from "react"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-pink-200 to-purple-200">
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  )
}
