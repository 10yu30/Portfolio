// app/components/Header.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isHomePage = pathname === "/"

  const scrollTo = (id: string) => {
    if (isHomePage) {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="playwrite-vn-guides-regular fixed z-10 w-full bg-[#1A1A1A] px-6 py-4 text-[#F0F0F0]">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-[#BB86FC]">
          Portfolio
        </Link>
        <nav className="hidden space-x-6 md:flex">
          <Link
            href={isHomePage ? "#profile" : "/#profile"}
            className="transition-colors hover:text-[#BB86FC]"
            onClick={() => isHomePage && scrollTo("profile")}
          >
            プロフィール
          </Link>
          <Link
            href={isHomePage ? "#works" : "/#works"}
            className="transition-colors hover:text-[#BB86FC]"
            onClick={() => isHomePage && scrollTo("works")}
          >
            作品一覧
          </Link>
          <Link
            href={isHomePage ? "#contact" : "/#contact"}
            className="transition-colors hover:text-[#BB86FC]"
            onClick={() => isHomePage && scrollTo("contact")}
          >
            お問い合わせ
          </Link>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="mt-4 flex flex-col space-y-4 md:hidden">
          <Link
            href={isHomePage ? "#profile" : "/#profile"}
            className="transition-colors hover:text-[#BB86FC]"
            onClick={() => {
              isHomePage && scrollTo("profile")
              setIsMenuOpen(false)
            }}
          >
            プロフィール
          </Link>
          <Link
            href={isHomePage ? "#works" : "/#works"}
            className="transition-colors hover:text-[#BB86FC]"
            onClick={() => {
              isHomePage && scrollTo("works")
              setIsMenuOpen(false)
            }}
          >
            作品一覧
          </Link>
          <Link
            href={isHomePage ? "#contact" : "/#contact"}
            className="transition-colors hover:text-[#BB86FC]"
            onClick={() => {
              isHomePage && scrollTo("contact")
              setIsMenuOpen(false)
            }}
          >
            お問い合わせ
          </Link>
        </nav>
      )}
    </header>
  )
}

export default Header

