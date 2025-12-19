"use client";

import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        text: "Francisca se pasó, la comida estuvo increíble y la decoración soñada. 100% recomendados.",
        author: "María P.",
        event: "Boda",
    },
    {
        text: "Excelente servicio para la graduación de mi hijo. Todo a tiempo y muy rico.",
        author: "Carlos M.",
        event: "Graduación",
    },
    {
        text: "El mejor paseo de empresa que hemos tenido. El lugar es precioso.",
        author: "Empresa XYZ",
        event: "Paseo de Empresa",
    },
];

export function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight">
                        Lo que dicen nuestros clientes
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-6"
                        >
                            <Quote className="text-secondary w-10 h-10/ opacity-20" size={32} />

                            <p className="text-muted-foreground text-lg italic leading-relaxed flex-grow">
                                "{t.text}"
                            </p>

                            <div className="border-t border-gray-100 pt-4 mt-auto">
                                <p className="font-semibold text-primary">{t.author}</p>
                                <p className="text-sm text-secondary font-medium">{t.event}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
