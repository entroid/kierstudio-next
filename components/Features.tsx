"use client";

import { motion } from "motion/react";
import { Lightbulb, Users, Rocket } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Lightbulb,
      title: "Estrategia + Implementacion",
      description: "Consultoria e implementacion de Diseño y Asistencia IA",
    },
    {
      icon: Users,
      title: "NEGOCIO + USUARIOS",
      description:
        "Mejoramos la experiencia de usuario, optimizamos procesos y aumentamos las tasas de exito.",
    },
    {
      icon: Rocket,
      title: "Diseño de Producto",
      description: "Guiamos la transformacion de tu producto digital o automatizacion de procesos.",
    },
  ];

  return (
    <section className="py-24 bg-[#F5F5F5]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-[54px] h-[54px] bg-[#8C8C8C] rounded-full flex items-center justify-center mb-8 group-hover:bg-[#000000] transition-colors duration-300"
                >
                  <Icon className="text-white" size={28} />
                </motion.div>
                <h3 className="font-['Inter',sans-serif] mb-4 text-[#000000]">{feature.title}</h3>
                <p className="font-['Inter',sans-serif] text-[14px] text-[#000000] max-w-[298px]">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
