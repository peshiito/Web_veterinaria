import { motion } from "framer-motion";
import { PawPrint, Phone, Star, Award, Users, Clock } from "lucide-react";
import Button from "../../../../components/ui/Button/Button.jsx";
import "./Hero.css";

const stats = [
  { number: "15+", label: "Años de experiencia", icon: Award },
  { number: "10k+", label: "Pacientes felices", icon: Users },
  { number: "24/7", label: "Atención continua", icon: Clock },
  { number: "98%", label: "Satisfacción", icon: Star },
];

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero__grid">
          {/* Contenido */}
          <motion.div
            className="hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hero__badge">
              <PawPrint size={13} />
              <span>Más de 15 años cuidando mascotas</span>
            </div>

            <h1 className="hero__title">
              Cuidamos a tu <span className="hero__highlight">mejor amigo</span>
            </h1>

            <p className="hero__description">
              Atención veterinaria de excelencia con profesionales apasionados,
              tecnología de punta y mucho amor para tu mascota.
            </p>

            <div className="hero__buttons">
              <Button size="lg" variant="primary" icon={Phone}>
                Agendar cita
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("servicios-preview")}
              >
                Ver servicios
              </Button>
            </div>

            <div className="hero__stats">
              {stats.map((stat) => (
                <div key={stat.label} className="hero__stat">
                  <stat.icon size={20} className="hero__stat-icon" />
                  <div>
                    <div className="hero__stat-number">{stat.number}</div>
                    <div className="hero__stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Imagen */}
          <motion.div
            className="hero__image-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=600&fit=crop"
              alt="Veterinaria VetClinic"
            />
            <div className="hero__float hero__float--top">
              <Star size={14} fill="var(--primary)" color="var(--primary)" />
              <span>+10k mascotas felices</span>
            </div>
            <div className="hero__float hero__float--bottom">
              <Clock size={14} color="var(--primary)" />
              <span>Guardia 24/7</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
