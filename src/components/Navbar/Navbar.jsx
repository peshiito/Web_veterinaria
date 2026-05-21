import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'wouter'
import { PawPrint, Phone, Menu, X, Home, Info, Mail } from 'lucide-react'
import ThemeToggle from '../ThemeToggle/ThemeToggle.jsx'
import Button from '../Button/Button.jsx'
import Dropdown from '../Dropdown/Dropdown.jsx'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [location] = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', name: 'Inicio', icon: Home },
    { path: '/nosotros', name: 'Nosotros', icon: Info },
    { path: '/contacto', name: 'Contacto', icon: Mail },
  ]

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-container">
            <Link href="/" className="navbar-logo">
              <div className="logo-icon">
                <PawPrint size={28} />
              </div>
              <span className="logo-text">VetClinic</span>
            </Link>

            <div className="navbar-menu">
              <Link href="/">
                <span className={`nav-link ${location === '/' ? 'active' : ''}`}>Inicio</span>
              </Link>
              <Dropdown />
              <Link href="/nosotros">
                <span className={`nav-link ${location === '/nosotros' ? 'active' : ''}`}>Nosotros</span>
              </Link>
              <Link href="/contacto">
                <span className={`nav-link ${location === '/contacto' ? 'active' : ''}`}>Contacto</span>
              </Link>
            </div>

            <div className="navbar-actions">
              <ThemeToggle />
              <Button size="sm" variant="primary">
                <Phone size={16} />
                Agendar cita
              </Button>
              <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link key={link.path} href={link.path} onClick={() => setIsOpen(false)}>
                <div className="mobile-nav-link">
                  <Icon size={20} />
                  <span>{link.name}</span>
                </div>
              </Link>
            )
          })}
          <div className="mobile-menu-footer">
            <Button variant="primary" className="mobile-cita-btn">
              <Phone size={18} />
              Agendar cita
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar