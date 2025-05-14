'use client';
import "./Services.css";
import ServiceRow from "./ServiceRow";
import MenuList from "./MenuList"; // Import MenuList for the list items
import Link from "next/link"; // Import Next.js Link component
import devAndDesignImgSrc from "@/public/development_and_design_img.png"; // Adjust the path as necessary
import seoImg from "@/public/seo_optimization.png"; // Adjust the path as necessary

export default function Services() {
    return (
        <section className="section section-min-width services-section">
            <div style={{ margin: "auto" }} className="section-content-max-width">
                <div className="services-header">
                    <h2 className="services-title">Mis Servicios</h2>
                    <p>
                        Como desarrollador de software web, ayudo a empresas y particulares a crear, optimizar y mejorar su presencia en línea. Ya sea que necesites un sitio web completamente nuevo, mejor rendimiento o una estrategia de SEO más efectiva, ofrezco soluciones personalizadas para alcanzar tus objetivos.
                    </p>
                </div>
                {/* Service Rows */}
                <ServiceRow
                    title="Desarrollo y Diseño Webs"
                    description={
                        <>
                            <p>
                                Creo sitios web modernos, responsivos y fáciles de usar que se alinean con tu visión y necesidades comerciales. Ya sea un portafolio personal, un sitio web empresarial o una aplicación web completa, garantizo que la funcionalidad y la estética vayan de la mano.
                            </p>
                            <p>
                                ¡Conózca un poco más sobre{" "}
                                <Link href="/contact" className="link">
                                    Mi Servicio de Desarrollo y Diseño Web!
                                </Link>
                            </p>
                        </>
                    }
                    imgSrc={devAndDesignImgSrc}
                    imgAlt="Custom Software Development"
                />
                <ServiceRow
                    title="Optimización SEO"
                    description={
                        <>
                            <p>
                                Tener un gran sitio web no es suficiente: ¡necesita ser encontrado! Optimizo sitios web para mejorar su posicionamiento en buscadores como Google, aumentar la visibilidad y atraer más tráfico orgánico. Esto incluye:
                            </p>
                            <MenuList
                                bullets={[
                                    "Análisis de palabras clave.",
                                    "Optimización de contenido.",
                                    "Mejoras técnicas para SEO.",
                                    "Aumento del tráfico orgánico.",
                                ]}
                            />
                            <div style={{ marginTop: "1rem" }}>
                                <p>
                                    ¡Conózca más en detalle{" "}
                                    <Link href="/contact" className="link">
                                        Mi Servicio de Optimización SEO!
                                    </Link>
                                </p>
                            </div>
                        </>
                    }
                    imgSrc={seoImg}
                    imgAlt="Optimización SEO"
                    reverse // This will reverse the order of the columns
                />
            </div>
        </section>
    );
}