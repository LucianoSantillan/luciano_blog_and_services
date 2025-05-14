import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import "./Services.css";

interface ServiceRowProps {
    title: string;
    description: ReactNode; // Accepts ReactNode for more complex content
    imgSrc: string | StaticImageData;
    imgAlt: string;
    reverse?: boolean; // Optional prop to reverse the order
}

export default function ServiceRow({ title, description, imgSrc, imgAlt, reverse = false }: ServiceRowProps) {
    return (
        <div className={`services-row ${reverse ? "services-row-reverse" : ""}`}>
            {/* Text Column */}
            <div className="services-column services-text">
                <h3>{title}</h3>
                <div>{description}</div> {/* Render the description as ReactNode */}
            </div>
            {/* Image Column */}
            <div className="services-column services-image">
                <Image
                    src={imgSrc}
                    alt={imgAlt}
                    className="services-img"
                    width={500} // Adjust the width as necessary
                    height={500} // Adjust the height as necessary
                    priority
                />
            </div>
        </div>
    );
}