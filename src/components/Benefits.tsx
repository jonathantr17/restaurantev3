"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FaStar, FaBolt, FaGlobe, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const Benefits = () => {
  const fadeFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay }
    })
  };

  const benefits = [
    {
      icon: <FaStar />,
      title: "Calidad",
      description: "Ingredientes frescos y locales seleccionados cuidadosamente para garantizar el mejor sabor en cada plato."
    },
    {
      icon: <FaBolt />,
      title: "Rapidez",
      description: "Servicio a domicilio ágil y seguro. Tus platos favoritos llegan calientes y en tiempo récord."
    },
    {
      icon: <FaGlobe />,
      title: "Autenticidad",
      description: "Recetas tradicionales ecuatorianas con un toque moderno, preservando los sabores de nuestra tierra."
    },
    {
      icon: <FaHeart />,
      title: "Experiencia",
      description: "Ambiente acogedor y atención personalizada que te hará sentir como en casa desde el primer momento."
    }
  ];

  return (
    <section
      id="beneficios"
      className="py-20 font-poppins"
      style={{ background: "linear-gradient(135deg, #FFF8F0, #F3ECE2)" }}
    >
      <div className="container mx-auto px-6">
        
        {/* Título */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeFromLeft}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#D94F2A] to-[#FF7E5F] bg-clip-text text-transparent mb-6 drop-shadow-sm">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Nos comprometemos a brindarte una experiencia gastronómica excepcional 
            que va más allá de simplemente servir comida.
          </p>
        </motion.div>

        {/* Beneficios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              custom={index * 0.2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeFromLeft}
            >
              <Card className="p-6 text-center bg-white shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-3 rounded-2xl border-none">
                <CardContent className="p-0 flex flex-col items-center">
                  
                  {/* Icono */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-[#FF7E5F] to-[#D94F2A] text-white text-3xl mb-4 shadow-lg">
                    {benefit.icon}
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-bold text-[#D94F2A] mb-3">
                    {benefit.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Sección de estadísticas */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeFromLeft}
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-extrabold text-[#D94F2A] mb-2">500+</div>
              <p className="text-gray-700 font-semibold">Clientes Satisfechos</p>
            </div>
          </motion.div>

          <motion.div
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeFromLeft}
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-extrabold text-[#D94F2A] mb-2">15+</div>
              <p className="text-gray-700 font-semibold">Años de Experiencia</p>
            </div>
          </motion.div>

          <motion.div
            custom={0.4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeFromLeft}
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-extrabold text-[#D94F2A] mb-2">30min</div>
              <p className="text-gray-700 font-semibold">Tiempo de Entrega</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;