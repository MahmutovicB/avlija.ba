import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import styles from "./Footer.module.css";

const navLinks = [
    { label: "Početna", href: "#hero" },
    { label: "Usluge", href: "#usluge" },
    { label: "Galerija", href: "#galerija" },
    { label: "O nama", href: "#onama" },
    { label: "Kontakt", href: "#kontakt" },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.grid}`}>
                {/* Brand */}
                <div className={styles.brand}>
                    <div className={styles.logoRow}>
                        <Image src="/logo.svg" alt="Avlija.ba" width={40} height={40} />
                        <span className={styles.logoText}>avlija.ba</span>
                    </div>
                    <p className={styles.tagline}>
                        Vaša avlija, vaše utočište.
                        <br />
                        Profesionalno uređenje dvorišta u Sarajevu.
                    </p>
                </div>

                {/* Links */}
                <div className={styles.links}>
                    <h4>Navigacija</h4>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div className={styles.contactInfo}>
                    <h4>Kontakt</h4>
                    <div className={styles.contactItem}>
                        <Phone size={16} />
                        <a href="tel:+38761000000">+387 61 000 000</a>
                    </div>
                    <div className={styles.contactItem}>
                        <Mail size={16} />
                        <a href="mailto:info@avlija.ba">info@avlija.ba</a>
                    </div>
                    <div className={styles.contactItem}>
                        <MapPin size={16} />
                        <span>Sarajevo i okolina</span>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className="container">
                    <p>© 2026 Avlija.ba — Sva prava zadržana</p>
                </div>
            </div>
        </footer>
    );
}
