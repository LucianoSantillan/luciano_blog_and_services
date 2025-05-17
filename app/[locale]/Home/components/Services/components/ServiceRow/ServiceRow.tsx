import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import "@/app/[locale]/Home/components/Services/Services.css"; // Import the CSS file for styles
import Heading3 from "@/app/design_system/Text/Headings/Heading3/Heading3";

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
            <div style={{textAlign: "center"}} className="services-column services-text">
                <Heading3>{title}</Heading3>
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