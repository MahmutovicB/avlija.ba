"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, MapPin, Mail, MessageCircle } from "lucide-react";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // For now, open mailto
        const subject = encodeURIComponent(`Upit sa avlija.ba — ${formData.name}`);
        const body = encodeURIComponent(
            `Ime: ${formData.name}\nEmail: ${formData.email}\n\nPoruka:\n${formData.message}`
        );
        window.open(`mailto:info@avlija.ba?subject=${subject}&body=${body}`);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="kontakt" className={`section ${styles.contact}`}>
            <div className="container">
                <h2 className="section-title">Kontaktirajte nas</h2>
                <p className="section-subtitle">
                    Javite nam se za besplatan dolazak i procjenu — odgovaramo u roku od 24 sata
                </p>

                <div className={styles.grid}>
                    {/* Form */}
                    <motion.form
                        className={styles.form}
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className={styles.field}>
                            <label htmlFor="name">Vaše ime</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="npr. Marko Marković"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="email">Email adresa</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="npr. marko@email.com"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="message">Vaša poruka</label>
                            <textarea
                                id="message"
                                rows={5}
                                placeholder="Opišite kakve usluge trebate..."
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>
                        <button
                            type="submit"
                            className={`btn btn-primary ${styles.submitBtn}`}
                            disabled={submitted}
                        >
                            <Send size={18} />
                            {submitted ? "Poslano!" : "Pošaljite upit"}
                        </button>
                    </motion.form>

                    {/* Contact Info */}
                    <motion.div
                        className={styles.info}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className={styles.infoCard}>
                            <h3>Informacije</h3>

                            <div className={styles.infoItem}>
                                <Phone size={20} />
                                <div>
                                    <strong>Telefon</strong>
                                    <a href="tel:+38761882177">+387 61 882 177</a>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <Mail size={20} />
                                <div>
                                    <strong>Email</strong>
                                    <a href="mailto:info@avlija.ba">info@avlija.ba</a>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <MapPin size={20} />
                                <div>
                                    <strong>Lokacija</strong>
                                    <span>Sarajevo i okolina</span>
                                </div>
                            </div>

                            <a
                                href="https://wa.me/38761882177"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`btn btn-whatsapp ${styles.whatsappBtn}`}
                            >
                                <MessageCircle size={20} />
                                Pišite nam na WhatsApp
                            </a>
                        </div>

                        {/* Map */}
                        <div className={styles.mapWrapper}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91958.67939014!2d18.311!3d43.8563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c9c4aad20dad%3A0x8b5e4e7d4f6c4c4c!2sSarajevo!5e0!3m2!1sbs!2sba!4v1700000000000!5m2!1sbs!2sba"
                                width="100%"
                                height="220"
                                style={{ border: 0, borderRadius: "var(--radius-md)" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Naša lokacija — Sarajevo"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
