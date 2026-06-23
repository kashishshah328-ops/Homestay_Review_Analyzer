export default function Hero() {

  return (

    <section
      className="
      py-20
      px-6
      text-center

      bg-green-100
      dark:bg-gray-900

      text-black
      dark:text-white
    "
    >

      <h1
        className="
        text-5xl
        font-bold

        text-green-900
        dark:text-emerald-400
      "
      >

        Homestay Review Analyzer

      </h1>

      <p
        className="
        mt-6
        text-xl

        max-w-3xl
        mx-auto

        text-gray-700
        dark:text-gray-300
      "
      >

        AI-powered system to analyze guest reviews,
        detect sentiments, identify themes and generate
        management responses instantly.

      </p>

      <button
        className="
        mt-8

        px-8
        py-3

        rounded-lg

        bg-green-700
        hover:bg-green-800

        text-white

        transition
        duration-300
      "
      >

        Analyze Reviews

      </button>

    </section>

  );

}