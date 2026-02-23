"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./GallerySection.module.css";

const projects = [
    {
        title: "Uređenje dvorišta — Ilidža",
        desc: "Kompletna transformacija zapuštenog dvorišta u moderni zeleni prostor.",
        image: "/gallery/uredjenje.png",
    },
    {
        title: "Košenje i održavanje — Vogošća",
        desc: "Redovno sezonsko održavanje travnjaka i cvjetnih gredica.",
        image: "/gallery/kosenje.png",
    },
    {
        title: "Uklanjanje stabla — Sarajevo",
        desc: "Sigurno uklanjanje oštećenog stabla u blizini stambenog objekta.",
        image: "/gallery/stablo.png",
    },
    {
        title: "Sadnja živih ograda — Hadžići",
        desc: "Planiranje i sadnja ukrasne žive ograde duž cijelog dvorišta.",
        image: "/gallery/ograda.png",
    },
    {
        title: "Pejzažno uređenje — Istočno Sarajevo",
        desc: "Dizajn i realizacija kompletnog pejzažnog rješenja sa stazama i rasvjetom.",
        image: "/gallery/pejzaz.png",
    },
    {
        title: "Proljetna priprema — Centar",
        desc: "Kompletna priprema dvorišta za proljeće — čišćenje, gnojenje, aeracija.",
        image: "/gallery/proljetna.png",
    },
];

export default function GallerySection() {
    return (
        <section id="galerija" className={`section ${styles.gallery}`}>
            <div className="container">
                <h2 className="section-title">Naši radovi</h2>
                <p className="section-subtitle">
                    Pogledajte neke od naših uspješno završenih projekata
                </p>

                <motion.div
                    className={styles.grid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                >
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            className={styles.card}
                            variants={{
                                hidden: { opacity: 0, scale: 0.95 },
                                visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
                            }}
                        >
                            <div className={styles.cardImage}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    style={{ objectFit: "cover" }}
                                />
                                <div className={styles.cardImageOverlay} />
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{project.title}</h3>
                                <p className={styles.cardDesc}>{project.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
