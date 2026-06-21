import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Dashboard() {

  return (

    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 p-8">

        <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl font-bold text-emerald-700">

            AI Review Analytics Dashboard

          </h1>

          <p className="mt-4 text-gray-600 text-lg">

            Monitor guest feedback, sentiments and AI-generated insights
            for better customer experience.

          </p>

          {/* Statistics */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

            <div className="bg-white shadow-lg rounded-xl p-8 text-center">

              <h2 className="text-5xl font-bold text-emerald-700">

                120

              </h2>

              <p className="mt-3 text-gray-600">

                Total Reviews

              </p>

            </div>

            <div className="bg-white shadow-lg rounded-xl p-8 text-center">

              <h2 className="text-5xl font-bold text-green-600">

                85%

              </h2>

              <p className="mt-3 text-gray-600">

                Positive Reviews

              </p>

            </div>

            <div className="bg-white shadow-lg rounded-xl p-8 text-center">

              <h2 className="text-5xl font-bold text-red-500">

                8

              </h2>

              <p className="mt-3 text-gray-600">

                Priority Alerts

              </p>

            </div>

          </div>

          {/* Insights */}

          <h2 className="text-3xl font-bold mt-14 mb-6 text-gray-800">

            AI Insights

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-white shadow-lg rounded-xl p-6">

              <h3 className="text-xl font-bold text-emerald-700">

                😊 Most Appreciated

              </h3>

              <p className="mt-4 text-gray-600">

                Guests frequently praise the location,
                hospitality and scenic views.

              </p>

            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">

              <h3 className="text-xl font-bold text-red-500">

                ⚠ Areas for Improvement

              </h3>

              <p className="mt-4 text-gray-600">

                Food quality and Wi-Fi connectivity
                require improvement.

              </p>

            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">

              <h3 className="text-xl font-bold text-blue-600">

                📈 Trending Theme

              </h3>

              <p className="mt-4 text-gray-600">

                Location is the most discussed theme
                among guests this month.

              </p>

            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">

              <h3 className="text-xl font-bold text-purple-600">

                💡 Recommendation

              </h3>

              <p className="mt-4 text-gray-600">

                Improve food options and internet
                facilities to enhance guest satisfaction.

              </p>

            </div>

          </div>

        </div>

      </main>

      <Footer />

    </>

  );

}