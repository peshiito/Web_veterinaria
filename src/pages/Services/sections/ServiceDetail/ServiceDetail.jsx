import { motion } from "framer-motion";
import { CheckCircle, Phone } from "lucide-react";
import Button from "../../../../components/ui/Button/Button.jsx";
import "./ServiceDetail.css";

const ServiceDetail = ({ service, index }) => {
  const isReversed = index % 2 !== 0;
  const Icon = service.icon;

  return (
    <section
      id={service.id}
      className={`service-detail ${isReversed ? "service-detail--reversed" : ""}`}
    >
      <div className="container">
        <div className="service-detail__grid">
          <motion.div
            className="service-detail__image-wrapper"
            initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={service.image} alt={service.title} />
            <div className="service-detail__image-badge">
              <div
                className="service-detail__image-icon"
                style={{ background: service.color + "22" }}
              >
                <Icon size={28} style={{ color: service.color }} />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="service-detail__content"
            initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div
              className="service-detail__icon-wrapper"
              style={{ background: service.color + "18" }}
            >
              <Icon size={32} style={{ color: service.color }} />
            </div>

            <h2 className="service-detail__title">{service.title}</h2>
            <p className="service-detail__description">{service.description}</p>

            <ul className="service-detail__features">
              {service.features.map((f) => (
                <li key={f} className="service-detail__feature">
                  <CheckCircle size={17} className="service-detail__check" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <Button variant="primary" size="md" icon={Phone}>
              Consultar por {service.title}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
