import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Dashboard() {

  // mock analytics data (later you can replace with API data)
  const stats = [
    {
      title: "Total Reviews",
      value: 120,
      color: "text-emerald-700",
    },
    {
      title: "Average Rating",
      value: "4.3 ⭐",
      color: "text-yellow-500",
    },
    {
      title: "Positive Reviews",
      value: "85%",
      color: "text-green-600",
    },
  ];

  const ratingBreakdown = [
    { star: 5, count: 60 },
    { star: 4, count: 35 },
    { star: 3, count: 15 },
    { star: 2, count: 6 },
    { star: 1, count: 4 },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white p-8">

        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <h1 className="text-4xl font-bold text-emerald-700">
            AI Review Analytics Dashboard
          </h1>

          <p className="mt-2 text-emerald-600 font-medium">
            Welcome back 👋 Here's your latest review analysis.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 text-center"
              >
                <h2 className={`text-5xl font-bold ${item.color}`}>
                  {item.value}
                </h2>

                <p className="mt-3 text-gray-600 dark:text-gray-300">
                  {item.title}
                </p>
              </div>
            ))}

          </div>

          {/* Rating Breakdown */}
          <h2 className="text-3xl font-bold mt-14 mb-6 text-gray-800 dark:text-white">
            Rating Breakdown
          </h2>

          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">

            {ratingBreakdown.map((item, index) => (
              <div key={index} className="flex items-center justify-between mb-3">

                <span className="text-gray-700 dark:text-gray-300">
                  {"⭐".repeat(item.star)} ({item.star})
                </span>

                <div className="w-2/3 bg-gray-200 dark:bg-gray-700 rounded-full h-3 mx-4">
                  <div
                    className="bg-emerald-500 h-3 rounded-full"
                    style={{ width: `${item.count * 2}%` }}
                  ></div>
                </div>

                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {item.count}
                </span>

              </div>
            ))}

          </div>

          {/* AI Insights */}
          <h2 className="text-3xl font-bold mt-14 mb-6 text-gray-800 dark:text-white">
            AI Insights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
              <h3 className="text-xl font-bold text-emerald-700">
                😊 Most Appreciated
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Guests frequently praise the location, hospitality and scenic views.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-500">
                ⚠ Areas for Improvement
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Food quality and Wi-Fi connectivity require improvement.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-600">
                📈 Trending Theme
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Location is the most discussed theme among guests this month.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-600">
                💡 Recommendation
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Improve food options and internet facilities to enhance guest satisfaction.
              </p>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}