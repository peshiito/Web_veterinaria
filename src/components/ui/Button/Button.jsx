import "./Button.css";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`btn btn--${variant} btn--${size} ${className}`}
      {...props}
    >
      {Icon && <Icon size={size === "sm" ? 15 : size === "lg" ? 20 : 17} />}
      {children}
    </button>
  );
};

export default Button;
