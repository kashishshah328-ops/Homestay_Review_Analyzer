/**
 * Toast Component
 *
 * Props:
 * message
 */

export default function Toast({ message }) {

  return (

    <div
      className="
      fixed
      top-5
      right-5

      bg-emerald-700
      text-white

      px-6
      py-3

      rounded-lg

      shadow-lg

      z-50
    "
    >

      {message}

    </div>

  );

}