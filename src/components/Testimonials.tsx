import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FaStar, FaCheckCircle } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "María González",
      location: "Quito",
      rating: 5,
      comment: "Comida espectacular, entrega rápida y un servicio impecable. El ceviche de camarón es simplemente delicioso. ¡Definitivamente volveré!",
      icon: <FaStar className="text-yellow-400" />
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      location: "Guayaquil",
      rating: 5,
      comment: "La fritada estaba increíble, exactamente como la hacía mi abuela. El sabor auténtico y la presentación fueron perfectos.",
      icon: <FaStar className="text-yellow-400" />
    },
    {
      id: 3,
      name: "Ana Rodríguez",
      location: "Cuenca",
      rating: 5,
      comment: "Excelente atención al cliente y comida de primera calidad. El encebollado me transportó directamente a mi infancia. ¡Recomendado al 100%!",
      icon: <FaStar className="text-yellow-400" />
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-gray-50 font-inter">
      <div className="container mx-auto px-6">
        
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            La satisfacción de nuestros clientes es nuestro mayor orgullo. Descubre por qué nos eligen una y otra vez.
          </p>
        </div>

        {/* Testimonios */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="p-6 bg-white shadow-lg rounded-xl transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <CardContent className="p-0 flex flex-col items-center">
                
                {/* Icono */}
                <div className="text-5xl text-[#D94F2A] mb-4">
                  {testimonial.icon}
                </div>

                {/* Comentario */}
                <blockquote className="text-gray-700 text-center italic text-sm mb-6">
                  "{testimonial.comment}"
                </blockquote>

                {/* Nombre y ubicación */}
                <h4 className="font-semibold text-gray-800 text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500">{testimonial.location}</p>

                {/* Estrellas */}
                <div className="flex mt-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reconocimientos */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Reconocimientos
            </h3>
            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                <span>Certificado de Calidad</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                <span>Mejor Restaurante Ecuatoriano 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                <span>5 Estrellas en Google</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;