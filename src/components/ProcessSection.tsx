"use client";

import { motion } from "framer-motion";
import { Phone, ClipboardList, CheckCircle } from "lucide-react";
import styles from "./ProcessSection.module.css";

const steps = [
    {
        icon: Phone,
        title: "Pozovite nas",
        desc: "Opišite šta vam treba — telefonom, WhatsApp-om ili putem kontakt forme.",
        step: "01",
    },
    {
        icon: ClipboardList,
        title: "Dogovorimo plan",
        desc: "Besplatan dolazak i procjena. Zajedno kreiramo plan po vašim željama.",
        step: "02",
    },
    {
        icon: CheckCircle,
        title: "Mi uređujemo",
        desc: "Profesionalno i na vrijeme obavljamo posao. Vi uživate u rezultatu.",
        step: "03",
    },
];

const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" as const },
    }),
};

export default function ProcessSection() {
    return (
        <section id="onama" className={`section ${styles.process}`}>
            <div className="container">
                <h2 className="section-title">Kako radimo</h2>
                <p className="section-subtitle">
                    Jednostavan proces u tri koraka — od prvog poziva do uređenog dvorišta
                </p>

                <div className={styles.steps}>
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            className={styles.stepCard}
                            custom={i}
                            variants={stepVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <span className={styles.stepNumber}>{step.step}</span>
                            <div className={styles.stepIcon}>
                                <step.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDesc}>{step.desc}</p>
                            {i < steps.length - 1 && (
                                <div className={styles.connector} aria-hidden="true" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
