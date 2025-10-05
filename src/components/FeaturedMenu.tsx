"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import cevicheImage from "./assets/ceviche.jpg";
import encebolladoImage from "./assets/encebollado.jpg";
import fritadaImage from "./assets/fritada.jpg";

const FeaturedMenu = () => {
  const dishes = [
    {
      id: 1,
      name: "Ceviche de Camarón",
      description: "Frescos camarones marinados en limón con cebolla morada, cilantro y ají. Acompañado de chifles y cancha.",
      price: "$12.99",
      image: cevicheImage,
      popular: true
    },
    {
      id: 2,
      name: "Encebollado",
      description: "Tradicional sopa ecuatoriana con pescado fresco, yuca, cebolla encurtida y cilantro. Perfecta para cualquier momento.",
      price: "$8.99",
      image: encebolladoImage,
      popular: false
    },
    {
      id: 3,
      name: "Fritada",
      description: "Deliciosa carne de cerdo frita acompañada de mote, llapingachos, curtido y ají criollo.",
      price: "$14.99",
      image: fritadaImage,
      popular: true
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#D94F2A] mb-6">
            Nuestros Platos Más Solicitados
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Descubre los sabores auténticos del Ecuador con nuestros platos estrella, 
            preparados con ingredientes frescos y recetas tradicionales.
          </p>
        </div>

        {/* Platos */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {dishes.map((dish) => (
            <Card 
              key={dish.id} 
              className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group rounded-3xl border-none"
            >
              
              {/* Imagen */}
              <div className="relative w-full h-64">
                <Image 
                  src={dish.image}
                  alt={dish.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-300 rounded-t-3xl"
                />
                {dish.popular && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    ⭐ Popular
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl"></div>
              </div>

              {/* Contenido */}
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#D94F2A] transition-colors duration-300">
                    {dish.name}
                  </h3>
                  <span className="text-2xl font-bold text-[#8AA34B]">
                    {dish.price}
                  </span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {dish.description}
                </p>

                {/* Botón Mejorado */}
                <Button 
                  className="w-full bg-gradient-to-r from-[#FF7E5F] to-[#D94F2A] hover:from-[#D94F2A] hover:to-[#FF7E5F] text-white font-bold py-3 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  🛒 Agregar al Pedido
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Botón Ver Menú Completo */}
        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-transparent bg-gradient-to-r from-[#FF7E5F] to-[#D94F2A] text-white font-bold px-10 py-4 text-lg rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:from-[#D94F2A] hover:to-[#FF7E5F]"
          >
            🍽️ Ver Menú Completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;