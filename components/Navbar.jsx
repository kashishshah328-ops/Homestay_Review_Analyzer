import Link from "next/link";

export default function Navbar() {

  return (

    <nav className="bg-green-700 text-white px-6 py-4">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">

        <h1 className="text-2xl font-bold">

          Homestay Review Analyzer

        </h1>

        <div className="flex gap-6 mt-3 md:mt-0">

          <Link href="/">Home</Link>

          <Link href="/about">About</Link>

          <Link href="/dashboard">Dashboard</Link>

          <Link href="/login">Login</Link>

        </div>

      </div>

    </nav>

  );

}