"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaUtensils, FaPhoneAlt, FaClock } from "react-icons/fa";

const FinalCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    alert("¡Gracias por tu pedido! Te contactaremos pronto.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="pedido" className="py-20 bg-gradient-to-br from-[#D94F2A] to-[#B8421F] text-white">
      <div className="container mx-auto px-6">
        
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg animate-fade-in">
            ¡Haz Tu Pedido Ahora!
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto animate-fade-in delay-100">
            No esperes más para disfrutar de los auténticos sabores del Ecuador. 
            Ordena ahora y recibe tu comida caliente en la puerta de tu casa.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* CTA Buttons */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in delay-200">
            
            {/* Botón Ver Menú Completo */}
            <Button
              size="lg"
              className="w-full lg:w-auto bg-transparent text-white border-1 border-white px-12 py-6 text-xl font-bold rounded-lg transform transition-all duration-500 hover:scale-105 hover:bg-black hover:text-white flex items-center gap-3"
            >
              <FaUtensils size={24} className="text-white transition-colors duration-300" />
              Ver Menú Completo
            </Button>

            {/* Botón Llamar Ahora */}
            <Button 
              size="lg"
              variant="outline"
              className="w-full lg:w-auto border-white text-white hover:bg-white hover:text-[#D94F2A] px-12 py-6 text-xl font-bold rounded-lg transition-all duration-300 ml-0 lg:ml-4 flex items-center gap-3"
            >
              <FaPhoneAlt size={20} />
              Llamar Ahora
            </Button>

            {/* Info rápida */}
            <div className="mt-12 space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-3 animate-fade-in delay-300">
                <FaClock className="text-xl" />
                <span className="text-lg">Entrega en 30 minutos o menos</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 animate-fade-in delay-400">
                <FaPhoneAlt className="text-xl" />
                <span className="text-lg">Pago en efectivo o tarjeta</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 animate-fade-in delay-500">
                <FaUtensils className="text-xl" />
                <span className="text-lg">Comida siempre caliente y fresca</span>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl shadow-lg animate-fade-in delay-600">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Pedido Especial</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Tu nombre completo"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white"
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Número de teléfono"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white"
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Describe tu pedido o mensaje especial..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white min-h-[100px]"
                  rows={4}
                />
                <Button 
                  type="submit"
                  className="w-full bg-[#8AA34B] hover:bg-[#7A9142] text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 animate-fade-in delay-700"
                >
                  Enviar Pedido 
                </Button>
              </form>
              <p className="text-center text-sm opacity-80 mt-4 animate-fade-in delay-800">
                Te contactaremos en menos de 5 minutos para confirmar tu pedido
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;