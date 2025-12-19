import Link from "next/link";
import { Instagram, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground w-full border-t border-white/10">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mb-8">

                    {/* Brand */}
                    <div>
                        <Link href="/" className="text-2xl font-bold tracking-tight mb-4 block hover:text-secondary transition-colors">
                            Casa Fran
                        </Link>
                        <p className="text-sm text-gray-400">
                            Hacemos de tu celebración un momento inolvidable. Pasión por los detalles y servicio de excelencia.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-secondary">Navegación</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="#about" className="hover:text-white transition-colors">Nosotros</Link></li>
                            <li><Link href="#servicios" className="hover:text-white transition-colors">Servicios</Link></li>
                            <li><Link href="#locations" className="hover:text-white transition-colors">Ubicaciones</Link></li>
                            <li><Link href="#contact" className="hover:text-white transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h4 className="font-semibold mb-4 text-secondary">Contacto</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-secondary" />
                                <span>+569 57371147</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-secondary" />
                                <span>casafran.eventos@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Instagram className="h-4 w-4 text-secondary" />
                                <a href="https://instagram.com/casafran_eventos" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    @casafran_eventos
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 mt-8 text-center text-xs text-gray-500 container mx-auto">
                    <p>&copy; {new Date().getFullYear()} Casa Fran Eventos. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
