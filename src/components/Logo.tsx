import React from "react";

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
      {/* Precision-crafted SVG tree logo resembling the joinery work of Ebenezer Wood Works */}
      <svg
        className={`${sizeClasses[size]} aspect-square`}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Foundation Arch */}
        <path
          d="M 25 75 A 35 35 0 0 0 95 75"
          className={`${selectedColors.tree}`}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        
        {/* Central Trunk forming the 'T' or pillar joinery */}
        <path
          d="M 60 45 L 60 90"
          className={`${selectedColors.tree}`}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M 50 90 L 70 90"
          className={`${selectedColors.tree}`}
          strokeWidth="5"
          strokeLinecap="round"
        />
        
        {/* Level 1 Bottom Branches (Joinery) */}
        <path
          d="M 60 70 L 40 50 M 40 50 L 40 40 M 40 50 L 30 50"
          className={`${selectedColors.tree}`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 60 70 L 80 50 M 80 50 L 80 40 M 80 50 L 90 50"
          className={`${selectedColors.tree}`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Level 2 Mid Branches */}
        <path
          d="M 60 55 L 45 35 M 45 35 L 55 35 M 45 35 L 45 25"
          className={`${selectedColors.tree}`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 60 55 L 75 35 M 75 35 L 65 35 M 75 35 L 75 25"
          className={`${selectedColors.tree}`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Level 3 Top Branches (Crown) */}
        <path
          d="M 60 40 L 50 20 L 60 10 L 70 20 L 60 40"
          className={`${selectedColors.tree}`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 60 25 L 60 10"
          className={`${selectedColors.tree}`}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

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
