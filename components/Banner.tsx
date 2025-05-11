'use client'
// WebDesignHero.jsx
// A responsive hero section inspired by the provided mock‑up.
// TailwindCSS v3+ required. Lucide‑react is used for icons; adjust image/logo paths as needed.

import React from "react";
import Buttons from "./Button/Button";
import MenuList from "./MenuList";
import Button from "./Button/Button";

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
    <section className="relative isolate overflow-hidden bg-white text-primary-text">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-24 md:flex-row md:items-start lg:gap-24">
        {/* LEFT – text content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-extrabold md:text-6xl">{title}</h1>
          <h2 className="mt-4 text-2xl italic md:text-3xl">{name}</h2>

          {/* Menu List */}
          <MenuList bullets={bullets} />

          {/* Buttons */}
          <Button
            label={primaryCta}
            variant="primary"
            onClick={() => console.log("Primary button clicked")}
          />

          <Button
            label={secondaryCta}
            variant="secondary"
            onClick={() => console.log("Secondary button clicked")}
          />        </div>

        {/* RIGHT – developer photo */}
        <div className="relative w-full md:w-1/2">
          <img
            src={imageSrc}
            alt={name}
            className="relative z-20 mx-auto max-h-[500px] w-auto rounded-b-[80px] object-cover"
          />
        </div>
      </div>

      {/* Subtle radial glow behind the image area */}
      <div className="pointer-events-none absolute bottom-0 right-1/2 h-96 w-96 translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
    </section>
  );
}
