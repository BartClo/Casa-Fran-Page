"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function LocationsSection() {
    return (
        <section id="locations" className="relative py-20 md:py-32 bg-primary text-white overflow-hidden">
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 z-0 opacity-20">
                <Image
                    src="/images/location-garden.jpg"
                    alt="Jardines y áreas verdes del centro de eventos Refugio de Naela en Coltauco"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="container mx-auto px-4 max-w-6xl z-10 relative">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Ubicaciones e Infraestructura
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-300 text-lg"
                    >
                        Contamos con recintos propios y equipamiento de primer nivel para tu celebración.
                    </motion.p>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
                >
                    {/* Oficina */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-secondary rounded-full shrink-0">
                                <MapPin className="text-white w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Oficina Comercial</h3>
                                <p className="text-gray-300">
                                    Av. Rancagua #372, Doñihue.
                                </p>
                                <p className="text-gray-400 text-sm mt-2">
                                    Atención presencial para coordinar cada detalle de tu evento.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Centro de Eventos */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-secondary rounded-full shrink-0">
                                <MapPin className="text-white w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Centro de Eventos "Refugio de Naela"</h3>
                                <p className="text-gray-300">
                                    Ex Fundo El Caracol, Coltauco.
                                </p>
                                <p className="text-gray-400 text-sm mt-2">
                                    Amplios jardines, piscina y quincho en un entorno natural privilegiado.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-12 text-center"
                >
                    <div className="inline-block bg-white/10 backdrop-blur-md rounded-full px-6 py-2 border border-white/20">
                        <p className="text-secondary-foreground font-medium">
                            ✨ También llevamos el servicio completo a tu domicilio o lugar de preferencia.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
