'use client';

import React from "react";
import Image from "next/image";
import { Instagram, LinkedIn, Email, WhatsApp } from "@mui/icons-material";
import {Heading2} from "@/app/design_system/Text";
import Link from "@/app/design_system/Link/Link";
import { TextField, Button } from "@mui/material"; // Import MUI components
import "./Contact.css";
import LottieAnimation from "@/app/components/LottieAnimation/LottieAnimation";
import animationData from "@/public/animations/contact_lottie.json"; // Replace with your animation file path

export default function Contact() {
  return (
    <section id="contacto" className="contact-section">
      <div className="contact-container">
        {/* Left Column */}
        <div className="contact-left">
          <Heading2>Contacta</Heading2>
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
          <LottieAnimation animationData={animationData} className="contact-animation" />
        </div>

        {/* Right Column */}
        <div className="contact-right">
          <form className="contact-form">
            <TextField
              id="nombre"
              name="nombre"
              label="Nombre"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              id="email"
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              id="telefono"
              name="telefono"
              label="Teléfono"
              type="tel"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              id="asunto"
              name="asunto"
              label="Asunto"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              id="mensaje"
              name="mensaje"
              label="Mensaje"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={5}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="submit-button"
            >
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}