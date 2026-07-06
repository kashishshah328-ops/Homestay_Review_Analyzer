import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-50 dark:bg-gray-900 text-black dark:text-white">

        {/* ================= HERO SECTION ================= */}

        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">

          <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">

            <div className="grid lg:grid-cols-2 gap-14 items-center">

              {/* Left Side */}

              <div>

                <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 font-semibold text-sm">

                  🌿 About Our AI Platform

                </span>

                <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">

                  Smarter Review
                  <span className="text-emerald-600"> Analysis </span>
                  for Every Homestay

                </h1>

                <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-8">

                  Homestay Review Analyzer is an AI-powered platform that
                  transforms guest reviews into meaningful business insights.
                  Our intelligent system analyzes customer sentiment,
                  identifies recurring themes, and helps property owners
                  improve guest satisfaction through data-driven decisions.

                </p>

                <div className="flex flex-wrap gap-4 mt-10">

                  <Link
                    href="/dashboard"
                    className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-lg transition duration-300"
                  >
                    Explore Dashboard
                  </Link>

                  <Link
                    href="/"
                    className="px-8 py-4 rounded-xl border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white transition duration-300"
                  >
                    Back Home
                  </Link>

                </div>

              </div>

              {/* Right Side */}

              <div>

                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">

                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">

                    Our Mission

                  </h2>

                  <p className="mt-6 text-gray-600 dark:text-gray-300 leading-8">

                    We believe every guest review contains valuable insights.
                    Our mission is to help homestay owners understand customer
                    experiences using Artificial Intelligence, allowing them to
                    enhance service quality, strengthen customer relationships,
                    and make smarter business decisions.

                  </p>

                  <div className="mt-8 space-y-4">

                    <div className="flex items-center gap-3">

                      <span className="text-emerald-600 text-2xl">✔</span>

                      <p>AI-powered Sentiment Detection</p>

                    </div>

                    <div className="flex items-center gap-3">

                      <span className="text-emerald-600 text-2xl">✔</span>

                      <p>Smart Theme Identification</p>

                    </div>

                    <div className="flex items-center gap-3">

                      <span className="text-emerald-600 text-2xl">✔</span>

                      <p>Professional AI Response Generation</p>

                    </div>

                    <div className="flex items-center gap-3">

                      <span className="text-emerald-600 text-2xl">✔</span>

                      <p>Business Intelligence Dashboard</p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>
                {/* ================= FEATURES SECTION ================= */}

        <section className="py-24 bg-gray-50 dark:bg-gray-900">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center">

              <span className="text-emerald-600 font-semibold uppercase tracking-widest">

                Powerful Features

              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">

                Everything You Need to Analyze Guest Reviews

              </h2>

              <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-8">

                Our intelligent platform combines Artificial Intelligence,
                Natural Language Processing, and modern analytics to help
                homestay owners understand customer feedback and improve
                guest satisfaction.

              </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

              {/* Card 1 */}

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300">

                <div className="text-5xl mb-5">😊</div>

                <h3 className="text-2xl font-bold text-emerald-600">

                  Sentiment Analysis

                </h3>

                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">

                  Automatically classify guest reviews into Positive,
                  Neutral, or Negative categories using AI-powered
                  sentiment detection.

                </p>

              </div>

              {/* Card 2 */}

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300">

                <div className="text-5xl mb-5">📍</div>

                <h3 className="text-2xl font-bold text-emerald-600">

                  Theme Detection

                </h3>

                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">

                  Discover important topics such as Cleanliness,
                  Hospitality, Food, Location, Comfort, and
                  Overall Experience.

                </p>

              </div>

              {/* Card 3 */}

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300">

                <div className="text-5xl mb-5">🤖</div>

                <h3 className="text-2xl font-bold text-emerald-600">

                  AI Response Generator

                </h3>

                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">

                  Generate professional and personalized responses
                  for guest reviews to improve customer engagement
                  and trust.

                </p>

              </div>

              {/* Card 4 */}

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300">

                <div className="text-5xl mb-5">📊</div>

                <h3 className="text-2xl font-bold text-emerald-600">

                  Dashboard Analytics

                </h3>

                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">

                  Monitor review statistics, average ratings,
                  sentiment distribution, and business insights
                  from one centralized dashboard.

                </p>

              </div>

              {/* Card 5 */}

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300">

                <div className="text-5xl mb-5">⭐</div>

                <h3 className="text-2xl font-bold text-emerald-600">

                  Rating Insights

                </h3>

                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">

                  Analyze customer ratings to identify service
                  quality trends and opportunities for continuous
                  improvement.

                </p>

              </div>

              {/* Card 6 */}

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300">

                <div className="text-5xl mb-5">🔍</div>

                <h3 className="text-2xl font-bold text-emerald-600">

                  Smart Search

                </h3>

                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">

                  Quickly search reviews by guest names,
                  keywords, or feedback to find valuable
                  information in seconds.

                </p>

              </div>

            </div>

          </div>

        </section>
                {/* ================= HOW IT WORKS ================= */}

        <section className="py-24 bg-white dark:bg-gray-950">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center">

              <span className="text-emerald-600 font-semibold uppercase tracking-widest">

                Simple Workflow

              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">

                How It Works

              </h2>

              <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-8">

                Analyze guest feedback in just three simple steps and transform
                reviews into meaningful business insights.

              </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

              {/* Step 1 */}

              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300">

                <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-4xl">

                  📝

                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">

                  Submit Reviews

                </h3>

                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">

                  Enter guest details, hotel information,
                  ratings and review text through the
                  dashboard.

                </p>

              </div>

              {/* Step 2 */}

              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300">

                <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-4xl">

                  🤖

                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">

                  AI Analysis

                </h3>

                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">

                  Our AI analyzes sentiments, detects
                  important themes and generates
                  intelligent responses.

                </p>

              </div>

              {/* Step 3 */}

              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300">

                <div className="w-20 h-20 mx-auto rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-4xl">

                  📊

                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">

                  Business Insights

                </h3>

                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">

                  View dashboard analytics, review
                  trends, average ratings and customer
                  satisfaction metrics.

                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ================= WHY CHOOSE US ================= */}

        <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-green-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid lg:grid-cols-2 gap-14 items-center">

              <div>

                <span className="text-emerald-600 font-semibold uppercase tracking-widest">

                  Why Choose Us

                </span>

                <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">

                  Built for Modern Hospitality Businesses

                </h2>

                <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-8">

                  Our platform helps property owners save time,
                  improve customer relationships and make smarter
                  business decisions using Artificial Intelligence.

                </p>

                <div className="mt-10 space-y-6">

                  <div className="flex gap-4">

                    <div className="text-3xl">⚡</div>

                    <div>

                      <h3 className="font-bold text-xl">

                        Fast Review Processing

                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 mt-2">

                        Analyze reviews instantly with intelligent automation.

                      </p>

                    </div>

                  </div>

                  <div className="flex gap-4">

                    <div className="text-3xl">🎯</div>

                    <div>

                      <h3 className="font-bold text-xl">

                        Accurate Insights

                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 mt-2">

                        Detect customer satisfaction trends with confidence.

                      </p>

                    </div>

                  </div>

                  <div className="flex gap-4">

                    <div className="text-3xl">🤝</div>

                    <div>

                      <h3 className="font-bold text-xl">

                        Better Guest Experience

                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 mt-2">

                        Respond professionally and continuously improve services.

                      </p>

                    </div>

                  </div>

                </div>

              </div>

              {/* Right Side Statistics */}

              <div className="grid grid-cols-2 gap-6">

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">

                  <h3 className="text-5xl font-extrabold text-emerald-600">

                    10K+

                  </h3>

                  <p className="mt-3 text-gray-600 dark:text-gray-300">

                    Reviews Processed

                  </p>

                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">

                  <h3 className="text-5xl font-extrabold text-blue-600">

                    95%

                  </h3>

                  <p className="mt-3 text-gray-600 dark:text-gray-300">

                    AI Accuracy

                  </p>

                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">

                  <h3 className="text-5xl font-extrabold text-purple-600">

                    24/7

                  </h3>

                  <p className="mt-3 text-gray-600 dark:text-gray-300">

                    Platform Availability

                  </p>

                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">

                  <h3 className="text-5xl font-extrabold text-orange-500">

                    500+

                  </h3>

                  <p className="mt-3 text-gray-600 dark:text-gray-300">

                    Happy Users

                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>
                {/* ================= CALL TO ACTION ================= */}

        <section className="py-24 bg-emerald-600">

          <div className="max-w-5xl mx-auto px-6 text-center text-white">

            <span className="uppercase tracking-widest font-semibold text-emerald-100">

              Get Started Today

            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">

              Ready to Transform Your Guest Reviews into Business Insights?

            </h2>

            <p className="mt-6 text-lg text-emerald-100 leading-8 max-w-3xl mx-auto">

              Start analyzing customer feedback with our AI-powered
              dashboard. Discover guest sentiment, identify recurring
              themes, generate professional responses, and improve
              customer satisfaction with intelligent analytics.

            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">

              <Link
                href="/dashboard"
                className="
                  px-8
                  py-4
                  rounded-xl
                  bg-white
                  text-emerald-600
                  font-bold
                  shadow-lg
                  hover:bg-gray-100
                  transition
                  duration-300
                "
              >
                Go to Dashboard
              </Link>

              <Link
                href="/"
                className="
                  px-8
                  py-4
                  rounded-xl
                  border-2
                  border-white
                  text-white
                  font-semibold
                  hover:bg-white
                  hover:text-emerald-600
                  transition
                  duration-300
                "
              >
                Back to Home
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </>

  );

}