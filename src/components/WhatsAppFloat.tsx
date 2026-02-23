"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import styles from "./WhatsAppFloat.module.css";

export default function WhatsAppFloat() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > window.innerHeight * 0.5);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <a
            href="https://wa.me/38761882177"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.float} ${visible ? styles.visible : ""}`}
            aria-label="Kontaktirajte nas na WhatsApp"
        >
            <MessageCircle size={28} />
            <span className={styles.tooltip}>WhatsApp</span>
        </a>
    );
}
