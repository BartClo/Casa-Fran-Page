"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
    {
        question: "¿Qué incluyen los servicios All Inclusive?",
        answer: "Nos encargamos de todo para que disfrutes. Incluye banquetería completa (cóctel, cena, postres), decoración y ambientación soñada, DJ, amplificación e iluminación, y la gestión integral del recinto."
    },
    {
        question: "¿Con cuánta anticipación debo reservar?",
        answer: "Para matrimonios, recomendamos reservar con al menos 6 a 8 meses de anticipación. Para graduaciones y eventos de empresa, idealmente 3 meses antes, especialmente para fechas de fin de año."
    },
    {
        question: "¿Tienen opciones de menú especial?",
        answer: "¡Por supuesto! Adaptamos nuestros menús para invitados vegetarianos, veganos, celíacos o con alergias alimentarias. Esto se coordina en la etapa de planificación."
    },
    {
        question: "¿Dónde están ubicados?",
        answer: "Tenemos oficina comercial en Doñihue (Av. Rancagua #372) y nuestro centro de eventos exclusivo 'Refugio de Naela' en Coltauco. También llevamos el servicio completo a tu domicilio o parcela."
    },
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-gray-50 py-16 md:py-20" id="faq">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
                    <p className="text-gray-600 text-lg">Todo lo que necesitas saber para tu evento</p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {FAQS.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                            >
                                <span className="text-lg font-medium text-gray-800 group-hover:text-primary transition-colors">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0 ml-4"
                                >
                                    <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
                                </motion.div>
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        key="content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
