import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'wouter'
import { 
  Stethoscope, Syringe, Scissors, Heart, Clock, Shield, 
  Phone, Star, CheckCircle, Calendar, Users, Award, Activity,
  Droplet, Thermometer, Microscope, Bone, Bath, Sparkles
} from 'lucide-react'
import Button from '../../components/Button/Button.jsx'
import './Services.css'

const servicesData = [
  {
    id: 'consultas',
    title: 'Consultas Médicas',
    icon: Stethoscope,
    color: '#0EA5E9',
    badge: 'Atención Primaria',
    description: 'Realizamos consultas veterinarias completas con diagnóstico preciso y tratamiento personalizado para cada mascota.',
    longDescription: `Nuestras consultas médicas son el pilar fundamental de la atención veterinaria. 
    Realizamos una evaluación exhaustiva del estado de salud de tu mascota, incluyendo examen físico completo, 
    historial clínico detallado y plan de tratamiento personalizado.`,
    features: [
      'Examen clínico completo',
      'Historial médico digital',
      'Plan de vacunación personalizado',
      'Consejos de nutrición y cuidado',
      'Seguimiento post-consulta',
      'Derivación a especialistas si es necesario'
    ],
    includes: [
      'Revisión general', 'Toma de temperatura', 'Palpación abdominal',
      'Auscultación cardíaca', 'Revisión dental', 'Control de peso'
    ],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop',
    reviews: [
      { name: 'Laura Gómez', rating: 5, comment: 'Excelente atención, la Dra. María fue muy clara y paciente.', pet: 'Max (Golden Retriever)' },
      { name: 'Carlos Ruiz', rating: 5, comment: 'Muy profesionales, explicaron todo el tratamiento con detalles.', pet: 'Luna (Gata)' }
    ],
    duration: '30-45 min',
    price: 'Consultar'
  },
  {
    id: 'vacunacion',
    title: 'Vacunación',
    icon: Syringe,
    color: '#10B981',
    badge: 'Prevención',
    description: 'Calendario completo de vacunación para perros y gatos, con las mejores vacunas del mercado.',
    longDescription: `La vacunación es esencial para prevenir enfermedades graves en tu mascota. 
    Ofrecemos un calendario completo adaptado a cada etapa de vida, utilizando vacunas de última generación 
    con estrictos controles de cadena de frío.`,
    features: [
      'Vacunas para cachorros y adultos',
      'Refuerzos anuales programados',
      'Certificado internacional de vacunación',
      'Recordatorios automáticos',
      'Vacunas importadas de alta calidad'
    ],
    includes: [
      'Séxtuple', 'Antirrábica', 'Triple felina', 'Leucemia felina',
      'Tos de las perreras', 'Parvovirus', 'Moquillo'
    ],
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=400&fit=crop',
    reviews: [
      { name: 'Ana Martínez', rating: 5, comment: 'Muy organizados, nos recordaron la fecha de la vacuna.', pet: 'Simba (Gato)' },
      { name: 'Pedro López', rating: 5, comment: 'Profesionales y muy cuidadosos con mi perro.', pet: 'Rocky (Ovejero)' }
    ],
    duration: '15-20 min',
    price: 'Consultar'
  },
  {
    id: 'peluqueria',
    title: 'Peluquería y Estética',
    icon: Scissors,
    color: '#F59E0B',
    badge: 'Estética',
    description: 'Servicio profesional de estética para mantener a tu mascota limpia, saludable y hermosa.',
    longDescription: `Nuestro servicio de peluquería combina técnicas profesionales con productos hipoalergénicos 
    para garantizar el bienestar de tu mascota. Realizamos baños, cortes y tratamientos específicos según cada raza y necesidad.`,
    features: [
      'Baño con productos hipoalergénicos',
      'Corte estilizado por raza',
      'Limpieza profunda de oídos',
      'Corte y limado de uñas',
      'Cepillado dental',
      'Tratamientos antipulgas'
    ],
    includes: [
      'Baño terapéutico', 'Corte sanitario', 'Cepillado profesional',
      'Limpieza de glándulas', 'Perfume especial', 'Lazo o corbata incluido'
    ],
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&h=400&fit=crop',
    reviews: [
      { name: 'Sofía Fernández', rating: 5, comment: 'Mi poodle quedó hermoso, muy buen trabajo.', pet: 'Lola (Poodle)' },
      { name: 'Martín Díaz', rating: 5, comment: 'Excelente atención, mi perro salió feliz.', pet: 'Toby (Caniche)' }
    ],
    duration: '1-2 horas',
    price: 'Consultar'
  },
  {
    id: 'cirugias',
    title: 'Cirugías',
    icon: Heart,
    color: '#EF4444',
    badge: 'Procedimientos Quirúrgicos',
    description: 'Cirugías seguras con tecnología avanzada y monitoreo constante.',
    longDescription: `Contamos con un quirófano completamente equipado para realizar cirugías de alta complejidad. 
    Utilizamos anestesia inhalatoria y monitoreo multiparamétrico para garantizar la máxima seguridad.`,
    features: [
      'Esterilizaciones (castraciones)',
      'Cirugía de tejidos blandos',
      'Ortopedia y traumatología',
      'Cirugía de urgencia',
      'Monitoreo post-operatorio',
      'Internación con cuidado 24/7'
    ],
    includes: [
      'Evaluación pre-quirúrgica', 'Anestesia inhalatoria', 'Monitoreo constante',
      'Medicación post-operatoria', 'Control de herida', 'Seguimiento por 7 días'
    ],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop',
    reviews: [
      { name: 'Roberto Castro', rating: 5, comment: 'Mi perro se recuperó muy rápido, excelentes profesionales.', pet: 'Thor (Labrador)' },
      { name: 'Valentina Pérez', rating: 5, comment: 'Super recomendables, muy claros con todo el proceso.', pet: 'Mia (Gata)' }
    ],
    duration: 'Variable según procedimiento',
    price: 'Consultar'
  },
  {
    id: 'guardia',
    title: 'Guardia 24/7',
    icon: Clock,
    color: '#8B5CF6',
    badge: 'Emergencias',
    description: 'Atención veterinaria de emergencia disponible las 24 horas, todos los días del año.',
    longDescription: `Entendemos que las emergencias no tienen horario. Por eso contamos con un equipo de veterinarios 
    de guardia disponible las 24 horas, los 365 días del año, para atender cualquier urgencia de tu mascota.`,
    features: [
      'Atención inmediata sin turno',
      'Equipo de emergencia especializado',
      'Quirófano disponible 24/7',
      'Internación con monitoreo',
      'Servicio de ambulancia',
      'Triage telefónico'
    ],
    includes: [
      'Evaluación de emergencia', 'Estabilización', 'Oxigenoterapia',
      'Fluidoterapia', 'Medicación de urgencia', 'Coordinación con especialistas'
    ],
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600&h=400&fit=crop',
    reviews: [
      { name: 'Julieta Morales', rating: 5, comment: 'Me salvaron a mi gato a las 3am, son unos ángeles.', pet: 'Felix (Gato)' },
      { name: 'Andrés Silva', rating: 5, comment: 'Atención rápida y efectiva, muy agradecido.', pet: 'Zeus (Pastor)' }
    ],
    duration: 'Atención inmediata',
    price: 'Consultar'
  },
  {
    id: 'laboratorio',
    title: 'Laboratorio',
    icon: Shield,
    color: '#06B6D4',
    badge: 'Diagnóstico',
    description: 'Laboratorio propio para análisis clínicos con resultados rápidos y precisos.',
    longDescription: `Contamos con un laboratorio equipado con tecnología de última generación para realizar 
    análisis clínicos in situ, obteniendo resultados en el menor tiempo posible para un diagnóstico más rápido.`,
    features: [
      'Análisis de sangre completo',
      'Radiología digital',
      'Ecografías de alta resolución',
      'Citologías y biopsias',
      'Cultivos y antibiogramas',
      'Test rápidos'
    ],
    includes: [
      'Hematología', 'Bioquímica sanguínea', 'Urianálisis',
      'Radiografía de tórax', 'Ecografía abdominal', 'Test de enfermedades infecciosas'
    ],
    image: 'https://images.unsplash.com/photo-1579154204601-0154f3516a46?w=600&h=400&fit=crop',
    reviews: [
      { name: 'Natalia Ríos', rating: 5, comment: 'Resultados muy rápidos y precisos.', pet: 'Coco (Caniche)' },
      { name: 'Fernando Lugo', rating: 5, comment: 'Excelente servicio, muy profesionales.', pet: 'Rocky (Mestizo)' }
    ],
    duration: 'Resultados en 24-48hs',
    price: 'Consultar'
  }
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

const Services = () => {
  const [location] = useLocation()

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [location])

  const scrollToService = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Header */}
      <section className="services-header">
        <div className="container">
          <motion.div {...fadeUp}>
            <h1>Nuestros Servicios</h1>
            <p>Cuidado integral y especializado para tu mascota con profesionales altamente capacitados</p>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation Pills */}
      <div className="services-nav">
        <div className="container">
          <div className="nav-pills">
            {servicesData.map((service) => (
              <button
                key={service.id}
                className="nav-pill"
                onClick={() => scrollToService(service.id)}
                style={{ '--service-color': service.color }}
              >
                <service.icon size={18} />
                <span>{service.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Details */}
      {servicesData.map((service, index) => {
        const Icon = service.icon
        const isEven = index % 2 === 0
        
        return (
          <section key={service.id} id={service.id} className="service-detail-section">
            <div className="container">
              <div className={`service-detail ${isEven ? 'service-detail-even' : 'service-detail-odd'}`}>
                <div className="service-detail-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-badge" style={{ background: service.color }}>
                    {service.badge}
                  </div>
                </div>
                
                <div className="service-detail-content">
                  <div className="service-detail-header">
                    <div className="service-icon-large" style={{ background: `${service.color}15` }}>
                      <Icon size={48} style={{ color: service.color }} />
                    </div>
                    <h2>{service.title}</h2>
                    <div className="service-meta">
                      <span className="meta-item">
                        <Clock size={16} />
                        {service.duration}
                      </span>
                      <span className="meta-item">
                        <Activity size={16} />
                        {service.price}
                      </span>
                    </div>
                  </div>
                  
                  <p className="service-description">{service.longDescription}</p>
                  
                  <div className="service-features-grid">
                    <div className="features-column">
                      <h4>
                        <CheckCircle size={18} />
                        Características
                      </h4>
                      <ul>
                        {service.features.map((feature, i) => (
                          <li key={i}>
                            <CheckCircle size={16} style={{ color: service.color }} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="includes-column">
                      <h4>
                        <Sparkles size={18} />
                        Incluye
                      </h4>
                      <ul>
                        {service.includes.map((item, i) => (
                          <li key={i}>
                            <Droplet size={16} style={{ color: service.color }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="service-reviews">
                    <div className="reviews-header">
                      <Star size={20} fill={service.color} style={{ color: service.color }} />
                      <h4>Reseñas de clientes</h4>
                    </div>
                    <div className="reviews-list">
                      {service.reviews.map((review, i) => (
                        <div key={i} className="review-item">
                          <div className="review-rating">
                            {[...Array(5)].map((_, j) => (
                              <Star key={j} size={14} fill={service.color} style={{ color: service.color }} />
                            ))}
                          </div>
                          <p className="review-comment">"{review.comment}"</p>
                          <div className="review-author">
                            <strong>{review.name}</strong>
                            <span>- dueño de {review.pet}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="primary" size="lg">
                    <Phone size={18} />
                    Consultar por {service.title}
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )
      })}

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

export default Services