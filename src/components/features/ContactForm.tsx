"use client";

import { useForm as useHookForm } from "react-hook-form";
import { useForm, ValidationError } from "@formspree/react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "El nombre debe tener al menos 2 caracteres.",
    }),
    email: z.string().email({
        message: "Email inválido.",
    }),
    phone: z.string().min(8, {
        message: "Ingresa un número de contacto válido.",
    }),
    eventType: z.string().optional(),
    message: z.string().min(10, {
        message: "Cuéntanos un poco más sobre tu evento.",
    }),
});

export function ContactForm() {
    const [state, handleSubmit] = useForm("xlgrdrdz");

    const form = useHookForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            eventType: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Here we would handle form submission, e.g. API call
        console.log(values);
        alert("¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.");
        form.reset();
    }

    if (state.succeeded) {
        return (
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center justify-center text-center h-[500px]">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Gracias por escribirnos!</h3>
                <p className="text-gray-600 max-w-md">
                    Hemos recibido tu solicitud y Francisca te contactará muy pronto para coordinar los detalles de tu evento.
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-6">Cotiza tu Evento</h3>
            <Form {...form}>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre Completo</FormLabel>
                                <FormControl>
                                    <Input placeholder="Tu nombre" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="correo@ejemplo.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Teléfono</FormLabel>
                                    <FormControl>
                                        <Input placeholder="+569..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="eventType"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tipo de Evento</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ej. Matrimonio, Graduación..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Detalles / Mensaje</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Cuéntanos fecha tentativa, cantidad de invitados, etc."
                                        className="resize-none min-h-[120px]"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        disabled={state.submitting}
                        className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-6 text-lg transition-all"
                    >
                        {state.submitting ? "Enviando..." : "Enviar Cotización"}
                    </Button>
                </form>
            </Form>
        </div>
    );
}
