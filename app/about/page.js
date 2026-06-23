import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {

  return (

    <>
      <Navbar />

      <main
        className="
        min-h-screen

        bg-gray-50
        dark:bg-gray-900

        text-black
        dark:text-white

        p-8
      "
      >

        <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-bold text-emerald-700">

            About Homestay Review Analyzer

          </h1>

          <p className="mt-3 text-emerald-600 font-medium">

            AI-powered insights to improve guest experiences and business decisions.

          </p>

          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-8">

            Homestay Review Analyzer is an AI-powered web application
            designed to help homestay owners analyze guest feedback
            efficiently.

            The system automatically classifies sentiments,
            identifies review themes, and generates management responses.

          </p>

          <h2 className="text-3xl font-bold mt-12 text-emerald-700">

            Key Features

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

            {/* Card 1 */}

            <div
              className="
              bg-white
              dark:bg-gray-800

              shadow-lg
              rounded-xl
              p-6

              border
              border-gray-100
              dark:border-gray-700

              hover:shadow-2xl
              hover:-translate-y-1

              transition
              duration-300
            "
            >

              <h3 className="font-bold text-xl text-emerald-700">

                😊 Sentiment Analysis

              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-300">

                Classify reviews as Positive,
                Neutral or Negative.

              </p>

            </div>

            {/* Card 2 */}

            <div
              className="
              bg-white
              dark:bg-gray-800

              shadow-lg
              rounded-xl
              p-6

              border
              border-gray-100
              dark:border-gray-700

              hover:shadow-2xl
              hover:-translate-y-1

              transition
              duration-300
            "
            >

              <h3 className="font-bold text-xl text-emerald-700">

                📍 Theme Detection

              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-300">

                Identify themes such as Food,
                Host, Location and Experience.

              </p>

            </div>

            {/* Card 3 */}

            <div
              className="
              bg-white
              dark:bg-gray-800

              shadow-lg
              rounded-xl
              p-6

              border
              border-gray-100
              dark:border-gray-700

              hover:shadow-2xl
              hover:-translate-y-1

              transition
              duration-300
            "
            >

              <h3 className="font-bold text-xl text-emerald-700">

                🤖 AI Responses

              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-300">

                Generate professional management
                responses automatically.

              </p>

            </div>

            {/* Card 4 */}

            <div
              className="
              bg-white
              dark:bg-gray-800

              shadow-lg
              rounded-xl
              p-6

              border
              border-gray-100
              dark:border-gray-700

              hover:shadow-2xl
              hover:-translate-y-1

              transition
              duration-300
            "
            >

              <h3 className="font-bold text-xl text-emerald-700">

                📊 Review Summarization

              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-300">

                Summarize multiple reviews
                into actionable insights.

              </p>

            </div>

          </div>

        </div>

      </main>

      <Footer />

    </>

  );

}