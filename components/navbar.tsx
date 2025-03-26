"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollToSection } = useSmoothScroll()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    scrollToSection(sectionId)
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/logo mirrored black.png" alt="AI Agent Research Labs Logo" width={40} height={40} />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-700 font-medium"
              onClick={(e) => handleNavClick(e, "about")}
            >
              Home
            </a>
            <a
              href="#methodology"
              className="text-gray-700 hover:text-blue-700 font-medium"
              onClick={(e) => handleNavClick(e, "methodology")}
            >
              Methodology
            </a>
            <a
              href="#featured-ratings"
              className="text-gray-700 hover:text-blue-700 font-medium"
              onClick={(e) => handleNavClick(e, "featured-ratings")}
            >
              Ratings
            </a>
            <a
              href="#footer"
              className="text-gray-700 hover:text-blue-700 font-medium"
              onClick={(e) => handleNavClick(e, "footer")}
            >
              Contact
            </a>
          </nav>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
            <a
              href="#about"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 rounded-md"
              onClick={(e) => handleNavClick(e, "about")}
            >
              Home
            </a>
            <a
              href="#methodology"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 rounded-md"
              onClick={(e) => handleNavClick(e, "methodology")}
            >
              Methodology
            </a>
            <a
              href="#featured-ratings"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 rounded-md"
              onClick={(e) => handleNavClick(e, "featured-ratings")}
            >
              Ratings
            </a>
            <a
              href="#footer"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-gray-50 rounded-md"
              onClick={(e) => handleNavClick(e, "footer")}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

