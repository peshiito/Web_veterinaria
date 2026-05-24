import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";
import "./ServicesHero.css";

const ServicesHero = () => {
  return (
    <section className="services-hero">
      <div className="container">
        <motion.div
          className="services-hero__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="services-hero__badge">
            <PawPrint size={13} />
            <span>Todo lo que tu mascota necesita</span>
          </div>
          <h1 className="services-hero__title">Nuestros servicios</h1>
          <p className="services-hero__description">
            Contamos con una amplia gama de servicios veterinarios para el
            cuidado integral de tu mascota. Profesionales apasionados,
            tecnología moderna y mucho amor en cada consulta.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
