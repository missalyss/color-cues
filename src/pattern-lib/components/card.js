const Card = ({ className, children, ...props }) => {
  return (
    <div className={`radius-1 p3 ${className ?? ""}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
