
import { ContactForm } from "@/components/features/ContactForm";
import { Mail, Instagram, Phone } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contact" className="py-16 bg-orange-50/30">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Column 1: Info & Links */}
                    <div className="flex flex-col justify-center h-full space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold font-serif text-gray-900 mb-4">
                                Hablemos de tu evento
                            </h2>
                            <p className="text-lg text-gray-500 leading-relaxed">
                                Estamos aquí para ayudarte a hacer realidad tu evento soñado. Contáctanos y te responderemos a la brevedad.
                            </p>
                        </div>

                        <div className="space-y-4 w-full max-w-md">
                            {/* WhatsApp Card */}
                            <a
                                href="https://wa.me/56957371147"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
                            >
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                                    {/* Using Phone as generic WhatsApp icon since MessageCircle might be ambiguous without context */}
                                    <Phone className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">WhatsApp</p>
                                    <p className="text-lg font-medium text-gray-900">+569 5737 1147</p>
                                </div>
                            </a>

                            {/* Email Card */}
                            <a
                                href="mailto:casafran.eventos@gmail.com"
                                className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
                            >
                                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-rose-200 transition-colors">
                                    <Mail className="w-6 h-6 text-rose-500" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Email</p>
                                    <p className="text-lg font-medium text-gray-900">casafran.eventos@gmail.com</p>
                                </div>
                            </a>

                            {/* Instagram Card */}
                            <a
                                href="https://instagram.com/casafran_eventos"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
                            >
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-colors">
                                    <Instagram className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Instagram</p>
                                    <p className="text-lg font-medium text-gray-900">@casafran_eventos</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Form */}
                    <div className="w-full">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
