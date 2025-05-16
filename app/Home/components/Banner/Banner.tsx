'use client';

import React from "react";
import MenuList from "@/app/components/MenuList";
import Button from "@/app/design_system/Button/Button";
import "./Banner.css"; // Import the CSS file for styling
import { PRIMARY_COLOR_2 } from "@/app/theme";
import Heading1 from "@/app/design_system/Text/Headings/Heading1/Heading1";
import Heading2 from "@/app/design_system/Text/Headings/Heading2/Heading2";

const defaultBullets = [
  "Sitios Webs profesionales.",
  "Visualmente atractivos y funcionales.",
  "Intuitivos para el usuario.",
  "Sin recurrir a una agencia costosa.",
];

/**
 * @component WebDesignHero
 * @param {string} title        – Main heading text.
 * @param {string} name         – Sub‑heading (italic name).
 * @param {string[]} bullets    – List items to display.
 * @param {string} primaryCta   – Text for the filled button.
 * @param {string} secondaryCta – Text for the outlined button.
 * @param {string} imageSrc     – Developer photo (transparent background works best).
 */
export default function WebDesignHero({
  title = "Diseño Web Barcelona",
  name = "Luciano Santillan",
  bullets = defaultBullets,
  primaryCta = "Servicios",
  secondaryCta = "¡Contacta!",
  imageSrc = "yo_banner.png",
}) {
  return (
    <section className="banner section-min-width">
      <div className="banner-container section-content-max-width">
        {/* LEFT – text content */}
        <div className="banner-left">
          <Heading1 className="banner-title">{title}</Heading1>
          <Heading2 className="banner-subtitle" style={{color: PRIMARY_COLOR_2}}> 
            {name}
          </Heading2>    
          {/* Menu List */}
          <MenuList bullets={bullets} />

          <div className="button-container">
            <a href="#services" style={{ textDecoration: "none" }}>
              <Button
                label={primaryCta}
                variant="primary"
                // onClick={() => console.log("Primary button clicked")}
              />
            </a>
            <a href="#contact-sesion" style={{ textDecoration: "none" }}>
            <Button
              label={secondaryCta}
              variant="secondary"
              onClick={() => console.log("Secondary button clicked")}
            />
            </a>
          </div>
        </div>

        {/* RIGHT – developer photo */}
        <div className="banner-right">
          <img
            src={imageSrc}
            alt={name}
            className="banner-image"
            style={{margin: "0px"}}
          />
        </div>
      </div>

      {/* Subtle radial glow behind the image area */}
      <div className="banner-glow" />
    </section>
  );
}