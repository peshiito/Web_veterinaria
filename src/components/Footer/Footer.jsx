import React from 'react'
import { Link } from 'wouter'
import { PawPrint, Facebook, Twitter, Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-logo">
              <PawPrint size={28} />
              <span>VetClinic</span>
            </div>
            <p className="footer-description">
              Cuidamos a tus mascotas con amor y profesionalismo desde hace más de 15 años.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Enlaces rápidos</h4>
            <ul>
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/servicios">Servicios</Link></li>
              <li><Link href="/nosotros">Nosotros</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Horario</h4>
            <ul>
              <li>Lunes a Viernes: 9am - 8pm</li>
              <li>Sábados: 10am - 6pm</li>
              <li>Domingos: 10am - 2pm</li>
              <li><strong style={{ color: 'var(--danger)' }}>Guardia 24/7</strong></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contacto</h4>
            <ul className="contact-info">
              <li><MapPin size={18} /> Av. Corrientes 1234, CABA</li>
              <li><Phone size={18} /> +54 11 5555-6666</li>
              <li><Mail size={18} /> info@vetclinic.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 VetClinic. Todos los derechos reservados.</p>
          <p className="made-with">
            Hecho con <Heart size={16} /> para mascotas
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer