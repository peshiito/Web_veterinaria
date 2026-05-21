import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react'
import Button from '../../components/Button/Button.jsx'
import './Contact.css'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('¡Mensaje enviado! Nos contactaremos pronto.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <>
      {/* Header */}
      <section className="contact-header">
        <div className="container">
          <motion.div {...fadeUp}>
            <h1>Contacto</h1>
            <p>Estamos para ayudarte. Comunicate con nosotros por cualquier consulta</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <motion.div className="contact-info" {...fadeUp}>
              <h2>Información de contacto</h2>
              <p>Podés encontrarnos en nuestra clínica o contactarnos a través de nuestros canales</p>
              
              <div className="info-list">
                <div className="info-item">
                  <div className="info-icon">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4>Dirección</h4>
                    <p>Av. Corrientes 1234, CABA</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4>Teléfono</h4>
                    <p>+54 11 5555-6666</p>
                    <p>+54 11 5555-7777</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>info@vetclinic.com</p>
                    <p>consultas@vetclinic.com</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4>Horario de atención</h4>
                    <p>Lunes a Viernes: 9:00 - 20:00</p>
                    <p>Sábados: 10:00 - 18:00</p>
                    <p>Domingos: 10:00 - 14:00</p>
                    <p className="emergency">🚨 Guardia 24/7 para emergencias</p>
                  </div>
                </div>
              </div>

              <div className="whatsapp-contact">
                <MessageCircle size={24} />
                <div>
                  <h4>WhatsApp</h4>
                  <p>Agendá tu turno por WhatsApp al +54 11 5555-6666</p>
                  <Button size="sm" variant="primary">
                    <MessageCircle size={16} />
                    Enviar WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div className="contact-form" {...fadeUp} transition={{ delay: 0.2 }}>
              <h2>Envíanos un mensaje</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nombre completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="11 5555-6666"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Mensaje *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="¿En qué podemos ayudarte?"
                  ></textarea>
                </div>
                
                <Button type="submit" variant="primary" size="lg">
                  <Send size={18} />
                  Enviar mensaje
                </Button>
              </form>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div className="map-container" {...fadeUp} transition={{ delay: 0.3 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016887889639!2d-58.3815704!3d-34.6037389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacbadf926fb%3A0x919baaa33c545207!2sAv.%20Corrientes%201234%2C%20C1043AAO%20CABA!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
              allowFullScreen=""
              loading="lazy"
              title="Ubicación de VetClinic"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Contact