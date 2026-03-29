import { type ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
};

export function Button({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-heading font-bold transition-all duration-300 ease-in-out px-8 py-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-rm-black";
  
  const variants = {
    primary: "bg-rm-blue hover:bg-rm-blue/90 text-rm-cream shadow-lg hover:shadow-rm-blue/50",
    secondary: "bg-rm-gold hover:bg-rm-gold-dark text-rm-black shadow-lg hover:shadow-rm-gold/50",
    outline: "border-2 border-rm-gold text-rm-gold hover:bg-rm-gold hover:text-rm-black",
  };

  const widthStyle = fullWidth ? "w-full" : "w-auto";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
