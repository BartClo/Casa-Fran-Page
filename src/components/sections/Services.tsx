"use client";

import { ServiceCard } from "@/components/ui/service-card";
import { motion, type Variants } from "framer-motion";

const SERVICES = [
    {
        title: "Matrimonios",
        description: "Creamos la boda de tus sueños.",
        imageSrc: "/images/service-wedding.jpg",
        imageAlt: "Decoración de mesas y banquetería para matrimonio civil y religioso",
        features: ["All Inclusive", "3 propuestas de cena", "Decoración + DJ", "Coordinación completa"],
        id: "weddings"
    },
    {
        title: "Graduaciones",
        description: "Fiestas inolvidables para 8° Básicos y 4° Medios.",
        imageSrc: "/images/service-graduation.jpg",
        imageAlt: "Fiesta de graduación con iluminación, pista de baile y banquetería joven",
        features: ["4 opciones disponibles", "Banquetería Joven", "DJ & Iluminación", "Seguridad incluida"],
        id: "graduations"
    },
    {
        title: "Empresas & Paseos",
        description: "Eventos corporativos y jornadas recreativas.",
        imageSrc: "/images/service-corporate.jpg",
        imageAlt: "Evento corporativo al aire libre con coctelería y actividades de equipo",
        features: ["Descuentos Martes a Jueves", "Uso de Piscina y Quincho", "Fiestas Patrias", "Coffee Break"],
        id: "corporates"
    },
    {
        title: "Celebraciones",
        description: "Bautizos, Baby Shower, Cumpleaños y más.",
        imageSrc: "/images/service-party.jpg",
        imageAlt: "Celebración familiar tipo cumpleaños o bautizo con decoración personalizada",
        features: ["Adaptable a tu presupuesto", "Espacios acogedores", "Menú Cocktail o Cena", "Decoración Temática"],
        id: "celebrations"
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export function ServicesSection() {
    return (
        <section id="services" className="py-20 md:py-32 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-3xl md:text-5xl font-bold text-primary mb-4"
                    >
                        Nuestros Servicios
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="text-muted-foreground text-lg"
                    >
                        Soluciones integrales para cada tipo de celebración.
                        Nos adaptamos a tus necesidades para crear experiencias memorables.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                >
                    {SERVICES.map((service) => (
                        <motion.div key={service.id} variants={itemVariants} className="h-full">
                            <ServiceCard
                                title={service.title}
                                description={service.description}
                                imageSrc={service.imageSrc}
                                imageAlt={service.imageAlt}
                                features={service.features}
                                className="h-full border border-gray-100"
                                href="#contact"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
