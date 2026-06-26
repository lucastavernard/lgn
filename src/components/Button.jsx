import { motion } from 'framer-motion';

export const Button = ({ children, href, className = '', variant = 'primary', ...props }) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-full transition-colors duration-300 px-8 py-4 text-base shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background border border-transparent";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-accent text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]",
    secondary: "bg-surface/60 backdrop-blur-md hover:bg-white/5",
    outline: "bg-transparent text-textMain border border-border hover:border-primary hover:text-primary hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]"
  };

  const Component = motion.a;

  return (
    <Component
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </Component>
  );
};
