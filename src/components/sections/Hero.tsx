"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a192f]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Montaje de salón para matrimonio con telas y decoración elegante en Doñihue y Coltauco"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="container mx-auto relative z-10 px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl mx-auto flex flex-col items-center gap-6"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
                        Casa Fran: <br />
                        <span className="text-secondary">Planificamos tu Evento</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl text-balance">
                        Banquetes deliciosos, ambientación soñada y gestión integral en Doñihue y Coltauco.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <Button
                            size="lg"
                            className="bg-secondary hover:bg-secondary/90 text-white min-w-[160px] rounded-full text-base h-12"
                        >
                            <a href="#services">Ver Servicios</a>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="bg-transparent border-white text-white hover:bg-white/10 hover:text-white min-w-[160px] rounded-full text-base h-12"
                        >
                            <a href="#contact">Hablemos por WhatsApp</a>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
