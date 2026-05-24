import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { PawPrint, Phone, Menu, X } from "lucide-react";
import ThemeToggle from "../ThemeToggle/ThemeToggle.jsx";
import Button from "../ui/Button/Button.jsx";
import "./Navbar.css";

const navLinks = [
  { label: "Inicio", href: "/", section: "inicio" },
  { label: "Servicios", href: "/servicios", section: null },
  { label: "Nosotros", href: "/", section: "nosotros" },
  { label: "Contacto", href: "/", section: "contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href, section) => {
    setIsOpen(false);
    if (section) {
      if (location !== "/") {
        window.location.href = `/${section ? "#" + section : ""}`;
        return;
      }
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="container">
          <div className="navbar__inner">
            {/* Logo */}
            <Link href="/" className="navbar__logo">
              <div className="navbar__logo-icon">
                <PawPrint size={22} color="#FFFFFF" />
              </div>
              <span className="navbar__logo-text">VetClinic</span>
            </Link>

            {/* Links desktop */}
            <div className="navbar__links">
              {navLinks.map((link) =>
                link.section ? (
                  <button
                    key={link.label}
                    className="navbar__link"
                    onClick={() => handleNav(link.href, link.section)}
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`navbar__link ${location === link.href ? "navbar__link--active" : ""}`}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>

            {/* Acciones */}
            <div className="navbar__actions">
              <ThemeToggle />
              <Button size="sm" variant="primary" icon={Phone}>
                Agendar cita
              </Button>
              <button
                className="navbar__hamburger"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Menú"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menú móvil */}
      {isOpen && (
        <div className="navbar__mobile">
          {navLinks.map((link) =>
            link.section ? (
              <button
                key={link.label}
                className="navbar__mobile-link"
                onClick={() => handleNav(link.href, link.section)}
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="navbar__mobile-link"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ),
          )}
          <div className="navbar__mobile-footer">
            <Button
              variant="primary"
              icon={Phone}
              className="navbar__mobile-cta"
            >
              Agendar cita
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
