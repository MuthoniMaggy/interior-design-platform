import "./Button.css";
function Button({ children, variant = "primary", href } ){
  const className = `button ${variant}`;
  if (href){
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <button className={className}>
      {children}
    </button>
  );
}
export default Button;
   