"use client";

import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "900"],
  variable: "--font-work-sans",
  display: "swap",
});

interface LogoProps {
  showSubheading?: boolean;
  size?: "small" | "medium" | "large";
  className?: string;
  subheadingText?: string;
}

export function Logo({ showSubheading = true, size = "medium", className = "", subheadingText = "Your AI Transformation Partner" }: LogoProps) {
  const sizeClasses = {
    small: {
      header: "text-3xl",
      subheading: "text-xs",
    },
    medium: {
      header: "text-5xl md:text-6xl",
      subheading: "text-sm",
    },
    large: {
      header: "text-7xl md:text-[72px]",
      subheading: "text-base",
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`text-center pt-4 ${className}`}>
      <h1
        className={`${workSans.variable} font-work-sans ${currentSize.header} leading-none text-[#0a1172] mb-2`}
        style={{
          fontWeight: 600,
          letterSpacing: "0px",
          fontFamily: "var(--font-work-sans), sans-serif",
          lineHeight: "0.3",
        }}
      >
        LeanAI
      </h1>
      {showSubheading && (
        <p
          className={`${workSans.variable} font-work-sans ${currentSize.subheading} font-normal text-black`}
          style={{
            fontSize: "11px",
            fontWeight: 300,
            letterSpacing: "0.8px",
            fontFamily: "var(--font-work-sans), 'Noto Sans KR', sans-serif",
            opacity: 0.7,
          }}
        >
          {subheadingText}
        </p>
      )}
    </div>
  );
}

