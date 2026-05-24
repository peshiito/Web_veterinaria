import { motion } from "framer-motion";
import { Star, PawPrint } from "lucide-react";
import Card, { CardContent } from "../../../../components/ui/Card/Card.jsx";
import "./Testimonials.css";

const testimonials = [
  {
    name: "María González",
    pet: "dueña de Luna",
    text: "Excelente atención, muy profesionales. Mi perrita está en las mejores manos. Los recomiendo a todos.",
  },
  {
    name: "Carlos Rodríguez",
    pet: "dueño de Max",
    text: "El servicio de guardia es increíble. Nos atendieron de madrugada con la misma calidez de siempre.",
  },
  {
    name: "Ana Martínez",
    pet: "dueña de Simba",
    text: "La veterinaria más confiable de la ciudad. Trato personalizado y mucho amor hacia los animales.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials section">
      <div className="container">
        <motion.div
          className="testimonials__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="testimonials__title">
            Lo que dicen nuestros clientes
          </h2>
          <p className="testimonials__subtitle">
            La satisfacción de nuestras mascotas es nuestra mayor recompensa
          </p>
        </motion.div>

        <div className="testimonials__grid">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Card>
                <CardContent>
                  <div className="testimonial__stars">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        fill="var(--primary)"
                        color="var(--primary)"
                      />
                    ))}
                  </div>
                  <p className="testimonial__text">"{t.text}"</p>
                  <div className="testimonial__author">
                    <div className="testimonial__avatar">
                      <PawPrint size={17} />
                    </div>
                    <div>
                      <div className="testimonial__name">{t.name}</div>
                      <div className="testimonial__pet">{t.pet}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
