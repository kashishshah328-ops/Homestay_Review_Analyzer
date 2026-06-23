"use client";

import { useState } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { Button } from "../../components/ui";
import Input from "../../components/ui/Input";
import Loader from "../../components/ui/Loader";
import Modal from "../../components/ui/Modal";

import toast from "react-hot-toast";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async () => {
    if (!form.name || !form.email || !form.password) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      // fake API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Account created successfully!");

      setShowModal(true);

      setForm({
        name: "",
        email: "",
        password: "",
      });
    } catch (err) {
      toast.error("Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">

        <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8">

          <h1 className="text-3xl font-bold text-center text-emerald-700">
            Create Account
          </h1>

          <p className="text-center text-gray-500 dark:text-gray-300 mt-2 mb-6">
            Sign up to access your dashboard
          </p>

          {/* INPUTS */}
          <div className="space-y-4">
            <Input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
            />

            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
            />

            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          {/* BUTTON + LOADER */}
          <div className="mt-6">
            <Button
              onClick={handleSignup}
              className="w-full"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </Button>

            {loading && (
              <div className="mt-3">
                <Loader />
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />

      {/* SUCCESS MODAL */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="text-center p-4">

            <h2 className="text-2xl font-bold text-green-600">
              🎉 Signup Successful
            </h2>

            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Your account has been created successfully.
            </p>

            <div className="mt-5">
              <Button onClick={() => setShowModal(false)}>
                Continue
              </Button>
            </div>

          </div>
        </Modal>
      )}
    </>
  );
}