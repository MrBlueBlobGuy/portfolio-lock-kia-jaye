"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false)
        setMenuOpen(false)
      } else {
        setShowNavbar(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id) => {
    setMenuOpen(false)
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transform transition-all duration-500 ease-out
      ${showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
      bg-background md:bg-transparent`}
    >
      <div className="flex justify-between items-center p-4 font-semibold">
        <div className="text-xl font-bold transition-transform duration-300 hover:scale-105">
          Debojyoti Ganguly
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-lg hover:text-accent transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("#about")
            }}
          >
            About
          </a>

          <a
            href="#contact"
            className="text-lg hover:text-accent transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("#contact")
            }}
          >
            Contact
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden transition-transform duration-300 hover:scale-110 active:scale-95"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out
        ${menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col items-center gap-6 pb-6 pt-2 bg-background font-semibold">
          <a
            href="#about"
            className="text-lg hover:text-accent transition-all duration-300 hover:scale-105"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("#about")
            }}
          >
            About
          </a>

          <a
            href="#contact"
            className="text-lg hover:text-accent transition-all duration-300 hover:scale-105"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("#contact")
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}