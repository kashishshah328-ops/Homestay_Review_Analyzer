// export default function Card({ title, desc }) {

//   return (

//     <div
//       className="
//       bg-white
//       dark:bg-gray-800

//       shadow-lg
//       rounded-xl

//       p-8

//       hover:shadow-2xl

//       transition
//       duration-300
//     "
//     >

//       <h2
//         className="
//         text-3xl
//         font-bold

//         text-emerald-700
//       "
//       >

//         {title}

//       </h2>

//       <p
//         className="
//         mt-5

//         text-lg

//         text-gray-700
//         dark:text-gray-300
//       "
//       >

//         {desc}

//       </p>

//     </div>

//   );

// } 
export default function Card({ title, desc }) {
  return (
    <div
      className="
      group

      bg-white
      dark:bg-gray-800

      rounded-3xl

      border
      border-gray-200
      dark:border-gray-700

      p-8

      shadow-lg

      hover:shadow-2xl
      hover:-translate-y-2

      transition-all
      duration-300
      "
    >
      {/* Icon */}
      <div
        className="
        w-16
        h-16

        rounded-2xl

        bg-emerald-100
        dark:bg-emerald-900

        flex
        items-center
        justify-center

        text-3xl

        mb-6

        group-hover:scale-110

        transition
        "
      >
        🤖
      </div>

      <h2
        className="
        text-2xl
        font-bold

        text-gray-900
        dark:text-white
        "
      >
        {title}
      </h2>

      <p
        className="
        mt-4

        text-gray-600
        dark:text-gray-300

        leading-7
        "
      >
        {desc}
      </p>

      <button
        className="
        mt-6

        text-emerald-600

        font-semibold

        hover:translate-x-2

        transition
        "
      >
        Learn More →
      </button>
    </div>
  );
}