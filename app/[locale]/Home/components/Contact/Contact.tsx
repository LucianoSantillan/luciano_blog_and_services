'use client';

import React from "react";
import Image from "next/image";
import { Instagram, LinkedIn, Email, WhatsApp } from "@mui/icons-material";
import Heading3 from "@/app/design_system/Text/Headings/Heading3/Heading3";
import Link from "@/app/design_system/Link/Link";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contacto" className="contact-section">
      <div className="contact-container">
        {/* Left Column */}
        <div className="contact-left">
          <Heading3>Contacta</Heading3>
          <p className="contact-text">
            No dudes en ponerte en contacto para hablar sobre las necesidades de tu proyecto.
          </p>
          <div className="contact-icons">
            <Link href="https://instagram.com" aria-label="Instagram">
              <Instagram className="contact-icon" />
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn">
              <LinkedIn className="contact-icon" />
            </Link>
            <Link href="mailto:example@example.com" aria-label="Email">
              <Email className="contact-icon" />
            </Link>
            <Link href="https://wa.me/1234567890" aria-label="WhatsApp">
              <WhatsApp className="contact-icon" />
            </Link>
          </div>
          <Image
            src="/path-to-your-image.jpg"
            alt="Contact Image"
            width={300}
            height={200}
            className="contact-image"
          />
        </div>

        {/* Right Column */}
        <div className="contact-right">
          {/* Reserved space for future content */}
        </div>
      </div>
    </section>
  );
}