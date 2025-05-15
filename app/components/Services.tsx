'use client';
import "./Services.css";
import ServiceRow from "./ServiceRow";
import MenuList from "./MenuList"; // Import MenuList for the list items
import Link from "next/link"; // Import Next.js Link component
import devAndDesignImgSrc from "@/public/development_and_design_img.png"; // Adjust the path as necessary
import seoImg from "@/public/seo_optimization.png"; // Adjust the path as necessary
import performanceImg from "@/public/performance_service.png"; // Adjust the path as necessary
import eccomerceImg from "@/public/ecommerce.png"; // Adjust the path as necessary
import designImg from "@/public/design.png"; // Adjust the path as necessary
import securityImg from "@/public/security.png"; // Adjust the path as necessary

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
                <div style={{display: "flex", flexDirection: "column", gap: "3rem"}}>
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
                    <ServiceRow
                        title="Optimización del Rendimiento Web"
                        description={
                            <>
                                <p>
                                    Un sitio web lento significa clientes perdidos. Mejoro la velocidad de carga y la capacidad de respuesta optimizando imágenes, estrategias de caché y otras técnicas de rendimiento para garantizar una experiencia de usuario fluida.
                                </p>
                                <p>
                                    ¡Lea más sobre{" "}
                                    <Link href="/contact" className="link">
                                        Optimización y Rendimiento Web!
                                    </Link>
                                </p>
                            </>
                        }
                        imgSrc={performanceImg} // Replace with the appropriate image source if available
                        imgAlt="Optimización del Rendimiento Web"
                    />
                    <ServiceRow
                        title="Tiendas online (eCommerce)"
                        description={
                            <>
                                <p>
                                    ¿Quieres vender en línea? Construyo tiendas de comercio electrónico seguras, escalables y fáciles de gestionar. Ya sea con WooCommerce o soluciones personalizadas, garantizo una experiencia de compra fluida para tus clientes.
                                </p>
                                <p>
                                    ¡Conózca más en detalle{" "}
                                    <Link href="/contact" className="link">
                                        Mi Servicio de Creación de Tiendas Online!
                                    </Link>
                                </p>
                            </>
                        }
                        imgSrc={eccomerceImg} // Replace with the appropriate image source if available
                        imgAlt="Optimización del Rendimiento Web"
                        reverse
                    />
                    <ServiceRow
                        title="Edición de Imágenes y Gráficos"
                        description={
                            <>
                                <p>
                                    Aunque mi enfoque principal es el desarrollo web, también ofrezco edición básica de imágenes para mejorar los elementos visuales de tu sitio, asegurando coherencia y profesionalismo.
                                </p>
                            </>
                        }
                        imgSrc={designImg} // Replace with the appropriate image source if available
                        imgAlt="Optimización del Rendimiento Web"
                    />
                    <ServiceRow
                        title="Seguridad y Protección del Sitio Web"
                        description={
                            <>
                                <p>
                                    Mantener tu sitio web seguro es esencial. Implemento las mejores prácticas de seguridad para prevenir ataques y accesos no autorizados, incluyendo:
                                </p>
                                <MenuList
                                    bullets={[
                                        "Control de intentos de inicio de sesión para prevenir ataques de fuerza bruta",
                                        "Actualizaciones de seguridad regulares para mantener tu sitio protegido",
                                        "Configuración de SSL y HTTPS para una encriptación segura de datos",
                                    ]}
                                />
                                <div style={{ marginTop: "1rem" }}>
                                    ¡Conózca más en detalle{" "}
                                    <Link href="/contact" className="link">
                                        Mi Servicio de Seguridad Web!
                                    </Link>
                                </div>
                            </>
                        }
                        imgSrc={securityImg} // Replace with the appropriate image source if available
                        imgAlt="Optimización del Rendimiento Web"
                        reverse
                    />
                </div>
            </div>
        </section>
    );
}