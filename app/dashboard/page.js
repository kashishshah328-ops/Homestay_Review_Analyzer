"use client";

import { useState, useEffect } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/ui/Loader";
import Toast from "@/components/ui/Toast";

import toast, { Toaster } from "react-hot-toast";

export default function Dashboard() {
  // State
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [reviews, setReviews] = useState([]);

  // Fetch all reviews
  const fetchReviews = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/reviews");
      const data = await response.json();

      setReviews(data);
    } catch (error) {
      toast.error("Failed to load reviews.");
    }
  };

  // Load reviews on page load
  useEffect(() => {
    fetchReviews();
  }, []);

  // Submit Review
  const analyzeReview = async () => {
    if (!review.trim()) {
      toast.error("Please enter a review.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          guestName: "Kashish",
          review: review,
          sentiment: "Pending",
        }),
      });

      const data = await response.json();

      setResult(data);

      // Refresh review list
      fetchReviews();

      toast.success("Review submitted successfully!");
    } catch (error) {
      toast.error("Backend connection failed.");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <Toaster />

      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white p-8">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <h1 className="text-4xl font-bold text-emerald-700">
            AI Review Analytics Dashboard
          </h1>

          <p className="mt-2 text-emerald-600 font-medium">
            Welcome back 👋 Here's your latest review analysis.
          </p>

          {/* Input Section */}
          <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow">

            <textarea
              className="border w-full p-4 mt-4 rounded dark:bg-gray-700 dark:text-white"
              rows="8"
              placeholder="Paste guest reviews here..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />

            <button
              onClick={analyzeReview}
              className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded mt-4"
            >
              Analyze Reviews
            </button>

            {/* Loader */}
            {loading && <Loader />}

            {/* Backend Response */}
            {result && (
              <div className="mt-6 border p-4 rounded bg-gray-100 text-black">
                <h2 className="font-bold text-lg mb-2">
                  Backend Response
                </h2>

                <pre>{JSON.stringify(result, null, 2)}</pre>
              </div>
            )}

            {/* Reviews List */}
            {reviews.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">
                  All Reviews
                </h2>

                {reviews.map((item) => (
                  <div
                    key={item.id}
                    className="border rounded p-4 mb-4 bg-white dark:bg-gray-800 dark:text-white shadow"
                  >
                    <p>
                      <strong>Guest:</strong> {item.guestName}
                    </p>

                    <p className="mt-2">
                      <strong>Review:</strong> {item.review}
                    </p>

                    <p className="mt-2">
                      <strong>Sentiment:</strong>{" "}
                      {item.sentiment || "Pending"}
                    </p>

                    <p className="mt-2">
                      <strong>Theme:</strong>{" "}
                      {item.theme || "N/A"}
                    </p>

                    <p className="mt-2">
                      <strong>Response:</strong>{" "}
                      {item.response || "N/A"}
                    </p>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>
      </main>

      <Toast />

      <Footer />
    </>
  );
}