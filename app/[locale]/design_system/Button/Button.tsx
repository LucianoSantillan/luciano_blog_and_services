'use client';

import "./Button.css"; // Import the CSS file for styling

interface ButtonProps {
  label: string; // Text to display on the button
  onClick?: () => void; // Optional click handler
  variant?: "primary" | "secondary"; // Button style variant
}

export default function Button({ label, onClick, variant = "primary" }: ButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <button
      onClick={onClick}
      className={`button ${isPrimary ? "button-primary" : "button-secondary"}`}
    >
      {label}
    </button>
  );
}