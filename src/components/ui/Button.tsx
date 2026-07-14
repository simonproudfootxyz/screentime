"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";

type ButtonVariant =
  | "default"
  | "primary"
  | "invert"
  | "primaryInvert"
  | "text"
  | "textContrast";

type ButtonSize = "default" | "mini";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children?: ReactNode;
};

const variantClassMap: Record<ButtonVariant, string> = {
  default: "",
  primary: "button--primary",
  invert: "button--invert",
  primaryInvert: "button--primary-invert",
  text: "button--text",
  textContrast: "button--text-contrast",
};

export function Button({
  className = "",
  type = "button",
  disabled = false,
  children,
  variant = "default",
  size = "default",
  fullWidth = false,
  ...props
}: ButtonProps) {
  const classes = [
    "button",
    variantClassMap[variant],
    size === "mini" ? "button--mini" : "",
    fullWidth ? "button--full-width" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}

