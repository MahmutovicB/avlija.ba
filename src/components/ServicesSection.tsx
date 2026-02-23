"use client";

import { motion } from "framer-motion";
import {
    Scissors,
    CalendarDays,
    TreePine,
    Paintbrush,
    Flower2,
    Fence,
} from "lucide-react";
import styles from "./ServicesSection.module.css";

const services = [
    {
        icon: Scissors,
        title: "Košenje dvorišta",
        desc: "Redovno i profesionalno košenje travnjaka sa savremenom opremom za uredan izgled vašeg dvorišta.",
    },
    {
        icon: CalendarDays,
        title: "Sezonsko održavanje",
        desc: "Kompletna sezonska njega — proljetna priprema, ljetno održavanje, jesičenje čišćenje i zimska zaštita.",
    },
    {
        icon: TreePine,
        title: "Uklanjanje stabala",
        desc: "Sigurno i stručno uklanjanje stabala, uključujući i rad u rizičnim zonama uz profesionalnu opremu.",
    },
    {
        icon: Paintbrush,
        title: "Uređenje dvorišta",
        desc: "Kompletno dizajniranje i uređenje vašeg dvorišta — od ideje do realizacije, po vašim željama.",
    },
    {
        icon: Flower2,
        title: "Sadnja bilja i cvijeća",
        desc: "Nabavka i profesionalna sadnja ukrasnog bilja, sezonskog cvijeća, drveća i grmlja.",
    },
    {
        icon: Fence,
        title: "Orezivanje živih ograda",
        desc: "Oblikovanje i održavanje živih ograda, šiblja i ukrasnog grmlja za savršen izgled.",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function ServicesSection() {
    return (
        <section id="usluge" className={`section ${styles.services}`}>
            <div className="container">
                <h2 className="section-title">Naše usluge</h2>
                <p className="section-subtitle">
                    Pružamo širok spektar usluga za uređenje i održavanje vašeg dvorišta
                </p>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            className={styles.card}
                            variants={cardVariants}
                        >
                            <div className={styles.iconWrapper}>
                                <service.icon size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDesc}>{service.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
