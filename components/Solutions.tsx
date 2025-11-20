"use client";

import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Solutions() {
  const solutions = [
    {
      title: "Cuando tu producto no se entiende",
      subtitle: "Diseño UX/UI para SaaS y apps",
      description:
        "Aplicamos diseño UX/UI estratégico para que cada pantalla tenga un propósito claro. Simplificamos flujos, mejoramos la legibilidad y guiamos al usuario hacia la acción sin fricciones.",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&q=80",
    },
    {
      title: "Cuando tu web no convierte",
      subtitle: "Diseño web orientado a conversión.",
      description:
        "Rediseñamos tu sitio o landing con enfoque en conversión. Optimizamos estructura, jerarquía visual y mensaje, para que tus visitantes entiendan por qué elegirte y tomen acción.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    },
    {
      title: "Cuando tu equipo se satura con tareas repetitivas",
      subtitle: "Optimización con agentes de IA.",
      description:
        "Automatizamos procesos con agentes de IA que atienden consultas, agendan citas o responden mensajes. Ganás tiempo, reducís costos y mejorás la experiencia de tus clientes.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    },
    {
      title: "Cuando tu identidad ya no representa a tu negocio",
      subtitle: "Branding digital.",
      description:
        "Actualizamos tu branding digital para que refleje quién sos hoy. Creamos una identidad visual coherente, moderna y adaptable a tus productos digitales.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    },
    {
      title: "Cuando tu producto creció, pero el diseño no lo acompañó",
      subtitle: "Consultoría y diseño UX/UI",
      description:
        "Auditamos y rediseñamos la interfaz con una visión integral. Detectamos puntos de fricción, reorganizamos la experiencia y te dejamos un producto sólido y escalable.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    },
    {
      title: "Cuando lanzás sin validar",
      subtitle: "Optimización con IA + Diseño UX/UI.",
      description:
        "Prototipamos y testeamos rápido con herramientas y modelos basados en IA. Así podés validar ideas antes de invertir en desarrollo.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80",
    },
  ];

  return (
    <section id="consultoria" className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-['Anton',sans-serif] text-[64px] text-[#000000] mb-6 tracking-tight">
            Nuestras soluciones
          </h2>
          <p className="font-['Inter',sans-serif] text-[#000000] max-w-[566px] mx-auto">
            Transformamos esos desafíos en oportunidades con diseño, estrategia e inteligencia
            aplicada.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-[#F5F5F5] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="flex flex-col md:flex-row">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-full md:w-[147px] h-[164px] bg-[#8c8c8c] overflow-hidden"
                >
                  <ImageWithFallback
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </motion.div>
                <div className="p-6 flex-1">
                  <h3 className="font-['Inter',sans-serif] mb-3 text-[#000000]">
                    {solution.title}
                  </h3>
                  <p className="font-['Inter',sans-serif] text-[14px] text-[#555555] mb-4">
                    {solution.subtitle}
                  </p>
                  <p className="font-['Inter',sans-serif] text-[14px] text-[#000000] mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-[#000000] text-[#000000] px-6 py-2 rounded hover:bg-[#000000] hover:text-white transition-all duration-300"
                  >
                    Saber Más
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#000000] text-white px-8 py-3 rounded uppercase hover:bg-[#222222] transition-all duration-300 shadow-lg"
          >
            Consultanos
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
