"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppButton() {
    const phoneNumber = "56957371147";
    const message = "Hola Casa Fran, me gustaría cotizar un evento.";
    const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Button
                asChild
                size="icon"
                className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:scale-110 transition-transform duration-300"
            >
                <a href={link} target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
                    <MessageCircle className="h-8 w-8" />
                </a>
            </Button>
        </div>
    );
}
