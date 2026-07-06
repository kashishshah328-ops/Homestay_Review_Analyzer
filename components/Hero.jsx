"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [stats, setStats] = useState({
    total: 0,
    positivePercent: 0,
    neutralPercent: 0,
    negativePercent: 0,
    averageRating: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/dashboard/stats");

        if (!res.ok) {
          throw new Error("Failed to fetch dashboard stats");
        }

        const data = await res.json();
        setStats(data);
      } catch (error) {
        console.error("Dashboard Error:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 font-semibold text-sm">
              🚀 AI Powered Customer Insights
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Understand Every
              <span className="text-emerald-600"> Guest Review </span>
              with AI
            </h1>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-8">
              Transform thousands of guest reviews into valuable business
              insights. Analyze customer sentiment, identify recurring themes,
              generate AI-powered responses, and improve guest satisfaction —
              all from one intelligent dashboard.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/dashboard"
                className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-lg transition"
              >
                Analyze Reviews
              </Link>

              <Link
                href="/about"
                className="px-8 py-4 rounded-xl border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-14">
              <div>
                <h2 className="text-3xl font-bold text-emerald-600">
                  {stats.total}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Reviews
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-emerald-600">
                  {stats.averageRating}★
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Avg Rating
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-emerald-600">
                  {stats.positivePercent}%
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Positive
                </p>
              </div>
            </div>
          </div>

          {/* Dashboard */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Review Analytics Dashboard
              </h3>

              {/* Positive */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span>😊 Positive</span>
                  <span>{stats.positivePercent}%</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full transition-all duration-700"
                    style={{
                      width: `${stats.positivePercent}%`,
                    }}
                  />
                </div>
              </div>

              {/* Neutral */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span>😐 Neutral</span>
                  <span>{stats.neutralPercent}%</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-yellow-400 h-3 rounded-full transition-all duration-700"
                    style={{
                      width: `${stats.neutralPercent}%`,
                    }}
                  />
                </div>
              </div>

              {/* Negative */}
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <span>😞 Negative</span>
                  <span>{stats.negativePercent}%</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-red-500 h-3 rounded-full transition-all duration-700"
                    style={{
                      width: `${stats.negativePercent}%`,
                    }}
                  />
                </div>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-50 dark:bg-gray-700 rounded-xl p-5 text-center">
                  <h4 className="text-2xl font-bold text-emerald-600">
                    {stats.averageRating}★
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300">
                    Average Rating
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-gray-700 rounded-xl p-5 text-center">
                  <h4 className="text-2xl font-bold text-blue-600">
                    {stats.total}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300">
                    Total Reviews
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}