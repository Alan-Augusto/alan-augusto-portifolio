"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Footer() {
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
            setShowFooter(isBottom);
        };

        window.addEventListener("scroll", handleScroll);
        
        // Run the effect initially
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <footer
            className={cn(
                "transition-opacity duration-500 fixed bottom-0 w-full bg-background text-center",
                showFooter ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
        >
            <div className="container mx-auto">
                <p>© {new Date().getFullYear()} Alan Augusto Martins Campos. Todos os direitos reservados.</p>
                {/* <p>Feito com Next.js e shadcn/ui</p> */}
            </div>
        </footer>
    );
}
