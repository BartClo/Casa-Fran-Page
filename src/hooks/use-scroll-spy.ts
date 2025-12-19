"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(
    ids: string[],
    options: IntersectionObserverInit = { rootMargin: "-50% 0px -50% 0px" }
) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        }, options);

        ids.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [ids, options]);

    return activeId;
}
