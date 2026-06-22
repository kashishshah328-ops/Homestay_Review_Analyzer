/**
 * Button Component
 *
 * Props:
 * variant: primary | secondary | outline
 * size: sm | md | lg
 * disabled
 * onClick
 */

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick
}) {

  const variants = {

    primary:
      "bg-emerald-700 hover:bg-emerald-800 text-white",

    secondary:
      "bg-gray-700 hover:bg-gray-800 text-white",

    outline:
      "border border-emerald-700 text-emerald-700 hover:bg-emerald-50"

  };

  const sizes = {

    sm: "px-3 py-1",

    md: "px-5 py-2",

    lg: "px-7 py-3"

  };

  return (

    <button

      onClick={onClick}

      disabled={disabled}

      className={`
      ${variants[variant]}
      ${sizes[size]}

      rounded-lg

      transition
      duration-300

      disabled:opacity-50
      disabled:cursor-not-allowed
      `}
    >

      {children}

    </button>

  );

}