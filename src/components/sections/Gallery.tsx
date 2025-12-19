"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const galleryImages = [
    { src: "/images/service-wedding.jpg", alt: "Matrimonios Inolvidables", category: "Bodas" },
    { src: "/images/service-party.jpg", alt: "Fiestas Exclusivas", category: "Fiestas" },
    { src: "/images/location-garden.jpg", alt: "Jardines de Ensueño", category: "Espacios" },
    { src: "/images/service-corporate.jpg", alt: "Eventos Corporativos", category: "Empresas" },
    { src: "/images/hero-bg.jpg", alt: "Ambiente Mágico", category: "Decoración" },
    { src: "/images/service-graduation.jpg", alt: "Graduaciones Memorables", category: "Graduaciones" },
];

export function Gallery() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const openLightbox = (index: number) => setSelectedImage(index);
    const closeLightbox = () => setSelectedImage(null);

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedImage !== null) {
            setSelectedImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev! + 1));
        }
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedImage !== null) {
            setSelectedImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev! - 1));
        }
    };

    return (
        <section className="py-20 bg-background" id="gallery">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold text-primary mb-4"
                    >
                        Nuestros Eventos en Imágenes
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-muted-foreground text-lg uppercase tracking-widest"
                    >
                        Detalles que enamoran
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
                            onClick={() => openLightbox(index)}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <ZoomIn className="w-10 h-10 text-white drop-shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-white font-medium text-sm md:text-base">{image.alt}</p>
                                <p className="text-white/80 text-xs">{image.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8 backdrop-blur-sm"
                    >
                        <button
                            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full"
                        >
                            <X className="w-8 h-8 md:w-10 md:h-10" />
                        </button>

                        <button
                            onClick={prevImage}
                            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full hidden md:block"
                        >
                            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
                        </button>

                        <button
                            onClick={nextImage}
                            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full hidden md:block"
                        >
                            <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-5xl aspect-[16/9] md:aspect-[16/10] rounded-lg overflow-hidden shadow-2xl"
                        >
                            <Image
                                src={galleryImages[selectedImage].src}
                                alt={galleryImages[selectedImage].alt}
                                fill
                                className="object-contain"
                                sizes="100vw"
                                priority
                            />
                            <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                                <p className="inline-block bg-black/50 px-4 py-2 rounded-full text-white text-sm md:text-lg backdrop-blur-md border border-white/10">
                                    {galleryImages[selectedImage].alt}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
