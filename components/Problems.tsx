"use client";

import { motion } from "motion/react";
import { X } from "lucide-react";

export function Problems() {
  const problems = [
    {
      title: "1. Tu producto no se entiende a primera vista",
      description:
        "Los usuarios se pierden en pantallas complejas o no encuentran lo que buscan. Sabes que el producto tiene valor… pero el diseño no lo comunica.",
    },
    {
      title: "2. Tu tasa de conversión no despega",
      description:
        "Tu web o landing recibe visitas, pero pocos clics, pocos registros. Sientes que podrías estar vendiendo mucho más si el mensaje y la experiencia fueran claros.",
    },
    {
      title: "3. Tu producto creció, pero la interfaz no acompañó",
      description:
        "Cada nueva feature hizo que la experiencia se vuelva más pesada. Hay desorden visual, flujos confusos y clientes que se frustran.",
    },
    {
      title: "4. Tu equipo pierde tiempo en tareas repetitivas",
      description:
        "Soporte, reservas, seguimiento de leads… tareas que podrían automatizarse, pero aún dependen de personas. Resultado: desgaste y lentitud.",
    },
    {
      title: "5. Tu identidad visual no refleja lo que haces hoy",
      description:
        "El branding quedó viejo o ya no representa la madurez del producto. Tu comunicación se siente fragmentada y poco coherente.",
    },
    {
      title: "6. Lanzás rápido, pero sin validar",
      description:
        "Se publican ideas sin pruebas ni feedback real. Luego hay que rediseñar desde cero, perdiendo tiempo, usuarios y presupuesto.",
    },
  ];

  return (
    <section className="py-24 bg-[#e9e9e9]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-['Anton',sans-serif] text-[48px] text-[#000000] mb-6 tracking-tight">
            ¿Suena Familiar?
          </h2>
          <p className="font-['Inter',sans-serif] text-[#000000] max-w-[678px] mx-auto">
            Muchos equipos SaaS y startups enfrentan los mismos obstáculos. Si alguno de estos te
            suena conocido, podemos ayudarte a resolverlo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 bg-[#DADADA] rounded-full flex items-center justify-center mb-6"
              >
                <X className="text-[#000000]" size={24} />
              </motion.div>
              <h3 className="font-['Inter',sans-serif] mb-4 text-[#000000]">{problem.title}</h3>
              <p className="font-['Inter',sans-serif] text-[14px] text-[#000000] leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
