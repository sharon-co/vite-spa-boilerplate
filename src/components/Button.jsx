// Reusable accessible button component
function Button({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  className = '',
  ariaLabel
}) {
  const variantClass = `btn-${variant}`;

  return (
    <button
      type={type}
      className={`${variantClass} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default Button;
