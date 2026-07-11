"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function OAuthSuccess() {

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {

    const token = searchParams.get("token");
    const name = searchParams.get("name");
    const email = searchParams.get("email");

    if (token) {
      localStorage.setItem("token", token);
    }

    if (name) {
      localStorage.setItem("userName", name);
    }

    if (email) {
      localStorage.setItem("userEmail", email);
    }

    if (token) {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }

  }, [router, searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h2 className="text-2xl font-bold text-emerald-600">
        Logging you in...
      </h2>
    </div>
  );
}

