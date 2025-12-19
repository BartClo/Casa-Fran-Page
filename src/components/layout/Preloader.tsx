"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Wait for 1.8 seconds (adjustable)
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1800);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-center"
                    >
                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative w-48 h-auto"
                        >
                            {/* Ensure you have the width and height or use fill if the parent is sized. 
                  Given the requirement "w-40 o w-48", we use a container. 
                  Next/Image needs width/height if not filling. 
                  Assuming the logo is roughly rectangular or square. 
                  I'll use "width={192}" (w-48) and "height={192}" (generic square) 
                  but "w-auto" class to let it adjust naturally if aspect ratio differs, 
                  or just style it. 
              */}
                            <Image
                                src="/images/logo1.png"
                                alt="Casa Fran Logo"
                                width={200}
                                height={200}
                                className="object-contain w-full h-auto"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
