"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import styles from "./FAQSection.module.css";

const faqs = [
    {
        q: "Koje usluge nudite?",
        a: "Nudimo košenje dvorišta, sezonsko održavanje, uklanjanje stabala, kompletno uređenje dvorišta, sadnju bilja i cvijeća, te orezivanje živih ograda. Kontaktirajte nas za posebne zahtjeve.",
    },
    {
        q: "Koliko koštaju vaše usluge?",
        a: "Cijene zavise od lokacije, stanja terena i obima posla. Nudimo besplatan dolazak i procjenu — pozovite nas ili pišite na WhatsApp za personaliziranu ponudu.",
    },
    {
        q: "Na kojem području radite?",
        a: "Primarno radimo na području Sarajeva i okolnih općina (Ilidža, Vogošća, Hadžići, Ilijaš, Istočno Sarajevo). Za veće projekte dolazimo i šire.",
    },
    {
        q: "Kako mogu zatražiti ponudu?",
        a: "Najbrži način je putem WhatsApp-a — kliknite na zeleno dugme na stranici. Također nas možete pozvati telefonom ili popuniti kontakt formu.",
    },
    {
        q: "Da li radite i tokom zime?",
        a: "Da! Tokom zime vršimo orezivanje drveća, čišćenje dvorišta, i pripremne radove za proljeće. Kontaktirajte nas za informacije o zimskim uslugama.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className={`section ${styles.faq}`}>
            <div className="container">
                <h2 className="section-title">Često postavljana pitanja</h2>
                <p className="section-subtitle">
                    Odgovori na najčešća pitanja naših klijenata
                </p>

                <div className={styles.list}>
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`${styles.item} ${openIndex === i ? styles.open : ""}`}
                        >
                            <button
                                className={styles.question}
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                aria-expanded={openIndex === i}
                            >
                                <span>{faq.q}</span>
                                <ChevronDown
                                    size={20}
                                    className={styles.chevron}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        className={styles.answer}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <p>{faq.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
