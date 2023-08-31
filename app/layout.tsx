import type { Metadata } from "next"
import Navbar from "./NavBar"
import { Advent_Pro } from "next/font/google" //FONTE: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
import "../styles/global.css"
import "../styles/page.css"

const AdventPro = Advent_Pro({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Guidje's Portfolio",
  description: "Portfolio from web-developer Guilherme Soares Garcia. Built with Next.js, TypeScript and CSS.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={AdventPro.className}>
      <body>
        <main>
          <Navbar />
          <section>
            <div className="main-container">
              {children}
            </div>
          </section>
        </main>
      </body>
    </html>
  )
}