import { Link } from "wouter";
import {
  PawPrint,
  Globe,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <PawPrint size={22} color="var(--primary)" />
              <span>VetClinic</span>
            </div>
            <p>
              Cuidamos a tus mascotas con amor y profesionalismo desde hace más
              de 15 años.
            </p>
            <div className="footer__social">
              <a href="#" aria-label="Sitio web">
                <Globe size={17} />
              </a>
              <a href="#" aria-label="WhatsApp">
                <MessageCircle size={17} />
              </a>
              <a href="#" aria-label="Email">
                <Mail size={17} />
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Navegación</h4>
            <ul>
              <li>
                <button onClick={() => scrollTo("inicio")}>Inicio</button>
              </li>
              <li>
                <Link href="/servicios">Servicios</Link>
              </li>
              <li>
                <button onClick={() => scrollTo("nosotros")}>Nosotros</button>
              </li>
              <li>
                <button onClick={() => scrollTo("contacto")}>Contacto</button>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Horario</h4>
            <ul>
              <li>Lun a Vie: 9am – 8pm</li>
              <li>Sábados: 10am – 6pm</li>
              <li>Domingos: 10am – 2pm</li>
              <li>
                <strong>Guardia 24/7</strong>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contacto</h4>
            <ul>
              <li>
                <MapPin size={14} /> Av. Corrientes 1234, CABA
              </li>
              <li>
                <Phone size={14} /> +54 11 5555-6666
              </li>
              <li>
                <Mail size={14} /> info@vetclinic.com
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2024 VetClinic. Todos los derechos reservados.</p>
          <p className="footer__made">
            Hecho con <Heart size={13} /> para mascotas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
