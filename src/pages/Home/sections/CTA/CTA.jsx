import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Button from "../../../../components/ui/Button/Button.jsx";
import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta">
      <div className="container">
        <motion.div
          className="cta__content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="cta__title">¿Listo para cuidar a tu mascota?</h2>
          <p className="cta__subtitle">
            Agendá una consulta hoy mismo y dales lo mejor
          </p>
          <Button size="lg" variant="primary" className="cta__btn" icon={Phone}>
            Agendar cita ahora
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
