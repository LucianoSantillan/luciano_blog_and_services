'use client";'
import Image from "next/image";
import "./Services.css";
import devAndDesignImgSrc from "@/public/development_and_design_img.png"; // Adjust the path as necessary
export default function Services() {
    return (
        <section className="services-section">
            <div className="services-header">
                <h2 className="services-title">My Services</h2>
                <p className="services-description">
                    I offer a variety of software development services tailored to your needs.
                </p>
            </div>
            <div className="services-row">
                {/* Left Column */}
                <div className="services-column services-text">
                    <h3>Custom Software Development</h3>
                    <p>
                        I specialize in creating custom software solutions that are visually
                        appealing, highly functional, and user-friendly. Whether you need a
                        website, mobile app, or a complex system, I can help bring your ideas to life.
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
        </section>
    );
}