import "./Card.css";

const Card = ({ children, className = "", hover = true, ...props }) => {
  return (
    <div
      className={`card ${hover ? "card--hover" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = "" }) => (
  <div className={`card__content ${className}`}>{children}</div>
);

export default Card;
