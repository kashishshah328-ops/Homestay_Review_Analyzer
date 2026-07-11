"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { Button } from "../../components/ui";
import Input from "../../components/ui/Input";
import Toast from "../../components/ui/Toast";

import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(false);

useEffect(() => {
  const error = searchParams.get("error");

  if (error === "google_login_failed") {
    alert("Google Login Failed. Please try again.");
  }
}, [searchParams]);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter Email and Password");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();
      console.log("Login Response:", data);

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userName", data.user.name);
        localStorage.setItem("userEmail", data.user.email);

        console.log("Saved Name:", localStorage.getItem("userName"));
        console.log("Saved Email:", localStorage.getItem("userEmail"));
        setShowModal(true);
        setShowToast(true);

        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/google";
  };

  const closeModal = () => {
    setShowModal(false);
    router.push("/dashboard");
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

          <Input
            label="Email"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="mt-4">
            <Button
              variant="primary"
              size="lg"
              onClick={handleLogin}
            >
              Login
            </Button>
          </div>

          {/* OR Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-1 border-gray-300" />
            <span className="mx-3 text-gray-500 text-sm">OR</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Google Login Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 font-semibold bg-white hover:bg-gray-100 transition"
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
              className="w-5 h-5"
            />
            Sign in with Google
          </button>

          <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-6">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-emerald-600 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>

        </div>
      </main>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl w-[90%] max-w-sm text-center">

            <h2 className="text-2xl font-bold text-emerald-600 mb-2">
              Login Successful 🎉
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Welcome back! You have successfully logged in.
            </p>

            <Button
              variant="primary"
              onClick={closeModal}
            >
              Continue
            </Button>

          </div>
        </div>
      )}

      {showToast && (
        <Toast message="Login Successful!" />
      )}

      <Footer />
    </>
  );
}