import {
  Stethoscope,
  Syringe,
  Scissors,
  Heart,
  Clock,
  Activity,
} from "lucide-react";
import ServicesHero from "./sections/ServicesHero/ServicesHero.jsx";
import ServiceDetail from "./sections/ServiceDetail/ServiceDetail.jsx";
import CTA from "../Home/sections/CTA/CTA.jsx";
import "./Services.css";

const services = [
  {
    id: "consultas",
    icon: Stethoscope,
    title: "Consultas Médicas",
    color: "#2E7D32",
    image:
      "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=700&h=500&fit=crop",
    description:
      "Nuestras consultas médicas ofrecen una evaluación completa del estado de salud de tu mascota. Contamos con veterinarios especializados que realizan un diagnóstico preciso y un plan de tratamiento personalizado para cada paciente.",
    features: [
      "Evaluación clínica completa",
      "Diagnóstico por imágenes",
      "Historia clínica digital",
      "Seguimiento post-consulta",
      "Atención personalizada",
      "Recetas y derivaciones",
    ],
  },
  {
    id: "vacunacion",
    icon: Syringe,
    title: "Vacunación",
    color: "#1565C0",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700&h=500&fit=crop",
    description:
      "Mantenemos el calendario de vacunación actualizado para proteger a tu mascota de enfermedades graves. Utilizamos vacunas de alta calidad y llevamos un registro detallado de cada aplicación.",
    features: [
      "Calendario completo de vacunas",
      "Vacunas para perros y gatos",
      "Carnet de vacunación digital",
      "Recordatorios automáticos",
      "Vacunas importadas certificadas",
      "Asesoramiento preventivo",
    ],
  },
  {
    id: "peluqueria",
    icon: Scissors,
    title: "Peluquería",
    color: "#C9A227",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=700&h=500&fit=crop",
    description:
      "Nuestro servicio de peluquería canina y felina cuida la higiene y estética de tu mascota con productos premium y técnicas profesionales. Tu compañero lucirá y se sentirá de maravilla.",
    features: [
      "Baño con productos premium",
      "Corte de pelo personalizado",
      "Limpieza de oídos",
      "Corte de uñas",
      "Perfumado y secado",
      "Trato amoroso y sin estrés",
    ],
  },
  {
    id: "cirugias",
    icon: Heart,
    title: "Cirugías",
    color: "#C62828",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700&h=500&fit=crop",
    description:
      "Contamos con quirófanos equipados con tecnología de última generación y un equipo quirúrgico altamente capacitado. Realizamos cirugías de rutina y de alta complejidad con los máximos estándares de seguridad.",
    features: [
      "Quirófano equipado",
      "Anestesiología especializada",
      "Cirugías de tejidos blandos",
      "Esterilizaciones y castraciones",
      "Monitoreo postoperatorio",
      "Internación y seguimiento",
    ],
  },
  {
    id: "guardia",
    icon: Clock,
    title: "Guardia 24/7",
    color: "#2E7D32",
    image:
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=700&h=500&fit=crop",
    description:
      "Las emergencias no avisan. Por eso contamos con guardia activa las 24 horas, los 365 días del año. Nuestro equipo de urgencias está siempre listo para atender a tu mascota cuando más lo necesita.",
    features: [
      "Atención inmediata",
      "Médicos de guardia 24/7",
      "Equipamiento de emergencias",
      "Internación transitoria",
      "Comunicación con el dueño",
      "Derivaciones de urgencia",
    ],
  },
  {
    id: "laboratorio",
    icon: Activity,
    title: "Laboratorio",
    color: "#6A1B9A",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=700&h=500&fit=crop",
    description:
      "Nuestro laboratorio clínico realiza análisis de sangre, orina, materia fecal y más con resultados rápidos y precisos. La información diagnóstica que necesitamos para cuidar mejor a tu mascota.",
    features: [
      "Hemograma completo",
      "Bioquímica sanguínea",
      "Análisis de orina",
      "Coprologías",
      "Resultados en el día",
      "Informes digitales",
    ],
  },
];

const Services = () => {
  return (
    <>
      <ServicesHero />
      {services.map((service, index) => (
        <ServiceDetail key={service.id} service={service} index={index} />
      ))}
      <CTA />
    </>
  );
};

export default Services;
