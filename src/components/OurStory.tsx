"use client";

import React from "react";
import Image from "next/image";
import { FaLeaf, FaLandmark, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import chefImage from "./assets/chef.png";
import restaurantImage from "./assets/restaurant_interior.png";

const OurStory = () => {
  const fadeFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay }
    })
  };

  const benefits = [
    { icon: <FaLeaf className="text-3xl text-[#8AA34B]" />, title: "Ingredientes Frescos", text: "Seleccionamos productos locales y orgánicos para garantizar autenticidad." },
    { icon: <FaLandmark className="text-3xl text-[#D94F2A]" />, title: "Tradición Familiar", text: "Recetas transmitidas por generaciones preservando nuestra esencia." },
    { icon: <FaHeart className="text-3xl text-[#E94F2A]" />, title: "Pasión por el Servicio", text: "Cada plato preparado con amor, ofreciendo una experiencia inolvidable." }
  ];

  return (
    <section
      id="historia"
      className="relative py-24 font-poppins"
      style={{ background: "linear-gradient(135deg, #FFF8F0, #F3ECE2)" }}
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#D94F2A]/15 to-[#8AA34B]/15 pointer-events-none"></div>

      <div className="relative container mx-auto px-6 space-y-20">
        
        {/* Título principal */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeFromLeft}
        >
          <h2 className="text-5xl font-extrabold text-[#D94F2A] mb-6 drop-shadow-sm">
            Nuestra Historia
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            En <strong>Sabores del Ecuador</strong> fusionamos tradición y creatividad, creando una experiencia gastronómica única. Nuestra misión es llevar auténticos sabores ecuatorianos a cada mesa, preservando nuestras raíces.
          </p>
        </motion.div>

        {/* Sección chef e historia */}
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeFromLeft}
        >
          {/* Imagen del chef */}
          <motion.div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl" variants={fadeFromLeft}>
            <Image
              src={chefImage}
              alt="Chef Ejecutivo"
              fill
              style={{ objectFit: "cover" }}
              className="hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
              <h3 className="text-3xl font-bold text-white drop-shadow-sm">Chef Ejecutivo</h3>
              <p className="text-sm text-white/90">Maestro de la cocina ecuatoriana</p>
            </div>
          </motion.div>

          {/* Texto descriptivo */}
          <motion.div className="space-y-6" variants={fadeFromLeft}>
            <p className="text-gray-800 text-lg">
              Con más de 15 años de experiencia, nuestro chef combina técnicas ancestrales con innovaciones modernas, logrando platos que celebran la riqueza cultural de Ecuador y deleitan el paladar.
            </p>

            {/* Tarjetas con animación escalonada */}
            <div className="grid gap-4">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white p-5 rounded-xl shadow-md flex items-start gap-4 hover:shadow-lg transition-shadow"
                  custom={idx * 0.2} // Delay incremental
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  variants={fadeFromLeft}
                >
                  {benefit.icon}
                  <div>
                    <h4 className="font-semibold text-[#D94F2A]">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Imagen grande del restaurante */}
        <motion.div
          className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeFromLeft}
        >
          <Image
            src={restaurantImage}
            alt="Interior del Restaurante"
            fill
            style={{ objectFit: "cover" }}
            className="hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end p-10">
            <div className="text-white max-w-2xl">
              <h3 className="text-4xl font-bold mb-3 drop-shadow-sm">Un Ambiente Acogedor</h3>
              <p className="text-lg text-white/90">
                Disfruta de nuestra hospitalidad ecuatoriana en un espacio lleno de calidez y tradición, pensado para compartir momentos inolvidables.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;