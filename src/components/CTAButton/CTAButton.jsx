import React from "react";

export default function CTAButton({ 
  children, 
  variant = "filled", 
  className = "", 
  onClick 
}) {
  const base =
    "px-3 md:px-6 py-3 text-md md:text-lg font-semibold rounded-full transition-colors duration-200 cursor-pointer";

  const styles =
    variant === "filled"
      ? "bg-accent text-white hover:bg-accent"
      : "border-2 border-accent text-accent hover:bg-accent hover:text-white";

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </button>
  );
}
