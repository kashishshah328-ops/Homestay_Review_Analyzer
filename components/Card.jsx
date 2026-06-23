export default function Card({ title, desc }) {

  return (

    <div
      className="
      bg-white
      dark:bg-gray-800

      shadow-lg
      rounded-xl

      p-8

      hover:shadow-2xl

      transition
      duration-300
    "
    >

      <h2
        className="
        text-3xl
        font-bold

        text-emerald-700
      "
      >

        {title}

      </h2>

      <p
        className="
        mt-5

        text-lg

        text-gray-700
        dark:text-gray-300
      "
      >

        {desc}

      </p>

    </div>

  );

}