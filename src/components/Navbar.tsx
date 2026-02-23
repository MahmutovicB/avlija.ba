"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import styles from "./Navbar.module.css";

const navLinks = [
    { label: "Početna", href: "#hero" },
    { label: "Usluge", href: "#usluge" },
    { label: "Galerija", href: "#galerija" },
    { label: "O nama", href: "#onama" },
    { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.inner}>
                <a href="#hero" className={styles.logo} onClick={() => handleNavClick("#hero")}>
                    <Image src="/logo.svg" alt="Avlija.ba" width={100} height={100} />
                    {/* <span className={styles.logoText}>avlija.ba</span> */}
                </a>

                <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(link.href);
                                }}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li className={styles.phoneMobile}>
                        <a href="tel:+38761882177" className={styles.phoneLink}>
                            <Phone size={16} />
                            +387 61 882 177
                        </a>
                    </li>
                </ul>

                <a href="tel:+38761882177" className={styles.phoneDesktop}>
                    <Phone size={16} />
                    <span>+387 61 882 177</span>
                </a>

                <button
                    className={styles.hamburger}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Zatvori meni" : "Otvori meni"}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
    );
}
