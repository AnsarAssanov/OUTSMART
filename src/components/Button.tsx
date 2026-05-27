import { motion } from "motion/react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  icon?: ReactNode;
}

export function Button({ children, href, variant = "primary", className = "", icon }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform active:scale-95 text-sm md:text-base cursor-pointer";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]",
    secondary: "bg-indigo-600 text-white hover:bg-indigo-500 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]",
    outline: "bg-transparent border border-white/20 text-white hover:bg-white/10"
  };

  const isExternal = href.startsWith('http');

  return (
    <motion.a 
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ y: -2 }}
    >
      {children}
      {icon}
    </motion.a>
  );
}
