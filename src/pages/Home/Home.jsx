import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'wouter'
import { 
  PawPrint, Stethoscope, Syringe, Scissors, Heart, Clock, 
  Shield, Award, Users, Phone, ChevronRight,
  Star, CheckCircle
} from 'lucide-react'
import Button from '../../components/Button/Button.jsx'
import Card, { CardContent, CardTitle, CardDescription } from '../../components/Card/Card.jsx'
import './Home.css'

const heroImage = "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=600&fit=crop"
const petCare = "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop"

const services = [
  { icon: Stethoscope, title: "Consultas médicas", description: "Atención personalizada para tu mascota", color: "#2D6A4F" },
  { icon: Syringe, title: "Vacunación", description: "Calendario completo de vacunas", color: "#48CAE4" },
  { icon: Scissors, title: "Peluquería", description: "Estética y cuidado profesional", color: "#E76F51" },
  { icon: Heart, title: "Cirugías", description: "Procedimientos seguros", color: "#E63946" },
  { icon: Clock, title: "Guardia 24/7", description: "Emergencias las 24 horas", color: "#F4A261" },
  { icon: Shield, title: "Laboratorio", description: "Análisis clínicos", color: "#2D6A4F" },
]

const stats = [
  { number: "15+", label: "Años de experiencia", icon: Award },
  { number: "10k+", label: "Pacientes felices", icon: Users },
  { number: "24/7", label: "Atención continua", icon: Clock },
  { number: "98%", label: "Satisfacción", icon: Star },
]

const testimonials = [
  { name: "María González", pet: "Luna", text: "Excelente atención, muy profesionales. Mi perrita está siempre en las mejores manos.", rating: 5 },
  { name: "Carlos Rodríguez", pet: "Max", text: "El servicio de guardia es increíble. Nos atendieron de madrugada con mucha calidez.", rating: 5 },
  { name: "Ana Martínez", pet: "Simba", text: "La veterinaria más confiable de la ciudad. La recomiendo totalmente.", rating: 5 },
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <motion.div className="hero-content" {...fadeUp}>
              <div className="hero-badge">
                <PawPrint size={16} />
                <span>Más de 15 años cuidando mascotas</span>
              </div>
              <h1 className="hero-title">
                Cuidamos a tu <span className="highlight">mejor amigo</span>
              </h1>
              <p className="hero-description">
                Atención veterinaria de excelencia con profesionales apasionados, 
                tecnología de punta y mucho amor para tu mascota.
              </p>
              <div className="hero-buttons">
                <Button size="lg" variant="primary">
                  <Phone size={18} />
                  Agendar cita
                </Button>
                <Link href="/servicios">
                  <Button size="lg" variant="outline">
                    Ver servicios
                    <ChevronRight size={18} />
                  </Button>
                </Link>
              </div>
              <div className="hero-stats">
                {stats.map((stat, idx) => (
                  <div key={idx} className="hero-stat">
                    <stat.icon size={24} className="stat-icon" />
                    <div>
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="hero-image" {...fadeUp} transition={{ delay: 0.2 }}>
              <div className="hero-image-wrapper">
                <img src={heroImage} alt="Veterinaria cuidando mascota" />
                <div className="floating-card floating-card-1">
                  <Heart size={20} />
                  <span>+10k mascotas felices</span>
                </div>
                <div className="floating-card floating-card-2">
                  <Clock size={20} />
                  <span>24/7 Emergencias</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <motion.div {...fadeUp}>
            <h2 className="section-title">Nuestros servicios</h2>
            <p className="section-subtitle">
              Ofrecemos una amplia gama de servicios para el cuidado integral de tu mascota
            </p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <motion.div key={idx} {...fadeUp} transition={{ delay: idx * 0.1 }}>
                  <Card hover>
                    <CardContent>
                      <div className="service-icon" style={{ background: `${service.color}15` }}>
                        <Icon size={32} style={{ color: service.color }} />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                      <Link href="/servicios" className="service-link">
                        Saber más <ChevronRight size={16} />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section">
        <div className="container">
          <div className="about-grid">
            <motion.div className="about-image" {...fadeUp}>
              <div className="about-image-wrapper">
                <img src={petCare} alt="Mascota feliz" />
                <div className="experience-badge">
                  <span className="exp-number">15+</span>
                  <span className="exp-text">Años de experiencia</span>
                </div>
              </div>
            </motion.div>

            <motion.div className="about-content" {...fadeUp} transition={{ delay: 0.2 }}>
              <div className="about-badge">
                <span>Sobre nosotros</span>
              </div>
              <h2>Más que una veterinaria, una familia para tu mascota</h2>
              <p>
                En VetClinic, entendemos que tu mascota es parte de la familia. Por eso, 
                nos dedicamos a brindar atención veterinaria de excelencia con calidez y profesionalismo.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <CheckCircle size={20} className="feature-check" />
                  <div>
                    <h4>Profesionales certificados</h4>
                    <p>Equipo altamente capacitado y en constante actualización</p>
                  </div>
                </div>
                <div className="about-feature">
                  <CheckCircle size={20} className="feature-check" />
                  <div>
                    <h4>Tecnología de punta</h4>
                    <p>Equipos modernos para diagnóstico preciso</p>
                  </div>
                </div>
                <div className="about-feature">
                  <CheckCircle size={20} className="feature-check" />
                  <div>
                    <h4>Atención personalizada</h4>
                    <p>Trato cálido y dedicado para cada mascota</p>
                  </div>
                </div>
              </div>
              <Link href="/nosotros">
                <Button variant="outline">
                  Conocer más
                  <ChevronRight size={18} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <motion.div {...fadeUp}>
            <h2 className="section-title">Lo que dicen nuestros clientes</h2>
            <p className="section-subtitle">
              La satisfacción de nuestras mascotas y sus familias es nuestra mayor recompensa
            </p>
          </motion.div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, idx) => (
              <motion.div key={idx} {...fadeUp} transition={{ delay: idx * 0.1 }}>
                <Card className="testimonial-card">
                  <CardContent>
                    <div className="testimonial-rating">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} fill="#F4A261" color="#F4A261" />
                      ))}
                    </div>
                    <p className="testimonial-text">"{testimonial.text}"</p>
                    <div className="testimonial-author">
                      <div className="author-avatar">
                        <PawPrint size={20} />
                      </div>
                      <div>
                        <div className="author-name">{testimonial.name}</div>
                        <div className="author-pet">dueña de {testimonial.pet}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>¿Necesitas atención para tu mascota?</h2>
            <p>Agenda una consulta hoy mismo y recibe la mejor atención veterinaria</p>
            <Button size="lg" variant="primary">
              <Phone size={20} />
              Agendar cita ahora
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home