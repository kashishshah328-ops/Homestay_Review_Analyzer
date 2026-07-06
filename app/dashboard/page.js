"use client";

import { useState, useEffect } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/ui/Loader";
import Toast from "@/components/ui/Toast";

import toast, { Toaster } from "react-hot-toast";

export default function Dashboard() {
  // ===========================
  // STATES
  // ===========================

  const [guestName, setGuestName] = useState("");
  const [hotelName, setHotelName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);

  const [reviews, setReviews] = useState([]);
  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);

  const [editingId, setEditingId] = useState(null);

  // ===========================
  // FETCH REVIEWS
  // ===========================

  const fetchReviews = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/reviews"
      );

      const data = await response.json();

      setReviews(data);
    } catch (error) {
      toast.error("Failed to load reviews");
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // ===========================
  // CLEAR FORM
  // ===========================

  const clearForm = () => {
    setGuestName("");
    setHotelName("");
    setReview("");
    setRating(5);
    setEditingId(null);
  };

  // ===========================
  // ADD REVIEW
  // ===========================

  const analyzeReview = async () => {
    if (
      !guestName ||
      !hotelName ||
      !review ||
      !rating
    ) {
      toast.error("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/reviews",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            guestName,
            hotelName,
            review,
            rating,
          }),
        }
      );

      const data = await response.json();

      setResult(data);

      fetchReviews();

      clearForm();

      toast.success("Review Added Successfully");
    } catch (error) {
      toast.error("Backend Connection Failed");
    }

    setLoading(false);
  };
    // ===========================
  // EDIT REVIEW
  // ===========================

  const editReview = (item) => {
    setEditingId(item._id);

    setGuestName(item.guestName);
    setHotelName(item.hotelName);
    setReview(item.review);
    setRating(item.rating);
  };

  // ===========================
  // UPDATE REVIEW
  // ===========================

  const updateReview = async () => {
    if (!editingId) return;

    setLoading(true);

    try {
      const response = await fetch(
        `http://localhost:5000/api/reviews/${editingId}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            guestName,
            hotelName,
            review,
            rating,
          }),
        }
      );

      const data = await response.json();

      setResult(data);

      toast.success("Review Updated Successfully");

      clearForm();

      fetchReviews();
    } catch (error) {
      toast.error("Failed to update review");
    }

    setLoading(false);
  };

  // ===========================
  // DELETE REVIEW
  // ===========================

  const deleteReview = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this review?"
    );

    if (!confirmDelete) return;

    try {
      await fetch(
        `http://localhost:5000/api/reviews/${id}`,
        {
          method: "DELETE",
        }
      );

      toast.success("Review Deleted Successfully");

      fetchReviews();
    } catch (error) {
      toast.error("Failed to delete review");
    }
  };

  // ===========================
  // RETURN
  // ===========================

  return (     <>
     <Toaster
  position="top-right"
  toastOptions={{
    duration: 3000,
  }}
/>

      <Navbar />

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 transition-colors">
        <div className="max-w-6xl mx-auto px-4">

          <h1 className="text-4xl font-bold text-center mb-8 text-slate-900 dark:text-white">
            Hotel Review Dashboard
          </h1>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6">

           <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              {editingId ? "Update Review" : "Add New Review"}
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              <input
                type="text"
                placeholder="Guest Name"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white p-3 rounded-md"
              />

              <input
                type="text"
                placeholder="Hotel Name"
                value={hotelName}
                onChange={(e) => setHotelName(e.target.value)}
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white p-3 rounded-md"
              />

              <textarea
                placeholder="Write Review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white p-3 rounded-md md:col-span-2"
                rows={4}
              />

              <input
                type="number"
                min="1"
                max="5"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white p-3 rounded-md"
              />

            </div>

            <div className="mt-6 flex gap-4">

              {editingId ? (
                <>
                  <button
                    onClick={updateReview}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
                  >
                    Update Review
                  </button>

                  <button
                    onClick={clearForm}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={analyzeReview}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
                >
                  Add Review
                </button>
              )}

            </div>

          </div>

          {loading && <Loader />}

          <div className="bg-white dark:bg-slate-800 shadow-xl rounded-xl p-6 mt-8">

            <h2 className="text-2xl font-semibold mb-4">
              All Reviews
            </h2>

            {reviews.length === 0 ? (
              <p>No Reviews Found.</p>
            ) : (
              <div className="space-y-4">

                {reviews.map((item) => (
                  <div
                    key={item._id}
                    className="border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-slate-700 rounded-xl p-5 flex flex-col md:flex-row justify-between items-start md:items-center"
                  >
                    <div>
  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400">
    {item.hotelName}
  </h3>

  <p className="text-gray-700 dark:text-gray-200">
    <strong>Guest:</strong> {item.guestName}
  </p>

  <p className="text-gray-700 dark:text-gray-200">
    <strong>Rating:</strong> ⭐ {item.rating}/5
  </p>

  <p className="text-green-600 font-semibold">
    <strong>Sentiment:</strong> {item.sentiment}
  </p>

  <p className="text-blue-600 font-semibold">
    <strong>Theme:</strong> {item.theme}
  </p>

  <p className="text-gray-700 dark:text-gray-200 mt-2">
    {item.review}
  </p>
</div>

                    <div className="flex gap-3 mt-4 md:mt-0">

                      <button
                        onClick={() => editReview(item)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => deleteReview(item._id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                      >
                        Delete
                      </button>

                    </div>

                  </div>
                ))}

              </div>
            )}

          </div>
    
        </div>
      </div>

      <Footer />
    </>
  );
}