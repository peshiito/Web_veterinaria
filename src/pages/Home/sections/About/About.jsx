import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import "./About.css";

const features = [
  {
    title: "Profesionales certificados",
    desc: "Equipo altamente capacitado con años de experiencia clínica.",
  },
  {
    title: "Tecnología de punta",
    desc: "Equipos modernos para diagnóstico preciso y tratamientos efectivos.",
  },
  {
    title: "Atención personalizada",
    desc: "Cada mascota recibe trato individualizado y cálido.",
  },
];

const About = () => {
  return (
    <section id="nosotros" className="about section">
      <div className="container">
        <div className="about__grid">
          <motion.div
            className="about__image-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=700&h=500&fit=crop"
              alt="Sobre VetClinic"
            />
          </motion.div>

          <motion.div
            className="about__content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="about__badge">Sobre nosotros</span>
            <h2 className="about__title">
              Más que una veterinaria, una familia para tu mascota
            </h2>
            <p className="about__description">
              En VetClinic entendemos que tu mascota es parte de la familia. Por
              eso nos dedicamos a brindar atención veterinaria de excelencia con
              calidez y profesionalismo desde hace más de 15 años.
            </p>

            <ul className="about__features">
              {features.map((f) => (
                <li key={f.title} className="about__feature">
                  <CheckCircle size={20} className="about__feature-icon" />
                  <div>
                    <strong>{f.title}</strong>
                    <p>{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
