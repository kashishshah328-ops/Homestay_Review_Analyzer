import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Login() {

  return (

    <>

      <Navbar />

      <main className="min-h-screen flex justify-center items-center bg-gray-50">

        <div className="bg-white shadow-xl p-8 rounded-2xl w-96">

          <h1 className="text-3xl font-bold text-emerald-700 mb-2">

            Welcome Back 👋

          </h1>

          <p className="text-gray-500 mb-6">

            Login to access your AI Review Analytics Dashboard

          </p>

          <input

            type="email"

            placeholder="Enter Email"

            className="border border-gray-300 p-3 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"

          />

          <input

            type="password"

            placeholder="Enter Password"

            className="border border-gray-300 p-3 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-emerald-500"

          />

          <button className="bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-lg w-full transition duration-300">

            Login

          </button>

          <p className="text-center text-sm text-gray-500 mt-4">

            Don't have an account?{" "}
            <span className="text-emerald-700 font-medium cursor-pointer">
              Sign Up
            </span>

          </p>

        </div>

      </main>

      <Footer />

    </>

  );

}