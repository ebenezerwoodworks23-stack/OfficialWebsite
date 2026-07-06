import React from "react";
import logoImage from "../../assets/eww.jpeg";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark" | "gold";
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({
  className = "",
  variant = "light",
  showText = true,
  size = "md",
}: LogoProps) {
  // Color presets
  const colors = {
    light: {
      tree: "stroke-white",
      textPrimary: "text-white",
      textSecondary: "text-amber-100/80",
    },
    dark: {
      tree: "stroke-wood-dark",
      textPrimary: "text-wood-dark",
      textSecondary: "text-wood-walnut",
    },
    gold: {
      tree: "stroke-wood-gold",
      textPrimary: "text-wood-gold",
      textSecondary: "text-wood-cream/90",
    },
  };

  const selectedColors = colors[variant];

  // Sizes
  const sizeClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-20",
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <img
        src={logoImage}
        alt="Ebenezer Wood Works logo"
        className={`${sizeClasses[size]} w-auto object-contain rounded-md`}
      />

      {showText && (
        <div className="flex flex-col justify-center">
          <span
            className={`font-serif tracking-wider font-bold leading-tight uppercase ${
              size === "sm" ? "text-sm" : size === "lg" ? "text-2xl" : "text-base"
            } ${selectedColors.textPrimary}`}
            style={{ textShadow: variant === "light" ? "0 1px 2px rgba(0,0,0,0.2)" : "none" }}
          >
            Ebenezer
          </span>
          <span
            className={`font-sans tracking-[0.25em] text-[8px] font-semibold uppercase ${
              size === "sm" ? "text-[6px]" : size === "lg" ? "text-xs" : "text-[8px]"
            } ${selectedColors.textSecondary}`}
          >
            Wood Works
          </span>
        </div>
      )}
    </div>
  );
}
