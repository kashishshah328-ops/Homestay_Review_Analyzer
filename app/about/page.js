import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {

  return (

    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 p-8">

        <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-bold text-emerald-700">

            About Homestay Review Analyzer

          </h1>

          <p className="mt-3 text-emerald-600 font-medium">

            AI-powered insights to improve guest experiences and business decisions.

          </p>

          <p className="mt-6 text-lg text-gray-700 leading-8">

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

            <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition duration-300">

              <h3 className="font-bold text-xl text-emerald-700">

                😊 Sentiment Analysis

              </h3>

              <p className="mt-3 text-gray-600">

                Classify reviews as Positive,
                Neutral or Negative.

              </p>

            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition duration-300">

              <h3 className="font-bold text-xl text-emerald-700">

                📍 Theme Detection

              </h3>

              <p className="mt-3 text-gray-600">

                Identify themes such as Food,
                Host, Location and Experience.

              </p>

            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition duration-300">

              <h3 className="font-bold text-xl text-emerald-700">

                🤖 AI Responses

              </h3>

              <p className="mt-3 text-gray-600">

                Generate professional management
                responses automatically.

              </p>

            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition duration-300">

              <h3 className="font-bold text-xl text-emerald-700">

                📊 Review Summarization

              </h3>

              <p className="mt-3 text-gray-600">

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
