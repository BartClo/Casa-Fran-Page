"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

const NAV_LINKS = [
    { href: "/", label: "Inicio" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#servicios", label: "Servicios" }, // Aggregated for Bodas/Graduaciones etc if anchors used, or separate pages? The requirement implies one page ("Landing Page completa"). I'll use anchors.
    { href: "#contacto", label: "Contacto" },
];

// Specific links requested: Inicio, Nosotros, Bodas, Graduaciones, Empresas, Contacto. 
// "Bodas, Graduaciones, Empresas" are services. I will break them out if they anchor to specific tabs or sections.
// For a Landing Page, usually sections. I'll add them as anchors.
const NAV_ITEMS = [
    { href: "#hero", label: "Inicio" },
    { href: "#about", label: "Nosotros" },
    { href: "#services", label: "Servicios" },
    { href: "#contact", label: "Contacto" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMounted, setIsMounted] = React.useState(false);
    const activeSection = useScrollSpy(NAV_ITEMS.map((item) => item.href.substring(1)));

    React.useEffect(() => {
        setIsMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-md py-2 border-border/40"
                    : "bg-transparent py-4 shadow-none"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center"
                >
                    <Image
                        src="/images/logo1.png"
                        alt="Casa Fran"
                        width={150}
                        height={60}
                        className={cn(
                            "h-20 w-auto transition-all object-contain"
                        )}
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_ITEMS.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors",
                                    isActive
                                        ? "text-rose-500 font-semibold"
                                        : isScrolled
                                            ? "text-muted-foreground hover:text-primary"
                                            : "text-white/90 hover:text-white"
                                )}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    <Button
                        asChild
                        className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-6"
                    >
                        <a href="#contact">Cotizar Evento</a>
                    </Button>
                </nav>

                {/* Mobile Nav */}
                <div className="md:hidden">
                    {isMounted ? (
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className={cn("h-6 w-6", isScrolled ? "text-primary" : "text-white")} />
                                    <span className="sr-only">Abrir menú</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                <div className="flex flex-col gap-6 mt-10">
                                    {NAV_ITEMS.map((link) => {
                                        const isActive = activeSection === link.href.substring(1);
                                        return (
                                            <Link
                                                key={link.label}
                                                href={link.href}
                                                className={cn(
                                                    "text-lg font-medium transition-colors",
                                                    isActive
                                                        ? "text-rose-500 font-semibold"
                                                        : "text-foreground hover:text-primary"
                                                )}
                                            >
                                                {link.label}
                                            </Link>
                                        );
                                    })}
                                    <Button asChild className="bg-secondary hover:bg-secondary/90 text-white w-full rounded-full">
                                        <a href="#contact">Cotizar Evento</a>
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    ) : (
                        <Button variant="ghost" size="icon">
                            <Menu className={cn("h-6 w-6", isScrolled ? "text-primary" : "text-white")} />
                            <span className="sr-only">Abrir menú</span>
                        </Button>
                    )}
                </div>
            </div>
        </header>
    );
}
