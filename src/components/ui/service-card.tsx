import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt?: string;
    features?: string[];
    className?: string;
    actionLabel?: string;
    href?: string;
}

export function ServiceCard({
    title,
    description,
    imageSrc,
    imageAlt,
    features = [],
    className,
    actionLabel = "Más Información",
    href = "#contact",
}: ServiceCardProps) {
    return (
        <Card className={cn("overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full bg-white", className)}>
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={imageAlt || title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>
            <CardHeader>
                <h3 className="text-2xl font-bold text-primary font-sans">{title}</h3>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{description}</p>
                {features.length > 0 && (
                    <ul className="space-y-2">
                        {features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                )}
            </CardContent>
            <CardFooter>
                <Button variant="outline" asChild className="w-full border-primary/20 text-primary hover:bg-primary/5 hover:text-primary-dark">
                    <a href={href}>{actionLabel}</a>
                </Button>
            </CardFooter>
        </Card>
    );
}
