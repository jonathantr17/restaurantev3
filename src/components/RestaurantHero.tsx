"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import heroImage from "./assets/hero_restaurant.png";

const RestaurantHero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Hero Restaurante"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-90"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
          Los mejores platos del Ecuador, 
          <span className="block text-[#D94F2A]">preparados para ti</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto drop-shadow">
          Comida a domicilio rápido, seguro y con auténtico sabor local
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-[#D94F2A] hover:bg-[#B8421F] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Ver Menú
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-[#D94F2A] px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
          >
            Reserva Ahora
          </Button>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantHero;