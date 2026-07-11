"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const router = useRouter();

  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("userName");

    if (token) {
      setLoggedIn(true);
    }

    if (name) {
      setUserName(name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");

    setLoggedIn(false);
    setUserName("");

    alert("Logged out successfully");

    router.push("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xl font-bold shadow-lg">
            AI
          </div>

          <div>
            <h1 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white">
              Homestay Review Analyzer
            </h1>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              AI Powered Review Intelligence
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">

          <Link
            href="/"
            className="transition hover:text-emerald-600 dark:hover:text-emerald-400"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="transition hover:text-emerald-600 dark:hover:text-emerald-400"
          >
            About
          </Link>

          <Link
            href="/dashboard"
            className="transition hover:text-emerald-600 dark:hover:text-emerald-400"
          >
            Dashboard
          </Link>

          {!loggedIn ? (
            <>
              <Link
                href="/login"
                className="transition hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full transition duration-300 shadow-lg"
              >
                Get Started
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/profile"
                className="transition hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                Profile
              </Link>

              <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                👋 {userName}
              </span>

              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full transition duration-300 shadow-lg"
              >
                Logout
              </button>
            </>
          )}

          <ThemeToggle />

        </div>

      </div>

    </nav>
  );
}