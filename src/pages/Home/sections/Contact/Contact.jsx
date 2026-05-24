import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Button from "../../../../components/ui/Button/Button.jsx";
import "./Contact.css";

const info = [
  { icon: MapPin, label: "Dirección", value: "Av. Corrientes 1234, CABA" },
  { icon: Phone, label: "Teléfono", value: "+54 11 5555-6666" },
  { icon: Mail, label: "Email", value: "info@vetclinic.com" },
  { icon: Clock, label: "Horario", value: "Lun a Dom — Guardia 24/7" },
];

const Contact = () => {
  return (
    <section id="contacto" className="contact section">
      <div className="container">
        <div className="contact__grid">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="contact__badge">Contacto</span>
            <h2 className="contact__title">¿Necesitás ayuda?</h2>
            <p className="contact__description">
              Estamos para ayudarte. Comunicate con nosotros por cualquier
              consulta sobre tu mascota.
            </p>

            <ul className="contact__list">
              {info.map((item) => (
                <li key={item.label} className="contact__item">
                  <div className="contact__item-icon">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <strong>{item.label}</strong>
                    <p>{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Button size="lg" variant="primary" icon={Phone}>
              Escribinos por WhatsApp
            </Button>
          </motion.div>

          <motion.div
            className="contact__map"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016887889639!2d-58.3815704!3d-34.6037389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacbadf926fb%3A0x919baaa33c545207!2sAv.%20Corrientes%201234%2C%20C1043AAO%20CABA!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Ubicación VetClinic"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
