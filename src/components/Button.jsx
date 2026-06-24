import { motion } from 'framer-motion';

export const Button = ({ children, href, className = '', variant = 'primary', ...props }) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-full transition-colors duration-300 px-8 py-4 text-base shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primaryHover",
    secondary: "bg-surface text-textMain border border-border hover:bg-border",
    outline: "bg-transparent text-textMain border-2 border-border hover:border-primary hover:text-primary"
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
