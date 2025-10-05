"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const RestaurantFooter = () => {
  return (
    <footer id="contacto" className="bg-[#2C2C2C] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Logo y Descripción */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-[#D94F2A] mb-4">
              Sabores del Ecuador
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Llevamos los auténticos sabores de Ecuador directamente a tu mesa. 
              Tradición, calidad y pasión en cada plato que preparamos para ti.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-[#8AA34B] hover:text-white transition-colors duration-300">
                <FaFacebookF size={22} />
              </a>
              <a href="#" className="text-[#8AA34B] hover:text-white transition-colors duration-300">
                <FaInstagram size={22} />
              </a>
              <a href="#" className="text-[#8AA34B] hover:text-white transition-colors duration-300">
                <FaTwitter size={22} />
              </a>
              <a href="#" className="text-[#8AA34B] hover:text-white transition-colors duration-300">
                <FaWhatsapp size={22} />
              </a>
            </div>
          </div>
          
          {/* Información de Contacto */}
          <div>
            <h4 className="text-xl font-bold text-[#D94F2A] mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#8AA34B]" />
                <span>Av. Amazonas N24-03 y Colón<br />Quito, Ecuador</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#8AA34B]" />
                <span>+593 2 234-5678</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#8AA34B]" />
                <span>info@saboresecuador.com</span>
              </div>
            </div>
          </div>
          
          {/* Horarios */}
          <div>
            <h4 className="text-xl font-bold text-[#D94F2A] mb-4">Horarios</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Lunes - Viernes:</span>
                <span>11:00 - 22:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sábados:</span>
                <span>10:00 - 23:00</span>
              </div>
              <div className="flex justify-between">
                <span>Domingos:</span>
                <span>10:00 - 21:00</span>
              </div> 
              <div className="mt-4 p-3 bg-[#8AA34B]/20 rounded-lg">
                <p className="text-sm text-[#8AA34B] font-semibold text-center">
                    Delivery disponible todos los días
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Línea divisoria */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Sabores del Ecuador. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Términos de Servicio
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Política de Entrega
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default RestaurantFooter;