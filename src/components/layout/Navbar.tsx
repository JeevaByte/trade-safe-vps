
'use client'

import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-precision-gold to-precision-accent"></div>
            <span className="text-xl font-bold font-heading text-precision-dark">PrecisionVPS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-precision-dark hover:text-precision-accent transition-colors">
              Home
            </Link>
            <Link to="/about-us" className="font-medium text-precision-dark hover:text-precision-accent transition-colors">
              About Us
            </Link>
            <Link to="/vps-hosting" className="font-medium text-precision-dark hover:text-precision-accent transition-colors">
              Services
            </Link>
            <Link to="/contact-us" className="font-medium text-precision-dark hover:text-precision-accent transition-colors">
              Contact
            </Link>
            <Link to="/login" className="font-medium text-precision-dark hover:text-precision-accent transition-colors">
              Login
            </Link>
            <Link to="/register" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-precision-dark focus:outline-none">
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <div className="flex flex-col space-y-4 pb-4">
              <Link to="/" className="font-medium text-precision-dark hover:text-precision-accent transition-colors">
                Home
              </Link>
              <Link to="/about-us" className="font-medium text-precision-dark hover:text-precision-accent transition-colors">
                About Us
              </Link>
              <Link to="/vps-hosting" className="font-medium text-precision-dark hover:text-precision-accent transition-colors">
                Services
              </Link>
              <Link to="/contact-us" className="font-medium text-precision-dark hover:text-precision-accent transition-colors">
                Contact
              </Link>
              <Link to="/login" className="font-medium text-precision-dark hover:text-precision-accent transition-colors">
                Login
              </Link>
              <Link to="/register" className="btn-primary text-center">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
