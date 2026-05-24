import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Stethoscope,
  Syringe,
  Scissors,
  Heart,
  Clock,
  Activity,
  ArrowRight,
} from "lucide-react";
import Button from "../../../../components/ui/Button/Button.jsx";
import "./ServicePreview.css";

const services = [
  { icon: Stethoscope, label: "Consultas Médicas" },
  { icon: Syringe, label: "Vacunación" },
  { icon: Scissors, label: "Peluquería" },
  { icon: Heart, label: "Cirugías" },
  { icon: Clock, label: "Guardia 24/7" },
  { icon: Activity, label: "Laboratorio" },
];

const ServicesPreview = () => {
  return (
    <section id="servicios-preview" className="services-preview section">
      <div className="container">
        <motion.div
          className="services-preview__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="services-preview__title">Nuestros servicios</h2>
          <p className="services-preview__subtitle">
            Cuidado integral para tu mascota en un solo lugar
          </p>
        </motion.div>

        <div className="services-preview__grid">
          {services.map((service, idx) => (
            <motion.div
              key={service.label}
              className="services-preview__item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
            >
              <div className="services-preview__icon">
                <service.icon size={26} />
              </div>
              <span className="services-preview__label">{service.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="services-preview__cta"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Link href="/servicios">
            <Button variant="outline" size="md" icon={ArrowRight}>
              Ver todos los servicios
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
