"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import Image from "next/image";
import styles from "./HeroSection.module.css";

const HeroScene = dynamic(() => import("./HeroScene"), {
    ssr: false,
    loading: () => null,
});

// Deterministic pseudo-random to avoid hydration mismatch
function seededRandom(seed: number): number {
    const x = Math.sin(seed * 9301 + 49297) * 49297;
    return Math.round((x - Math.floor(x)) * 10000) / 10000;
}

const particles = Array.from({ length: 20 }, (_, i) => ({
    left: `${seededRandom(i * 7 + 1) * 100}%`,
    top: `${seededRandom(i * 7 + 2) * 100}%`,
    animationDelay: `${seededRandom(i * 7 + 3) * 5}s`,
    animationDuration: `${(4 + seededRandom(i * 7 + 4) * 6).toFixed(4)}s`,
    width: `${(4 + seededRandom(i * 7 + 5) * 8).toFixed(4)}px`,
    height: `${(4 + seededRandom(i * 7 + 6) * 8).toFixed(4)}px`,
    opacity: Math.round((0.2 + seededRandom(i * 7 + 7) * 0.3) * 10000) / 10000,
}));

export default function HeroSection() {
    const handleScroll = (target: string) => {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.overlay} />

            <Suspense fallback={null}>
                <HeroScene />
            </Suspense>

            {/* CSS Fallback Particles */}
            <div className={styles.fallbackParticles}>
                {particles.map((p, i) => (
                    <div
                        key={i}
                        className={styles.particle}
                        style={p}
                    />
                ))}
            </div>

            <div className={styles.content}>
                <div className={styles.logoWrapper}>
                    <Image
                        src="/logo.svg"
                        alt="Avlija.ba"
                        width={200}
                        height={200}
                        priority
                    />
                </div>

                <h1 className={styles.title}>
                    Vaša avlija,{" "}
                    <span className={styles.highlight}>vaše utočište.</span>
                </h1>

                <p className={styles.subtitle}>
                    Profesionalno uređenje i održavanje dvorišta u Sarajevu i okolini
                </p>

                <div className={styles.buttons}>
                    <button
                        className="btn btn-primary"
                        onClick={() => handleScroll("#kontakt")}
                    >
                        Zatražite ponudu
                    </button>
                    <a
                        href="https://wa.me/38761882177"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp"
                    >
                        <MessageCircle size={20} />
                        WhatsApp
                    </a>
                </div>
            </div>

            <button
                className={styles.scrollIndicator}
                onClick={() => handleScroll("#usluge")}
                aria-label="Skrolajte dolje"
            >
                <ChevronDown size={28} />
            </button>
        </section>
    );
}
