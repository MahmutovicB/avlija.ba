"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import styles from "./SocialProofSection.module.css";

const stats = [
    { value: 50, suffix: "+", label: "Završenih projekata" },
    { value: 40, suffix: "+", label: "Zadovoljnih klijenata" },
    { value: 5, suffix: "", label: "Godina iskustva" },
    { value: 24, suffix: "h", label: "Odgovor na upit" },
];

const testimonials = [
    {
        text: "Momci iz Avlije su uredili naše dvorište brzo i profesionalno. Prezadovoljni smo rezultatom i definitivno ćemo nastaviti saradnju.",
        name: "Mirza H.",
        location: "Sarajevo",
    },
    {
        text: "Tražili smo nekog ko može ukloniti staro stablo u blizini kuće. Avlija je to riješila sigurno i efikasno. Svaka preporuka!",
        name: "Amra K.",
        location: "Ilidža",
    },
    {
        text: "Sezonsko održavanje dvorišta je upravo ono što nam je trebalo. Više ne brinemo o ničemu — Avlija se brine za sve.",
        name: "Dejan P.",
        location: "Vogošća",
    },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const duration = 1500;
                    const start = performance.now();

                    const animate = (now: number) => {
                        const progress = Math.min((now - start) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * target));
                        if (progress < 1) requestAnimationFrame(animate);
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return (
        <div ref={ref} className={styles.statValue}>
            {count}
            {suffix}
        </div>
    );
}

export default function SocialProofSection() {
    return (
        <section className={`section ${styles.socialProof}`}>
            <div className="container">
                {/* Stats */}
                <div className={styles.statsGrid}>
                    {stats.map((stat, i) => (
                        <div key={i} className={styles.statCard}>
                            <Counter target={stat.value} suffix={stat.suffix} />
                            <div className={styles.statLabel}>{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Testimonials */}
                <h2 className={`section-title ${styles.testimonialsTitle}`}>
                    Šta kažu naši klijenti
                </h2>

                <motion.div
                    className={styles.testimonialGrid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
                >
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            className={styles.testimonialCard}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                            }}
                        >
                            <Quote size={24} className={styles.quoteIcon} />
                            <p className={styles.testimonialText}>{t.text}</p>
                            <div className={styles.testimonialAuthor}>
                                <strong>{t.name}</strong>
                                <span>{t.location}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
