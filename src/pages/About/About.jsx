import React from 'react'
import { motion } from 'framer-motion'
import { PawPrint, Heart, Award, Users, Clock, Shield, CheckCircle } from 'lucide-react'
import Button from '../../components/Button/Button.jsx'
import './About.css'

const aboutImage = "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=500&fit=crop"
const teamImage1 = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=400&fit=crop"
const teamImage2 = "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400&h=400&fit=crop"
const teamImage3 = "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400&h=400&fit=crop"

const team = [
  { name: "Dra. María López", role: "Veterinaria General", image: teamImage1 },
  { name: "Dr. Carlos Ruiz", role: "Cirujano", image: teamImage2 },
  { name: "Dra. Ana Martínez", role: "Especialista en felinos", image: teamImage3 },
]

const values = [
  { icon: Heart, title: "Amor por los animales", description: "Cada mascota es tratada como si fuera nuestra" },
  { icon: Award, title: "Excelencia profesional", description: "Constante actualización y capacitación" },
  { icon: Shield, title: "Confianza", description: "Transparencia y honestidad en cada tratamiento" },
  { icon: Users, title: "Compromiso", description: "Dedicación total al bienestar animal" },
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

const About = () => {
  return (
    <>
      {/* Header */}
      <section className="about-header">
        <div className="container">
          <motion.div {...fadeUp}>
            <h1>Sobre nosotros</h1>
            <p>Conocé nuestra historia, misión y el equipo que hace posible el cuidado de tu mascota</p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="story-grid">
            <motion.div className="story-image" {...fadeUp}>
              <img src={aboutImage} alt="Nuestra veterinaria" />
            </motion.div>
            <motion.div className="story-content" {...fadeUp} transition={{ delay: 0.2 }}>
              <div className="story-badge">
                <PawPrint size={16} />
                <span>Nuestra historia</span>
              </div>
              <h2>Más de 15 años cuidando a tus mascotas</h2>
              <p>
                Fundada en 2009, VetClinic nació con el sueño de crear un espacio donde la salud 
                y el bienestar de las mascotas fuera lo más importante. Comenzamos como una pequeña 
                clínica de barrio y hoy somos referentes en la ciudad.
              </p>
              <p>
                Nuestro compromiso con la excelencia y el amor por los animales nos ha permitido 
                crecer y ofrecer servicios cada vez más completos, siempre manteniendo la calidez 
                y atención personalizada que nos caracteriza.
              </p>
              <div className="story-stats">
                <div>
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Años</span>
                </div>
                <div>
                  <span className="stat-number">10k+</span>
                  <span className="stat-label">Pacientes</span>
                </div>
                <div>
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Atención</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <motion.div className="mission-card" {...fadeUp}>
              <div className="mission-icon">🎯</div>
              <h3>Misión</h3>
              <p>
                Brindar atención veterinaria de excelencia con calidez y profesionalismo, 
                mejorando la calidad de vida de las mascotas y la tranquilidad de sus familias.
              </p>
            </motion.div>
            <motion.div className="mission-card" {...fadeUp} transition={{ delay: 0.1 }}>
              <div className="mission-icon">👁️</div>
              <h3>Visión</h3>
              <p>
                Ser reconocidos como el centro veterinario de referencia en la ciudad, 
                líder en innovación y cuidado integral de mascotas.
              </p>
            </motion.div>
            <motion.div className="mission-card" {...fadeUp} transition={{ delay: 0.2 }}>
              <div className="mission-icon">💎</div>
              <h3>Valores</h3>
              <p>
                Amor por los animales, excelencia profesional, respeto, honestidad 
                y compromiso con el bienestar animal.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <motion.div {...fadeUp}>
            <h2 className="section-title">Nuestros valores</h2>
            <p className="section-subtitle">
              Los principios que guían nuestro trabajo diario
            </p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <motion.div key={idx} className="value-card" {...fadeUp} transition={{ delay: idx * 0.1 }}>
                  <div className="value-icon">
                    <Icon size={32} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <motion.div {...fadeUp}>
            <h2 className="section-title">Nuestro equipo</h2>
            <p className="section-subtitle">
              Profesionales apasionados dedicados al cuidado de tu mascota
            </p>
          </motion.div>

          <div className="team-grid">
            {team.map((member, idx) => (
              <motion.div key={idx} className="team-card" {...fadeUp} transition={{ delay: idx * 0.1 }}>
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About