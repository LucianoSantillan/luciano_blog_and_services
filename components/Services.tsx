'use client";'
import Image from "next/image";
import "./Services.css";
import devAndDesignImgSrc from "@/public/development_and_design_img.png"; // Adjust the path as necessary
export default function Services() {
    return (
        <section  className="section section-min-width services-section">
            <div style={{margin: "auto"}} className="section-content-max-width">
                <div className="services-header">
                    <h2 className="services-title">Mis Servicios</h2>
                    <p>
                        Como desarrollador de software web, ayudo a empresas y particulares a crear, optimizar y mejorar su presencia en línea. Ya sea que necesites un sitio web completamente nuevo, mejor rendimiento o una estrategia de SEO más efectiva, ofrezco soluciones personalizadas para alcanzar tus objetivos.
                    </p>
                </div>
                <div className="services-row">
                    {/* Left Column */}
                    <div className="services-column services-text">
                        <h3>Desarrollo y Diseño Webs</h3>
                        <p>
                            Creo sitios web modernos, responsivos y fáciles de usar que se alinean con tu visión y necesidades comerciales. Ya sea un portafolio personal, un sitio web empresarial o una aplicación web completa, garantizo que la funcionalidad y la estética vayan de la mano.
                        </p>
                    </div>
                    {/* Right Column */}
                    <div className="services-column services-image">
                        <Image
                            src={devAndDesignImgSrc}
                            alt="Custom Software Development"
                            className="services-img"
                            width={500} // Adjust the width as necessary
                            height={500} // Adjust the height as necessary
                            priority
                        />
                        {/* <img
            src={devAndDesignImgSrc}
            alt="Custom Software Development"
            className="services-img"
          /> */}
                    </div>
                </div>
            </div>
        </section>
    );
}