"use client";

import { useState } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { Button } from "../../components/ui";
import Input from "../../components/ui/Input";
import Toast from "../../components/ui/Toast";
import Link from "next/link";
export default function Login() {
  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleLogin = () => {
    // Show modal first
    setShowModal(true);

    // Optional toast
    setShowToast(true);

    // Auto hide toast
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen flex justify-center items-center bg-gray-50 dark:bg-gray-900 text-black dark:text-white px-4">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8">

          <h1 className="text-3xl font-bold text-emerald-700 mb-2">
            Welcome Back 👋
          </h1>

          <p className="text-gray-500 dark:text-gray-300 mb-6">
            Login to access your AI Review Analytics Dashboard
          </p>

          <Input label="Email" type="email" placeholder="Enter Email" />
          <Input label="Password" type="password" placeholder="Enter Password" />

          <div className="mt-4">
            <Button variant="primary" size="lg" onClick={handleLogin}>
              Login
            </Button>
          </div>

          <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-6">
            Don't have an account?{" "}
            <span className="text-emerald-700 font-medium cursor-pointer">
            
            </span>
            <Link href="/signup" className="text-emerald-600 font-semibold hover:underline">
                Sign Up
            </Link>
          </p>
        </div>
      </main>

      {/* ✅ MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl w-[90%] max-w-sm text-center">

            <h2 className="text-2xl font-bold text-emerald-600 mb-2">
              Login Successful 🎉
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Welcome back! You have successfully logged in.
            </p>

            <Button variant="primary" onClick={closeModal}>
              Continue
            </Button>
          </div>
        </div>
      )}

      {/* ✅ TOAST */}
      {showToast && <Toast message="Login successful!" />}

      <Footer />
    </>
  );
}