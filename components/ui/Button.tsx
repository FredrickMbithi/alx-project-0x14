import type { ButtonProps } from "@/interfaces";

const Button = ({
  variant = "primary",
  size = "md",
  children,
  onClick,
  className = "",
  disabled = false,
  type = "button",
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-DEFAULT disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary:
      "bg-primary text-black hover:bg-primary-dark focus:ring-primary glow-gold",
    secondary:
      "bg-background-secondary text-white hover:bg-background-card focus:ring-gray-500",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-black focus:ring-primary",
    ghost: "text-gray-400 hover:text-white hover:bg-background-secondary focus:ring-gray-500",
  };

  const sizeClasses = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-6 text-base",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
