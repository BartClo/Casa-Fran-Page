"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AboutSection() {
    return (
        <section id="about" className="py-20 md:py-32 bg-background overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="order-2 md:order-1 flex flex-col gap-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight">
                            Nosotros
                        </h2>
                        <h3 className="text-xl md:text-2xl font-serif italic text-secondary">
                            "Pasión por los detalles. En Casa Fran nos gusta hacer eventos"
                        </h3>

                        <div className="text-lg text-muted-foreground space-y-4 leading-relaxed">
                            <p>
                                Casa Fran nace de la visión de <strong>Francisca</strong>, Ingeniero en Administración de Empresas y Finanzas,
                                quien tras más de 20 años de experiencia en el mundo del Retail y Marketing, decidió volcar su
                                talento y pasión en la creación de eventos inolvidables.
                            </p>
                            <p>
                                Cada celebración es única. Nos encargamos de todo: desde la banquetería más exquisita hasta
                                la ambientación soñada, para que tú solo te preocupes de disfrutar.
                            </p>
                        </div>

                        <div className="mt-4 pt-6 border-t border-border/60">
                            <p className="font-semibold text-primary/80">
                                Francisca <br />
                                <span className="text-sm font-normal text-muted-foreground">Fundadora & Planner Principal</span>
                            </p>
                        </div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.0, ease: "easeOut" }}
                        className="order-1 md:order-2 relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/images/francisca-bio.jpg"
                            alt="Francisca, dueña de Casa Fran y experta en banquetería y organización de eventos"
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                        {/* Decoration ring/element */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl z-0" />
                        <div className="absolute top-6 right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl z-0" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
