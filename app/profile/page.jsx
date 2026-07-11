"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Profile() {

  const router = useRouter();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    const name = localStorage.getItem("userName");
    const userEmail = localStorage.getItem("userEmail");

    if (name) setUserName(name);
    if (userEmail) setEmail(userEmail);

  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">

        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-10 w-full max-w-md">

          <h1 className="text-3xl font-bold text-emerald-600 text-center mb-6">
            My Profile
          </h1>

          <div className="space-y-4">

            <div>
              <p className="text-gray-500">Name</p>
              <h2 className="text-xl font-semibold">
                {userName || "Not Available"}
              </h2>
            </div>

            <div>
              <p className="text-gray-500">Email</p>
              <h2 className="text-lg">
                {email || "Not Available"}
              </h2>
            </div>

            <div>
              <p className="text-gray-500">Status</p>
              <h2 className="text-green-600 font-semibold">
                Logged In ✅
              </h2>
            </div>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}